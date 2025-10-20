import { Client, Account,ID, Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // ✅ Your Appwrite API endpoint
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // ✅ Your Appwrite project ID

export const account = new Account(client);
// export const databases = new Databases(client);

export{ID};
