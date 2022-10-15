import { Router } from "express";
import { starterRouter } from "../task.menu.starter/menu.starter.router";

export const allRoutes: Record<string, Router> = {
    'Starter' : starterRouter,
}
