import React from 'react';
import SideIcons from '../SideIcons/SideIcons';
import {faUser, faFolder, faBriefcase, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css';

export default function SideBar() {
    return (
        <div className="sidebar-menu">
            <SideIcons href="#intro" icon={faUser} />
            <SideIcons href="#experiences" icon={faBriefcase} />
            <SideIcons href="#projects" icon={faFolder} />
            <SideIcons href="#contact" icon={faAddressCard} />
        </div>
    );
}
