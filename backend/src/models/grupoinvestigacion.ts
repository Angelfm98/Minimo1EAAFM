import mongoose, { Schema, Document} from 'mongoose';

//model grupoinvestigación
const grupoinvestigacionSchema = new Schema({
    nombrePersona: {
        type: String
    },
    id: {
        type: String
    },
    fechaSeguimiento: {
        type: String
    },
    dni: {
        type: String
    },
    telefono: {
        type: String
    },
    fiebre: {
        type: Boolean
    },
    tos: {
        type: Boolean
    },
    difResp: {
        type: Boolean
    },
    malGen: {
        type: Boolean
    }
    });

export interface IGrupoInvestigacion extends Document {
    nombrePersona: String;
    id: String;
    fechaSeguimiento: String;
    dni: String;
    telefono: String;
    fiebre: Boolean;
    tos: Boolean;
    difResp: Boolean;
    malGen: Boolean;
}

export default mongoose.model<IGrupoInvestigacion>('GrupoInvestigacion', grupoinvestigacionSchema);