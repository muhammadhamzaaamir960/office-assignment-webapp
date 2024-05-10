-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_offices" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "officeNumber" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "currentOccupancy" INTEGER NOT NULL,
    "departmentId" TEXT,
    "location" TEXT,
    "floor" INTEGER NOT NULL DEFAULT 1,
    "distanceFromNearest" INTEGER,
    CONSTRAINT "offices_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "departments" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_offices" ("capacity", "currentOccupancy", "departmentId", "id", "officeNumber") SELECT "capacity", "currentOccupancy", "departmentId", "id", "officeNumber" FROM "offices";
DROP TABLE "offices";
ALTER TABLE "new_offices" RENAME TO "offices";
CREATE UNIQUE INDEX "offices_officeNumber_key" ON "offices"("officeNumber");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
