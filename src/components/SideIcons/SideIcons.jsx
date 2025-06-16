import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faFolder, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import './SideIcons.css'

function SideIcons({ href, icon }) {
    return (
        <a href={href} className="icon">
            <FontAwesomeIcon className="icon-logo" icon={icon} />
        </a>
    );
}


export default SideIcons;
