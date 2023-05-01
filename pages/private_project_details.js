import Head from "next/head";
import Payments from "./Payments";
import React from 'react';

function ProjectDetails() {
    return (
        <>
            <Head>
                <title>Project Details</title>
                <link rel="stylesheet" href="/privateProjectDetails.css" />
            </Head>
            <div className="App">

                <h1 className="title">This is Title</h1>
                <div className="card">
                    <h2 className="description">Description</h2>
                    <p>
                        Lorem ipsum dolor sit amet. Hic libero perferendis et rerum dolorum
                        sit provident voluptatem et eveniet debitis qui inventore laboriosam
                        ut culpa recusandae. Sed distinctio optio rem voluptatibus provident
                        vel nobis placeat!
                    </p>
                </div>
                <Payments />
            </div>
        </>
    );
}

export default ProjectDetails;
