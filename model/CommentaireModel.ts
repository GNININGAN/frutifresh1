export class CommentaireModel{
    id: number;
    contenu: string;
    idUtilisateur: number;

constructor(id: number, contenu: string, idUtilisateur: number)
{
    this.id=id;
    this.contenu=contenu;
    this.idUtilisateur=idUtilisateur;        
}
}