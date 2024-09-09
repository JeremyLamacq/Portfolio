import { useEffect, useState } from 'react';
import'./Header.scss';
import { useLocation, Link } from "react-router-dom";

const Header = () => {
    const [location, setLocation] = useState(useLocation().pathname);

    const url = useLocation().pathname;
    
    useEffect(() => {
        setLocation(url);
    }, [url]);
    

    return (
        <div id='navBar' style={{ display: location === '/' ? 'none' : ''}}>

            <Link to='/' id="accueil"> Accueil</Link>
            <Link to='/skills' id="skills"> Compétence</Link>
            <Link to='/projets' id='projets'> Projets</Link>
            <Link to='/experience' id="experience"> Expérience</Link>
            <Link to='/contact' id="contact"> Contact</Link>

        </div>
    )
}

export default Header;