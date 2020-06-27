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
var CapitalizePipe = (function () {
    function CapitalizePipe() {
        this.stringSplit = [];
        this.chaine = "";
    }
    CapitalizePipe.prototype.transform = function (value, args) {
        if (value) {
            this.stringSplit = value.split(/\s+/);
            var nouvelleChaine = "";
            for (var i in this.stringSplit) {
                console.log(i);
                this.chaine = this.stringSplit[i].charAt(0).toUpperCase() + this.stringSplit[i].substring(1).toLocaleLowerCase();
                console.log(this.chaine);
                nouvelleChaine += this.chaine + " ";
            }
            return nouvelleChaine;
        }
    };
    CapitalizePipe = __decorate([
        core_1.Pipe({
            name: 'capitalizePipe'
        }), 
        __metadata('design:paramtypes', [])
    ], CapitalizePipe);
    return CapitalizePipe;
}());
exports.CapitalizePipe = CapitalizePipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpcGVzL2NhcGl0YWxpemUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW9DLGVBQWUsQ0FBQyxDQUFBO0FBTXBEO0lBQUE7UUFDSSxnQkFBVyxHQUFhLEVBQUUsQ0FBQztRQUMzQixXQUFNLEdBQVcsRUFBRSxDQUFDO0lBZXhCLENBQUM7SUFkRyxrQ0FBUyxHQUFULFVBQVUsS0FBYSxFQUFFLElBQVc7UUFDaEMsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQztZQUNOLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0QyxJQUFJLGNBQWMsR0FBRyxFQUFFLENBQUM7WUFDeEIsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUM5QixDQUFDO2dCQUNHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUNqSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDekIsY0FBYyxJQUFLLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ3pDLENBQUM7WUFDRCxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzFCLENBQUM7SUFDTCxDQUFDO0lBcEJMO1FBQUMsV0FBSSxDQUFDO1lBQ0YsSUFBSSxFQUFFLGdCQUFnQjtTQUN6QixDQUFDOztzQkFBQTtJQW1CRixxQkFBQztBQUFELENBakJBLEFBaUJDLElBQUE7QUFqQlksc0JBQWMsaUJBaUIxQixDQUFBIiwiZmlsZSI6InBpcGVzL2NhcGl0YWxpemUucGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICdjYXBpdGFsaXplUGlwZSdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDYXBpdGFsaXplUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgc3RyaW5nU3BsaXQ6IHN0cmluZ1tdID0gW107XHJcbiAgICBjaGFpbmU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgYXJnczogYW55W10pOiBhbnkgeyBcclxuICAgICAgICBpZih2YWx1ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RyaW5nU3BsaXQgPSB2YWx1ZS5zcGxpdCgvXFxzKy8pO1xyXG4gICAgICAgICAgICB2YXIgbm91dmVsbGVDaGFpbmUgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgaW4gdGhpcy5zdHJpbmdTcGxpdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYWluZSA9IHRoaXMuc3RyaW5nU3BsaXRbaV0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnN0cmluZ1NwbGl0W2ldLnN1YnN0cmluZygxKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jaGFpbmUpO1xyXG4gICAgICAgICAgICAgICAgbm91dmVsbGVDaGFpbmUgICs9IHRoaXMuY2hhaW5lICsgXCIgXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5vdXZlbGxlQ2hhaW5lO1xyXG4gICAgICAgIH0gICAgXHJcbiAgICB9XHJcbn0iXX0=
