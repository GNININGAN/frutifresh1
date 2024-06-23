import Joi from "joi";

export class Dto {
    static adminDto() {
        const schema = Joi.object({
            pseudo: Joi.string().required(),
            idUtilisateur: Joi.number().required()
        })
        return schema
    }
    static categorieDto() {
        const schema = Joi.object({
            nom: Joi.string().required(),
            image: Joi.string().required()
        })
        return schema
    }
    static commandeDto() {
        const schema = Joi.object({
            date: Joi.string().required(),
            prixTotal: Joi.number().required(),
            statut: Joi.string().required(),
            idUtilisateur: Joi.number().required(),
            idLivraison: Joi.number().required()
        })
        return schema
    }
    static commentaireDto() {
        const schema = Joi.object({
            contenu: Joi.string().required(),
            idUtilisateur: Joi.number().required()
        })
        return schema
    }
    static compositionDePlatDto() {
        const schema = Joi.object({
            ancienPrix: Joi.number().required(),
            nouveauPrix: Joi.number().required(),
            idPlat: Joi.number().required(),
            idPromotion: Joi.number().required(),
        })
        return schema
    }
    static EspaceDto() {
        const schema = Joi.object({
            nom: Joi.string().required(),
            lieu: Joi.string().required(),
            description: Joi.string().required(),
            image: Joi.string().required(),
            prix: Joi.number().required(),
            taille: Joi.number().required()
        })
        return schema
    }
    static livraisonDto() {
        const schema = Joi.object({
            adresse: Joi.string().required(),
            date: Joi.string().required(),
            heure: Joi.string().required(),
            statut: Joi.string().required(),
            longitude: Joi.number().required(),
            latitude: Joi.number().required()
        })
        return schema
    }
    static menuDto() {
        const schema = Joi.object({
            nom: Joi.string().required(),
            prix: Joi.number().required(),
            plats: Joi.string().required()
        })
        return schema
    }
    static paiementDto() {
        const schema = Joi.object({
            montant: Joi.number().required(),
            motif: Joi.string().required(),
            statut: Joi.string().required(),
            idCommande: Joi.number().required(),
            idReservation: Joi.number().required()
        })
        return schema
    }
    static platCommandeto() {
        const schema = Joi.object({
            quantite: Joi.number().required(),
            prix: Joi.number().required(),
            idCommande: Joi.number().required(),
            idPlat: Joi.number().required()
        })
        return schema
    }
    static platCompositionDePlatDto() {
        const schema = Joi.object({
            idPlat: Joi.number().required(),
            idCompositionDePlat: Joi.number().required()
        })
        return schema
    }
    static platMenuDto() {
        const schema = Joi.object({
            nmbr: Joi.number().required(),
            idPlat: Joi.number().required(),
            idMenu: Joi.number().required()
        })
        return schema
    }
    static platDto() {
        const schema = Joi.object({
            nom: Joi.string().required(),
            prix: Joi.number().required(),
            idCategorie: Joi.number().required()
        })
        return schema
    }
    static platPromotionDto() {
        const schema = Joi.object({
            ancienPrix: Joi.number().required(),
            nouveauPrix: Joi.number().required(),
            idPlat: Joi.number().required(),
            idPromotion: Joi.number().required()
        })
        return schema
    }
    static promotionDto() {
        const schema = Joi.object({
            dateDebut: Joi.string().required(),
            dateFin: Joi.string().required()
        })
        return schema
    }
    static reservationDto() {
        const schema = Joi.object({
            date: Joi.string().required(),
            heure: Joi.string().required(),
            statut: Joi.string().required(),
            montant: Joi.number().required(),
            idUtilisateur: Joi.number().required()
        })
        return schema
    }
    static stockProduitDto() {
        const schema = Joi.object({
            nom: Joi.string().required(),
            quatite: Joi.number().required(),
            prix: Joi.number().required(),
            idAdmin: Joi.number().required()
        })
        return schema
    }
    static utilisateurDto() {
        const schema = Joi.object({
            nom: Joi.string().required(),
            prenom: Joi.string().required(),
            numero: Joi.number().required(),
            motDePasse: Joi.string().required(),
            email: Joi.string().required().email(),
            adresse: Joi.string().required(),
            role: Joi.string().required()
        })
        return schema
    }

    static loginDto() {
        const shema = Joi.object({
            phone: Joi.number().required().integer(),
            passwords: Joi.string().required(),
        })

        return shema;
    }

}