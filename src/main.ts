import 'reflect-metadata';

import { Container } from "inversify";
import { interfaces, InversifyExpressServer, TYPE } from 'inversify-express-utils';
import containerModule from "./infra/DI/ContainerModules";
import * as bodyParser from 'body-parser';

import "./infra/http/express";

const container = new Container();

export class App {

    constructor() {
        this.configDependencies();
        //this.createServer();
    }

    configDependencies(): void {
        container.loadAsync(containerModule).then(this.createServer)
    }

    createServer(): void {
        const server: InversifyExpressServer = new InversifyExpressServer(container);

        server.setConfig((app) => {
            app.use(bodyParser.urlencoded({
              extended: true
            }));
            app.use(bodyParser.json());
          });
          
          let app = server.build();
          app.listen(3000);
    }
}

export default new App();