const Database = require('better-sqlite3');
const path = require('path');

// This is How We Initialize the Database :)
const dbPath = path.resolve(__dirname, 'office-assignment.db');
const db = new Database(dbPath, { verbose: console.log });

// Function to initialize the database schema => create tables basically, if anymore tables are needed, they can be added here :)
function initDb() {
  db.exec(`
    -- Table for Departments
    CREATE TABLE IF NOT EXISTS departments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE,
        description TEXT
    );

    -- Table for Offices
    CREATE TABLE IF NOT EXISTS offices (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        office_number TEXT NOT NULL UNIQUE,
        capacity INTEGER NOT NULL CHECK (capacity > 0),
        current_occupancy INTEGER NOT NULL DEFAULT 0 CHECK (current_occupancy <= capacity),
        department_id INTEGER,
        FOREIGN KEY (department_id) REFERENCES departments(id)
    );

    -- Table for Users
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        hashed_password TEXT NOT NULL,
        role TEXT NOT NULL,
        department_id INTEGER,
        FOREIGN KEY (department_id) REFERENCES departments(id)
    );

    -- Table for Office Assignments
    CREATE TABLE IF NOT EXISTS office_assignments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        office_id INTEGER NOT NULL,
        assigned_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (office_id) REFERENCES offices(id)
    );
  `);
  console.log('Database initialized');
}

// Expose the database connection and initDb function
module.exports = {
  db,
  initDb
};
