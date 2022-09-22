# Contributing

Merci aux contributeurs!

**Première pull request?** Vous pouvez regarder cette video Youtube [Comment contribuer à un projet open source sur GitHub][pullreqyoutube]

## Mise en place du projet

1.  Faire un Fork et un clone du repo
2.  Executez `npm run setup -s` pour installer les dépendances et valider
3.  Créer un branch pour la PR avec la commande `git checkout -b pr/nom-branche`

> Astuces: Garder votre branche `main` pointant vers le référentiel d'origine et effectuez Pull Request à partir des branches de votre fork. Pour ce faire, exécutez :
> à partir des branches de votre fork. Pour ce faire, exécutez :  
>
> ```
> git remote add upstream https://github.com/mikecodeur/react-module-template.git
> git fetch upstream
> git branch --set-upstream-to=upstream/main main
> ```
>
> Cela ajoutera le référentiel d'origine en tant que "remote" called "upstream," Ensuite
> récuperer  les informations git depuis ce remote, puis configurera votre branche `main` locale pour utiliser la branche principale en amont chaque fois que vous exécutez `git pull`. 
> Ensuite, vous pouvez créer toutes vos branches de demande de tirage en fonction de cette branche `main`..
> Quand vous vouler mettre à jour `main`, faites un `git pull`.


## Pour plus d'aide

Regarder les [tickets en cours][issues]


[pullreqyoutube]:
  https://www.youtube.com/watch?v=waEb2c9NDL8
[issues]: https://github.com/mikecodeur/react-module-template/issues
