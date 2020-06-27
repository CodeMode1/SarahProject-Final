export class User{
    courriel:string;
    password:string;
    prenom: string;
    nom: string;

    constructor(courriel: string, password:string, prenom?: string, nom?: string){
        this.courriel = courriel;
        this.password = password;
        this.prenom = prenom;
        this.nom = nom;
    }
    
}