const db = require("../db");
require("dotenv").config();
const bcrypt = require("bcrypt");

const createUsersAccount = async () => {
  const dropTableQuery = `DROP TABLE IF EXISTS users;`;
  const createUuid =`CREATE EXTENSION IF NOT EXISTS "uuid-ossp" `;

  const createUsersQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id uuid DEFAULT uuid_generate_v4(),
      firstName VARCHAR(60) NOT NULL,
      lastName VARCHAR(60) NOT NULL,
      email VARCHAR(100) NOT NULL,
      password VARCHAR(255) NOT NULL,
      gender VARCHAR(6),
      avatar TEXT,
      admin BOOLEAN NOT NULL,
      created_on TIMESTAMP NOT NULL,
      last_login TIMESTAMP,
      PRIMARY KEY (id)
    );
  `;

  const insertUserDataQuery = `
    INSERT INTO users (
      firstName, lastName, email, password, gender, avatar, admin, created_on
    ) VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8
    );
  `;
  const hashedPassword = await bcrypt.hash("admin88888", 10);
  const userData = {
    firstName: "David",
    lastName: "Lawrence",
    email: "admin@gmail.com",
    password: hashedPassword,
    gender: "Male",
    avatar: "https://media.giphy.com/media/X7s4uckfyihGJDrSpo/giphy.gif",
    admin: "TRUE",
  };
  const values = [
    userData.firstName,
    userData.lastName,
    userData.email,
    userData.password,
    userData.gender,
    userData.avatar,
    userData.admin,
    new Date(),
  ];

  try {
    // Drop the table if it exists
    await db.query(dropTableQuery);
    // create uuid-ossp if it doesnt exist
    await db.query(createUuid);

    // Create the users table
    await db.query(createUsersQuery);
    console.log("Users table created");

    // Insert dummy user data
    await db.query(insertUserDataQuery, values);
    console.log("Dummy user data inserted");
  } catch (error) {
    console.error("Error:", error);
  }
};

// create user table for testing purposes
//createUsersAccount();

module.exports = { createUsersAccount };
