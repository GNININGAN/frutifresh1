export class StockProduitModel{
    id: number;
    nom: String;
    quantite: number;
    prix: number;
    idAdmin: number;
constructor(id: number, nom:String, quantite: number, prix: number, idAdmin: number)
{
    this.id=id;
    this.nom=nom;
    this.quantite=quantite;
    this.prix=prix;
    this.idAdmin=idAdmin;
}
}