
import prismadb from "@/prisma/prismadb";
import {NextResponse} from "next/server";
import bcrypt from "bcrypt";
import { Dto } from "@/dto/Dto";
import { LoginModel } from "@/model/LoginModel";
import { UtilisateurModel } from "@/model/UtilisateurModel";

export async function POST(req: Request) {
    try {
        const loginModel: LoginModel = await req.json();
        const dataValidate = Dto.loginDto().validate(loginModel);

        // Recherche de l'utilisateur dans la base de données en fonction du numéro de téléphone
        const phone = dataValidate.value.phone;

        const user: UtilisateurModel[] = await prismadb.utilisateur.findMany({
            where:
                { numero: phone }
        });
        // Vérification de l'existence de l'utilisateur et de la correspondance du mot de passe
        // Vérification de l'existence de l'utilisateur
        if (user.length === 0) {
            return new NextResponse(JSON.stringify({msg:'l utilisateur n existe pass' , ok: false}), {status: 500});
        }

        const users: UtilisateurModel = user[0];

        // Vérification de la correspondance du mot de passe
        const isPasswordValid = await bcrypt.compare(dataValidate.value.passwords, users.motDePasse);
        if (!isPasswordValid) {
            return new NextResponse(JSON.stringify({msg:'mot de passe incorrecte', ok: false}), {status: 500});

        }
        return new NextResponse(JSON.stringify({
            id: users.id,
            role: users.role,
            ok: true,
        }), { status: 200 });
    }catch (error) {
        console.error('[user_login]', error);
        return new NextResponse(JSON.stringify({msg:'Internal error', ok: false}), {status: 500});
    }
}