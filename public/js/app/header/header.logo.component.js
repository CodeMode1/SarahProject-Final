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
var LogoComponent = (function () {
    function LogoComponent() {
        this.alt = "Sarah logo";
        this.path = "./img/sarah-logo.png";
    }
    LogoComponent.prototype.ngOnInit = function () { };
    LogoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-logo',
            template: "\n    <div>\n        <img [src]=\"path\" alt=\"{{alt}}\" id=\"sarahLogo\">\n    </div>\n    ",
            styles: ["\n        img {\n            max-width:100%;\n            height:auto;\n            display:inline-block;\n            padding:20%;\n        }\n\n        div{\n            display:block;\n            float:left;\n            background-color: #e7edf5;\n            width:15%;\n            text-align:center;\n        }\n    "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], LogoComponent);
    return LogoComponent;
}());
exports.LogoComponent = LogoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci9oZWFkZXIubG9nby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQTRCbEQ7SUFHSTtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsWUFBWSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsc0JBQXNCLENBQUM7SUFDdEMsQ0FBQztJQUVGLGdDQUFRLEdBQVIsY0FBYSxDQUFDO0lBbENsQjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLDhGQUlUO1lBQ0QsTUFBTSxFQUFFLENBQUMsc1VBZVI7YUFDQTtTQUNKLENBQUM7O3FCQUFBO0lBVUYsb0JBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLHFCQUFhLGdCQVN6QixDQUFBIiwiZmlsZSI6ImhlYWRlci9oZWFkZXIubG9nby5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdteS1sb2dvJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxpbWcgW3NyY109XCJwYXRoXCIgYWx0PVwie3thbHR9fVwiIGlkPVwic2FyYWhMb2dvXCI+XHJcbiAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDphdXRvO1xyXG4gICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgcGFkZGluZzoyMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlN2VkZjU7XHJcbiAgICAgICAgICAgIHdpZHRoOjE1JTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9nb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBhbHQ6IHN0cmluZztcclxuICAgIHBhdGg6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuYWx0ID0gXCJTYXJhaCBsb2dvXCI7XHJcbiAgICAgICAgdGhpcy5wYXRoID0gXCIuL2ltZy9zYXJhaC1sb2dvLnBuZ1wiO1xyXG4gICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHsgfVxyXG59Il19
