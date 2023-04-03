import { SkillLogo } from '@/interfaces/skill-data';
import  * as React from 'react';
// import styles from './angular.module.css';

export default function AngularIcon({item}: {item: SkillLogo}) {

    return(
        <span title={item?.skillName} className="icon-Angular">
            <span className="path1"></span>
            <span className="path2"></span>
            <span className="path3"></span>
            </span>
    )
}