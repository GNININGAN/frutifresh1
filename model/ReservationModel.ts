export class ReservationModel{
    id: number;
    date: Date;
    heure: Date;
    statut: String;
    montant: number;
    utilisateurId: number;

constructor(id: number,date: Date,heure: Date, statut: String,montant: number,utilisateurId: number )
{
    this.id=id;
    this.date=date;
    this.heure=heure;
    this.statut=statut;
    this.montant=montant;
    this.utilisateurId=utilisateurId;
    
}
}