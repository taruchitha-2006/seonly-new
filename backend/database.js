const Database = require('better-sqlite3');

const db = new Database('seonly.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS seo_audits (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    website TEXT NOT NULL,
    seo_health INTEGER NOT NULL,
    technical_seo TEXT NOT NULL,
    content_quality TEXT NOT NULL,
    ai_search_visibility TEXT NOT NULL,
    authority_signals TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    company TEXT,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

module.exports = db;