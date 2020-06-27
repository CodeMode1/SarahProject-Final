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
var erreur_1 = require('./erreur');
var erreur_service_1 = require('./erreur.service');
var ErreurComponent = (function () {
    function ErreurComponent(_erreurService) {
        this._erreurService = _erreurService;
        this.erreurDisplay = 'none';
        this.erreurData = erreur_1.Erreur;
    }
    ErreurComponent.prototype.onErreurHandled = function () {
        this.erreurDisplay = 'none';
    };
    ErreurComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._erreurService.erreurArrivee.subscribe(function (erreurData) {
            _this.erreurData = erreurData;
            _this.erreurDisplay = 'block';
        });
    };
    ErreurComponent = __decorate([
        core_1.Component({
            selector: 'my-erreur',
            template: "\n      <div class=\"backdrop\" [ngStyle]=\"{'display': erreurDisplay}\"></div>\n        <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display': erreurDisplay}\">\n            <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onErreurHandled()\"><span aria-hidden=\"true\">&times;</span></button>\n                        <h4 class=\"modal-title\">{{erreurData?.titre}}</h4>\n                    </div>\n                    <div class=\"modal-body\">\n                     <p>{{erreurData?.message}}</p>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-default\" (click)=\"onErreurHandled()\">Close</button>\n                    </div>\n                </div>\n            </div>\n        </div>   \n    ",
            styles: ["\n        .backdrop {\n            background-color: rgba(0,0,0,0.6);\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100vh;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [erreur_service_1.ErreurService])
    ], ErreurComponent);
    return ErreurComponent;
}());
exports.ErreurComponent = ErreurComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycmV1cnMvZXJyZXVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUF1QixVQUFVLENBQUMsQ0FBQTtBQUNsQywrQkFBOEIsa0JBQWtCLENBQUMsQ0FBQTtBQWtDakQ7SUFJSSx5QkFBb0IsY0FBNEI7UUFBNUIsbUJBQWMsR0FBZCxjQUFjLENBQWM7UUFIaEQsa0JBQWEsR0FBRyxNQUFNLENBQUM7UUFDdkIsZUFBVSxHQUFHLGVBQU0sQ0FBQztJQUU4QixDQUFDO0lBRW5ELHlDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztJQUNoQyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUN2QyxVQUFBLFVBQVU7WUFDTixLQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUM3QixLQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztRQUNqQyxDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFqREw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLGkrQkFrQlQ7WUFDRCxNQUFNLEVBQUUsQ0FBQyx1TkFTUixDQUFDO1NBQ0wsQ0FBQzs7dUJBQUE7SUFtQkYsc0JBQUM7QUFBRCxDQWxCQSxBQWtCQyxJQUFBO0FBbEJZLHVCQUFlLGtCQWtCM0IsQ0FBQSIsImZpbGUiOiJlcnJldXJzL2VycmV1ci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFcnJldXIgfSBmcm9tICcuL2VycmV1cic7XHJcbmltcG9ydCB7IEVycmV1clNlcnZpY2UgfSBmcm9tICcuL2VycmV1ci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1lcnJldXInLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgPGRpdiBjbGFzcz1cImJhY2tkcm9wXCIgW25nU3R5bGVdPVwieydkaXNwbGF5JzogZXJyZXVyRGlzcGxheX1cIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIFtuZ1N0eWxlXT1cInsnZGlzcGxheSc6IGVycmV1ckRpc3BsYXl9XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgKGNsaWNrKT1cIm9uRXJyZXVySGFuZGxlZCgpXCI+PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj57e2VycmV1ckRhdGE/LnRpdHJlfX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxwPnt7ZXJyZXVyRGF0YT8ubWVzc2FnZX19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiAoY2xpY2spPVwib25FcnJldXJIYW5kbGVkKClcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiAgIFxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW2BcclxuICAgICAgICAuYmFja2Ryb3Age1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICB9XHJcbiAgICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXJyZXVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGVycmV1ckRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBlcnJldXJEYXRhID0gRXJyZXVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VycmV1clNlcnZpY2U6RXJyZXVyU2VydmljZSl7fVxyXG5cclxuICAgIG9uRXJyZXVySGFuZGxlZCgpe1xyXG4gICAgICAgIHRoaXMuZXJyZXVyRGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMuX2VycmV1clNlcnZpY2UuZXJyZXVyQXJyaXZlZS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGVycmV1ckRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJldXJEYXRhID0gZXJyZXVyRGF0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyZXVyRGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59Il19
