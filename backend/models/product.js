const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({

    name : {
        type : String,
        required : [true, 'Please enter Product name'],
        trim : true,
        maxLength : [100,'Product name cannot exceed 100 characters']
    },
    price : {
        type : Number,
        required : [true, 'Please enter Product price'],
        maxLength : [6,'Product name cannot exceed 6 characters'],
        default : 0
    },
    description : {
        type : String,
        required : [true, 'Please enter Product description'],
    },
    ratings : {
        type : Number,
        default : 0
    },
    images : [
        {
            public_id : {
                type : String,
                required : [true]
            },
            url : {
                type : String,
                required : [true]
            }
        }
    ],
    category : {
        type : String,
        required : [true,'Please select category for this product'],
        enum : {
            values: [
                'Electronics',
                'Cameras',
                'Laptops',
                'Accessories',
                'Headphones',
                'Food',
                'Books',
                'Clothes/Shoes',
                'Beauty/Health',
                'Sports',
                'Outdoor',
                'Home'
            ],
            message : 'Please select correct category for the product'
        }
    },
    seller : {
        type: String,
        required : [true, 'Please enter product seller']
    },
    stock : {
        type : Number,
        required : [true,'Please enter product stock'],
        maxLength : [5,'Product stock cannot exceed 5 characters'],
        default: 0
    },
    numOfReviews : {
        type:Number,
        default : 0
    },
    reviews : [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                required: true
            },
            name : {
                type : String,
                required : [true]
            },
            rating : {
                type : Number,
                required : [true]
            },
            comment : {
                type : String,
                required : [true]
            }
        }
    ],
    user:{
        type: mongoose.Schema.ObjectId,
        ref:'User',
        required: true
    },
    createdAt : {
        type : Date,
        default : Date.now
    }

})

module.exports = mongoose.model('Product', ProductSchema)