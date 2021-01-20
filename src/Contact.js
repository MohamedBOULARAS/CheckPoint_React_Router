import React from 'react';
import { useHistory, useParams } from 'react-router-dom';




function Contact() {

    const history = useHistory();

     let {slug} = useParams()

    return(
        <div>
        <h1>SECTION CONTACT</h1>
        <button style={{ backgroundColor: 'green', height: '20px', weight: '10px', color: 'navajowhite', borderRadius: '1'}}
        onClick={() => history.push('/')}
        >Go to Accueil</button>
        <p>Bienvennue au projets {slug}</p>
        </div>
    )

}

export default Contact;