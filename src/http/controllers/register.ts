import { prisma } from "@/lib/prisma"
import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"

export async function register (request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
      name: z.string(),
      password: z.string(),
    })
  
    const { name, password } = registerBodySchema.parse(request.body)
  
    try {
      
    } catch (error) {
      
    }
  
    return reply.status(201).send()
}