import'./Skills.scss';

const Skills = () => {

    return (
        <main id='mainSkills'>

            <h1>Compétences</h1>

            <section id="slideshow">
                <div className="entire-content">
                    <div className="content-carrousel">
                        <figure className="shadow"><img className='logo' src="/skills/github.svg" alt='github'/></figure>
                        <figure className="shadow"><img className='logo' src="/skills/html-5.svg" alt='html5'/></figure>
                        <figure className="shadow"><img className='logo' src="/skills/css-3.svg" alt='css3'/></figure>
                        <figure className="shadow"><img className='logo' src="/skills/php.svg" alt='php'/></figure>
                        <figure className="shadow"><img className='logo' src="/skills/symfony.svg" alt='symfony'/></figure>
                        <figure className="shadow"><img className='logo' src="/skills/javascript.svg" alt='javascript'/></figure>
                        <figure className="shadow"><img className='logo' src="/skills/reactjs.svg" alt='reactjs'/></figure>
                        <figure className="shadow"><img className='logo' src="/skills/redux.svg" alt='redux'/></figure>
                        <figure className="shadow"><img className='logo' src="/skills/twig.svg" alt='twig'/></figure>
                        <figure className="shadow"><img className='logo' src="/skills/java.svg" alt='java'/></figure>

                    </div>
                </div>
            </section>

            <section>
                <p>Pendant ma formation au sein de l&apos;école O&apos;clock, j&apos;ai pu découvrir le développement web aussi bien Back que Front.</p>
                <p>Nous nous sommes ensuite spécialisé vers un framework ou une librairie, et dans un premier temps je suis partie sur la librairie Front ReactJS où nous y avons également vu TypeScript et React Redux.</p>
                <p>A la suite de la formation j&apos;ai pu suivre les cours en replay pour apprendre à utiliser le frameword PHP Symfony qui, allié à Twig, permet de développer des projets complet et puissant.</p>
                <p>Aujourd&apos;hui je développe en Java, bientôt en Node.js pour continuer d&apos;apprendre chaque jour.</p>
                <p>Côté Back, je travaille essentiellement avec MariaDB, mais pour des raisons de coût je travaille aussi avec PostgreSQL en production</p>
            </section>
            <div id="transition"/>

        </main>
    )
}

export default Skills;