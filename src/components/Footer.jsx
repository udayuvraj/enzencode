import React from 'react';
import '../Styles/Footer.css'
import { IoIosCheckboxOutline } from "react-icons/io";
import { BsLink } from "react-icons/bs";


const Footer = (props) => {
    return (
        <>
        <div className='container'>
            <div className='sub'>
                <div className='display-heading'>
                    Project Details
                </div>
                <div className='first'>
                    <div className='projectHeading'>
                        Project ID
                    </div>
                    <div className='desc'>
                        {props.projectID}
                    </div>
                </div>
                <div className='first'>
                    <div className='projectHeading'>
                        Project Name
                    </div>
                    <div className='desc'>
                        {props.projectName}
                    </div>
                </div>
                <div className='first'>
                    <div className='projectHeading'>
                        Project Manager
                    </div>
                    <div className='desc'>
                        {props.projectManager}
                    </div>
                </div>
                <div className='first'>
                    <div className='projectHeading'>
                        Delivery Member
                    </div>
                    <div className='desc'>
                        {props.DeliveryMember}
                    </div>
                </div>
                <div className='first'>
                    <div className='projectHeading'>
                        Design Manager
                    </div>
                    <div className='desc'>
                        {props.DesignManager}
                    </div>
                </div>
            </div>
            <div className='sub'>
                <div className='display-heading'>
                    Actions For You
                </div>
                <div className='second'>
                    <div className='makeflex m-5'>
                        <IoIosCheckboxOutline color='green'/>
                        {props.actionOne}
                    </div>
                    <div className='makeflex m-5'>
                        <IoIosCheckboxOutline color='green'/>
                        {props.actionTwo}
                    </div>
                    <div className='makeflex m-5'>
                        <IoIosCheckboxOutline color='green'/>
                        {props.actionThree}
                    </div>
                </div>
            </div>
            <div className='sub'>
                <div className='display-heading'>
                    Smart Forms
                </div>
                <div className='third'>
                    <div className='m-5'>
                    <BsLink color='orange'/>
                    <a href="#" className='tag'>Contract Calloff form</a>

                    </div>
                    
                    <div className='m-5'>
                    <BsLink  color='orange'/>
                    <a href="#" className='tag'>Works Infromation Form</a>

                    </div>
                    <div className='m-5'>
                    <BsLink  color='orange'/>
                    <a href="#" className='tag'>Glenn Harri's Task Dashboard</a>

                    </div>
                    <div className='m-5'>
                    <BsLink  color='orange'/>
                    <a href="#" className='tag'>My Survey Requests</a>

                    </div>
                    
                </div>
            </div>
        </div>
        </>
    );
};

export default Footer;
