import { Router } from "express"; 
import grupoinvestigacionController from '../controllers/grupoinvestigacion.controller'


const router = Router();

router.get('/', grupoinvestigacionController.getAll);
router.get('/:id', grupoinvestigacionController.getPersonaVigilada);
router.post('/new',grupoinvestigacionController.newPersonaVacunada);
router.put('/update/:id', grupoinvestigacionController.updatePersonaLista);

export default router;