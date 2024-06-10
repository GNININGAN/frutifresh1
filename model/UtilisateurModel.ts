export class UtilisateurModel{
id :number;
nom :String;
prenom :String;
numero :String;
motDePasse :String;
email :String;
adresse :String;
role :String;

constructor (id:number, nom:String, prenom:String, numero: String, motDePasse: String, email: String, adresse: String, role: String ){
    this.id=id;
    this.nom=nom;
    this.prenom=prenom;
    this.numero=numero;
    this.motDePasse=motDePasse;
    this.email=email;
    this.adresse=adresse;
    this.role=role;
}
}
