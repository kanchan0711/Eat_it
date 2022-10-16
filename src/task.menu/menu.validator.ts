import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { http_formatter } from "../util";
import { _menuController } from "./menu.controller";
import { menuValidator } from "./menu.schema";

export const createMenuValidator = (req: Request, res: Response, next: NextFunction) => {
    const isValid = menuValidator.safeParse(req.body);
    if(isValid.success) {
        next();
    } else {
        return res.status(StatusCodes.BAD_REQUEST).json(
            http_formatter(isValid.error, "menu validation failed, please check", false)
        )
    }
}
