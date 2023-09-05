import express from 'express'
import __dirname from "./utils.js";
import handlebars from 'express-handlebars'
import viewsRouter from './routes/views.router'
import {Server} from 'socket.io'

const app = express()

