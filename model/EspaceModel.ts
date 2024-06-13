export class EspaceModel{
    id: number;
    nom: String;
    lieu: String;
    description: String;
    image: String;
    prix: number;
    taille: number;

constructor(id: number, nom: String, lieu: String, description: String, image: String, prix: number, taille: number){ 
    this.id = id;
    this.nom = nom;
    this.lieu = lieu;
    this.description = description;
    this.image = image;
    this.prix = prix;
    this.taille = taille;
}
}