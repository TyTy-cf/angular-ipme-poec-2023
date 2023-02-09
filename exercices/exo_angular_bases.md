### 1. Faire un compteur


Vous ajouterez le code du compteur dans le **course.component**


- Il commence à 0
- On doit pouvoir l'incrémenter de 1 et de 5 (en positif et négatif)
- On doit pouvoir le reset (retour à 0)
- De plus, il change de couleur en fonction de sa valeur :
  - 0 : jaune
  - Entre 1 et plus, il sera vert foncé (#009c29)
  - Entre -1 et moins, il sera rouge foncé (#ab000f)


### 2. Yahtzee


Faire un Yahtzee, mais qu'est-ce que c'est ? https://fr.wikipedia.org/wiki/Yahtzee


### 2.1. Yahtzee - Créer les classes métiers


Créer une classe "Dice" :
- attributs :
  - value: number = 1
  - image: string = ''
- constructor :
  - Déterminez une valeur aléatoire entre 1 et 6, et affecter le résultat à l'attribut "value"
  - on génèrera ensuite son image => une string du chemin de l'image à sélectionner : "assets/dices/{value}.png"

Créer une classe Yatzee :
- attributs :
  - dices: Dice[] = []
- méthodes :
  - start =>
    - rempli le tableau de dés du Yahtzee, pour cela vous génèrerez 5 instances de la classe Dice


### 2.2. Yahtzee - Afficher le Yahtzee


Créer un component "yahtzee".

Dans le **yahtzee.component** ajouter à la classe un attribut Yahtzee et instanciez le.

Dans l'HTML du component faire :
- un bouton qui appelera la méthode "start" de notre Yatzee
- et si le tableau de dé du Yatzee n'est pas vide, alors on affichera les 5 images des dés dans l'HTML

