import Sequelize from 'sequelize';
import Database from '../Config/Database';
import User from '../Models/User';
import Children from '../Models/Children';
import SpaceChildren from '../Models/SpaceChildren';
import EventRegistration from '../Models/EventRegistration';
import Colaborate from '../Models/Colaborate';
import Gruop from '../Models/Gruop';

const models = [User, Children, SpaceChildren, EventRegistration, Colaborate, Gruop];

const connection = new Sequelize(Database);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
