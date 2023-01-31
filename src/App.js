import dotenv from 'dotenv';
dotenv.config();
import './Database';
import express from 'express';
import HomeRoutes from './Routes/HomeRoutes';
import UserRoutes from './Routes/UserRoutes';
import ChildrensRoutes from './Routes/ChildrensRoutes';
import TokenRoutes from './Routes/TokenRoutes';
import UploadRoutes from './Routes/UploadRoutes';
import EventEIRoutes from './Routes/EventEIRoutes';
import EventRegistrationRoutes from './Routes/EventRegistrationRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', HomeRoutes);
    this.app.use('/usuarios', UserRoutes);
    this.app.use('/criancas', ChildrensRoutes);
    this.app.use('/tokens', TokenRoutes);
    this.app.use('/upload', UploadRoutes);
    this.app.use('/espaco-infantil', EventEIRoutes);
    this.app.use('/evento', EventRegistrationRoutes);
  }
}

export default new App().app;
