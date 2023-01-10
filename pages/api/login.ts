import type { User } from '../api/user'

import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '../../lib/session'
import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = await req.body

  try {

    const datos = await prisma.personas.findFirstOrThrow({
        where: {
            email: email,
            password: password,
        },
        select: {
            nombre: true,
            puesto: true,
        }
    })
    
    if(datos == null)
        res.status(505).json({message: 'No existe el usuario'})
    else {
        const user = { isLoggedIn: true, nombre: datos?.nombre, puesto: datos?.puesto } as User
        req.session.user = user
        await req.session.save()
        res.json(user)
        
    }
  } catch (error) {
    res.status(500).json({ message: (error as Error).message })
  }
}

export default withIronSessionApiRoute(loginRoute, sessionOptions)