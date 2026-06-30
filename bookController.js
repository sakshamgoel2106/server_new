const bookModel = require("./bookModel");

exports.getAllBooks = (req,res)=>{
    res.status(200).json({data:bookModel.getAll(),message:"success"});
};

exports.getBookById = (req,res)=>{
    const book = bookModel.getById(req.params.id);
    if(!book){
        return res.status(404).json({message:"book not found"});
    }
    res.status(200).json({data:book,message:"success"});
};

exports.createBook = (req,res) =>{
    const {title,author,year} = req.body;
    if(!title || !author || !year){
        return res.status(400).json({message:"title,author and year are required"});
    }
    const newbook = bookModel.add(req.body);
    res.status(201).json({data:newbook,message:"success"});
};

exports.updateBook = (req,res)=>{
    const {title,author,year} = req.body;
    if(!title || !author || !year){
        return res.status(400).json({message:"title,author and year are required"});
    }
    const updatedBook = bookModel.update(req.params.id,req.body);
    if(!updatedBook){
        return res.status(404).json({message:"book not found"});
    }
    res.status(200).json({data:updatedBook,message:"success"});
};

exports.delete =(req,res)=>{
    const deletedBook = bookModel.delete(req.params.id);
    if(!deletedBook){
        return res.status(404).json({message:"book not found"});
    }
    res.status(200).json({data:deletedBook,message:"success"});
};
