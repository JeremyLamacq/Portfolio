import { IconContext } from 'react-icons/lib';
import { TbBrandVite } from 'react-icons/tb';
import { FaReact, FaHtml5 } from 'react-icons/fa';
import { SiSass } from "react-icons/si";
import "./Loading.scss";

const Loading = () => {

    return (
        <>
          <div className="dots">
              <IconContext.Provider value={{color: "#0101f9", size: "100%"}}>

                <div id='react'><FaReact /></div>
                
              </IconContext.Provider> 

              <IconContext.Provider value={{color: "red", size: "100%"}}>
              
                <div id='vite'><TbBrandVite /></div>
                <div id='html'><FaHtml5 /></div>
                <div id='sass'><SiSass /></div>

              </IconContext.Provider>
          </div>  
        </>
    );
}

export default Loading;