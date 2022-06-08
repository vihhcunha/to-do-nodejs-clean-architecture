import sqlite3 from 'sqlite3';
import sqlite from 'sqlite';
const databasePath = "todoDb.sqlite";
const SQL_ITENS_CREATE = `
    CREATE TABLE IF NOT EXISTS ToDo (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT,
        finishDate DATETIME,
        done BIT
    )`

export default class SQLiteContext {
    db: sqlite.Database<sqlite3.Database, sqlite3.Statement>;

    private constructor(db: sqlite.Database<sqlite3.Database, sqlite3.Statement>) {
        this.db = db;
    }

    static async createAsync(): Promise<SQLiteContext> {
        const sqlite3 = require('sqlite3');
        const sqlite = require('sqlite');

        var db = await sqlite.open({ filename: databasePath, driver: sqlite3.Database });
        await SQLiteContext.createTable(db);
        const me = new SQLiteContext(db);
        
        return me;
     };

    static async createTable(db: sqlite.Database<sqlite3.Database, sqlite3.Statement>): Promise<void> {
        await db.run(SQL_ITENS_CREATE);
    }
}