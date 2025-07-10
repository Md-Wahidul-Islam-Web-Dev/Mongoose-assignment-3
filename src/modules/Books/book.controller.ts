import { Request, Response } from "express"
import { BookModel } from "./book.model";


 // adjust path as needed

export const createBook = async (req: Request, res: Response) => {
  try {
    const data = await BookModel.create(req.body);
    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Validation failed",
      error: error.message || error
    });
  }
};


const getBooks=async(req:Request,res:Response)=>{
  try{
     const data = await BookModel.find({genre:"FANTASY"}).sort({ title: 1 }).limit(10);
  res.send({
    success:true,
    message:"All Book getting Successfully",
    data
  })

  }catch(error){
res.send({
  success:false,
  message:"Error Happend",
  error,
})
  }
}

const getBookById =async(req:Request,res:Response)=>{
  try{
    const bookId=req.params.bookId
     const data = await BookModel.findById(bookId);
  res.send({
    success:true,
    message:"Singal book getting Successfully",
    data
  })

  }catch(error){
res.send({
  success:false,
  message:"Error Happend",
  error,
})
  }
}
const updateBook =async(req:Request,res:Response)=>{
  try{
    const bookId=req.params.bookId
     const data = await BookModel.findByIdAndUpdate(bookId,req.body,{new:true,runValidators:true});
  res.send({
    success:true,
    message:"Book updated Successfully",
    data
  })

  }catch(error){
res.send({
  success:false,
  message:"Error Happend",
  error,
})
  }
}
const DeleteBookById =async(req:Request,res:Response)=>{
  try{
    const bookId=req.params.bookId
     const data = await BookModel.findByIdAndDelete(bookId);
  res.send({
    success:true,
    message:"Book Deleted Successfully",
    data
  })

  }catch(error){
res.send({
  success:false,
  message:"Error Happend",
  error,
})
  }
}
export const bookController={
  createBook,
    getBooks,
getBookById,
   updateBook,
DeleteBookById
};