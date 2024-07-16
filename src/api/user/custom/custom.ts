import { DataBase } from "../../../database";

export async function verifyEmail(email: string): Promise<void> {
    try {
        const user = await DataBase.instance.user.findOne({ where: { email } });
        if (user) {
            throw new Error(`El correo ${email} ya está en uso por otro usuario`);
        }
    } catch (error:any) {
        throw new Error(`Error al verificar el correo: ${error.message}`);
    }
}
