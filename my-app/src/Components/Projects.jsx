import React, { useState } from "react";
import "./Projects.css";
import project1 from '../Images/punchline.jpeg'
function Projects() {
    const [showMore, setShowMore] = useState(false);

    const toggleReadMore = () => {
        setShowMore(!showMore)
    }
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="image-container">
                        <img src={project1} alt="punchline" className="project1" />
                        <div className="takeme-wrapper">
                            <button onClick={() => window.open("https://webdev.cse.buffalo.edu/hci/teams/punchline", "_blank")} className="takeme-button">
                                Take Me
                            </button>
                        </div>
                    </div>

                    <div className="card-content">
                        <h2>PunchLine</h2>
                        <p>
                            PunchLine was created by a team of five developers and one project manager.
                            The platform allows users to interact with one another, earn badges based on
                            their activity, and choose a role to find their favorite games.
                        </p>
                        {showMore && (
                            <div className="extra-description">
                                <p>
                                    Users can add others as friends, making it easy to build a gaming community.
                                    A search bar enables users to quickly find posts, and the home page features
                                    a list of trending games to keep users updated on what's popular.
                                    The platform focuses on fostering user engagement and teamwork.
                                </p>
                                <button onClick={toggleReadMore} className="close-button">
                                    Close
                                </button>
                            </div>
                        )}
                        {!showMore && (
                            <div className="meta-row">
                                <span className="date">5/20/2025</span>
                                <button className="read-button" onClick={toggleReadMore}>
                                    Read More
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;