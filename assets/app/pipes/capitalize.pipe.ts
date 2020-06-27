import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalizePipe'
})

export class CapitalizePipe implements PipeTransform {
    stringSplit: string[] = [];
    chaine: string = "";
    transform(value: string, args: any[]): any { 
        if(value){
            this.stringSplit = value.split(/\s+/);
            var nouvelleChaine = "";
            for(let i in this.stringSplit)
            {
                console.log(i);
                this.chaine = this.stringSplit[i].charAt(0).toUpperCase() + this.stringSplit[i].substring(1).toLocaleLowerCase();
                console.log(this.chaine);
                nouvelleChaine  += this.chaine + " ";
            }
            return nouvelleChaine;
        }    
    }
}