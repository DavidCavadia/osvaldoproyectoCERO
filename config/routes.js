import { Router } from "express";

const routes=Router()
//obtener la info
routes.get('/info',infoController.index)
//enviar la info
routes.post('/info',infoController.store)
//consultar la info especifica
routes.get('/info',infoController.detail)

export default Router