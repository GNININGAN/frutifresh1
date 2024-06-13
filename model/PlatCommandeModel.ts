export class PlatCommandeModel{
    id: number;
    quantite : number;
    prix : number;
    idPlat: number;
    idCommande: number;

constructor(id: number, quantite: number, prix: number, idPlat: number, idCommande: number)
{
    this.id = id;
    this.quantite = quantite;
    this.prix = prix;
    this.idPlat = idPlat;
    this.idCommande = idCommande;
}
}