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
var evenement_1 = require('./evenement');
require('rxjs/Rx');
var Observable_1 = require('rxjs/Observable');
var EvenementService = (function () {
    function EvenementService(_http) {
        this._http = _http;
        this.evenements = [];
    }
    EvenementService.prototype.getEvenements = function () {
        var _this = this;
        return this._http.get('http://localhost:3000/evenement')
            .map(function (response) {
            var data = response.json().obj;
            var objs = [];
            for (var i = 0; i < data.length; i++) {
                var evenement = new evenement_1.Evenement(data[i]._id, data[i].noEvenement, data[i].nom, data[i].dateEvenement, data[i].contact, data[i].client, data[i].selectEtat, data[i].dateSoumission, data[i].dateConfirmation, data[i].dateFacturation, data[i].dateNonRetenu, data[i].dateAnnulation, data[i].notes, data[i].validationTache, data[i].creerPar, data[i].dateCree, data[i].modifPar, data[i].modif, data[i].client_FK);
                objs.push(evenement);
                console.log(data[i].client_FK);
            }
            ;
            // Mettre a jour le array d'evx du service.
            _this.evenements = objs;
            console.log("array du service: " + JSON.stringify(_this.evenements));
            return objs;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json() || 'erreur serveur'); });
    };
    EvenementService.prototype.getEvenement = function (noEvenement) {
        return this._http.get('http://localhost:3000/evenement/' + noEvenement)
            .map(function (response) {
            var data = response.json().obj;
            var evenement = new evenement_1.Evenement(data._id, data.noEvenement, data.nom, data.dateEvenement, data.contact, data.client, data.selectEtat, data.dateSoumission, data.dateConfirmation, data.dateFacturation, data.dateNonRetenu, data.dateAnnulation, data.notes, data.validationTache, data.creerPar, data.dateCree, data.modifPar, data.modif, data.client_FK, data.activites);
            return evenement;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json() || 'erreur serveur'); });
    };
    EvenementService.prototype.creerEvenement = function (evenement) {
        var body = JSON.stringify(evenement);
        console.log("body de l'evenement : ");
        console.log(body);
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.post('http://localhost:3000/evenement' + token, body, { headers: header })
            .map(function (response) {
            var data = response.json().obj;
            var evenement = new evenement_1.Evenement(data._id, data.noEvenement, data.nom, data.dateEvenement, data.contact, data.client, data.selectEtat, data.dateSoumission, data.dateConfirmation, data.dateFacturation, data.dateNonRetenu, data.dateAnnulation, data.notes, data.validationTache, data.creerPar, data.dateCree, data.modifPar, data.modif, data.client_FK, data.activites);
            return evenement;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json() || 'erreur serveur'); });
    };
    EvenementService.prototype.updateEvenement = function (evenement) {
        var body = JSON.stringify(evenement);
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.put('http://localhost:3000/evenement/' + evenement.evenementId + token, body, { headers: header })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json() || 'erreur serveur'); });
    };
    EvenementService.prototype.deleteEvenement = function (evenement) {
        this.evenements.splice(this.evenements.indexOf(evenement), 1);
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.delete('http://localhost:3000/evenement/' + evenement.evenementId + token)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.jsons() || 'erreur serveur'); });
    };
    EvenementService.prototype.getEvenementsSpecialSearch = function (textSearch) {
        var _this = this;
        return this._http.get('http://localhost:3000/evenement/search/' + textSearch)
            .map(function (response) {
            var data = response.json().obj;
            var objs = [];
            for (var i = 0; i < data.length; i++) {
                var evenement = new evenement_1.Evenement(data[i]._id, data[i].noEvenement, data[i].nom, data[i].dateEvenement, data[i].contact, data[i].client, data[i].selectEtat, data[i].dateSoumission, data[i].dateConfirmation, data[i].dateFacturation, data[i].dateNonRetenu, data[i].dateAnnulation, data[i].notes, data[i].validationTache, data[i].creerPar, data[i].dateCree, data[i].modifPar, data[i].modif);
                objs.push(evenement);
                console.log('les evx filtrés: ' + JSON.stringify(evenement));
            }
            ;
            _this.evenements = objs;
            console.log('array filtrer : ');
            console.log(_this.evenements);
            return objs;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json() || 'erreur serveur'); });
    };
    EvenementService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EvenementService);
    return EvenementService;
}());
exports.EvenementService = EvenementService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW5lbWVudHMvZXZlbmVtZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFtQyxlQUFlLENBQUMsQ0FBQTtBQUNuRCxxQkFBd0MsZUFBZSxDQUFDLENBQUE7QUFDeEQsMEJBQTBCLGFBQWEsQ0FBQyxDQUFBO0FBQ3hDLFFBQU8sU0FBUyxDQUFDLENBQUE7QUFDakIsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFHN0M7SUFHSSwwQkFBcUIsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07UUFGaEMsZUFBVSxHQUFnQixFQUFFLENBQUM7SUFFTyxDQUFDO0lBRXJDLHdDQUFhLEdBQWI7UUFBQSxpQkFvQkM7UUFuQkcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDO2FBQ25ELEdBQUcsQ0FBQyxVQUFDLFFBQWtCO1lBQ3BCLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDakMsSUFBSSxJQUFJLEdBQVUsRUFBRSxDQUFDO1lBQ3JCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO2dCQUMvQixJQUFJLFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQ3ZFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUN0RCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLElB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Z0hiLHVCQUFDO0FBQUQsQ0EvR0EsQUErR0MsSUFBQTtBQS9HWSx3QkFBZ0IsbUJBK0c1QixDQUFBIiwiZmlsZSI6ImV2ZW5lbWVudHMvZXZlbmVtZW50LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgRXZlbmVtZW50IH0gZnJvbSAnLi9ldmVuZW1lbnQnO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEV2ZW5lbWVudFNlcnZpY2V7XHJcbiAgICBldmVuZW1lbnRzOiBFdmVuZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIF9odHRwOiBIdHRwKSB7IH1cclxuICAgIFxyXG4gICAgZ2V0RXZlbmVtZW50cygpOiBPYnNlcnZhYmxlPEV2ZW5lbWVudFtdPntcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9ldmVuZW1lbnQnKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9ianM6IGFueVtdID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBldmVuZW1lbnQgPSBuZXcgRXZlbmVtZW50KGRhdGFbaV0uX2lkLCBkYXRhW2ldLm5vRXZlbmVtZW50LCBkYXRhW2ldLm5vbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpXS5kYXRlRXZlbmVtZW50LCBkYXRhW2ldLmNvbnRhY3QsIGRhdGFbaV0uY2xpZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLnNlbGVjdEV0YXQsIGRhdGFbaV0uZGF0ZVNvdW1pc3Npb24sIGRhdGFbaV0uZGF0ZUNvbmZpcm1hdGlvbiwgZGF0YVtpXS5kYXRlRmFjdHVyYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaV0uZGF0ZU5vblJldGVudSwgZGF0YVtpXS5kYXRlQW5udWxhdGlvbiwgZGF0YVtpXS5ub3RlcywgZGF0YVtpXS52YWxpZGF0aW9uVGFjaGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaV0uY3JlZXJQYXIsIGRhdGFbaV0uZGF0ZUNyZWUsIGRhdGFbaV0ubW9kaWZQYXIsIGRhdGFbaV0ubW9kaWYsIGRhdGFbaV0uY2xpZW50X0ZLKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2Jqcy5wdXNoKGV2ZW5lbWVudCk7ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YVtpXS5jbGllbnRfRkspO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIC8vIE1ldHRyZSBhIGpvdXIgbGUgYXJyYXkgZCdldnggZHUgc2VydmljZS5cclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbmVtZW50cyA9IG9ianM7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFycmF5IGR1IHNlcnZpY2U6IFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5ldmVuZW1lbnRzKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqcztcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpIHx8ICdlcnJldXIgc2VydmV1cicpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0RXZlbmVtZW50KG5vRXZlbmVtZW50OiBudW1iZXIpOiBPYnNlcnZhYmxlPEV2ZW5lbWVudD57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvZXZlbmVtZW50LycgKyBub0V2ZW5lbWVudClcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iajtcclxuICAgICAgICAgICAgICAgIGxldCBldmVuZW1lbnQgPSBuZXcgRXZlbmVtZW50KGRhdGEuX2lkLCBkYXRhLm5vRXZlbmVtZW50LCBkYXRhLm5vbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5kYXRlRXZlbmVtZW50LCBkYXRhLmNvbnRhY3QsIGRhdGEuY2xpZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnNlbGVjdEV0YXQsIGRhdGEuZGF0ZVNvdW1pc3Npb24sIGRhdGEuZGF0ZUNvbmZpcm1hdGlvbiwgZGF0YS5kYXRlRmFjdHVyYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZGF0ZU5vblJldGVudSwgZGF0YS5kYXRlQW5udWxhdGlvbiwgZGF0YS5ub3RlcywgZGF0YS52YWxpZGF0aW9uVGFjaGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuY3JlZXJQYXIsIGRhdGEuZGF0ZUNyZWUsIGRhdGEubW9kaWZQYXIsIGRhdGEubW9kaWYsIGRhdGEuY2xpZW50X0ZLLCBkYXRhLmFjdGl2aXRlcyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbmVtZW50O1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkgfHwgICdlcnJldXIgc2VydmV1cicpKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVlckV2ZW5lbWVudChldmVuZW1lbnQ6IEV2ZW5lbWVudCl7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KGV2ZW5lbWVudCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJib2R5IGRlIGwnZXZlbmVtZW50IDogXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGJvZHkpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA/ICc/dG9rZW49JyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIDogJyc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2V2ZW5lbWVudCcgKyB0b2tlbiwgYm9keSwge2hlYWRlcnM6aGVhZGVyfSlcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iajtcclxuICAgICAgICAgICAgICAgIGxldCBldmVuZW1lbnQgPSBuZXcgRXZlbmVtZW50KGRhdGEuX2lkLCBkYXRhLm5vRXZlbmVtZW50LCBkYXRhLm5vbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5kYXRlRXZlbmVtZW50LCBkYXRhLmNvbnRhY3QsIGRhdGEuY2xpZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnNlbGVjdEV0YXQsIGRhdGEuZGF0ZVNvdW1pc3Npb24sIGRhdGEuZGF0ZUNvbmZpcm1hdGlvbiwgZGF0YS5kYXRlRmFjdHVyYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZGF0ZU5vblJldGVudSwgZGF0YS5kYXRlQW5udWxhdGlvbiwgZGF0YS5ub3RlcywgZGF0YS52YWxpZGF0aW9uVGFjaGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuY3JlZXJQYXIsIGRhdGEuZGF0ZUNyZWUsIGRhdGEubW9kaWZQYXIsIGRhdGEubW9kaWYsIGRhdGEuY2xpZW50X0ZLLCBkYXRhLmFjdGl2aXRlcyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbmVtZW50O1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkgfHwgJ2VycmV1ciBzZXJ2ZXVyJykpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUV2ZW5lbWVudChldmVuZW1lbnQ6IEV2ZW5lbWVudCl7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KGV2ZW5lbWVudCk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA/ICc/dG9rZW49JyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIDogJyc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucHV0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvZXZlbmVtZW50LycgKyBldmVuZW1lbnQuZXZlbmVtZW50SWQgKyB0b2tlbiwgYm9keSwge2hlYWRlcnM6aGVhZGVyfSlcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2UgOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkgfHwgJ2VycmV1ciBzZXJ2ZXVyJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUV2ZW5lbWVudChldmVuZW1lbnQ6IEV2ZW5lbWVudCl7XHJcbiAgICAgICAgdGhpcy5ldmVuZW1lbnRzLnNwbGljZSh0aGlzLmV2ZW5lbWVudHMuaW5kZXhPZihldmVuZW1lbnQpLCAxKTtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpID8gJz90b2tlbj0nICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiAnJztcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5kZWxldGUoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9ldmVuZW1lbnQvJyArIGV2ZW5lbWVudC5ldmVuZW1lbnRJZCArIHRva2VuKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbnMoKSB8fCAnZXJyZXVyIHNlcnZldXInKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RXZlbmVtZW50c1NwZWNpYWxTZWFyY2godGV4dFNlYXJjaDogc3RyaW5nKTogT2JzZXJ2YWJsZTxFdmVuZW1lbnRbXT57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvZXZlbmVtZW50L3NlYXJjaC8nICsgdGV4dFNlYXJjaClcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iajtcclxuICAgICAgICAgICAgICAgIGxldCBvYmpzOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZXZlbmVtZW50ID0gbmV3IEV2ZW5lbWVudChkYXRhW2ldLl9pZCwgZGF0YVtpXS5ub0V2ZW5lbWVudCwgZGF0YVtpXS5ub20sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaV0uZGF0ZUV2ZW5lbWVudCwgZGF0YVtpXS5jb250YWN0LCBkYXRhW2ldLmNsaWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpXS5zZWxlY3RFdGF0LCBkYXRhW2ldLmRhdGVTb3VtaXNzaW9uLCBkYXRhW2ldLmRhdGVDb25maXJtYXRpb24sIGRhdGFbaV0uZGF0ZUZhY3R1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLmRhdGVOb25SZXRlbnUsIGRhdGFbaV0uZGF0ZUFubnVsYXRpb24sIGRhdGFbaV0ubm90ZXMsIGRhdGFbaV0udmFsaWRhdGlvblRhY2hlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLmNyZWVyUGFyLCBkYXRhW2ldLmRhdGVDcmVlLCBkYXRhW2ldLm1vZGlmUGFyLCBkYXRhW2ldLm1vZGlmKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2Jqcy5wdXNoKGV2ZW5lbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsZXMgZXZ4IGZpbHRyw6lzOiAnICsgSlNPTi5zdHJpbmdpZnkoZXZlbmVtZW50KSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVuZW1lbnRzID0gb2JqcztcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhcnJheSBmaWx0cmVyIDogJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmV2ZW5lbWVudHMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ianM7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSB8fCAnZXJyZXVyIHNlcnZldXInKSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG4iXX0=