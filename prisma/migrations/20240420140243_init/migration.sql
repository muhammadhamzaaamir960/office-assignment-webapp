-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "department_id" TEXT,
    "hashed_password" TEXT NOT NULL,
    CONSTRAINT "users_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "departments" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "departments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "offices" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "officeNumber" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "currentOccupancy" INTEGER NOT NULL,
    "departmentId" TEXT,
    CONSTRAINT "offices_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "departments" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "offices_officeNumber_key" ON "offices"("officeNumber");
