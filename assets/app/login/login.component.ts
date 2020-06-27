import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-login',
    template: `
    <ul class="nav nav-tabs nav-justified">
      <li role="presentation"><a [routerLink]="['']" routerLinkActive="router-link-active" [routerLinkActiveOptions]="{ exact: true }">Home</a></li>
      <li role="presentation"><a [routerLink]="['/auth']" routerLinkActive="router-link-active">Login</a></li>
    </ul>
    `,
    styles:[`
        .router-link-active {
            background-color: #337ab7;
            color: white;
        }
    `]
})
export class LoginComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}