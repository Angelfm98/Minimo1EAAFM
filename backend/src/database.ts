//Conexión BBDD Mongodb

import mongoose, { ConnectionOptions } from 'mongoose';
import config from './config/config';

const OptionsDB: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect(config.DB.URI, OptionsDB);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Conectado.');
})

connection.on('error', err => {
    console.log("Error, no hay conexión.", err);
    process.exit(0);
})