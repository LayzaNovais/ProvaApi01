
import 'dotenv/config'

import {con} from './repository/Connection.js'
import PetController from './controller/PetController.js'

import cors from 'cors';
import express from 'express';


const server = express();
server.use(cors());
server.use(express.json());

server.listen (process.env.PORT,() =>
            console.log (`Api conctada na $ {process.env.PORT}`))


export default server;