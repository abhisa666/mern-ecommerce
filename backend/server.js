 const app =  require('./app')
 const connectDatabase = require('./config/database')

 const cloudinary = require('cloudinary')


 // Handle uncaught exceptions
 process.on('uncaughtException',err=>{
     console.log(`ERROR:  ${err.message}`)
     console.log('Shutting down server due to uncaught exception')
     process.exit(1)
 })

 // Setting up Config File
 if(process.env.NODE_ENV !== 'PRODUCTION'){
    const dotenv = require('dotenv')
    dotenv.config({path:'./backend/config/config.env'})
 }

 // Connecting to Database
 connectDatabase()

 // Setting up Cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

 
 const server = app.listen(process.env.PORT,()=>{
     console.log(`Server started at PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
 })

 // Handle Unhandled Promise rejections
process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down the server due to Unhandled Promise rejection');
    server.close(() => {
        process.exit(1)
    })
})