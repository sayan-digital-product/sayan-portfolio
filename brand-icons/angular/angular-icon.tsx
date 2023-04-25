import { SkillLogo } from '@/interfaces/skill-data';
import Tooltip from '@mui/material/Tooltip';
import  * as React from 'react';
// import styles from './angular.module.css';

export default function AngularIcon({item}: {item: SkillLogo}) {

    return(
            <span className="icon-Angular">
                <span className="path1"></span>
                <span className="path2"></span>
                <span className="path3"></span>
            </span>
    )
}