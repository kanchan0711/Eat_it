import { BaseController } from "../base.controller";
import { IMenu, menu } from "./menu.schema";

class menuController extends BaseController<IMenu> {}

export const _menuController = new menuController(menu)