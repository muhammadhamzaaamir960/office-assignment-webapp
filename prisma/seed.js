// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const mockOffices = [
        {
            officeNumber: 'Office 101',
            location: 'First Floor',
            capacity: 10,
            currentOccupancy: 2,
            floor: 1,
            distanceFromNearest: 10,
            departmentId: null  // Assuming no department initially assigned
        },
        {
            officeNumber: 'Office 102',
            location: 'First Floor',
            capacity: 8,
            currentOccupancy: 1,
            floor: 1,
            distanceFromNearest: 12,
            departmentId: null
        },
        {
            officeNumber: 'Office 103',
            location: 'Third Floor',
            capacity: 15,
            currentOccupancy: 2,
            floor: 3,
            distanceFromNearest: 5,
            departmentId: null
        }
    ];

    // Create multiple records using Prisma's createMany which is efficient for bulk inserts
    await prisma.office.createMany({
        data: mockOffices
    });

    console.log('Inserted mock data: Offices');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
