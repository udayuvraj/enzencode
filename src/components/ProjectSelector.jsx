// src/components/ProjectSelector.js
import React, { useState } from 'react';
import Footer from './Footer';
import secondlogo from '../assets/stand.jpeg'; // Import the image
import ProjectTimeline from './ProjectTimeline';


const ProjectSelector = () => {
    const [selectedProject, setSelectedProject] = useState('');
    const [clickonGo, setclickonGo] = useState('');
    const [isHovered, setIsHovered] = useState(false);

    const handleChange = (e) => {
        setSelectedProject(e.target.value);
    };

    const handleGoClick = () => {
        setclickonGo(selectedProject);
        // Implement your logic here
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: isHovered ? '#ff9900' : 'orange', // Change color on hover
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        marginLeft: '25px', // Added margin to the left to move the button to the right
        transition: 'background-color 0.3s', // Smooth transition effect
    };

    return (
        <>
            <div style={containerStyle}>
                <div style={selectorStyle}>
                    <select value={selectedProject} onChange={handleChange} style={dropdownStyle}>
                        <option value="">Choose Project</option>
                        <option value="West Weybridge 132kV Auto Close Scheme">West Weybridge 132kV Auto Close Scheme</option>
                        <option value="Tower Line Strategic Spares">Tower Line Strategic Spares</option>
                    </select>
                    <button 
                        onClick={handleGoClick} 
                        style={buttonStyle} 
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave}
                    >
                        Go
                    </button>
                </div>
            </div>
            <div>
                {clickonGo !== "" && <ProjectTimeline />} 
            </div>
            {clickonGo !== "" && <Footer projectID="X-S.IPJ.107861" projectName="West Weybridge 132kV Auto Close Scheme" projectManager="Glenn Harris" DeliveryMember ="Clancy" DesignManager="Phil Hobbs" actionOne="Business objectivies & scope identified" actionTwo="CU budget identified" actionThree="Allocate scheme to delivery route" />}
            
        </>
    );
};

const containerStyle = {

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start', // Align to the top
    height: '50px', // Full viewport height
    paddingTop: '20px', // Optional padding from the top
};

const selectorStyle = {
    display: 'flex',
    alignItems: 'center',
};


const dropdownStyle = {
    padding: '10px',
    fontSize: '16px',
    marginRight: '10px',
    border: '2px solid orange', // Set border color to orange
    borderRadius: '5px' // Optional: add some rounding to the corners
};

export default ProjectSelector;
