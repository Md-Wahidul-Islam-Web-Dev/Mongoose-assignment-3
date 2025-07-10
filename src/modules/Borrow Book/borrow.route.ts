

import { Router } from "express";
import { borrowController } from "./borrowBook.controller";


const borrowRoute=Router()
borrowRoute.post("/",borrowController.createBorrowBooks)


export default borrowRoute;