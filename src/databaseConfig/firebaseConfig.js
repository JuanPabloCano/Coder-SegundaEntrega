import admin from 'firebase-admin';
import Config from '../config/config.js'

admin.initializeApp({
    credential: admin.credential.cert({
        projectId: Config.PROJECT_ID,
        privateKey: Config.PRIVATE_KEY,
        clientEmail: Config.CLIENT_EMAIL
    })
});
