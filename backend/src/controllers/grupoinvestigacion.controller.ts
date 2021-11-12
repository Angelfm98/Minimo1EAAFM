import { Request, Response} from "express";
import { getAllJSDocTags } from "typescript";
import GrupoInvestigacion from "../models/grupoinvestigacion"
import vacunas from "../models/vacunas";

//obtenemos lista de todas las personas que se pueden vigilar
function getAll (req:Request, res:Response): void {
    GrupoInvestigacion.find({}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    })
}

//obtenemos una persona a vigilar
function getPersonaVigilada (req:Request, res:Response): void {
    GrupoInvestigacion.findOne({"id":req.params.id}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

//añadir persona a la lista
function newPersonaVacunada (req:Request, res:Response): void {
    const grupo = new GrupoInvestigacion({
        "nombrePersona": req.body.nombrePersona,
        "id": req.body.id,
        "fechaSeguimiento": req.body.fechaSeguimiento,
        "dni": req.body.dni,
        "telefono": req.body.telefono,
        "fiebre": req.body.fiebre,
        "tos": req.body.tos,
        "difResp": req.body.difResp,
        "malGen": req.body.malGen
     });
    
    console.log(req.body);
    grupo.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

//editar persona
function updatePersonaLista (req:Request, res:Response): void {
    
    const nombrePersona: String = req.body.nombrePersona;
    const id = req.params.id;
    const nuevafecha: String = req.body.fechaSeguimiento;
    const dni: String = req.body.dni;
    const nuevotelefono: String = req.body.telefono;
    const fiebre: Boolean = req.body.fiebre;
    const tos: Boolean = req.body.tos;
    const difResp: Boolean = req.body.difResp;
    const malGen: Boolean = req.body.malGen;

    GrupoInvestigacion.update({"id": id}, {$set: {
        "nombrePersona": nombrePersona, 
        "id": id, 
        "nuevafecha": nuevafecha, 
        "dni": dni, 
        "nuevotelefono": nuevotelefono,
        "fiebre": fiebre,
        "tos": tos,
        "difResp": difResp,
        "malGen": malGen }}).then((data) => {
            res.status(201).json(data);
        }).catch((err) => {
            res.status(500).json(err);
        })
}

export default { getAll, getPersonaVigilada, newPersonaVacunada, updatePersonaLista};