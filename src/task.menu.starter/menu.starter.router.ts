import { Request, Response, Router } from "express";
import { _StarterController } from "./menu.starter.controller";
// import { createstarterValidator } from "./starter.validator";

export const starterRouter = Router();

starterRouter
    .get('/', (req: Request, res: Response) => _StarterController.find(res, {}))
    .get('/hot', (req: Request, res: Response) => _StarterController.getHottestStarter(req, res))
    .get('/:id', (req: Request, res: Response) => _StarterController.findOne(res, {_id: req.params.id}))
    // .post('/', createstarterValidator, (req, res) => _starterController.create(res, req.body))
    .patch('/:id', (req, res) => _StarterController.update(res, req.params.id, req.body))
    .delete('/:id', (req, res) => _StarterController.delete(res, req.params.id));
