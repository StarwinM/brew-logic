import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const coffee = await prisma.drink.findMany()

export default function Page() {

    return <h1>{coffee.map(item => <div>{item.name}<br></br>{item.amount} мл<br></br>{item.description}</div>)}</h1>;
}