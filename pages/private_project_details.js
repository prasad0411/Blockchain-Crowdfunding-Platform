import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import Payments from "./Payments";
import React from 'react';

function ProjectDetails() {


    const [images, setImages] = React.useState([
        "https://picsum.photos/id/1018/1200/400",
        "https://picsum.photos/id/1015/1200/400",
        "https://picsum.photos/id/1019/1200/400",
    ]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "20%",
    };

    return (
        <>
            <Head>
                <title>Project Details</title>
                <link rel="stylesheet" href="/global.css" />
            </Head>
            <div className="App">
                <Slider {...settings}>
                    {images.map((image) => (
                        <div key={image}>
                            <img src={image} alt="slider-img" />
                        </div>
                    ))}
                </Slider>
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
