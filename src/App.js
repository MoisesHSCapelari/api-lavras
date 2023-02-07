import dotenv from 'dotenv';
dotenv.config();
import './Database';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import HomeRoutes from './Routes/HomeRoutes';
import UserRoutes from './Routes/UserRoutes';
import ChildrensRoutes from './Routes/ChildrensRoutes';
import TokenRoutes from './Routes/TokenRoutes';
import UploadRoutes from './Routes/UploadRoutes';
import SpaceChildrensRoutes from './Routes/SpaceChildrensRoutes';
import EventRegistrationRoutes from './Routes/EventRegistrationRoutes';
import ColaboratesRoutes from './Routes/ColaboratesRoutes';
import GruopsRoutes from './Routes/GruopsRoutes';

const whiteList = [
  'https://espaco-infantil-lavras.admccbgru.com.br',
  'http://localhost:3000',
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Acesso restrito'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', HomeRoutes);
    this.app.use('/usuarios', UserRoutes);
    this.app.use('/criancas', ChildrensRoutes);
    this.app.use('/tokens', TokenRoutes);
    this.app.use('/upload', UploadRoutes);
    this.app.use('/espacoi', SpaceChildrensRoutes);
    this.app.use('/evento', EventRegistrationRoutes);
    this.app.use('/colaboradoras', ColaboratesRoutes);
    this.app.use('/grupos', GruopsRoutes);
  }
}

export default new App().app;
