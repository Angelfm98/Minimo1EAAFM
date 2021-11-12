import { Request, Response} from "express";
import { getAllJSDocTags } from "typescript";
import vacunas from "../models/vacunas";


//Obtenemos todas los tipos de vacunas disponiblesss
function getAll (req:Request, res:Response): void {
    vacunas.find({}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    })
}