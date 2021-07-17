const mongoose = require('mongoose')

const connectDatabase = () => {
    mongoose.connect(process.env.DB_LIVE_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true,
    }).then(con=>{
        console.log(`MongoDB database ${con.connections[0].name} connect with host ${con.connections[0].host}`)
    })
}

module.exports =connectDatabase