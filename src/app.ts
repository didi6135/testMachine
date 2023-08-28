import express from 'express'
import { appConfig } from './2 - Utils/appConfig'
import { catchAll } from './3 - Middleware/catch-all'
import { routeNotFoundMW } from './3 - Middleware/routeNotFoundMW'
import productsController from './6 - Controllers/products-controllers'


const server = express();

server.use(express.json());
server.use("/api", productsController);
server.use("*", routeNotFoundMW);
server.use(catchAll)

server.listen(appConfig.port, () => console.log(`Listening to ${appConfig.port} on http://${appConfig.host}:${appConfig.port}`))