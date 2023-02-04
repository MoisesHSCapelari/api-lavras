"use strict";module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.renameColumn('eventsEI', 'history', 'hisotryConted'),

  down: (queryInterface, Sequelize) => queryInterface.renameColumn('eventsEI', 'hisotryConted', 'history'),
};
