import'./HomePage.scss';
import { GrProjects } from "react-icons/gr";
import { MdOutlineWorkHistory } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const HomePage = () => {
    
    return (
        <main id='mainHomePage'>
        
            <h1 id='h1'>Lamacq Jérémy - Développeur Web</h1>

            <section id='top'>

                <div id='left'>


                    <Link to='/skills' id='skills'>
                        <p>Mes <br/> compétences</p>
                        <GiSkills className='icons' />
                    </Link>

                    <Link to='/projets' id='projets'>
                        <p>Mes <br/> projets</p>
                        <GrProjects className='icons' />
                    </Link>

                    <Link to='/experience' id='experience'>
                        <p>Mon <br/> expérience <br/> professionelle</p>
                        <MdOutlineWorkHistory className='icons' />
                    </Link>

                    <Link to='/contact' id='contact'>
                        <p>Contactez-moi</p>
                        <GrContact className='icons' />
                    </Link>

                </div>

                <div id='right'>

                    <img src='/portfolio3-rogné.png' alt='photo identité' />

                </div>
            
            </section>

            <section id='bottom'>

                <p>Bonjour!</p>
                <p>Passionné par le développement web, vous pourrez retrouver sur mon portefolio tout ce qu&apos;il y
                a à savoir sur moi depuis que j&apos;ai commencé à travailler en 2011. </p>
                <p>Ce portfolio et les nombreux projets à venir vont me permettre de continuer à progresser aussi bien avec ReactJS qu&apos;avec Symfony</p>   
                <div>   
                    <a href='https://www.linkedin.com/in/jeremy-lamacq/'  target='_blank' rel='noreferrer'><FaLinkedin /></a>
                    <a href='https://github.com/JeremyLamacq'  target='_blank' rel='noreferrer'><FaGithubSquare/></a>
                </div>
                
            </section>
            <div id="transition"/>

        </main>
    )

}

export default HomePage;