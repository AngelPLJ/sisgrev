-- CreateEnum
CREATE TYPE "Puesto" AS ENUM ('ABOGADO', 'DENUNCIANTE', 'ADMIN');

-- CreateTable
CREATE TABLE "Personas" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "puesto" "Puesto" NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Personas_pkey" PRIMARY KEY ("id")
);
