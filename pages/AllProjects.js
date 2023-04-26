import { useState } from 'react';
import Head from "next/head";
import { useRouter } from 'next/router';
// Define the list of projects
export const projects = [
    {
        id: 1,
        title: 'Private Project 1',
        type: 'private',
        description: 'This is the description of private project 1'
    },
    {
        id: 3,
        title: 'Community Project 1',
        type: 'community',
        description: 'This is the description of community project 1'
    },
    {
        id: 2,
        title: 'Private Project 2',
        type: 'private',
        description: 'This is the description of private project 2'
    },
    {
        id: 4,
        title: 'Community Project 2',
        type: 'community',
        description: 'This is the description of community project 2'
    },
    {
        id: 5,
        title: 'Private Project 3',
        type: 'private',
        description: 'This is the description of private project 3'
    },
    {
        id: 6,
        title: 'Private Project 4',
        type: 'private',
        description: 'This is the description of private project 4'
    },
    {
        id: 7,
        title: 'Community Project 3',
        type: 'community',
        description: 'This is the description of community project 3'
    },
    // {
    //     id: 8,
    //     title: 'Community Project 4',
    //     type: 'community',
    //     description: 'This is the description of community project 4'
    // },
    // {
    //     id: 9,
    //     title: 'Private Project 5',
    //     type: 'private',
    //     description: 'This is the description of private project 5'
    // },
    // {
    //     id: 10,
    //     title: 'Community Project 5',
    //     type: 'community',
    //     description: 'This is the description of community project 5'
    // }
];

export default function AllProjects() {
    // Define state variables for the filter and heading
    const [filter, setFilter] = useState('all');
    const [heading, setHeading] = useState('Crowd Funding Website');
    const [modalOpen, setModalOpen] = useState(false);

    const handleFilterChange = (filter) => {
        setFilter(filter);
        if (filter === 'all') {
            setHeading('All Projects');
        } if (filter === 'private') {
            setHeading('Private Projects');
        } else if (filter === 'community') {
            setHeading('Community Projects');
        }
    };

    // Filter the projects based on the selected filter
    const filteredProjects = filter === 'all' ?
        projects : projects.filter((project) => project.type === filter);

    const router = useRouter();

    const handleCreateNewProject = () => {
        router.push('/newProject');
    };


    return (
        <>
            <Head>
                <title>All Projects</title>
                <link rel="stylesheet" href="/allProjects.css" />
            </Head>
            <div className="container-fluid h-100">
                <div className="row profile d-flex justify-content-end align-items-center">

                </div>
                <div className="row filter d-flex justify-content-center align-items-center mb-4">
                    <div className="col-md-12">
                        <h1 className="text-center mb-4 font-weight-bold">Crowd Funding Website</h1>

                        <button
                            className={`btn btn-sm btn-primary rounded-pill mr-2
                            ${filter === 'all' ? 'active' : ''}`}
                            onClick={() => handleFilterChange('all')}
                        >
                            All Projects
                        </button>
                        <button
                            className={`btn btn-sm btn-primary rounded-pill mr-2
                            ${filter === 'private' ? 'active' : ''}`}
                            onClick={() => handleFilterChange('private')}
                        >
                            Private Projects
                        </button>
                        <button
                            className={`btn btn-sm btn-primary rounded-pill
                            ${filter === 'community' ? 'active' : ''}`}
                            onClick={() => handleFilterChange('community')}
                        >
                            Community Projects
                        </button>

                    </div>
                </div>
                <div className="row h-100">
                    <div className="col-md-6 left-col d-flex flex-column justify-content-center align-items-center">
                        <h2 className="title text-center">{filter === 'private' ? 'Private Projects' : 'Community Projects'}</h2>
                        <div className="card-list d-flex flex-wrap">
                            {filteredProjects.map((project) => (
                                <div className="card mb-4 mr-4">
                                    <div className="card-body">
                                        <h5 className="card-title">{project.title}</h5>
                                        <p className="card-text">{project.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <button className="floating-action-button"
                    onClick={handleCreateNewProject}
                    title='Create a new project'>
                    <span>Project ? </span>
                    <i className="fa fa-plus"></i>
                </button>
                {modalOpen && <ProjectModal setModalOpen={setModalOpen} />}
            </div>
        </>
    );
}
