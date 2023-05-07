const routes = require('next-routes')();

// left- url
//right path
routes
    .add('/homePage', 'HomePage')
    .add('/allProjects', 'AllProjects')
    .add('/communityProjectDetails/:address', 'CommunityProjectDetails')
    .add('/privateProjectDetails/:address', 'PrivateProjectDetails')
    .add('/newPrivateProject', '/PrivateNewProject')
    .add('/newCommunityProject', '/CommunityNewProject')
    .add('/payments', '/Payments')
    .add('/allProjects', 'AllProjects')
    .add('/communityProjectDetails/:address/requests', '/RequestsShow')
    .add('/communityProjectDetails/:address/requests/new', '/NewRequests');

// .add('/community/:address/details', 'CommunityProjectDetails')
// .add('/private/:address/details', 'private_project_details')

module.exports = routes;