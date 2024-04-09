import'./Experience.scss';

const Experience = () => {

    return (
        <main id='mainExperience'>

            <h1>Expérience</h1>

            <article className='article'>
                <h2 id='first'>Aujourd&apos;hui</h2>
                <div>
                    <img src='/experiences/DEV.jpg' alt='developpement web' className='pictures'/>
                    <p>Actuellement en intérim dans une fromagerie, cela me permet de garder un emploi rémunéré et de développer mes compétences aussi bien en Front qu’en Back en dehors des 3x8h.</p>
                </div>
            </article>

            <article className='article'>
                <h2>2020/2023 Chargé d&apos;affaires</h2>
                <div className='toTop'>
                    <p>
                        Mon travail consistait à aller démarcher les clients susceptibles d’avoir besoin à un moment ou à un autre de levage ou transport + levage. 
                        J’avais ensuite à charge la ou les visites techniques pour définir le matériel à envoyer, à effectuer les différents devis, 
                        et enfin à organiser les différents chantiers au planning avec l’exploitant et lui fournir toutes les informations nécessaires 
                        à la réalisation du chantier (plans, arrêté de voirie effectués par les soins, etc…).
                        Au besoin je pouvais aller sur les chantiers pour le démarrage ou en cas de litige, 
                        mais la plupart du temps je récupérais juste les feuilles d’heures après chantier 
                        rempli par notre salarié et validé par le client pour finaliser le prix et l’envoyer en facturation.
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
                        de préparer les différents accessoires pour les ouvriers et de les approvisionner au besoin.
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

        </main>
    )
}

export default Experience;