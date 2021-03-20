import React from 'react';
import Button from "@material-ui/core/IconButton";
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const About = () => {
    return (
        <div className="container">
            <div className="py-4">
                <h1 className="heading">Developed and Designed by Harshit Goyal</h1>
                <div style={{ display: "flex" }}>
                    <Link to="/hj">
                        <Button style={{ color: "black" }} onClick={() => window.open("https://github.com/harshitg23", '_blank')}>
                            <GitHubIcon />
                        </Button>
                    </Link>
                    <Button style={{ color: "black" }} onClick={() => window.open("https://twitter.com/harshit_hit", '_blank')}>
                        <TwitterIcon />
                    </Button>
                    <Button style={{ color: "black" }} onClick={() => window.open("https://www.linkedin.com/in/harshit-goyal-62a124193/", '_blank')}>
                        <LinkedInIcon />
                    </Button>
                </div>
            </div>

        </div>
    );
};

export default About;