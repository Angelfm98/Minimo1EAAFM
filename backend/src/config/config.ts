export default {
    DB: {
        URI: process.env.MONGODB_URI || 'mongodb://localhost/AngelFrancoMinim1',
        USER: process.env.MONGODB_USER,
        PASSWORD: process.env.MONGODB_PASSWORD
    }
}