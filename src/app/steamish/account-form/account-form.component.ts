import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IAccount} from "../../../model/steamish/i-account";
import {IToken} from "../../../model/steamish/i-token";

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {

  formGroupAccount!: FormGroup;

  @Input()
  account: IAccount = {
    name: '',
    email: '',
    password: '',
    nickname: '',
  }

  constructor(
    private httpClient: HttpClient,
    @Inject('rawUrl') private rawUrl: string
  ) {
  }

  ngOnInit(): void {
    this.formGroupAccount = new FormGroup({
      name: new FormControl(this.account.name, [Validators.required]),
      email: new FormControl(this.account.email, [Validators.required]),
      password: new FormControl(this.account.password, [Validators.required]),
      nickname: new FormControl(this.account.nickname, [Validators.required])
    });
  }

  get name(): FormControl {
    return this.formGroupAccount.get('name') as FormControl;
  }

  get nickname(): FormControl {
    return this.formGroupAccount.get('nickname') as FormControl;
  }

  get email(): FormControl {
    return this.formGroupAccount.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.formGroupAccount.get('password') as FormControl;
  }

  onSubmit(): void {
    if (this.formGroupAccount.valid) {
      this.account = this.formGroupAccount.value;
      this.httpClient
        .post<IAccount>(
          this.rawUrl + 'account',
          this.account,
          {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
            })
          }
        )
        .subscribe((data) => {
          this.getToken();
        });
    }
  }

  isFieldOnError(key: string): boolean {
    const field: FormControl = this.formGroupAccount.get(key) as FormControl;
    return (field.invalid && (field.touched || field.dirty));
  }

  private getToken(): void {
    this.httpClient
      .post<IToken>(
        this.rawUrl + 'login_check',
        {
          email: this.account.email,
          password: this.account.password
        },
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          })
        }
      )
      .subscribe((data) => {
        console.log(data.token);
        localStorage.setItem('tokenJWT', data.token);
      });
  }
}
