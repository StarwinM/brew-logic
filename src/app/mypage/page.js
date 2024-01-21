import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const cofes = await prisma.drink.findMany()

export default function Page() {

    return <h1>{cofes.map(item => <p>{item.name}</p>)}</h1>;
}