"use strict";
var Activite = (function () {
    function Activite(nom, debut, fin, etat, nbPersonnes, serviceTotal, fraisServiceTotal, noFacture, surreservation, raisonNonRetenu, modifiePar, modifie, services, ressourcesCheck) {
        this.nom = nom;
        this.debut = debut;
        this.fin = fin;
        this.etat = etat;
        this.nbPersonnes = nbPersonnes;
        this.serviceTotal = serviceTotal;
        this.fraisServiceTotal = fraisServiceTotal;
        this.noFacture = noFacture;
        this.surreservation = surreservation;
        this.raisonNonRetenu = raisonNonRetenu;
        this.modifiePar = modifiePar;
        this.modifie = modifie;
        if (services == null || services == undefined) {
            this.services = [];
        }
        else {
            this.services = services;
        }
        if (ressourcesCheck == null || ressourcesCheck == undefined) {
            this.ressourcesCheck = [];
        }
        else {
            this.ressourcesCheck = ressourcesCheck;
        }
    }
    return Activite;
}());
exports.Activite = Activite;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXRlcy9hY3Rpdml0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0E7SUFnQkksa0JBQVksR0FBWSxFQUFFLEtBQWMsRUFBRSxHQUFZLEVBQUUsSUFBYSxFQUFFLFdBQW9CLEVBQUUsWUFBcUIsRUFDOUcsaUJBQTBCLEVBQUUsU0FBa0IsRUFBRSxjQUF3QixFQUFFLGVBQXdCLEVBQUUsVUFBbUIsRUFDdkgsT0FBZ0IsRUFBRSxRQUFvQixFQUFFLGVBQXVCO1FBQy9ELElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxHQUFFLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsRUFBRSxDQUFBLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxRQUFRLElBQUksU0FBUyxDQUFDLENBQUEsQ0FBQztZQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUN2QixDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDRixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUM3QixDQUFDO1FBQ0QsRUFBRSxDQUFBLENBQUMsZUFBZSxJQUFJLElBQUksSUFBSSxlQUFlLElBQUksU0FBUyxDQUFDLENBQUEsQ0FBQztZQUN4RCxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUM5QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUMzQyxDQUFDO0lBQ0wsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQTFDQSxBQTBDQyxJQUFBO0FBMUNZLGdCQUFRLFdBMENwQixDQUFBIiwiZmlsZSI6ImFjdGl2aXRlcy9hY3Rpdml0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZXJ2aWNlJztcclxuaW1wb3J0IHsgUmVzc291cmNlIH0gZnJvbSAnLi4vcmVzc291cmNlcy9yZXNzb3VyY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFjdGl2aXRle1xyXG4gICAgbm9tOiBzdHJpbmc7XHJcbiAgICBkZWJ1dDogc3RyaW5nO1xyXG4gICAgZmluOiBzdHJpbmc7XHJcbiAgICBldGF0OiBzdHJpbmc7XHJcbiAgICBuYlBlcnNvbm5lczogc3RyaW5nO1xyXG4gICAgc2VydmljZVRvdGFsOiBudW1iZXI7XHJcbiAgICBmcmFpc1NlcnZpY2VUb3RhbDogbnVtYmVyO1xyXG4gICAgbm9GYWN0dXJlOiBzdHJpbmc7XHJcbiAgICBzdXJyZXNlcnZhdGlvbjogYm9vbGVhbjtcclxuICAgIHJhaXNvbk5vblJldGVudTogc3RyaW5nO1xyXG4gICAgbW9kaWZpZVBhcjogc3RyaW5nO1xyXG4gICAgbW9kaWZpZTogc3RyaW5nO1xyXG4gICAgc2VydmljZXM6IFNlcnZpY2VbXTtcclxuICAgIHJlc3NvdXJjZXNDaGVjazogYW55W107XHJcblxyXG4gICAgY29uc3RydWN0b3Iobm9tPzogc3RyaW5nLCBkZWJ1dD86IHN0cmluZywgZmluPzogc3RyaW5nLCBldGF0Pzogc3RyaW5nLCBuYlBlcnNvbm5lcz86IHN0cmluZywgc2VydmljZVRvdGFsPzogbnVtYmVyLFxyXG4gICAgICAgIGZyYWlzU2VydmljZVRvdGFsPzogbnVtYmVyLCBub0ZhY3R1cmU/OiBzdHJpbmcsIHN1cnJlc2VydmF0aW9uPzogYm9vbGVhbiwgcmFpc29uTm9uUmV0ZW51Pzogc3RyaW5nLCBtb2RpZmllUGFyPzogc3RyaW5nLFxyXG4gICAgICAgIG1vZGlmaWU/OiBzdHJpbmcsIHNlcnZpY2VzPzogU2VydmljZVtdLCByZXNzb3VyY2VzQ2hlY2s/OiBhbnlbXSl7XHJcbiAgICAgICAgdGhpcy5ub20gPSBub207XHJcbiAgICAgICAgdGhpcy5kZWJ1dCA9IGRlYnV0O1xyXG4gICAgICAgIHRoaXMuZmluID0gZmluO1xyXG4gICAgICAgIHRoaXMuZXRhdD0gZXRhdDtcclxuICAgICAgICB0aGlzLm5iUGVyc29ubmVzID0gbmJQZXJzb25uZXM7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlVG90YWwgPSBzZXJ2aWNlVG90YWw7XHJcbiAgICAgICAgdGhpcy5mcmFpc1NlcnZpY2VUb3RhbCA9IGZyYWlzU2VydmljZVRvdGFsO1xyXG4gICAgICAgIHRoaXMubm9GYWN0dXJlID0gbm9GYWN0dXJlO1xyXG4gICAgICAgIHRoaXMuc3VycmVzZXJ2YXRpb24gPSBzdXJyZXNlcnZhdGlvbjtcclxuICAgICAgICB0aGlzLnJhaXNvbk5vblJldGVudSA9IHJhaXNvbk5vblJldGVudTtcclxuICAgICAgICB0aGlzLm1vZGlmaWVQYXIgPSBtb2RpZmllUGFyO1xyXG4gICAgICAgIHRoaXMubW9kaWZpZSA9IG1vZGlmaWU7XHJcbiAgICAgICAgaWYoc2VydmljZXMgPT0gbnVsbCB8fCBzZXJ2aWNlcyA9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICB0aGlzLnNlcnZpY2VzID0gW107XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc2VydmljZXMgPSBzZXJ2aWNlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocmVzc291cmNlc0NoZWNrID09IG51bGwgfHwgcmVzc291cmNlc0NoZWNrID09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzc291cmNlc0NoZWNrID0gW107XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNzb3VyY2VzQ2hlY2sgPSByZXNzb3VyY2VzQ2hlY2s7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxufSJdfQ==
