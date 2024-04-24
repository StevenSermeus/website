---
author: Sermeus Steven
pubDatetime: 2024-04-24T15:17:00.400Z
title: Git pour les nuls
slug: simple-git-for-day-to-day
featured: false
draft: false
tags:
  - git
  - version control
  - command line
  - merge
  - rebase
  - pull
  - push
  - commit
  - français
description: Un guide simple pour utiliser Git au quotidien.
---

# Git for day-to-day use

Git est un outil de gestion de version qui permet de suivre les modifications apportées à un projet. Il est très utile pour travailler en équipe et maintenir un historique des modifications apportées à un projet. Celui-ci est distribué, ce qui signifie que chaque membre de l'équipe dispose d'une copie locale du dépôt. Cela permet à chaque membre de travailler sur son propre code sans affecter le code des autres membres. Un dépôt Git peut être hébergé sur des services comme GitHub, GitLab ou Bitbucket. Ces services offrent des fonctionnalités supplémentaires comme le suivi des problèmes, les demandes de tirage et l'intégration continue. Dans cet article, nous allons voir comment utiliser Git pour gérer vos projets avec la plateforme GitHub.

## Quelques concepts clés

Avant de commencer, voici quelques concepts clés à connaître pour utiliser Git :

- **Repository (Dépôt)** : Un dépôt Git est un espace de stockage où vous pouvez stocker vos fichiers et suivre les modifications apportées à ces fichiers.
- **Commit (Validation)** : Un commit est une modification apportée à un fichier ou un ensemble de fichiers. Chaque commit est accompagné d'un message qui décrit les modifications apportées. Cette modification doit être la plus atomique possible.
- **Branch (Branche)** : Une branche est une version parallèle du code source. Vous pouvez créer une branche pour travailler sur une nouvelle fonctionnalité sans affecter le code principal.
- **Merge (Fusion)** : La fusion est le processus de combinaison des modifications apportées à une branche avec une autre branche.
- **Rebase (Rebaser)** : Le rebasage est le processus de déplacement des commits d'une branche vers une autre branche.

## Installation de Git

Pour commencer à utiliser Git, vous devez d'abord l'installer sur votre système. Vous pouvez télécharger Git à partir du site [official](https://git-scm.com/). Une fois l'installation terminée, vous pouvez vérifier si Git est correctement installé en exécutant la commande suivante dans votre terminal :

```bash
git --version
```

Avant de gérer vos projets avec ce nouvel outil, il est important de configurer votre nom d'utilisateur et votre adresse e-mail. Vous pouvez le faire en exécutant les commandes suivantes :

```bash
git config --global user.name "Votre Nom"
git config --global user.email "Email"
```

Ces informations seront utilisées pour identifier les commits que vous créez.

## Création d'un dépôt Git

Pour créer un nouveau dépôt Git, vous devez d'abord initialiser un nouveau dépôt dans un répertoire existant. Vous pouvez le faire en exécutant la commande suivante dans votre terminal :

```bash
mkdir -p nouveau-projet
cd nouveau-projet
git init
```

Une fois ces commandes éxécutées, un nouveau dépôt Git sera créé dans le répertoire `nouveau-projet`. Si vous affichez les fichiers de ce répertoire, vous verrez un dossier caché `.git` qui contient les fichiers nécessaires pour suivre les modifications apportées à votre projet.

## Ajout de fichiers à un dépôt Git

Une fois que ce repository est créé, on peut ajouter un nouveau fichier à ce dépôt. Créez un fichier `README.md` dans le répertoire `nouveau-projet` et ajoutez-y quelques lignes de texte.

Si vous ètes sous Linux, vous pouvez utiliser la commande suivante pour créer un fichier `README.md` :

```bash
echo "# Mon premier projet" > README.md
```

Pour le moment, ce fichier n'est pas suivi par Git. Cela signifie que Git ne connaît pas l'existence de ce fichier. Pour ajouter ce fichier au dépôt, vous devez exécuter la commande suivante :

```bash
git add README.md
```

## Création d'un commit

Une fois que vous avez ajouté le fichier `README.md` au dépôt, vous pouvez créer un commit pour enregistrer les modifications apportées. Vous pouvez le faire en exécutant la commande suivante :

```bash
git commit README.md -m "Ajout du fichier README.md"
```

Cette commande commit uniquement le fichier `README.md`.

## Gestions de plusieurs fichiers

Les commandes `git add` et `git commit` peuvent être utilisées pour gérer plusieurs fichiers à la fois. Par exemple, si vous avez plusieurs fichiers à ajouter au dépôt, vous pouvez exécuter la commande suivante :

```bash
git add fichier1 fichier2 fichier3
```

Une fois que vous avez ajouté les fichiers, vous pouvez créer un commit pour enregistrer les modifications apportées à ces fichiers. Si les modifications des fichiers 1 et 3 sont liées mais pas celle du fichier 2, vous pouvez créer deux commits séparés :

```bash
git commit fichier1 fichier3 -m "Ajout des fichiers 1 et 3"
git commit fichier2 -m "Ajout du fichier 2"
```

Il est aussi possible d'ajouter ou de commiter tous les fichiers en une seule commande :

```bash
git add .
git commit -a -m "Ajout de tous les fichiers"
```

## Mise en place d'un dépôt distant

Pour le moment les changements que vous avez effectués sont enregistrés localement. Pour partager votre code avec d'autres personnes, vous devez mettre en place un dépôt distant. Vous pouvez le faire en utilisant un des services d'hébergement de dépôts cités plus haut. Dans cet exemple, nous allons utiliser GitHub.

Pour créer un nouveau dépôt sur GitHub, vous devez d'abord créer un compte sur le site. Une fois que vous avez créé un compte, vous pouvez créer un nouveau dépôt en cliquant sur le bouton `New repository`. Vous pouvez ensuite suivre les instructions pour créer un nouveau dépôt. De plus, il est fortement recommandé d'utiliser des clés SSH pour vous connecter à GitHub. Vous pouvez trouver des instructions sur la façon de générer une paire de clés SSH [ici](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

Une fois que vous avez créé un nouveau dépôt sur GitHub, vous pouvez le lier à votre dépôt local en utilisant la commande suivante :

```bash
git remote add origin <url-du-depot> # L'url peut être https ou ssh, si vous avez configuré les clés SSH sur GitHub utilisez l'url ssh
```

Vous pouvez ensuite pousser vos modifications vers le dépôt distant en utilisant la commande suivante :

```bash
git push -u origin master
```

Il est maintenant possible de voir les modifications apportées à votre dépôt sur GitHub. Si les autres membres de votre équipe ont accès à ce dépôt, ils peuvent cloner le dépôt sur leur machine en utilisant la commande suivante :

```bash
git clone <url-du-depot>
```

Si cela était déjà fait, ils peuvent mettre à jour leur dépôt local en utilisant la commande suivante :

```bash
git pull
```

## Utilisation des branches

**Petit exercices à faire en équipe**

Les branches sont très utiles pour travailler sur des fonctionnalités isolées sans affecter le code principal. Pour créer une nouvelle branche, vous pouvez utiliser la commande suivante :

```bash
git checkout -b nouvelle-branche
```

Cette commande avec l'argument `-b` crée une nouvelle branche appelée `nouvelle-branche` et bascule sur cette branche. Vous pouvez ensuite apporter des modifications à cette branche et les enregistrer en utilisant les commandes `git add` et `git commit`. Celle-ci est locale pour le moment. Pour partager cette branche avec les autres membres de l'équipe, vous devez la pousser vers le dépôt distant en utilisant la commande suivante :

```bash
git push --set-upstream origin nouvelle-branche
```

Les autres membres de l'équipe peuvent ensuite basculer sur cette branche en utilisant la commande suivante :

```bash
git checkout nouvelle-branche
```

Une fois que les modifications apportées à cette branche sont terminées, vous pouvez les fusionner avec la branche principale en utilisant Github voici le lien de la documentation pour créer une [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) et pour [merger](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request-with-a-merge-queue) la branche.

Une fois les modifications fusionnées, toutes les branches qui partaient de la branche ou les modifications ont été fusionnées doivent être mises à jour. Cela permet d'avoir les modifications mergées sur les autres branches. Pour cela, vous pouvez utiliser la commande suivante :

```bash
git pull # Met à jour la branche courante
git checkout autre-branche # Branches qui partaient de la branche ou les modifications ont été mergées
git rebase master # Merge les modifications de la branche ou les modifications ont été mergées
git push -f # Push les modifications sur le dépôt distant
```

Attention, l'utilisation de `git push -f` est dangereuse, elle écrase les modifications sur le dépôt distant. Utilisez-la avec précaution. Assurez-vous de bien avoir les dernières modifications du remote avant de l'utiliser.

## Conclusion

Git est un outil puissant pour gérer vos projets et collaborer avec d'autres personnes. Il vous permet de suivre les modifications apportées à votre code et de travailler sur des fonctionnalités isolées sans affecter le code principal. En utilisant les branches, vous pouvez travailler sur plusieurs fonctionnalités en parallèle et les fusionner avec le code principal une fois qu'elles sont terminées. En utilisant un dépôt distant, vous pouvez partager votre code avec d'autres personnes et collaborer sur des projets en équipe. Enfin, en utilisant GitHub, vous pouvez suivre les problèmes, les demandes de tirage et l'intégration continue pour améliorer la qualité de votre code et faciliter la collaboration avec d'autres personnes.

## Pour aller plus loin

- [Signer vos commits avec GPG](https://www.stevensermeus.be/posts/signing-commits/)
