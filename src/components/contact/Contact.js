import React from 'react';
import lorenivy from '../../resources/images/lorenivy_small.jpg';
import Photo from '../../elements/Photo';

import './Contact.css';

export default function Contact(props){

    return(
        <div id={'Contact-Section'}>
            <div className={'contactContainer'}>
            <Photo image={lorenivy} credit={'Vincente Santiago'} alt={'semi-adequate musician'}/>
            For all inquiries please reach out to &nbsp;
            <a href='&#109;ai&#108;t&#111;&#58;h%65%79humdr%75m&#64;gma&#105;%6C&#46;c%&#54;Fm'>&#104;e&#121;humdru&#109;&#64;&#103;m&#97;i&#108;&#46;&#99;o&#109;</a>
            </div>
        </div>
    )
}