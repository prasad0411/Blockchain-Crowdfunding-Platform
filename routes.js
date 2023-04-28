const routes = require('next-routes')();

// left- url
//right path
routes
    .add('/allProjects', 'AllProjects')
    .add('/newProject', '/NewProject')
    .add('/community/:address/details', 'community_project_details')
    .add('/private/:address/details', 'private_project_details')
    .add('/payments', '/Payments')
    .add('/allProjects', 'AllProjects');

// .add('/', '/pages/index')
module.exports = routes;