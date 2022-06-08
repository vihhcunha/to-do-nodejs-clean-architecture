import sqlite3 from 'sqlite3';
import sqlite from 'sqlite';
import { injectable } from 'inversify';
import "reflect-metadata";

@injectable()
export default class SQLiteContext {
    db: sqlite.Database<sqlite3.Database, sqlite3.Statement>;
}