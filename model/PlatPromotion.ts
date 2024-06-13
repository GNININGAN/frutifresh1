export class PlatPromotionModel{
    id: number;
    ancienPrix: number
    nouveauPrix: number
    idPlat: number
    idPromotion: number

constructor(id: number, ancienPrix: number, nouveauPrix: number, idPlat: number, idPromotion: number)
{
    this.id=id;
    this.ancienPrix=ancienPrix;
    this.nouveauPrix=nouveauPrix;
    this.idPlat=idPlat;
    this.idPromotion=idPromotion;       
}
}