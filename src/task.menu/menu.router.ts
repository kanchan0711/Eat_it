import { Request, Response, Router } from "express";
import { _menuController } from "./menu.controller";
import { createMenuValidator } from "./menu.validator";

export const menuRouter = Router();

menuRouter
    .get('/', (req: Request, res: Response) => _menuController.find(res, {}))
    .get('/:id', (req: Request, res: Response) => _menuController.findOne(res, {_id: req.params.id}))
    .post('/', createMenuValidator, (req, res) => _menuController.create(res, req.body))
    .patch('/:id', (req, res) => _menuController.update(res, req.params.id, req.body))
    .delete('/:id', (req, res) => _menuController.delete(res, req.params.id));
