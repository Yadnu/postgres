import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgres://fnhfdgfj:lSqalkuVM1_VC-BVpXAYlOOyhMIINeR4@cornelius.db.elephantsql.com/fnhfdgfj");
    await client.connect();
    return client;
}