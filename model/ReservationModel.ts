export class ReservationModel{
    id: number;
    date: Date;
    heure: Date;
    statut: String;
    montant: number;
    idUtilisateur: number;

constructor(id: number,date: Date,heure: Date, statut: String,montant: number,idUtilisateur: number )
{
    this.id=id;
    this.date=date;
    this.heure=heure;
    this.statut=statut;
    this.montant=montant;
    this.idUtilisateur=idUtilisateur;
    
}
}