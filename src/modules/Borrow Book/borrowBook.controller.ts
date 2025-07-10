// controllers/borrow.controller.ts

import { Request, Response } from "express";

import { BorrowModel } from "./borrowBook.model";
import { BookModel } from "../Books/book.model";

 const createBorrowBooks = async (req: Request, res: Response) => {
  try {
    const { book, quantity, dueDate } = req.body;

    const foundBook = await BookModel.findById(book);
  if (!foundBook) {
         res.status(404).json({ success: false, message: "There is no book with this ID" });
         return;
  }

  if (foundBook.copies < quantity) {
     res.status(400).json({
      success: false,
      message: "There aren't enough copies",
    });
     return;
  }

    // foundBook.copies -= quantity;
    foundBook.copies = foundBook.copies - quantity;

    if (foundBook.copies === 0) {
      foundBook.available = false;
    }
    await foundBook.save();

    const dueDates = new Date();
    dueDates.setDate(dueDates.getDate() + 14);

    // Step 5: Create Borrow Record
    const borrow = await BorrowModel.create({
      book,
      quantity,
      dueDate,
    });

    // Step 6: success response
    res.status(201).json({
      success: true,
      message: "Book borrowed successfully",
      data: borrow,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
};
export const borrowController={
createBorrowBooks
}