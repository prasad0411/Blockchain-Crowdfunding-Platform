const routes = require('next-routes')();

// left- url
//right path
routes
    .add('/homePage', 'HomePage')
    .add('/allProjects', 'AllProjects')
    .add('/projectDetails', 'CommunityProjectDetails')
    .add('/newProject', '/NewProject')
    // .add('/community/:address/details', 'CommunityProjectDetails')
    // .add('/private/:address/details', 'private_project_details')
    .add('/payments', '/Payments')
    .add('/allProjects', 'AllProjects');

// .add('/', '/pages/index')
module.exports = routes;