import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    // Caches connection, only creates new connection if one does not exist.
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma