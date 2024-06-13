export class PaiementModel{
    id: number;
    montant: number;
    motif: String;
    statut: String;
    idCommande: number;
    idReservation: number;
constructor(id: number, montant: number, motif: String, statut: String, idCommande: number, idReservation: number)
{
    this.id=id;
    this.montant=montant;
    this.motif=motif;
    this.statut=statut;
    this.idCommande=idCommande;
    this.idReservation=idReservation;    
}
}