export class Client{
    clientId: string;
    noClient: number;
    prenom: string;
    nom: string;
    noCompte: string;
    courriel: string;
    cell: string;
    compagnie: string; 
    adresse: string;
    ville: string;
    codePostal: string;
    telPrincipal: string;
    province: string;
    pays: string;
    fax: string;
    telSecondaire: string;
    memo: string;
    memoAVenir: string;
    noExTaxeProv: string;
    noExTaxeFed: string;
    selectStatut: string;
    selectSource: string;
    modifPar: string;
    modif: Date;
    dateDernEv: Date;
    creerPar: string;
    dateCree: Date;
    
    constructor( clientId?: string, noClient?: number, prenom?:string, nom?: string, noCompte?: string, courriel?: string, cell?: string, compagnie?:string, adresse?: string, ville?:string,
         codePostal?: string, telPrincipal?: string, province?:string, pays?: string, fax?: string, telSecondaire?:string, memo?: string,
         memoAVenir?: string, noExTaxeProv?: string, noExTaxeFed?: string, selectStatut?: string, selectSource?: string, modifPar?: string, modif?: Date, 
         dateDernEv?: Date, creerPar?: string, dateCree?: Date){
        this.clientId = clientId;
        this.noClient = noClient;
        this.prenom = prenom;
        this.nom = nom;
        this.noCompte = noCompte;
        this.courriel = courriel;
        this.cell = cell;
        this.compagnie = compagnie;
        this.adresse = adresse;
        this.ville = ville;
        this.codePostal = codePostal;
        this.telPrincipal = telPrincipal;
        this.province = province;
        this.pays = pays;
        this.fax = fax;
        this.telSecondaire = telSecondaire;
        this.memo = memo;
        this.memoAVenir = memoAVenir;
        this.noExTaxeProv = noExTaxeProv;
        this.noExTaxeFed = noExTaxeFed;
        this.selectStatut = selectStatut;
        this.selectSource = selectSource;
        this.modifPar = modifPar;
        this.modif = modif;
        this.dateDernEv = dateDernEv;
        this.creerPar = creerPar;
        this.dateCree = dateCree;   
    }
}