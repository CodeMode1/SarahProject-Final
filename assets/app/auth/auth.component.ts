import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    moduleId: module.id,
    selector: 'my-auth',
    template: `
         <div class="row spacing">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-tabs">
                    <li routerLinkActive="router-link-active" *ngIf="!estLogIn()"><a [routerLink]="['signup']">Signup</a></li>
                    <li routerLinkActive="router-link-active" *ngIf="!estLogIn()"><a [routerLink]="['signin']">Signin</a></li>
                    <li routerLinkActive="router-link-active" *ngIf="estLogIn()"><a [routerLink]="['logout']">Logout</a></li>
                </ul>
            </nav>
        </div>
        <div class="row spacing">
            <router-outlet></router-outlet>
        </div>
    `,
    styles: [`
        .router-link-active, a:active{
            color:#555;
            background-color: #fff;
            border: #px solid #ddd;
            border-bottom-color: transparent;
        }

        a{
            font-size: 1vw;
        }

    `]
})
export class AuthComponent implements OnInit {
    constructor(private _authService: AuthService) { }

    ngOnInit() { }

    estLogIn(){
        return this._authService.estLogIn();
    }
}