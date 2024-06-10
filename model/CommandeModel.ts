export class CommandeModel{
    id: number;
    date : String;
    prixTotal: number;
    statut: String;
    utilisateurId: number;
    idLivraison: number;
    
constructor(id:number, date:String, prixTotal:number, statut:String, utilisateurId:number, idLivraison:number   ){
    this.id=id;
    this.date=date;
    this.prixTotal=prixTotal;
    this.statut=statut;
    this.utilisateurId=utilisateurId;
    this.idLivraison=idLivraison
}
}