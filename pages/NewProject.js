import { useState } from "react";
import Head from "next/head";
import { useRouter } from 'next/router';


export default function CreateNewProject() {
    const [image, setImage] = useState(null);
    const [text, setText] = useState("");
    const [description, setDescription] = useState("");
    const [maxEth, setMaxEth] = useState("");
    const [minEth, setMinEth] = useState("");

    const handleImageUpload = (event) => {
        setImage(URL.createObjectURL(event.target.files[0]));
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleMaxEth = (event) => {
        setMaxEth(event.target.value);
    };

    const handleMinEth = (event) => {
        setMinEth(event.target.value);
    };

    const router = useRouter();

    const handlePayments = () => {
        router.push('/payments');
    };

    return (
        <>
            <Head>
                <title>New project</title>
                <link rel="stylesheet" href="/newProject.css" />
            </Head>

            <div className="App">
                <header>
                    <h1>Create a new Project</h1>
                </header>
                {/* <div className="add-image">
                    <p>Add Image</p>
                    <div className="image-card">
                        {image ? (
                            <img src={image} alt="uploaded" />
                        ) : (
                            <label htmlFor="file-upload">
                                <input
                                    type="file"
                                    id="file-upload"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                />
                            </label>
                        )}
                    </div>
                </div> */}
                <div className="add-title">
                    <p>Title</p>
                    <div className="text-card">
                        <textarea
                            className="textarea-1"
                            placeholder="Enter title here"
                            value={text}
                            onChange={handleTextChange}
                        ></textarea>
                    </div>
                </div>
                <div className="add-description">
                    <p>Description</p>
                    <div className="description-card">
                        <textarea
                            className="textarea-2"
                            placeholder="Enter description here"
                            value={description}
                            onChange={handleDescriptionChange}
                        ></textarea>
                    </div>
                </div>
                <div className="add-MaxEth">
                    <p>Maximum Eth to be collected</p>
                    <div className="MaxEth-card">
                        <textarea
                            className="textarea-3"
                            placeholder="Max Eth"
                            value={maxEth}
                            onChange={handleMaxEth}
                        ></textarea>
                    </div>
                </div>
                <div className="add-MinEth">
                    <p>Minimum Eth to be collected</p>
                    <div className="MinEth-card">
                        <textarea
                            className="textarea-4"
                            placeholder="Min Eth"
                            value={minEth}
                            onChange={handleMinEth}
                        ></textarea>
                    </div>
                </div>
                <button className="submit" onClick={handlePayments}>
                    Submit
                </button>
            </div>
        </>
    );
}