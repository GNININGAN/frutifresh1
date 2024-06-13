export class PromotionModel{
    id: number;
    dateDebut : Date;
    dateFin: Date;
   
constructor(id: number, dateDebut: Date, dateFin: Date)
{
    this.id=id;
    this.dateDebut=dateDebut;
    this.dateFin=dateFin;       
}
}