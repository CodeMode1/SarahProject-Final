"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var client_service_1 = require('./client.service');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var client_1 = require('./client');
var erreur_service_1 = require('../erreurs/erreur.service');
var EditClientComponent = (function () {
    function EditClientComponent(_formBuilder, _clientService, _erreurService, _activatedRoute, _router) {
        this._formBuilder = _formBuilder;
        this._clientService = _clientService;
        this._erreurService = _erreurService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this.identification = "Identification";
        this.gestion = "Gestion";
        this.myClient = new client_1.Client();
        this.modeSoumission = true;
        this.formActualiser = true;
        this.formCopie = true;
        this.urlCopie = this._router.url;
    }
    EditClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._activatedRoute.params.subscribe(function (params) {
            if (params.hasOwnProperty('id')) {
                _this.estNouveau = false;
                _this.codeClient = +params['id'];
                _this._clientService.getClient(_this.codeClient)
                    .subscribe(function (data) {
                    _this.myClient = data;
                    console.log("client a modif: ");
                    console.log(_this.myClient);
                    // Si URL contient "copie", alors vide les champs du client copié.
                    if (_this.urlCopie.includes("copie")) {
                        //dans mode copie peut pas actualisé par no client, car no clien strippe pour en créer un nouveau.
                        _this.formActualiser = false;
                        _this.copierClient();
                    }
                    console.log("client à copier vierge : ");
                    console.log(_this.myClient);
                }, function (error) { return _this._erreurService.handleErreur(error); });
                console.log('url : ');
                console.log(_this._router.url);
                if (_this.urlCopie.includes("copie")) {
                    console.log("set mode copie");
                    _this.estNouveau = true;
                }
            }
            else {
                _this.estNouveau = true;
            }
            console.log("est ce que nouveau : ");
            console.log(_this.estNouveau);
            // Init form
            _this.creerForm();
        });
        //this.testCP();
    };
    EditClientComponent.prototype.creerForm = function () {
        var noClient = null;
        var prenom = '';
        var nom = '';
        var noCompte = '';
        var courriel = '';
        var cell = '';
        var compagnie = '';
        var adresse = '';
        var ville = '';
        var codePostal = '';
        var telPrincipal = '';
        var province = '';
        var pays = '';
        var fax = '';
        var telSecondaire = '';
        var memo = '';
        var memoAVenir = '';
        var noExTaxeProv = '';
        var noExTaxeFed = '';
        var selectStatut = '';
        var selectSource = '';
        var modifPar = '';
        var modif = null;
        var dateDernEv = null;
        var creePar = '';
        var cree = null;
        if (!this.estNouveau) {
            // Setter la valeur du client au form control.
            this.myClient.noClient = noClient;
            this.myClient.prenom = prenom;
            this.myClient.nom = nom;
            this.myClient.noCompte = noCompte;
            this.myClient.courriel = courriel;
            this.myClient.cell = cell;
            this.myClient.compagnie = compagnie;
            this.myClient.adresse = adresse;
            this.myClient.ville = ville;
            this.myClient.codePostal = codePostal;
            this.myClient.telPrincipal = telPrincipal;
            this.myClient.province = province;
            this.myClient.pays = pays;
            this.myClient.fax = fax;
            this.myClient.telSecondaire = telSecondaire;
            this.myClient.memo = memo;
            this.myClient.memoAVenir = memoAVenir;
            this.myClient.noExTaxeProv = noExTaxeProv;
            this.myClient.noExTaxeFed = noExTaxeFed;
            this.myClient.selectStatut = selectStatut;
            this.myClient.selectSource = selectSource;
            this.myClient.modifPar = modifPar;
            this.myClient.modif = modif;
            this.myClient.dateDernEv = dateDernEv;
            this.myClient.creerPar = creePar;
            this.myClient.dateCree = cree;
        }
        // Creer le form avec des blancs ou les valeurs du client cherché.
        this.editClientForm = this._formBuilder.group({
            noClient: [noClient],
            prenom: [prenom],
            nom: [nom, forms_1.Validators.required],
            noCompte: [noCompte],
            courriel: [courriel, this.estCourrielOK],
            cell: [cell],
            compagnie: [compagnie],
            adresse: [adresse],
            ville: [ville],
            codePostal: [codePostal, this.estCodePostalOK],
            telPrincipal: [telPrincipal, this.estTelephoneOK],
            province: [province],
            pays: [pays],
            fax: [fax],
            telSecondaire: [telSecondaire],
            memo: [memo],
            memoAVenir: [memoAVenir],
            noExTaxeProv: [noExTaxeProv],
            noExTaxeFed: [noExTaxeFed],
            selectStatut: [selectStatut],
            selectSource: [selectSource],
            modifPar: [modifPar],
            modif: [modif],
            dateDernEv: [dateDernEv],
            creePar: [creePar],
            cree: [cree]
        });
    };
    EditClientComponent.prototype.copierClient = function () {
        this.myClient.clientId = null;
        this.myClient.noClient = null;
        this.myClient.modifPar = null;
        this.myClient.modif = null;
        this.myClient.dateDernEv = null;
        this.myClient.creerPar = null;
        this.myClient.dateCree = null;
    };
    EditClientComponent.prototype.copieCeClient = function () {
        this.copierClient();
        this.formCopie = false;
        this.modeSoumission = true;
    };
    EditClientComponent.prototype.actualiserClient = function () {
        var _this = this;
        if (this.myClient.noClient != null && (this.myClient.noClient).toString() != "") {
            this._clientService.getClient(Number(this.myClient.noClient))
                .subscribe(function (data) {
                console.log(_this.myClient.noClient);
                _this.myClient = data;
            }, function (error) {
                _this._erreurService.handleErreur(error);
            });
        }
    };
    /* Réagir au changement usager, cet evenement est applique sur tous les inputs du form.
         selon la syntax: (ngModelChange)="onUserChange($event)" */
    EditClientComponent.prototype.onUserChange = function () {
        // Enable Enregistrer bouton.
        this.modeSoumission = true;
    };
    EditClientComponent.prototype.formatCP = function (input) {
        // Enlever les espaces, globalement.
        var chaine = input.value.replace(/\s+/g, "");
        // Ajouter l'espace au 3eme carac.
        if (chaine.length > 3) {
            // Placer l'espace à la bonne place.
            chaine = chaine.substr(0, 3) + " " + chaine.substr(3, 3);
        }
        // Transformer le code Postal en majuscule.
        input.value = chaine.toUpperCase();
    };
    EditClientComponent.prototype.formatTP = function (input) {
        // Enlever tout ce qui n'est pas chiffre, globalement.
        var chaine = input.value.replace(/[^0-9]/g, "");
        console.log(chaine);
        // Au 11eme carac tapé, je reconstruis le tel avec ses bons chiffres.
        if (chaine.length > 10) {
            chaine = chaine.substr(1, 3) + chaine.substr(5, 3) + chaine.substr(9, 4);
        }
        // Au 10eme carac, je formatte selon (XXX)XXX-XXXX.
        if (chaine.length === 10) {
            chaine = "(" + chaine.substr(0, 3) + ")" + chaine.substr(3, 3) + "-" + chaine.substr(6, 4);
        }
        /* si ces if sont inversés, chaine non-formattée.
           car au 10eme carac :
           chaine.length > 10 et donc la chaine revient non-formattée. */
        input.value = chaine;
    };
    EditClientComponent.prototype.estCodePostalOK = function (control) {
        // Validation a réussi: pas de valeur tapée
        if (!control.value) {
            return null;
        }
        /* Format regex canadien :
            ^ : chaine commence, $ : fin séquence
            lettre : pas de D, F, I, O, Q U
            1er lettre: pas de W, Z, chiffre: \d, lettre, blanc, chiffre, lettre, chiffre */
        var regexCP = /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ][ ]\d[ABCEGHJKLMNPRSTVWXYZ]\d$/;
        if (!control.value.match(regexCP)) {
            return { codePostalInvalide: true };
        }
        // Validation résussie
        return null;
    };
    EditClientComponent.prototype.estTelephoneOK = function (control) {
        if (!control.value) {
            return null;
        }
        /* Format regex canadien:
           ^ : sequence commence, $ : fin sequence
           ( , chiffre(x3), ) , chiffre (x3), - , chiffre (x4) */
        var regexTP = /^\u0028\d{3}\u0029\d{3}\u002D\d{4}$/;
        if (!control.value.match(regexTP)) {
            return { telephoneInvalide: true };
        }
        // Validation réussie
        return null;
    };
    // Validation: retourne null si valide et un boolean si erreur.
    EditClientComponent.prototype.estCourrielOK = function (control) {
        if (control.value) {
            var regexCourriel = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            if (!control.value.match(regexCourriel))
                return { courrielInvalide: true };
        }
        // Validation réussie
        return null;
    };
    EditClientComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("cree client : ");
        console.log(this.editClientForm.value);
        // IF NOUVEAU, APPEL CRÉÉ, SINON APPEL UPDATE
        if (this.estNouveau || !this.formCopie) {
            this._clientService.creerClient(this.myClient)
                .subscribe(function (data) {
                console.log('data du serveur :');
                console.log(data);
                // Sauver data du serveur dans myClient.
                _this.myClient = data;
                // Voir le message de sauvegarde succès.
                _this.sauvegardeClient = true;
            }, function (error) { return _this._erreurService.handleErreur(error); });
            this.formCopie = true;
        }
        else {
            this._clientService.updateClient(this.myClient)
                .subscribe(function (data) { return console.log(data); }, function (error) { return _this._erreurService.handleErreur(error); });
        }
        this.modeSoumission = false;
    };
    EditClientComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    EditClientComponent.prototype.testCP = function () {
        //retoune null (valide)
        //console.log(this.estCodePostalOK('H2S 0B5')); //ok
        //console.log(this.estCodePostalOK('h2s 0b5')); //ok
        //console.log(this.estCodePostalOK('h2s0b5'));  //ok
        //retourne true (fail)
        //console.log(this.estCodePostalOK('Z3V H2S')); //Ok
        //console.log(this.estCodePostalOK('z3vh2s'));  //ok
        //console.log(this.estCodePostalOK('B3V H2'));  //ok
    };
    EditClientComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-edit-client',
            templateUrl: 'client-edit.component.html',
            styles: ["\n        .outer{\n            float:left;\n            clear:both;\n            padding: 0 0 1% 0;\n        }\n        \n        .form-group{\n            float:left;\n        }\n\n        .divFooter{\n            text-align:center;\n        }\n\n        .footer{\n            border-top: 2px solid black;\n        }\n\n        button{  \n            display:block;\n            margin: 0 auto;\n        }\n\n        .space {\n            padding: 2%;\n        }\n\n        h2{\n            padding-top:1%;\n            padding-bottom:2%;\n        }\n\n        .title{\n            text-align:left;\n        }\n\n        .memo{\n            float: left;\n            clear: both;\n            padding: 0 0 2% 0;\n        }\n\n        textarea{\n            resize: none;\n        }\n\n        .gestionInputs{\n            float: left;\n            clear: both;\n        }\n\n        .dropdown{\n            padding:0;\n        }\n        .alert-success{\n            text-align:center;\n        }\n    "
            ]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, client_service_1.ClientService, erreur_service_1.ErreurService, router_1.ActivatedRoute, router_1.Router])
    ], EditClientComponent);
    return EditClientComponent;
}());
exports.EditClientComponent = EditClientComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudHMvY2xpZW50LWVkaXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsK0JBQThCLGtCQUFrQixDQUFDLENBQUE7QUFDakQsc0JBQWdFLGdCQUFnQixDQUFDLENBQUE7QUFDakYsdUJBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFFekQsdUJBQXVCLFVBQVUsQ0FBQyxDQUFBO0FBQ2xDLCtCQUE4QiwyQkFBMkIsQ0FBQyxDQUFBO0FBdUUxRDtJQWNJLDZCQUFvQixZQUF5QixFQUFVLGNBQTZCLEVBQVUsY0FBNkIsRUFDL0csZUFBK0IsRUFBVSxPQUFlO1FBRGhELGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUMvRyxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2hFLElBQUksQ0FBQyxjQUFjLEdBQUcsZ0JBQWdCLENBQUM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDcEMsQ0FBQztJQUVGLHNDQUFRLEdBQVI7UUFBQSxpQkF1Q0M7UUF0Q0csSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQ3JELFVBQUMsTUFBVztZQUNSLEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxj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QyxDQUNuRCxDQUFDO1lBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDMUIsQ0FBQztRQUFDLElBQUksQ0FBQSxDQUFDO1lBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztpQkFDMUMsU0FBUyxDQUNOLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBakIsQ0FBaUIsRUFDekIsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBdkMsQ0FBdUMsQ0FDbkQsQ0FBQztRQUNWLENBQUM7UUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBRUQseUNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVPLG9DQUFNLEdBQWQ7UUFDSSx1QkFBdUI7UUFDbkIsb0RBQW9EO1FBQ3BELG9EQUFvRDtRQUNwRCxvREFBb0Q7UUFFeEQsc0JBQXNCO1FBQ2xCLG9EQUFvRDtRQUNwRCxvREFBb0Q7UUFDcEQsb0RBQW9EO0lBQzVELENBQUM7SUE3WEw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFDLDRCQUE0QjtZQUN4QyxNQUFNLEVBQUUsQ0FBQyw2K0JBMERSO2FBQ0E7U0FDSixDQUFDOzsyQkFBQTtJQThURiwwQkFBQztBQUFELENBN1RBLEFBNlRDLElBQUE7QUE3VFksMkJBQW1CLHNCQTZUL0IsQ0FBQSIsImZpbGUiOiJjbGllbnRzL2NsaWVudC1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2xpZW50U2VydmljZSB9IGZyb20gJy4vY2xpZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvUlgnO1xyXG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tICcuL2NsaWVudCc7XHJcbmltcG9ydCB7IEVycmV1clNlcnZpY2UgfSBmcm9tICcuLi9lcnJldXJzL2VycmV1ci5zZXJ2aWNlJztcclxuXHJcbmludGVyZmFjZSBSZXN1bHRhdFZhbGlkYXRpb24ge1xyXG4gICAgW2NsZTogc3RyaW5nXTogYm9vbGVhbjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdteS1lZGl0LWNsaWVudCcsXHJcbiAgICB0ZW1wbGF0ZVVybDonY2xpZW50LWVkaXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgICAgIC5vdXRlcntcclxuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgICAgY2xlYXI6Ym90aDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAwIDElIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5mb3JtLWdyb3Vwe1xyXG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRpdkZvb3RlcntcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9vdGVye1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b257ICBcclxuICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3BhY2Uge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDoxJTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206MiU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tZW1ve1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAyJSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGV4dGFyZWF7XHJcbiAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5nZXN0aW9uSW5wdXRze1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZHJvcGRvd257XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFsZXJ0LXN1Y2Nlc3N7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRDbGllbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBpZGVudGlmaWNhdGlvbjogc3RyaW5nO1xyXG4gICAgZ2VzdGlvbjogc3RyaW5nO1xyXG4gICAgZWRpdENsaWVudEZvcm06IEZvcm1Hcm91cDtcclxuICAgIGZvcm1Db3BpZTogYm9vbGVhbjtcclxuICAgIGZvcm1BY3R1YWxpc2VyOiBib29sZWFuO1xyXG4gICAgbW9kZVNvdW1pc3Npb246IGJvb2xlYW47XHJcbiAgICBzYXV2ZWdhcmRlQ2xpZW50OiBib29sZWFuO1xyXG4gICAgbXlDbGllbnQgOiBDbGllbnQ7XHJcbiAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICAgIGVzdE5vdXZlYXU6IGJvb2xlYW47XHJcbiAgICBjb2RlQ2xpZW50OiBudW1iZXI7XHJcbiAgICB1cmxDb3BpZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBfY2xpZW50U2VydmljZTogQ2xpZW50U2VydmljZSwgcHJpdmF0ZSBfZXJyZXVyU2VydmljZTogRXJyZXVyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9hY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5pZGVudGlmaWNhdGlvbiA9IFwiSWRlbnRpZmljYXRpb25cIjtcclxuICAgICAgICB0aGlzLmdlc3Rpb24gPSBcIkdlc3Rpb25cIjtcclxuICAgICAgICB0aGlzLm15Q2xpZW50ID0gbmV3IENsaWVudCgpO1xyXG4gICAgICAgIHRoaXMubW9kZVNvdW1pc3Npb24gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZm9ybUFjdHVhbGlzZXIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZm9ybUNvcGllID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVybENvcGllID0gdGhpcy5fcm91dGVyLnVybDtcclxuICAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7IFxyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5fYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHBhcmFtczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihwYXJhbXMuaGFzT3duUHJvcGVydHkoJ2lkJykpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXN0Tm91dmVhdSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29kZUNsaWVudCA9ICtwYXJhbXNbJ2lkJ107XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2xpZW50U2VydmljZS5nZXRDbGllbnQodGhpcy5jb2RlQ2xpZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5teUNsaWVudCA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjbGllbnQgYSBtb2RpZjogXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubXlDbGllbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpIFVSTCBjb250aWVudCBcImNvcGllXCIsIGFsb3JzIHZpZGUgbGVzIGNoYW1wcyBkdSBjbGllbnQgY29wacOpLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMudXJsQ29waWUuaW5jbHVkZXMoXCJjb3BpZVwiKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZGFucyBtb2RlIGNvcGllIHBldXQgcGFzIGFjdHVhbGlzw6kgcGFyIG5vIGNsaWVudCwgY2FyIG5vIGNsaWVuIHN0cmlwcGUgcG91ciBlbiBjcsOpZXIgdW4gbm91dmVhdS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtQWN0dWFsaXNlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvcGllckNsaWVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsaWVudCDDoCBjb3BpZXIgdmllcmdlIDogXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubXlDbGllbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2VycmV1clNlcnZpY2UuaGFuZGxlRXJyZXVyKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndXJsIDogJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3JvdXRlci51cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnVybENvcGllLmluY2x1ZGVzKFwiY29waWVcIikpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZXQgbW9kZSBjb3BpZVwiKTsgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lc3ROb3V2ZWF1ID0gdHJ1ZTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVzdE5vdXZlYXUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlc3QgY2UgcXVlIG5vdXZlYXUgOiBcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmVzdE5vdXZlYXUpO1xyXG4gICAgICAgICAgICAgICAgLy8gSW5pdCBmb3JtXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWVyRm9ybSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTsgICAgICBcclxuICAgICAgICAvL3RoaXMudGVzdENQKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlZXJGb3JtKCl7XHJcbiAgICAgICAgbGV0IG5vQ2xpZW50ID0gbnVsbDtcclxuICAgICAgICBsZXQgcHJlbm9tID0gJyc7XHJcbiAgICAgICAgbGV0IG5vbSA9ICcnO1xyXG4gICAgICAgIGxldCBub0NvbXB0ZSA9ICcnO1xyXG4gICAgICAgIGxldCBjb3VycmllbCA9ICcnO1xyXG4gICAgICAgIGxldCBjZWxsID0gJyc7XHJcbiAgICAgICAgbGV0IGNvbXBhZ25pZSA9ICcnO1xyXG4gICAgICAgIGxldCBhZHJlc3NlID0gJyc7XHJcbiAgICAgICAgbGV0IHZpbGxlID0gJyc7XHJcbiAgICAgICAgbGV0IGNvZGVQb3N0YWwgPSAnJztcclxuICAgICAgICBsZXQgdGVsUHJpbmNpcGFsID0gJyc7XHJcbiAgICAgICAgbGV0IHByb3ZpbmNlID0gJyc7XHJcbiAgICAgICAgbGV0IHBheXMgPSAnJztcclxuICAgICAgICBsZXQgZmF4ID0gJyc7XHJcbiAgICAgICAgbGV0IHRlbFNlY29uZGFpcmUgPSAnJztcclxuICAgICAgICBsZXQgbWVtbyA9ICcnO1xyXG4gICAgICAgIGxldCBtZW1vQVZlbmlyID0gJyc7XHJcbiAgICAgICAgbGV0IG5vRXhUYXhlUHJvdiA9ICcnO1xyXG4gICAgICAgIGxldCBub0V4VGF4ZUZlZCA9ICcnO1xyXG4gICAgICAgIGxldCBzZWxlY3RTdGF0dXQgPSAnJztcclxuICAgICAgICBsZXQgc2VsZWN0U291cmNlID0gJyc7XHJcbiAgICAgICAgbGV0IG1vZGlmUGFyID0gJyc7XHJcbiAgICAgICAgbGV0IG1vZGlmID0gbnVsbDtcclxuICAgICAgICBsZXQgZGF0ZURlcm5FdiA9IG51bGw7XHJcbiAgICAgICAgbGV0IGNyZWVQYXIgPSAnJztcclxuICAgICAgICBsZXQgY3JlZSA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLmVzdE5vdXZlYXUpe1xyXG4gICAgICAgICAgICAvLyBTZXR0ZXIgbGEgdmFsZXVyIGR1IGNsaWVudCBhdSBmb3JtIGNvbnRyb2wuXHJcbiAgICAgICAgICAgIHRoaXMubXlDbGllbnQubm9DbGllbnQgPSBub0NsaWVudDtcclxuICAgICAgICAgICAgdGhpcy5teUNsaWVudC5wcmVub20gPSBwcmVub207XHJcbiAgICAgICAgICAgIHRoaXMubXlDbGllbnQubm9tID0gbm9tO1xyXG4gICAgICAgICAgICB0aGlzLm15Q2xpZW50Lm5vQ29tcHRlID0gbm9Db21wdGU7XHJcbiAgICAgICAgICAgIHRoaXMubXlDbGllbnQuY291cnJpZWwgPSBjb3VycmllbDtcclxuICAgICAgICAgICAgdGhpcy5teUNsaWVudC5jZWxsID0gY2VsbDtcclxuICAgICAgICAgICAgdGhpcy5teUNsaWVudC5jb21wYWduaWUgPSBjb21wYWduaWU7XHJcbiAgICAgICAgICAgIHRoaXMubXlDbGllbnQuYWRyZXNzZSA9IGFkcmVzc2U7XHJcbiAgICAgICAgICAgIHRoaXMubXlDbGllbnQudmlsbGUgPSB2aWxsZTtcclxuICAgICAgICAgICAgdGhpcy5teUNsaWVudC5jb2RlUG9zdGFsID0gY29kZVBvc3RhbDtcclxuICAgICAgICAgICAgdGhpcy5teUNsaWVudC50ZWxQcmluY2lwYWwgPSB0ZWxQcmluY2lwYWw7XHJcbiAgICAgICAgICAgIHRoaXMubXlDbGllbnQucHJvdmluY2UgPSBwcm92aW5jZTtcclxuICAgICAgICAgICAgdGhpcy5teUNsaWVudC5wYXlzID0gcGF5cztcclxuICAgICAgICAgICAgdGhpcy5teUNsaWVudC5mYXggPSBmYXg7XHJcbiAgICAgICAgICAgIHRoaXMubXlDbGllbnQudGVsU2Vjb25kYWlyZSA9IHRlbFNlY29uZGFpcmU7XHJcbiAgICAgICAgICAgIHRoaXMubXlDbGllbnQubWVtbyA9IG1lbW87XHJcbiAgICAgICAgICAgIHRoaXMubXlDbGllbnQubWVtb0FWZW5pciA9IG1lbW9BVmVuaXI7XHJcbiAgICAgICAgICAgIHRoaXMubXlDbGllbnQubm9FeFRheGVQcm92ID0gbm9FeFRheGVQcm92O1xyXG4gICAgICAgICAgICB0aGlzLm15Q2xpZW50Lm5vRXhUYXhlRmVkID0gbm9FeFRheGVGZWQ7XHJcbiAgICAgICAgICAgIHRoaXMubXlDbGllbnQuc2VsZWN0U3RhdHV0ID0gc2VsZWN0U3RhdHV0O1xyXG4gICAgICAgICAgICB0aGlzLm15Q2xpZW50LnNlbGVjdFNvdXJjZSA9IHNlbGVjdFNvdXJjZTtcclxuICAgICAgICAgICAgdGhpcy5teUNsaWVudC5tb2RpZlBhciA9IG1vZGlmUGFyO1xyXG4gICAgICAgICAgICB0aGlzLm15Q2xpZW50Lm1vZGlmID0gbW9kaWY7XHJcbiAgICAgICAgICAgIHRoaXMubXlDbGllbnQuZGF0ZURlcm5FdiA9IGRhdGVEZXJuRXY7XHJcbiAgICAgICAgICAgIHRoaXMubXlDbGllbnQuY3JlZXJQYXIgPSBjcmVlUGFyO1xyXG4gICAgICAgICAgICB0aGlzLm15Q2xpZW50LmRhdGVDcmVlID0gY3JlZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENyZWVyIGxlIGZvcm0gYXZlYyBkZXMgYmxhbmNzIG91IGxlcyB2YWxldXJzIGR1IGNsaWVudCBjaGVyY2jDqS5cclxuICAgICAgICAgdGhpcy5lZGl0Q2xpZW50Rm9ybSA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgbm9DbGllbnQ6IFtub0NsaWVudF0sXHJcbiAgICAgICAgICAgIHByZW5vbTogW3ByZW5vbV0sXHJcbiAgICAgICAgICAgIG5vbTogW25vbSwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIG5vQ29tcHRlOiBbbm9Db21wdGVdLFxyXG4gICAgICAgICAgICBjb3VycmllbDogW2NvdXJyaWVsLCB0aGlzLmVzdENvdXJyaWVsT0tdLFxyXG4gICAgICAgICAgICBjZWxsOiBbY2VsbF0sXHJcbiAgICAgICAgICAgIGNvbXBhZ25pZTogW2NvbXBhZ25pZV0sXHJcbiAgICAgICAgICAgIGFkcmVzc2U6IFthZHJlc3NlXSxcclxuICAgICAgICAgICAgdmlsbGU6IFt2aWxsZV0sXHJcbiAgICAgICAgICAgIGNvZGVQb3N0YWw6IFtjb2RlUG9zdGFsLCB0aGlzLmVzdENvZGVQb3N0YWxPS10sXHJcbiAgICAgICAgICAgIHRlbFByaW5jaXBhbDogW3RlbFByaW5jaXBhbCwgdGhpcy5lc3RUZWxlcGhvbmVPS10sXHJcbiAgICAgICAgICAgIHByb3ZpbmNlOiBbcHJvdmluY2VdLFxyXG4gICAgICAgICAgICBwYXlzOiBbcGF5c10sXHJcbiAgICAgICAgICAgIGZheDogW2ZheF0sXHJcbiAgICAgICAgICAgIHRlbFNlY29uZGFpcmU6IFt0ZWxTZWNvbmRhaXJlXSxcclxuICAgICAgICAgICAgbWVtbzogW21lbW9dLFxyXG4gICAgICAgICAgICBtZW1vQVZlbmlyOiBbbWVtb0FWZW5pcl0sXHJcbiAgICAgICAgICAgIG5vRXhUYXhlUHJvdjogW25vRXhUYXhlUHJvdl0sXHJcbiAgICAgICAgICAgIG5vRXhUYXhlRmVkOiBbbm9FeFRheGVGZWRdLFxyXG4gICAgICAgICAgICBzZWxlY3RTdGF0dXQ6IFtzZWxlY3RTdGF0dXRdLFxyXG4gICAgICAgICAgICBzZWxlY3RTb3VyY2U6IFtzZWxlY3RTb3VyY2VdLCBcclxuICAgICAgICAgICAgbW9kaWZQYXI6IFttb2RpZlBhcl0sXHJcbiAgICAgICAgICAgIG1vZGlmOiBbbW9kaWZdLFxyXG4gICAgICAgICAgICBkYXRlRGVybkV2OiBbZGF0ZURlcm5Fdl0sXHJcbiAgICAgICAgICAgIGNyZWVQYXI6IFtjcmVlUGFyXSxcclxuICAgICAgICAgICAgY3JlZTogW2NyZWVdICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvcGllckNsaWVudCgpe1xyXG4gICAgICAgIHRoaXMubXlDbGllbnQuY2xpZW50SWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubXlDbGllbnQubm9DbGllbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubXlDbGllbnQubW9kaWZQYXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubXlDbGllbnQubW9kaWYgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubXlDbGllbnQuZGF0ZURlcm5FdiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5teUNsaWVudC5jcmVlclBhciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5teUNsaWVudC5kYXRlQ3JlZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29waWVDZUNsaWVudCgpe1xyXG4gICAgICAgICAgICB0aGlzLmNvcGllckNsaWVudCgpO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm1Db3BpZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVTb3VtaXNzaW9uID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBhY3R1YWxpc2VyQ2xpZW50KCl7XHJcbiAgICAgICAgaWYodGhpcy5teUNsaWVudC5ub0NsaWVudCAhPSBudWxsICYmICh0aGlzLm15Q2xpZW50Lm5vQ2xpZW50KS50b1N0cmluZygpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0aGlzLl9jbGllbnRTZXJ2aWNlLmdldENsaWVudChOdW1iZXIodGhpcy5teUNsaWVudC5ub0NsaWVudCkpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm15Q2xpZW50Lm5vQ2xpZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm15Q2xpZW50ID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyZXVyU2VydmljZS5oYW5kbGVFcnJldXIoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFLDqWFnaXIgYXUgY2hhbmdlbWVudCB1c2FnZXIsIGNldCBldmVuZW1lbnQgZXN0IGFwcGxpcXVlIHN1ciB0b3VzIGxlcyBpbnB1dHMgZHUgZm9ybS5cclxuICAgICAgICAgc2Vsb24gbGEgc3ludGF4OiAobmdNb2RlbENoYW5nZSk9XCJvblVzZXJDaGFuZ2UoJGV2ZW50KVwiICovXHJcbiAgICAgb25Vc2VyQ2hhbmdlKCl7XHJcblxyXG4gICAgICAgICAvLyBFbmFibGUgRW5yZWdpc3RyZXIgYm91dG9uLlxyXG4gICAgICAgICB0aGlzLm1vZGVTb3VtaXNzaW9uID0gdHJ1ZTtcclxuICAgICB9XHJcblxyXG4gICAgZm9ybWF0Q1AoaW5wdXQpe1xyXG4gICAgICAgIC8vIEVubGV2ZXIgbGVzIGVzcGFjZXMsIGdsb2JhbGVtZW50LlxyXG4gICAgICAgIHZhciBjaGFpbmUgPSBpbnB1dC52YWx1ZS5yZXBsYWNlKC9cXHMrL2csIFwiXCIpO1xyXG4gICAgICAgIC8vIEFqb3V0ZXIgbCdlc3BhY2UgYXUgM2VtZSBjYXJhYy5cclxuICAgICAgICBpZihjaGFpbmUubGVuZ3RoID4gMyl7XHJcbiAgICAgICAgICAgIC8vIFBsYWNlciBsJ2VzcGFjZSDDoCBsYSBib25uZSBwbGFjZS5cclxuICAgICAgICAgICAgY2hhaW5lID0gY2hhaW5lLnN1YnN0cigwLDMpICsgXCIgXCIgKyBjaGFpbmUuc3Vic3RyKDMsMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFRyYW5zZm9ybWVyIGxlIGNvZGUgUG9zdGFsIGVuIG1hanVzY3VsZS5cclxuICAgICAgICBpbnB1dC52YWx1ZSA9IGNoYWluZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdFRQKGlucHV0KXtcclxuICAgICAgICAvLyBFbmxldmVyIHRvdXQgY2UgcXVpIG4nZXN0IHBhcyBjaGlmZnJlLCBnbG9iYWxlbWVudC5cclxuICAgICAgICB2YXIgY2hhaW5lID0gaW5wdXQudmFsdWUucmVwbGFjZSgvW14wLTldL2csIFwiXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNoYWluZSk7XHJcblxyXG4gICAgICAgIC8vIEF1IDExZW1lIGNhcmFjIHRhcMOpLCBqZSByZWNvbnN0cnVpcyBsZSB0ZWwgYXZlYyBzZXMgYm9ucyBjaGlmZnJlcy5cclxuICAgICAgICBpZihjaGFpbmUubGVuZ3RoID4gMTApe1xyXG4gICAgICAgICAgICBjaGFpbmUgPSBjaGFpbmUuc3Vic3RyKDEsMykgKyBjaGFpbmUuc3Vic3RyKDUsMykgKyBjaGFpbmUuc3Vic3RyKDksNCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBdSAxMGVtZSBjYXJhYywgamUgZm9ybWF0dGUgc2Vsb24gKFhYWClYWFgtWFhYWC5cclxuICAgICAgICBpZihjaGFpbmUubGVuZ3RoID09PSAxMCl7XHJcbiAgICAgICAgICAgIGNoYWluZSA9IFwiKFwiICsgY2hhaW5lLnN1YnN0cigwLDMpICsgXCIpXCIgKyBjaGFpbmUuc3Vic3RyKDMsMykgKyBcIi1cIiArIGNoYWluZS5zdWJzdHIoNiw0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyogc2kgY2VzIGlmIHNvbnQgaW52ZXJzw6lzLCBjaGFpbmUgbm9uLWZvcm1hdHTDqWUuXHJcbiAgICAgICAgICAgY2FyIGF1IDEwZW1lIGNhcmFjIDogXHJcbiAgICAgICAgICAgY2hhaW5lLmxlbmd0aCA+IDEwIGV0IGRvbmMgbGEgY2hhaW5lIHJldmllbnQgbm9uLWZvcm1hdHTDqWUuICovXHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSBjaGFpbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlc3RDb2RlUG9zdGFsT0soY29udHJvbDogRm9ybUNvbnRyb2wpOiBSZXN1bHRhdFZhbGlkYXRpb257XHJcbiAgICAgICAgLy8gVmFsaWRhdGlvbiBhIHLDqXVzc2k6IHBhcyBkZSB2YWxldXIgdGFww6llXHJcbiAgICAgICAgaWYoIWNvbnRyb2wudmFsdWUpe1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogRm9ybWF0IHJlZ2V4IGNhbmFkaWVuIDpcclxuICAgICAgICAgICAgXiA6IGNoYWluZSBjb21tZW5jZSwgJCA6IGZpbiBzw6lxdWVuY2VcclxuICAgICAgICAgICAgbGV0dHJlIDogcGFzIGRlIEQsIEYsIEksIE8sIFEgVVxyXG4gICAgICAgICAgICAxZXIgbGV0dHJlOiBwYXMgZGUgVywgWiwgY2hpZmZyZTogXFxkLCBsZXR0cmUsIGJsYW5jLCBjaGlmZnJlLCBsZXR0cmUsIGNoaWZmcmUgKi9cclxuICAgICAgICB2YXIgcmVnZXhDUCA9ICAvXltBQkNFR0hKS0xNTlBSU1RWWFldXFxkW0FCQ0VHSEpLTE1OUFJTVFZXWFlaXVsgXVxcZFtBQkNFR0hKS0xNTlBSU1RWV1hZWl1cXGQkLztcclxuICAgICAgICBpZighY29udHJvbC52YWx1ZS5tYXRjaChyZWdleENQKSl7XHJcbiAgICAgICAgICAgIHJldHVybiB7Y29kZVBvc3RhbEludmFsaWRlOiB0cnVlfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFZhbGlkYXRpb24gcsOpc3Vzc2llXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlc3RUZWxlcGhvbmVPSyhjb250cm9sOiBGb3JtQ29udHJvbCk6IFJlc3VsdGF0VmFsaWRhdGlvbntcclxuICAgICAgICBpZighY29udHJvbC52YWx1ZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBGb3JtYXQgcmVnZXggY2FuYWRpZW46XHJcbiAgICAgICAgICAgXiA6IHNlcXVlbmNlIGNvbW1lbmNlLCAkIDogZmluIHNlcXVlbmNlXHJcbiAgICAgICAgICAgKCAsIGNoaWZmcmUoeDMpLCApICwgY2hpZmZyZSAoeDMpLCAtICwgY2hpZmZyZSAoeDQpICovIFxyXG4gICAgICAgIHZhciByZWdleFRQID0gL15cXHUwMDI4XFxkezN9XFx1MDAyOVxcZHszfVxcdTAwMkRcXGR7NH0kLztcclxuICAgICAgICBpZighY29udHJvbC52YWx1ZS5tYXRjaChyZWdleFRQKSl7XHJcbiAgICAgICAgICAgIHJldHVybiB7dGVsZXBob25lSW52YWxpZGU6IHRydWV9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBWYWxpZGF0aW9uIHLDqXVzc2llXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG5cclxuICAgICAvLyBWYWxpZGF0aW9uOiByZXRvdXJuZSBudWxsIHNpIHZhbGlkZSBldCB1biBib29sZWFuIHNpIGVycmV1ci5cclxuICAgICBwcml2YXRlIGVzdENvdXJyaWVsT0soY29udHJvbDogRm9ybUNvbnRyb2wpOiBSZXN1bHRhdFZhbGlkYXRpb257XHJcbiAgICAgICAgIGlmIChjb250cm9sLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhciByZWdleENvdXJyaWVsID0gL1thLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPy87XHJcbiAgICAgICAgICAgIGlmKCFjb250cm9sLnZhbHVlLm1hdGNoKHJlZ2V4Q291cnJpZWwpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtjb3VycmllbEludmFsaWRlOiB0cnVlfTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gVmFsaWRhdGlvbiByw6l1c3NpZVxyXG4gICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3JlZSBjbGllbnQgOiBcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5lZGl0Q2xpZW50Rm9ybS52YWx1ZSk7XHJcbiAgICAgICAgLy8gSUYgTk9VVkVBVSwgQVBQRUwgQ1LDicOJLCBTSU5PTiBBUFBFTCBVUERBVEVcclxuICAgICAgICBpZih0aGlzLmVzdE5vdXZlYXUgfHwgIXRoaXMuZm9ybUNvcGllKXtcclxuICAgICAgICAgICAgdGhpcy5fY2xpZW50U2VydmljZS5jcmVlckNsaWVudCh0aGlzLm15Q2xpZW50KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhIGR1IHNlcnZldXIgOicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNhdXZlciBkYXRhIGR1IHNlcnZldXIgZGFucyBteUNsaWVudC5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm15Q2xpZW50ID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBWb2lyIGxlIG1lc3NhZ2UgZGUgc2F1dmVnYXJkZSBzdWNjw6hzLlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F1dmVnYXJkZUNsaWVudCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJldXJTZXJ2aWNlLmhhbmRsZUVycmV1cihlcnJvcilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtQ29waWUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5fY2xpZW50U2VydmljZS51cGRhdGVDbGllbnQodGhpcy5teUNsaWVudClcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJldXJTZXJ2aWNlLmhhbmRsZUVycmV1cihlcnJvcilcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW9kZVNvdW1pc3Npb24gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpe1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0ZXN0Q1AoKXtcclxuICAgICAgICAvL3JldG91bmUgbnVsbCAodmFsaWRlKVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZXN0Q29kZVBvc3RhbE9LKCdIMlMgMEI1JykpOyAvL29rXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5lc3RDb2RlUG9zdGFsT0soJ2gycyAwYjUnKSk7IC8vb2tcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmVzdENvZGVQb3N0YWxPSygnaDJzMGI1JykpOyAgLy9va1xyXG5cclxuICAgICAgICAvL3JldG91cm5lIHRydWUgKGZhaWwpXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5lc3RDb2RlUG9zdGFsT0soJ1ozViBIMlMnKSk7IC8vT2tcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmVzdENvZGVQb3N0YWxPSygnejN2aDJzJykpOyAgLy9va1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZXN0Q29kZVBvc3RhbE9LKCdCM1YgSDInKSk7ICAvL29rXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19
