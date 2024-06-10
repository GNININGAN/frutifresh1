export class CategorieModel{
    id :number;
    nom :String;
    image: String;
constructor(id:number, nom:String, image:String){
    this.id=id;
    this.nom=nom;
    this.image=image;
}
}