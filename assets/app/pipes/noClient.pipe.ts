import { Pipe, PipeTransform } from '@angular/core';
import { Client } from '../clients/client';

@Pipe({
    name: 'noClientPipe'
})

export class NoClientPipe implements PipeTransform {
    transform(value: Client[], args: string): Client[] {
        console.log("pipe");
        console.log(args);    
        var filtre: string; 
        filtre = args ? args.toLocaleLowerCase() : null;
        console.log(args);
        return filtre ? value.filter(
            (client: Client) => client.noClient.toString().toLocaleLowerCase().indexOf(filtre) > -1
            ) : value;

    }
}