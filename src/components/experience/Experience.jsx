import'./Experience.scss';

const Experience = () => {

    return (
        <main id='mainExperience'>

            <h1>Expérience</h1>

            <article className='article'>
                <h2 id='first'>Aujourd&apos;hui</h2>
                <div>
                    <img src='/experiences/DEV.jpg' alt='developpement web' className='pictures'/>
                    <p>Je partage actuellement mon temps entre le développement de ce portfolio puis un projet avec Symfony pour une école et un travail en 3x8h en tant qu&apos;intérimaire</p>
                </div>
            </article>

            <article className='article'>
                <h2>2020/2023 Chargé d&apos;affaires</h2>
                <div className='toTop'>
                    <p>
                        Mon travail consistait à démarcher les clients susceptibles d’avoir un besoin de levage ou transport + levage. 
                        Je m&apos;occupais ensuite de la ou les visites techniques pour définir le matériel à utiliser,d&apos;effectuer les différents devis, 
                        et enfin d&apos;organiser les différents chantiers au planning avec l’exploitant pour ensuite lui fournir toutes les informations nécessaires 
                        à la réalisation du chantier (plans, arrêté de voirie effectués par les soins, etc…).
                        Il n&apos;était pas rare que j&apos;aille sur les chantiers pour le démarrage, 
                        je préparais ensuite la facturation client en comptabilisant les heures passées en chantier pour ensuite valider auprès du client
                    </p>
                    <img src='/experiences/CHARGE_AFFAIRES.jpg' alt='chargé d&apos;affaires' className='pictures'/>
                </div>
            </article>

            <article className='article'>
                <h2>2018/2020 Conducteur de grue mobile</h2>
                <div>
                    <img src='/experiences/GRUE_MOBILE.jpg' alt='gure mobile' className='pictures'/>
                    <p>
                        Avec l’aide de grues mobiles de différentes tailles (de 40 tonnes à 130 tonnes) j’avais pour mission d’effectuer différents chantiers selon les besoins. 
                        Chantiers divers, de l’agriculture à l’éolien en passant même par l’aviation ou encore le maritime.
                    </p>
                </div>
            </article>

            <article className='article'>
                <h2>2015/2018 Conducteur de grue à tour</h2>
                <div className='toTop'>
                    <p>
                        Au sein de chantiers de maçonnerie sur des constructions d’immeubles essentiellement mon rôle était d’organiser le chantier niveau stockage, 
                        de préparer les différents accessoires pour les ouvriers et de les approvisionner en temps voulu.
                    </p>
                    <img src='/experiences/GRUE_A_TOUR.jpg' alt='grue a tour' className='pictures'/>
                </div>
            </article>

            <article className='article '>
                <h2>2011/2015 Maçon</h2>
                <div>
                    <img src='/experiences/CHANTIER.webp' alt='chantier gros oeuvre' className='pictures'/>
                    <p>
                        Mon poste était de réaliser différentes tâches de maçonnerie sur des chantiers d’immeubles ou de génie civil que ce soit sur la réalisation d’élévation ou de plancher.
                    </p>
                </div>
            </article>
            <div id="transition"/>


        </main>
    )
}

export default Experience;