import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async function populate() {
    const persona = await prisma.personas.createMany({
        data: [{
            nombre: "Angel",
            apellido: "Ponce",
            puesto: "ADMIN",
            email: "correo@hotmail.com",
            password: "123456789"
        }, {
            nombre: "Lechuga",
            apellido: "Canales",
            puesto: "DENUNCIANTE",
            email: "lechuga@hotmail.com",
            password: "123456789"
        }, {
            nombre: "Chema",
            apellido: "No El Chema",
            puesto: "ABOGADO",
            email: "chema@hotmail.com",
            password: "123456789"
        }]
    })

    console.log(persona);    
}