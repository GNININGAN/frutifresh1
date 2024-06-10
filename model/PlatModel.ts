export class PlatModel{
    id :number;
    nom :String;
    prix: number;
    idCategorie: number;
    constructor (id:number, nom:String, prix:number, idCategorie: number ){
        this.id=id;
        this.nom=nom;
        this.prix=prix;
        this.idCategorie=idCategorie;
    }
}
