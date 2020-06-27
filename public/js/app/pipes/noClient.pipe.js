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
var NoClientPipe = (function () {
    function NoClientPipe() {
    }
    NoClientPipe.prototype.transform = function (value, args) {
        console.log("pipe");
        console.log(args);
        var filtre;
        filtre = args ? args.toLocaleLowerCase() : null;
        console.log(args);
        return filtre ? value.filter(function (client) { return client.noClient.toString().toLocaleLowerCase().indexOf(filtre) > -1; }) : value;
    };
    NoClientPipe = __decorate([
        core_1.Pipe({
            name: 'noClientPipe'
        }), 
        __metadata('design:paramtypes', [])
    ], NoClientPipe);
    return NoClientPipe;
}());
exports.NoClientPipe = NoClientPipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpcGVzL25vQ2xpZW50LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFvQyxlQUFlLENBQUMsQ0FBQTtBQU9wRDtJQUFBO0lBWUEsQ0FBQztJQVhHLGdDQUFTLEdBQVQsVUFBVSxLQUFlLEVBQUUsSUFBWTtRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsSUFBSSxNQUFjLENBQUM7UUFDbkIsTUFBTSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQ3hCLFVBQUMsTUFBYyxJQUFLLE9BQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBbkUsQ0FBbUUsQ0FDdEYsR0FBRyxLQUFLLENBQUM7SUFFbEIsQ0FBQztJQWZMO1FBQUMsV0FBSSxDQUFDO1lBQ0YsSUFBSSxFQUFFLGNBQWM7U0FDdkIsQ0FBQzs7b0JBQUE7SUFjRixtQkFBQztBQUFELENBWkEsQUFZQyxJQUFBO0FBWlksb0JBQVksZUFZeEIsQ0FBQSIsImZpbGUiOiJwaXBlcy9ub0NsaWVudC5waXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tICcuLi9jbGllbnRzL2NsaWVudCc7XHJcblxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAnbm9DbGllbnRQaXBlJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE5vQ2xpZW50UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBDbGllbnRbXSwgYXJnczogc3RyaW5nKTogQ2xpZW50W10ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGlwZVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhcmdzKTsgICAgXHJcbiAgICAgICAgdmFyIGZpbHRyZTogc3RyaW5nOyBcclxuICAgICAgICBmaWx0cmUgPSBhcmdzID8gYXJncy50b0xvY2FsZUxvd2VyQ2FzZSgpIDogbnVsbDtcclxuICAgICAgICBjb25zb2xlLmxvZyhhcmdzKTtcclxuICAgICAgICByZXR1cm4gZmlsdHJlID8gdmFsdWUuZmlsdGVyKFxyXG4gICAgICAgICAgICAoY2xpZW50OiBDbGllbnQpID0+IGNsaWVudC5ub0NsaWVudC50b1N0cmluZygpLnRvTG9jYWxlTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0cmUpID4gLTFcclxuICAgICAgICAgICAgKSA6IHZhbHVlO1xyXG5cclxuICAgIH1cclxufSJdfQ==
