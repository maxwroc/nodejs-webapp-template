// dependencies
import { IController } from "../shared";
import { Router, NextFunction, Request, Response } from "express";
import { Index } from "../views/index";
// views
import { MasterPageView, jsxToString } from "../views/master-page.view";
import { BodyView } from "../views/body.view";

export class MainController implements IController {

    static setupRoutes(router: Router) {
        router.get("/", (req, res, next) => new MainController(req, res, next).index());
    }

    constructor(private request: Request, private response: Response, next: NextFunction) {
    }

    public index() {
        this.response.render("index");
    }
}
