import'./HomePage.scss';
import { MdOutlineWorkHistory } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const HomePage = () => {
    
    return (
        <>
            <h1>Lamacq Jeremy - Développeur Web</h1>
            
            <main>
                <section id='top'>

                    <div id='left'>

                        <Link to='/experience' id='experience'>
                            <MdOutlineWorkHistory />
                            <p>Mon expérience professionelle</p>
                        </Link>

                        <Link to='/skills' id='skills'>
                            <GiSkills />
                            <p>Mes compétences</p>
                        </Link>

                        <Link to='/contact' id='contact'>
                            <p>Contactez-moi</p>
                            <GrContact />
                        </Link>

                    </div>

                    <div id='center'>
                        <img id='devWeb' src='/web-development.svg' alt='webDev' />
                    </div>

                    <div id='right'>

                        <img id='avatar' src='/portfolio3-rogné.png' alt='photo identité' />

                    </div>
                
                </section>

                <section id='bottom'>

                    <p>Bonjour le monde!</p>
                    <p>Passionné par le développement web, vous pourrez retrouver sur mon portefolio tous ce qu&apos;il y
                    à savoir sur moi depuis que j&apos;ai commencé à travailler en 2011. </p>   
                    <div>   
                        <a href='https://www.linkedin.com/in/jeremy-lamacq/'  target='_blank' rel='noreferrer'><FaLinkedin /></a>
                        <a href='https://github.com/JeremyLamacq'  target='_blank' rel='noreferrer'><FaGithubSquare/></a>
                    </div>
                    
                </section>

            </main>
        </>
    )

}

export default HomePage;