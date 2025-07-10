
import { Router } from "express";
import { bookController } from "./book.controller";

const bookRoute=Router()
//Question 1
bookRoute.post("/",bookController.createBook);
bookRoute.get("/",bookController.getBooks)
bookRoute.get("/:bookId",bookController.getBookById)
bookRoute.put("/:bookId",bookController.updateBook)
bookRoute.delete("/:bookId",bookController.DeleteBookById)


export default bookRoute;

