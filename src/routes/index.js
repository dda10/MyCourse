const newsRouter = require('./news');
const siteRouter = require('./home');
const coursesRouter = require('./courses');

function route(app) {
  app.use('/news', newsRouter);
  app.use('/', siteRouter);
  app.use('/courses', coursesRouter);
}

module.exports = route;
