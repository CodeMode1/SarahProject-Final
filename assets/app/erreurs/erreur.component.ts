import { Component, OnInit } from '@angular/core';
import { Erreur } from './erreur';
import { ErreurService } from './erreur.service';

@Component({
    selector: 'my-erreur',
    template: `
      <div class="backdrop" [ngStyle]="{'display': erreurDisplay}"></div>
        <div class="modal" tabindex="-1" role="dialog" [ngStyle]="{'display': erreurDisplay}">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" aria-label="Close" (click)="onErreurHandled()"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">{{erreurData?.titre}}</h4>
                    </div>
                    <div class="modal-body">
                     <p>{{erreurData?.message}}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" (click)="onErreurHandled()">Close</button>
                    </div>
                </div>
            </div>
        </div>   
    `,
    styles: [`
        .backdrop {
            background-color: rgba(0,0,0,0.6);
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
        }
    `]
})
export class ErreurComponent implements OnInit {
    erreurDisplay = 'none';
    erreurData = Erreur;

    constructor(private _erreurService:ErreurService){}

    onErreurHandled(){
        this.erreurDisplay = 'none';
    }

    ngOnInit(){
        this._erreurService.erreurArrivee.subscribe(
            erreurData => {
                this.erreurData = erreurData;
                this.erreurDisplay = 'block';
            }
        );
    }
}