import { Router } from "express";
import bookRoute from "../Books/book.route";
import borrowRoute from "../Borrow Book/borrow.route";
import summary from "../Borrow Books Summary/routes";



const routes = Router()

routes.use("/books",bookRoute);
routes.use("/borrow",borrowRoute);
routes.use("/api/borrow",summary)
export default routes;