const routes = require('next-routes')();

// left- url
//right path
routes
    .add('/allProjects', 'AllProjects')
    .add('/newProject', '/NewProject')
    .add('/details', 'projectDetails')
    .add('/payments', '/Payments')
    .add('/allProjects', 'AllProjects');

// .add('/', '/pages/index')
module.exports = routes;