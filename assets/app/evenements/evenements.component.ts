import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-evenements',
    template: `
        <section>
            <div class="row">
                <router-outlet></router-outlet>
            </div>
        </section>
    `,
    styles: [`
        section, .row{
            padding: 0;
            margin: 0;
        }    
    `
    ]
})
export class EvenementsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}