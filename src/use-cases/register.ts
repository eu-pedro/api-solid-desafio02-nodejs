import { prisma } from "@/lib/prisma";

interface RegisterUseCaseProps {
  name: string
  password: string
  email: string
}

export async function registerUseCase({ name, password, email }: RegisterUseCaseProps){

  const userWithSameEmail = await prisma.users.findMany({
    where: {
      email
    }
  })

  if(userWithSameEmail) {
    // return reply.status(409).send()
  }

  await prisma.users.create({
    data: {
      name, 
      password,
      email
    }
  })
}