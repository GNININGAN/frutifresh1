export class LivraisonModel{
    id: number;
    adresse: String
    date: Date
    heure: Date
    statut: String
    longitude: String
    latitude: String
constructor(id: number, adresse: String, date: Date, heure: Date, statut: String, longitude: String, latitude: String, idCommande: number, idReservation: number)
{
    this.id=id;
    this.adresse=adresse;
    this.date=date;
    this.heure=heure;
    this.statut=statut;
    this.longitude=longitude;
    this.latitude=latitude;  
}
}