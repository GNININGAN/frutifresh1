export class UtilisateurModel{

nom :string;
prenom :string;
numero :number;
motDePasse :string;
email :string;
adresse :string;
role :string;
id? :number;

constructor ( nom:string, prenom:string, numero: number, motDePasse: string, email: string, adresse: string, role: string){
    this.nom=nom;
    this.prenom=prenom;
    this.numero=numero;
    this.motDePasse=motDePasse;
    this.email=email;
    this.adresse=adresse;
    this.role=role;
}
}
