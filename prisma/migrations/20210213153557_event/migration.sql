/*
  Warnings:

  - Made the column `content` on table `Event` required. The migration will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "fileKey" TEXT,
ADD COLUMN     "fileLocation" TEXT,
ADD COLUMN     "fileOriginalName" TEXT,
ALTER COLUMN "content" SET NOT NULL,
ALTER COLUMN "initialDate" DROP NOT NULL,
ALTER COLUMN "eventDate" DROP NOT NULL,
ALTER COLUMN "finishDate" DROP NOT NULL;
