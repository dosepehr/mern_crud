import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';


const server = express()
server.use(cors())





server.listen(4000, () => {
    console.log('server is running on port 4000')
})




