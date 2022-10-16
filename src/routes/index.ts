import { Router } from "express";
import { menuRouter } from "../task.menu/menu.router";

export const allRoutes: Record<string, Router> = {
    'menu' : menuRouter,
}
