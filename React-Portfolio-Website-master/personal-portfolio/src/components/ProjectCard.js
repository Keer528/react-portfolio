import React from "react";
import { Col } from "react-bootstrap";
// import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export const ProjectCard = ({ title, description, imgUrl, websiteLink, icons }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <a href={websiteLink} target="_blank" rel="noopener noreferrer">
                    <img src={imgUrl} alt={title} />
                </a>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div className="icons-container">
                        {icons && icons.map((icon, index) => (
                            <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={icon.icon} className="icon" />
                            </a>
                        ))}
                    </div>
                    <a href={websiteLink} target="_blank" rel="noopener noreferrer">
                        Visit Website
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-1" /> {/* 添加外部链接图标 */}
                    </a>
                </div>
            </div>
        </Col>
    )
}


