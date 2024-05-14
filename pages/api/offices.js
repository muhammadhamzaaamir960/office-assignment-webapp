import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      
      const offices = await prisma.office.findMany({
        include: {
          Department: true 
        }
      });
      res.status(200).json(offices);
    } catch (error) {
      console.error('Error fetching office data:', error);
      res.status(500).json({ message: 'Failed to fetch office data' });
    }
  } else {
    
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
