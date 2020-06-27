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
var auth_service_1 = require('./auth.service');
var AuthComponent = (function () {
    function AuthComponent(_authService) {
        this._authService = _authService;
    }
    AuthComponent.prototype.ngOnInit = function () { };
    AuthComponent.prototype.estLogIn = function () {
        return this._authService.estLogIn();
    };
    AuthComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-auth',
            template: "\n         <div class=\"row spacing\">\n            <nav class=\"col-md-8 col-md-offset-2\">\n                <ul class=\"nav nav-tabs\">\n                    <li routerLinkActive=\"router-link-active\" *ngIf=\"!estLogIn()\"><a [routerLink]=\"['signup']\">Signup</a></li>\n                    <li routerLinkActive=\"router-link-active\" *ngIf=\"!estLogIn()\"><a [routerLink]=\"['signin']\">Signin</a></li>\n                    <li routerLinkActive=\"router-link-active\" *ngIf=\"estLogIn()\"><a [routerLink]=\"['logout']\">Logout</a></li>\n                </ul>\n            </nav>\n        </div>\n        <div class=\"row spacing\">\n            <router-outlet></router-outlet>\n        </div>\n    ",
            styles: ["\n        .router-link-active, a:active{\n            color:#555;\n            background-color: #fff;\n            border: #px solid #ddd;\n            border-bottom-color: transparent;\n        }\n\n        a{\n            font-size: 1vw;\n        }\n\n    "]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCw2QkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQWlDN0M7SUFDSSx1QkFBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7SUFBSSxDQUFDO0lBRWxELGdDQUFRLEdBQVIsY0FBYSxDQUFDO0lBRWQsZ0NBQVEsR0FBUjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUF0Q0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSwrckJBYVQ7WUFDRCxNQUFNLEVBQUUsQ0FBQyxxUUFZUixDQUFDO1NBQ0wsQ0FBQzs7cUJBQUE7SUFTRixvQkFBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBUlkscUJBQWEsZ0JBUXpCLENBQUEiLCJmaWxlIjoiYXV0aC9hdXRoLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdteS1hdXRoJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgc3BhY2luZ1wiPlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgcm91dGVyTGlua0FjdGl2ZT1cInJvdXRlci1saW5rLWFjdGl2ZVwiICpuZ0lmPVwiIWVzdExvZ0luKClcIj48YSBbcm91dGVyTGlua109XCJbJ3NpZ251cCddXCI+U2lnbnVwPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIHJvdXRlckxpbmtBY3RpdmU9XCJyb3V0ZXItbGluay1hY3RpdmVcIiAqbmdJZj1cIiFlc3RMb2dJbigpXCI+PGEgW3JvdXRlckxpbmtdPVwiWydzaWduaW4nXVwiPlNpZ25pbjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSByb3V0ZXJMaW5rQWN0aXZlPVwicm91dGVyLWxpbmstYWN0aXZlXCIgKm5nSWY9XCJlc3RMb2dJbigpXCI+PGEgW3JvdXRlckxpbmtdPVwiWydsb2dvdXQnXVwiPkxvZ291dDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBzcGFjaW5nXCI+XHJcbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgLnJvdXRlci1saW5rLWFjdGl2ZSwgYTphY3RpdmV7XHJcbiAgICAgICAgICAgIGNvbG9yOiM1NTU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlcjogI3B4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxdnc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7IH1cclxuXHJcbiAgICBlc3RMb2dJbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRoU2VydmljZS5lc3RMb2dJbigpO1xyXG4gICAgfVxyXG59Il19
