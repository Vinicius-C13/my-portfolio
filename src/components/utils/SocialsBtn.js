import React from 'react';
import linkedinIcon from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';

export default function Button(props) {
    if(props.social === 'linkedin')
        return (<a href="https://linkedin.com/in/vinicius-cs"><img src={linkedinIcon} alt='linkedin'/></a>)
    else if(props.social === 'github')
        return (<a href="https://github.com/Vinicius-C13"><img src={githubIcon} alt='linkedin'/></a>)
    else
        return
}