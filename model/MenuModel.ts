export class CommandeModel{
    id: number;
    nom : String;
    prix : number;
    plats : String;
constructor(id: number, nom: String, prix: number, plats: String)
{
    this.id = id;
    this.nom = nom;
    this.prix = prix;
    this.plats = plats;
}
}
