<div>
  <h1 align="center"><a href="https://go.mikecodeur.com/react-mastery">React Module Template 🚀 ReactMastery.Dev</a></h1>
  <strong>
    Template de module de la formation React Mastery
  </strong>
  <p>
    Module de la formation React Mastery. Module Template. 
  </p>

  <a href="https://go.mikecodeur.com/react-mastery">
    <img 
      alt="Apprendre React"
      src="https://mikecodeur.com/mike/assets/courses/react-mastery.png"
    />
  </a>
 
  <a href="https://go.mikecodeur.com/react-mastery" >
    <img width="100"
      alt="Apprendre React"
      src="https://mikecodeur.com/mike/assets/mikecodeur-trans.png"
    />
  </a>
 
</div>

<hr />


<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![GPL 3.0 License][license-badge]][license]
[![Netlify Status][netlify-badge]][netlify]
<!-- prettier-ignore-end -->

## Les prérequis 

- Les fondamentaux de React
  [GitHub](https://github.com/MikeCodeur/react-fondamentaux)

## Configuration requise

- [git][git] v2.13 ou supérieure
- [NodeJS][node] `12 || 14 || 15 || 16`
- [npm][npm] v6 ou supérieure 

Ces executables doivent etre inclus votre `PATH`. Pour vérifier qu'ils sont 
corretement installés et configuré vous pouvez executer :

```shell
git --version
node --version
npm --version
```

En cas de difficulté pour modifier la variable d'environnement PATH
sur votre machine, vous pouvez consulter [windows][win-path] or
[mac/linux][mac-path].

## Installation

> Si vous voulez modifier et commiter vos modification sur ce repo (notes etc ...), vous pouvez faire un
> [fork](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo)
> sur votre github (au autre).

Après avoir installé et configuré les bonnes versions sur votre machine, vous pouvez
executer cette commande pour pour demarrer la configuration du projet :


```
git clone https://github.com/MikeCodeur/react-module-template.git
cd react-module-template
npm run init
```

La plupart des problèmes de la commande `npm run init` sont dus aux varialbes d'environnement
PATH

Si vous avez une erreur, lisez le message d'erreur et essayer de corriger. Si vous ne trouvez pas
de solution vous pouvez [ouvrir un ticket][issue] en donnant le résultat de la console

Si le script de setup pose problème vous pouvez simplement executer les deux commandes suivantes :

```
npm install
npm run validate
```

Si vous maitriser [Docker](https://www.docker.com/products/docker-desktop) 🐳 vous pouvez démarrer le projet :

```
docker-compose up
```

Il est recommandé de faire les exercices en local, mais en cas de difficulté il est egalement
possible de démarrer le projet sur 
[Codesandbox](https://codesandbox.io/s/holy-dust-59gp9).

## Démarrer l'application

Pour demarrer l'application, exécuter:

```shell
npm start
```

L'application est basé sur react-create-app et
[react-scripts](https://create-react-app.dev/).

Vous pouvez aussi acceder au déploiement
[déploiement sur Netlify](https://react-prerequis-debutant.mikecodeur.com/).

## Executer les tests

```shell
npm test
```

Cela va démarrer [Jest](https://jestjs.io/). Les tests sont là pour vous
aider a atteindre la version finale,
mais _parfois_ vous pouvez réuissir l'exercice and le test peut échouer car vous avez implémenter d'une manière 
différente.

### Les exercices

- `src/exercise/00.md`: Explications, Instructions de l'exercice, bonus
- `src/exercise/00.js`: L'exercise avec des indications
- `src/__tests__/00.js`: Tests
- `src/final/00.js`: Version finale
- `src/final/00.bonus-0.js`: Version finale avec bonus

Le but de l'exercice n'est **pas** de tout voir et de retenir par coeur.
Le but est de se poser les bonnes questions pour arriver au résultat.

## Emojis Importants 🐶 📝 🤖 🚀 🐜 📑 ⛏️ 👨‍✈️ 🚨

Les exercices contiennent des commentaires pour vous aider à avancer. Ces emojis
sont la pour vous aider sur différents aspects.

- **Mowgli le Chien** 🐶 te dira quand il y a quelque chose de spécifique que tu dois faire.
- **Jack le Carnet de note** 📝 va t'encourager à prendre des notes sur l'avancement
- **Ash le Robot** 🤖 te donnera des conseils spécifiques (et parfois du code en cours de route).
- **Julia la roquette** 🚀 te propulsera encore plus loin en te donnant des défis supplémentaires que tu peux relever dès que tu termines les exercices.
- **Dany la Fourmis** 🐜 te donnera des informations utiles/des notes sur les meilleures pratiques et un lien pour pour me donner ton retour sur chaque module.
- **Dominic le Document** 📑 te donnera des liens vers de la documentation utile
- **Hulk le Marteau** ⛏️ va traîner partout où tu as besoin de detruire des trucs (supprimer le code)
- **Hugo le chef de projet** 👨‍✈️ va t'aider sur les spécifications du projet
- **Robert l'Alerte** 🚨 apparaîtra occasionnellement dans les échecs des tests avec des explications potentielles pour lesquelles les tests échouent.

## Contributeurs

Merci aux contributeurs
([contributeurs](https://github.com/all-contributors/all-contributors)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://mikecodeur.com"><img src="https://avatars.githubusercontent.com/u/595162?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mike Codeur</b></sub></a><br /><a href="https://github.com/mikecodeur/react-module-template/commits?author=mikecodeur" title="Code">💻</a> <a href="https://github.com/mikecodeur/react-module-template/commits?author=mikecodeur" title="Documentation">📖</a> <a href="#infra-mikecodeur" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/mikecodeur/react-module-template/commits?author=mikecodeur" title="Tests">⚠️</a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

Ce projet suit les specifications 
[all-contributors](https://github.com/all-contributors/all-contributors)
. Toutes les contributions sont les bienvenues!

## 🐜 Donner un retour

Tous les exercices ont un lien de feedback

A la fin de l'exercice, tu peux aller à cette adresse pour nous donner
ton avis ! https://go.mikecodeur.com/cours-react-avis

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[git]: https://git-scm.com/
[build-badge]: https://img.shields.io/github/workflow/status/MikeCodeur/react-module-template/installation
[build]: https://github.com/MikeCodeur/react-module-template/actions
[netlify-badge]: https://api.netlify.com/api/v1/badges/3bf97d4c-9be9-4459-a6b5-2c9a4c3ca533/deploy-status
[netlify]: https://app.netlify.com/sites/pensive-stonebraker-de3913/deploys
[license-badge]: https://img.shields.io/badge/license-GPL%203.0%20License-blue.svg?style=flat-square
[license]: https://github.com/mikecodeur/react-module-template/blob/main/LICENSE
[all-contributors]: https://github.com/mikecodeur/all-contributors
[all-contributors-badge]: https://img.shields.io/github/all-contributors/mikecodeur/react-module-template?color=orange&style=flat-square
[win-path]: https://tutorielsgeek.com/comment-definir-des-variables-denvironnement-dans-windows-10/
[mac-path]: https://support.apple.com/fr-tn/guide/terminal/apd382cc5fa-4f58-4449-b20a-41c53c006f8f/mac
[issue]: https://github.com/mikecodeur/react-module-template/issues/new
<!-- prettier-ignore-end -->
