import { RxHamburgerMenu } from "react-icons/rx";
import './Footer.scss';
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";


const Footer = () => {

    const [location, setLocation] = useState(useLocation().pathname);
    const [isOpen, setIsOpen] = useState(false);

    const url = useLocation().pathname;
    
    useEffect(() => {
        setLocation(url);
    }, [url]);

    const handleOpenMenu = () => {
        setIsOpen(true)
    }

    const handleCloseMenu = () => {
        setIsOpen(prev=>!prev);
    }

        return  (
        
            <div style={{display: location === '/' ? 'none' : ''}}>
                <div id="burgerIcon" onClick={handleOpenMenu}><RxHamburgerMenu /></div> 
                    
                <div id="burgerMenu" style= {{ display: !isOpen ? 'none' : ''}} >
                    <Link to='/' onClick={handleCloseMenu} className="button"> Accueil</Link>
                    <Link to='/skills' onClick={handleCloseMenu} className="button"> Compétence</Link>
                    <Link to='/projets' onClick={handleCloseMenu} className="button"> Projets</Link>
                    <Link to='/experience' onClick={handleCloseMenu} className="button"> Expérience</Link>
                    <Link to='/contact' onClick={handleCloseMenu} className="button"> Contact</Link>
                </div>
                    
                <div id="fullScreen" onClick={handleCloseMenu} style={{display: !isOpen ? 'none' : ''}}></div>
            </div>
        )
}

export default Footer;