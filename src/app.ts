import express from 'express'
// import { appConfig } from './2 - Utils/appConfig'
import { catchAll } from './3 - Middleware/catch-all'
import { checkItzik } from './3 - Middleware/itzikMW';
import { routeNotFoundMW } from './3 - Middleware/routeNotFoundMW'
import authController from './6 - Controllers/auth-controller';
import productsController from './6 - Controllers/products-controllers'


const server = express();

server.use(express.json());


server.use(checkItzik)

server.use("/api", productsController);
server.use("/api", authController);
server.use("*", routeNotFoundMW);
server.use(catchAll)

server.listen(3344, () => console.log(`Listening to 3344 on http://localhost:3344`))
