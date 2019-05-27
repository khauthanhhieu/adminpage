exports.Product = function(){
    return {
        id: Number,
        name: String,
        cid: Number,
        cost : Number,
        price : Number,
        path_picture : String,
        orgin : String,
        productor : String,
        date : Date,
        quantity : Number,
        descr : String,
        isdelete: Boolean,
    }
}