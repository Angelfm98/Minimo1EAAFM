import mongoose, { Schema, Document} from 'mongoose';

//model vacunass
const vacunaSchema = new Schema({
    nombreVacuna: {
        type: String
    },
    id: {
        type: String
    },
    descripcion: {
        type: String
    },
    tecnologia: {
        type: String
    },
    fechadeAceptacion: {
        type: String
    }
    });

export interface IVacunas extends Document {
    nombreVacuna: String;
    id: String;
    descripcion: String;
    tecnologia: String;
    fechadeAceptacion: String;
}

export default mongoose.model<IVacunas>('Vacunas', vacunaSchema);