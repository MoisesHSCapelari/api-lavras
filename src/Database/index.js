import Sequelize from 'sequelize';
import Database from '../Config/Database';
import User from '../Models/User';
import Children from '../Models/Children';
import EventEI from '../Models/EventEI';
import EventRegistration from '../Models/EventRegistration';

const models = [User, Children, EventEI, EventRegistration];

const connection = new Sequelize(Database);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
