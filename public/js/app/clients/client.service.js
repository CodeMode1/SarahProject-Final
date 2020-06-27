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
var http_1 = require('@angular/http');
var client_1 = require('./client');
require('rxjs/Rx');
var Observable_1 = require('rxjs/Observable');
var ClientService = (function () {
    function ClientService(_http) {
        this._http = _http;
        this.clients = [];
    }
    ClientService.prototype.creerClient = function (client) {
        var body = JSON.stringify(client);
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.post('http://localhost:3000/client' + token, body, { headers: header })
            .map(function (response) {
            var data = response.json().obj;
            var client = new client_1.Client(data._id, data.noClient, data.prenom, data.nom, data.noCompte, data.courriel, data.cell, data.compagnie, data.adresse, data.ville, data.codePostal, data.telPrincipal, data.province, data.pays, data.fax, data.telSecondaire, data.memo, data.memoAVenir, data.noExTaxeProv, data.noExTaxeFed, data.selectStatut, data.selectSource, data.modifPar, data.modif, data.dateDernEv, data.creerPar, data.dateCree);
            return client;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json() || 'erreur serveur'); });
    };
    ClientService.prototype.getClients = function () {
        var _this = this;
        return this._http.get('http://localhost:3000/client')
            .map(function (response) {
            //console.log('les clients: ' + JSON.stringify(data));
            var data = response.json().obj;
            var objs = [];
            for (var i = 0; i < data.length; i++) {
                var client = new client_1.Client(data[i]._id, data[i].noClient, data[i].prenom, data[i].nom, data[i].noCompte, data[i].courriel, data[i].cell, data[i].compagnie, data[i].adresse, data[i].ville, data[i].codePostal, data[i].telPrincipal, data[i].province, data[i].pays, data[i].fax, data[i].telSecondaire, data[i].memo, data[i].memoAVenir, data[i].noExTaxeProv, data[i].noExTaxeFed, data[i].selectStatut, data[i].selectSource, data[i].modifPar, data[i].modif, data[i].dateDernEv, data[i].creerPar, data[i].dateCree);
                objs.push(client);
                console.log('les clients: ' + JSON.stringify(client));
            }
            ;
            // Mettre a jour le array de clients du service.
            _this.clients = objs;
            console.log(_this.clients);
            return objs;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json() || 'erreur serveur'); });
    };
    ClientService.prototype.getClient = function (codeClient) {
        return this._http.get('http://localhost:3000/client/' + codeClient)
            .map(function (response) {
            var data = response.json().obj;
            var client = new client_1.Client(data._id, data.noClient, data.prenom, data.nom, data.noCompte, data.courriel, data.cell, data.compagnie, data.adresse, data.ville, data.codePostal, data.telPrincipal, data.province, data.pays, data.fax, data.telSecondaire, data.memo, data.memoAVenir, data.noExTaxeProv, data.noExTaxeFed, data.selectStatut, data.selectSource, data.modifPar, data.modif, data.dateDernEv, data.creerPar, data.dateCree);
            return client;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json() || 'erreur serveur'); });
    };
    ClientService.prototype.getClientsSpecialSearch = function (textSearch) {
        var _this = this;
        return this._http.get('http://localhost:3000/client/search/' + textSearch)
            .map(function (response) {
            var data = response.json().obj;
            var objs = [];
            for (var i = 0; i < data.length; i++) {
                var client = new client_1.Client(data[i]._id, data[i].noClient, data[i].prenom, data[i].nom, data[i].noCompte, data[i].courriel, data[i].cell, data[i].compagnie, data[i].adresse, data[i].ville, data[i].codePostal, data[i].telPrincipal, data[i].province, data[i].pays, data[i].fax, data[i].telSecondaire, data[i].memo, data[i].memoAVenir, data[i].noExTaxeProv, data[i].noExTaxeFed, data[i].selectStatut, data[i].selectSource, data[i].modifPar, data[i].modif, data[i].dateDernEv, data[i].creerPar, data[i].dateCree);
                objs.push(client);
                console.log('les clients: ' + JSON.stringify(client));
            }
            ;
            _this.clients = objs;
            console.log(_this.clients);
            return objs;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json() || 'erreur serveur'); });
    };
    ClientService.prototype.updateClient = function (client) {
        var body = JSON.stringify(client);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.put('http://localhost:3000/client/' + client.clientId + token, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    ClientService.prototype.deleteClient = function (client) {
        this.clients.splice(this.clients.indexOf(client), 1);
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.delete('http://localhost:3000/client/' + client.clientId + token)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    ClientService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ClientService);
    return ClientService;
}());
exports.ClientService = ClientService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudHMvY2xpZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBd0MsZUFBZSxDQUFDLENBQUE7QUFDeEQsdUJBQXVCLFVBQVUsQ0FBQyxDQUFBO0FBQ2xDLFFBQU8sU0FBUyxDQUFDLENBQUE7QUFDakIsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFHN0M7SUFHSSx1QkFBb0IsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07UUFGL0IsWUFBTyxHQUFhLEVBQUUsQ0FBQztJQUVZLENBQUM7SUFFcEMsbUNBQVcsR0FBWCxVQUFZLE1BQWM7UUFDdEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxJQUFNLE1BQU0sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDLENBQUM7UUFDakUsSUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxTQUFTLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDN0YsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLDhCQUE4QixHQUFHLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFDLENBQUM7YUFDbEYsR0FBRyxDQUFDLFVBQUMsUUFBa0I7WUFDcEIsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNqQyxJQUFJLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUNySixJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUNyRyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUNySCxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25ELE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLGdCQUFnQixDQUFDLEVBQWxELENBQWtELENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsa0NBQVUsR0FBVjtRQUFBLGlCQW9CQztRQW5CRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUM7YUFDaEQsR0FBRyxDQUFDLFVBQUMsUUFBa0I7WUFDaEIsc0RBQXNEO1lBQ3RELElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDakMsSUFBSSxJQUFJLEdBQVUsRUFBRSxDQUFDO1lBQ3JCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO2dCQUMvQixJQUFJLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUMzTCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUN6TCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FB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QUksZUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQzNMLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQ3pMLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQzNFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN0RCxDQUFDO1lBQUEsQ0FBQztZQUNGLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLGdCQUFnQixDQUFDLEVBQWxELENBQWtELENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQsb0NBQVksR0FBWixVQUFhLE1BQWM7UUFDdkIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDLENBQUM7UUFDbEUsSUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxTQUFTLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDN0YsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLCtCQUErQixHQUFHLE1BQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQzthQUNyRyxHQUFHLENBQUMsVUFBQyxRQUFrQixJQUFLLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUM1QyxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxvQ0FBWSxHQUFaLFVBQWEsTUFBYztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLFNBQVMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM3RixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsK0JBQStCLEdBQUcsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7YUFDOUUsR0FBRyxDQUFDLFVBQUMsUUFBa0IsSUFBSyxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDNUMsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBNUZMO1FBQUMsaUJBQVUsRUFBRTs7cUJBQUE7SUE4RmIsb0JBQUM7QUFBRCxDQTdGQSxBQTZGQyxJQUFBO0FBN0ZZLHFCQUFhLGdCQTZGekIsQ0FBQSIsImZpbGUiOiJjbGllbnRzL2NsaWVudC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tICcuL2NsaWVudCc7XHJcbmltcG9ydCAncnhqcy9SeCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2xpZW50U2VydmljZSB7XHJcbiAgICBjbGllbnRzOiBDbGllbnRbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHsgfVxyXG5cclxuICAgIGNyZWVyQ2xpZW50KGNsaWVudDogQ2xpZW50KXtcclxuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoY2xpZW50KTtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgPyAnP3Rva2VuPScgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6ICcnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jbGllbnQnICsgdG9rZW4sIGJvZHksIHtoZWFkZXJzOiBoZWFkZXJ9KVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNsaWVudCA9IG5ldyBDbGllbnQoZGF0YS5faWQsIGRhdGEubm9DbGllbnQsIGRhdGEucHJlbm9tLCBkYXRhLm5vbSwgZGF0YS5ub0NvbXB0ZSwgZGF0YS5jb3VycmllbCwgZGF0YS5jZWxsLCBkYXRhLmNvbXBhZ25pZSwgZGF0YS5hZHJlc3NlLCBkYXRhLnZpbGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuY29kZVBvc3RhbCwgZGF0YS50ZWxQcmluY2lwYWwsIGRhdGEucHJvdmluY2UsIGRhdGEucGF5cywgZGF0YS5mYXgsIGRhdGEudGVsU2Vjb25kYWlyZSwgZGF0YS5tZW1vLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubWVtb0FWZW5pciwgZGF0YS5ub0V4VGF4ZVByb3YsIGRhdGEubm9FeFRheGVGZWQsIGRhdGEuc2VsZWN0U3RhdHV0LCBkYXRhLnNlbGVjdFNvdXJjZSwgZGF0YS5tb2RpZlBhciwgZGF0YS5tb2RpZiwgXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5kYXRlRGVybkV2LCBkYXRhLmNyZWVyUGFyLCBkYXRhLmRhdGVDcmVlKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2xpZW50O1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkgfHwgJ2VycmV1ciBzZXJ2ZXVyJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENsaWVudHMoKTogT2JzZXJ2YWJsZTxDbGllbnRbXT57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvY2xpZW50JylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnbGVzIGNsaWVudHM6ICcgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5vYmo7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9ianM6IGFueVtdID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNsaWVudCA9IG5ldyBDbGllbnQoZGF0YVtpXS5faWQsIGRhdGFbaV0ubm9DbGllbnQsIGRhdGFbaV0ucHJlbm9tLCBkYXRhW2ldLm5vbSwgZGF0YVtpXS5ub0NvbXB0ZSwgZGF0YVtpXS5jb3VycmllbCwgZGF0YVtpXS5jZWxsLCBkYXRhW2ldLmNvbXBhZ25pZSwgZGF0YVtpXS5hZHJlc3NlLCBkYXRhW2ldLnZpbGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbaV0uY29kZVBvc3RhbCwgZGF0YVtpXS50ZWxQcmluY2lwYWwsIGRhdGFbaV0ucHJvdmluY2UsIGRhdGFbaV0ucGF5cywgZGF0YVtpXS5mYXgsIGRhdGFbaV0udGVsU2Vjb25kYWlyZSwgZGF0YVtpXS5tZW1vLCBkYXRhW2ldLm1lbW9BVmVuaXIsIGRhdGFbaV0ubm9FeFRheGVQcm92LCBkYXRhW2ldLm5vRXhUYXhlRmVkLCBcclxuICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLnNlbGVjdFN0YXR1dCwgZGF0YVtpXS5zZWxlY3RTb3VyY2UsIGRhdGFbaV0ubW9kaWZQYXIsIGRhdGFbaV0ubW9kaWYsIFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbaV0uZGF0ZURlcm5FdiwgZGF0YVtpXS5jcmVlclBhciwgZGF0YVtpXS5kYXRlQ3JlZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb2Jqcy5wdXNoKGNsaWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xlcyBjbGllbnRzOiAnICsgSlNPTi5zdHJpbmdpZnkoY2xpZW50KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBNZXR0cmUgYSBqb3VyIGxlIGFycmF5IGRlIGNsaWVudHMgZHUgc2VydmljZS5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWVudHMgPSBvYmpzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2xpZW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9ianM7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpIHx8ICdlcnJldXIgc2VydmV1cicpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDbGllbnQoY29kZUNsaWVudDogbnVtYmVyKTogT2JzZXJ2YWJsZTxDbGllbnQ+e1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2NsaWVudC8nICsgY29kZUNsaWVudClcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iajtcclxuICAgICAgICAgICAgICAgIGxldCBjbGllbnQgPSBuZXcgQ2xpZW50KGRhdGEuX2lkLCBkYXRhLm5vQ2xpZW50LCBkYXRhLnByZW5vbSwgZGF0YS5ub20sIGRhdGEubm9Db21wdGUsIGRhdGEuY291cnJpZWwsIGRhdGEuY2VsbCwgZGF0YS5jb21wYWduaWUsIGRhdGEuYWRyZXNzZSwgZGF0YS52aWxsZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmNvZGVQb3N0YWwsIGRhdGEudGVsUHJpbmNpcGFsLCBkYXRhLnByb3ZpbmNlLCBkYXRhLnBheXMsIGRhdGEuZmF4LCBkYXRhLnRlbFNlY29uZGFpcmUsIGRhdGEubWVtbyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLm1lbW9BVmVuaXIsIGRhdGEubm9FeFRheGVQcm92LCBkYXRhLm5vRXhUYXhlRmVkLCBkYXRhLnNlbGVjdFN0YXR1dCwgZGF0YS5zZWxlY3RTb3VyY2UsIGRhdGEubW9kaWZQYXIsIGRhdGEubW9kaWYsIFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZGF0ZURlcm5FdiwgZGF0YS5jcmVlclBhciwgZGF0YS5kYXRlQ3JlZSk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsaWVudDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpIHx8ICdlcnJldXIgc2VydmV1cicpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDbGllbnRzU3BlY2lhbFNlYXJjaCh0ZXh0U2VhcmNoOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENsaWVudFtdPntcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jbGllbnQvc2VhcmNoLycgKyB0ZXh0U2VhcmNoKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqO1xyXG4gICAgICAgICAgICAgICAgIGxldCBvYmpzOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpIDwgZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbGllbnQgPSBuZXcgQ2xpZW50KGRhdGFbaV0uX2lkLCBkYXRhW2ldLm5vQ2xpZW50LCBkYXRhW2ldLnByZW5vbSwgZGF0YVtpXS5ub20sIGRhdGFbaV0ubm9Db21wdGUsIGRhdGFbaV0uY291cnJpZWwsIGRhdGFbaV0uY2VsbCwgZGF0YVtpXS5jb21wYWduaWUsIGRhdGFbaV0uYWRyZXNzZSwgZGF0YVtpXS52aWxsZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLmNvZGVQb3N0YWwsIGRhdGFbaV0udGVsUHJpbmNpcGFsLCBkYXRhW2ldLnByb3ZpbmNlLCBkYXRhW2ldLnBheXMsIGRhdGFbaV0uZmF4LCBkYXRhW2ldLnRlbFNlY29uZGFpcmUsIGRhdGFbaV0ubWVtbywgZGF0YVtpXS5tZW1vQVZlbmlyLCBkYXRhW2ldLm5vRXhUYXhlUHJvdiwgZGF0YVtpXS5ub0V4VGF4ZUZlZCwgXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtpXS5zZWxlY3RTdGF0dXQsIGRhdGFbaV0uc2VsZWN0U291cmNlLCBkYXRhW2ldLm1vZGlmUGFyLCBkYXRhW2ldLm1vZGlmLCBcclxuICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLmRhdGVEZXJuRXYsIGRhdGFbaV0uY3JlZXJQYXIsIGRhdGFbaV0uZGF0ZUNyZWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9ianMucHVzaChjbGllbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsZXMgY2xpZW50czogJyArIEpTT04uc3RyaW5naWZ5KGNsaWVudCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGllbnRzID0gb2JqcztcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNsaWVudHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmpzO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSB8fCAnZXJyZXVyIHNlcnZldXInKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ2xpZW50KGNsaWVudDogQ2xpZW50KXtcclxuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoY2xpZW50KTtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpID8gJz90b2tlbj0nICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiAnJztcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wdXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jbGllbnQvJyArIGNsaWVudC5jbGllbnRJZCArIHRva2VuLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVDbGllbnQoY2xpZW50OiBDbGllbnQpe1xyXG4gICAgICAgIHRoaXMuY2xpZW50cy5zcGxpY2UodGhpcy5jbGllbnRzLmluZGV4T2YoY2xpZW50KSwgMSk7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA/ICc/dG9rZW49JyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIDogJyc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvY2xpZW50LycgKyBjbGllbnQuY2xpZW50SWQgKyB0b2tlbilcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=