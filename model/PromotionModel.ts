export class PromotionModel{
    id: number;
    dateDebut : String;
    dateFin: String;
   
constructor(id: number, dateDebut: String, dateFin: String)
{
    this.id=id;
    this.dateDebut=dateDebut;
    this.dateFin=dateFin;       
}
}