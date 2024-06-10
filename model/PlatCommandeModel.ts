export class PlatCommandeModel{
    id: number;
    quantite : number;
    prix : number;
constructor(id: number, quantite: number, prix: number)
{
    this.id = id;
    this.quantite = quantite;
    this.prix = prix;
}
}