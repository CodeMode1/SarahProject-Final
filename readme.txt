## Agenda Sarah 2.0
Project Span: September 2016 - December 2016


Application web côté client : Angular2/Typescript/JS
		Côté serveur : NodeJS , RESTful API : Express
		Persistance : Mongo DB

Application qui fait la gestion de clients et des évènements de ceux-ci.

## Commencer

Ces instructions vont permettre de rouler le projet sur une machine locale. 


## Pré - requis Installation software

Installer Mongo DB (persistance) : https://www.mongodb.com/download-center?jmp=nav#community
	-> suivre les isntructions : créer un dossier sous C:\ qui va hoster la BD. 
	-> Mettre sur le bureau un lien vers mongod.exe et mongo.exe.

Installer NPM (Node package Manager) :  https://nodejs.org/en/ 
	-> LTS (long term support) V4 +

Installer Typescript version 1.8 : http://www.typescriptlang.org/

(Optionnel) pour utilisateurs techniques :

Installer VS Code : https://code.visualstudio.com/Download

Installer plugin pour VS Code : beautify (indentation en sauvegardant), vscode-angular2-snippets (shortcut pour Angular2)


## Installation / Exécution 

Démarrer mongod.exe en cliquant sur le lien du bureau. Laisser rouler.

Démarrer mongo.exe (client mongo) en cliquant sur le lien du bureau. 
	-> Choisir (switcher) à la bd du projet en tapant dans la ligne de commande : use sarahdb2
	-> le nom de la BD est définit dans le fichier app.js (à la racine du dossier du projet sprint2v2.0)

Ouvrir le dossier du projet (sprint2v2.0) dans VS Code.

Ouvrir 2 fenêtres DOS en ligne de commande en mode Administrateur. (important d'avoir 2 fenêtres).

Se positionner dans le dossier : sprint2v2.0 dans les deux fenêtres.

Dans la 1er fenêtre, taper : npm run gulp. Attendre quelques secondes que les fichiers soient compilés. 
	-> Laisser rouler, ne pas fermer il s'agit du tasks builder.

Dans la 2eme fenêtre, taper : npm start. Encore une fois ne pas fermer.

Ouvrir un onglet Google Chrome et se rendre au : localhost:3000.
	* IMPORTANT: utiliser google chrome pour compatibilité, se référer à Bugs Connus pour explication.

L'app est live. Lorsque changement côté client seulement re-rouler npm start. Si changement côté serveur rouler npm run gulp avant.)



## Commandes

Quitter les fenêtres DOS : CTRL + C 

Version: node –v, npm –v, tsc -v 

Bd (mongo) : 
	-> use bd : use bd_nom
	-> lister collections bd : db.getCollectionNames()
	-> supprimer tous documents d'une collection : db.collection_nom.remove({})
	
	source:
	mongo db official docs
	http://stackoverflow.com/questions/7486528/mongoose-force-collection-name



## Structure des dossiers

#assets (dossier qui contient le dossier du code client)
	# app (dossier qui sera compilé et servi dans le browser à partir du dossier public)
		# chaque sous-dossier de app représente une composante dans Angular2.
		boot.ts permet de bootstrapper l'app côté client.
#bin(dossier qui contient le serveur, le crée et le configure)
#models (dossier qui contient les définitions des collections de la BD --> schéma mongoose)
#node_modules (dossier qui contient tous les packages JS nécessaires, appelés dépendances pour Angular2 ou pacakge de fonctionnalité)
#public (dossier qui contient tout le code qui va être exécuté dans le browser (TS compilé en JS, autant client que les dépendances nécessaires à Angular2 minifiés seront dans ce folder)
#routes (dossier qui contient le côté serveur selon l'Url de la requête http)
#typings (dossier qui contient la définition des typings)
#views (dossier qui contient la single page app view, la vue de l'application que system.js va faire démarrer, des scripts y sont injectés)
.gitignore (fichier nécessaire pour ignorer le dossier node_modules volumineux et inutile à mettre en revision control)
app.js (fichier qui permet de router les requêtes entrantes vers le bon fichier de routes du dossier routes)
gulpfile.js (fichier qui permet de builder mes tâches, de compiler le TS en JS dans le dossier public)
package.json (fichier qui contient tous les packages du NPM installés, avec les versions respectives)
readme.txt (fichier read me du projet)
systemjs.builder.js (fichier qui permet de minifier des fichiers JS en un bundle)
tsconfig.json (fichier qui contient la configuration de typescript)
typings.d.ts (fichier qui contient la référence pour du typing)
typings.json (fichier qui contient des dépendances pour du typing)


## Bugs Connus

Le browser doit être google chrome, car certains widgets ne sont pas compatibles dans firefox ou InternetExplorer.
J'ai testé plusieurs packages, qui n'étaient pas fonctionnel dans mon projet
puisque Angular 2 est un cadre de travail en développement. 
J'ai cherché dans les composantes de Télérik, les date/time pickers seront disponibles en 2017 pour Angular2.
Ceux que j'ai choisi sont fonctionnels dans mon projet seulement dans google chrome pour l'instant.


## Autheur

Daphné D-Cournoyer
