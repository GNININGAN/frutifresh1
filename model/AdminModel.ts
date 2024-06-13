export class AdminModel{
    id: number;
    pseudo: String;
    idUtilisateur: number;
constructor(id: number, pseudo: String, idUtilisateur: number)
{
    this.id=id;
    this.pseudo=pseudo;
    this.idUtilisateur=idUtilisateur;
}
}