const db = require("../db");
require("dotenv").config();


const createArticleTable = async () => {
  const dropTableQuery = `DROP TABLE IF EXISTS article;`;
  const createUuid =`CREATE EXTENSION IF NOT EXISTS "uuid-ossp" `;

  const createArticleTableQuery = `
    CREATE TABLE IF NOT EXISTS article (
      id uuid DEFAULT uuid_generate_v4(),
      image TEXT,
      title VARCHAR(100) NOT NULL,
      content TEXT,
      user_id uuid,
      created_on TIMESTAMP DEFAULT NOW(),
      updated_on TIMESTAMP DEFAULT NOW(),
      PRIMARY KEY (id)
    );
  `;

  const insertArticleDataQuery = `
    INSERT INTO article (
      image, title, content, user_id
    ) VALUES (
      $1, $2, $3 , $4
    );
  `;
  
  const articleData = {
    image: "https://media.giphy.com/media/X7s4uckfyihGJDrSpo/giphy.gif",
    title: "CR7 the greatest of all time",
    content: "It is no longer stories that numbers don't lie, and CR7 is the current leading goal scorer of all time",
    user_id: `4080e8be-1da0-48c8-a54c-9e79e530871f`,
    
  };
  const values = [
    articleData.image,
    articleData.title,
    articleData.content,
    articleData.user_id
  ];

  try {
    // Drop the table if it exists
    await db.query(dropTableQuery);
    await db.query(createUuid);

    // Create the users table
    await db.query(createArticleTableQuery);
    console.log("Article table created");

    // Insert dummy user data
    await db.query(insertArticleDataQuery, values);
    console.log("Dummy Article data inserted");
  } catch (error) {
    console.error("Error:", error);
  }
};

// create Gif table for testing purposes
//createArticleTable();

module.exports = { createArticleTable };
