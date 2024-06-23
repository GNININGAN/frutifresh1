
import prismadb from "@/prisma/prismadb";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { UtilisateurModel } from "@/model/UtilisateurModel";
import { Dto } from "@/dto/Dto";

export async function POST(req: Request) {
    try {
        const body = await req.json();
       
        const userModel: UtilisateurModel = body;
        userModel.motDePasse = await bcrypt.hash(userModel.motDePasse, 10);
        const dataValidate = Dto.utilisateurDto().validate(userModel);
        if (dataValidate.error) {
            return new NextResponse(dataValidate.error.message, { status: 400 });
        } else {
            const user = await prismadb.utilisateur.create({ data: dataValidate.value });
            return NextResponse.json(user);
        }

    } catch (error) {
        console.error('[user_post]', error);
        return new NextResponse('Internal error', { status: 500 });
    }
}
export async function GET(req: Request) {
    try {
        const users = await prismadb.utilisateur.findMany();
        return NextResponse.json(users);
    } catch (error) {
        console.error('[getUsers]', error);
        return new NextResponse('Internal error', { status: 500 });
    }
}