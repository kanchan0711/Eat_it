import { env } from "./environment/env";
import { Application } from "express";
import express = require("express");
import mongoose = require("mongoose");

export class App {
    public app: Application;

    private apiPath: string = env().apiPath || '/api';
    private staticPath: string = env().staticPath || "/public";

    

    constructor(
        private port: number,
        middleware: Array<any>,
        routes: Record<string, express.Router>
    ) {
        this.app = express();
        this.middleware(middleware);
        this.routes(routes);
        this.assets(this.staticPath);
    }

    private middleware(_middleware: any[]) {
        _middleware.forEach((m) => {
            this.app.use(m);
        });
    }
    private options(_options:any[]){
        _options.forEach(op => this.app.options(op));
    }
    public addMiddleWare(middleWare: any) {
        this.app.use(middleWare);
    }
    private routes(routes: Record<string, express.Router>) {
        for(const _routeKey in routes){
            this.app.use(`${this.apiPath}/${_routeKey}`, routes[_routeKey]);
        }

    }
    private assets(path: string) {
        this.app.use(express.static(path));
    }
    // public mongoDB(uri: string) {
    //     const connect = () => {
    //         // const options: mongoose.ConnectOptions = { keepAlive: true };
    //          mongoose.connect(uri).then(() => {
    //             console.log('DB connected successfully');
    //         }).catch((error) => {
    //             console.log("DB connection failed. \n", error);
    //             return process.exit(1);
    //         });
    //     };
    //     connect();
    //     mongoose.connection.on("disconnected", connect);
    // }
    public mongoDB(uri: string) {
        const connect = () => {
            const options: mongoose.ConnectOptions = { keepAlive: true };
            mongoose.connect(uri, options).then(() => {
                console.log('DB connected successfully');
            }).catch((error) => {
                console.log("DB connection failed. \n", error);
                return process.exit(1);
            });
        };
        
        connect();

        mongoose.connection.on("disconnected", connect);
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`[${env().stage}] - Server started at http://localhost:${this.port}${this.apiPath}`);
        });
    }
}
