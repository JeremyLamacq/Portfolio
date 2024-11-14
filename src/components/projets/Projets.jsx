import'./Projets.scss';

const Projets = () => {

    return (
        <main id='mainProjets'>

            <h1>Mes projets</h1>

            <article className='article'>
                <h2 id='first'>Trip O&apos;dvisor</h2>
                <div>
                    <a className='pictures' href='https://github.com/JeremyLamacq/TripOdvisor'  target='_blank' rel='noreferrer'>
                        <img src='/projets/tripodvisor.png' alt="Trip O'dvisor" />
                    </a>
                    <div className='paragraphe'>
                        <p>Mon premier projet déployé a pour but de montrer un site respectant une certaine mise en forme, responsive et personnalisable. Il se contente pour l&apos;instant d&apos;une page d&apos;accueil, mais est entièrement prévu pour devenir complet et opérationnel à terme. Vous pouvez le retrouver ci dessous, mais aussi voir le code qui permet ce rendu. Bonne visite !</p>
                        <p>Codé avec HTML, CSS et JavaScript</p>
                        <a className='top' href='https://trip-odvisor.vercel.app'  target='_blank' rel='noreferrer'>Trip O&apos;dvisor</a>
                        <a href='https://github.com/JeremyLamacq/TripOdvisor'  target='_blank' rel='noreferrer'>dépôt GitHub</a>
                    </div>
                </div>
            </article>

            <article className='article'>
                <h2>Task Manager</h2>
                <div className='toTop'>
                    <div className='paragraphe'>
                        <p>Task Manager est un peu comme une todolist, il s&apos;effectue un CRUD complet en listant les descriptions de chaque élément de la bdd. J&apos;aimerais rapidement qu&apos;il puisse fournir une capture d&apos;écran au clic sur un bouton et du coup qu&apos;il soit remis à zéro à chaque rechargement de page. A vos notes !</p>
                        <p>Codé avec Java =&gt; Spring Boot, JavaScript, MariaDB en local et PostgreSQL en production</p>
                        <p>PS : Pour limiter les coûts de déployement, le serveur utilisé est un peu lent, il faut donc attendre un petit peu avant de voir apparaître la liste et les fonctionnalités qui vont avec. Merci de votre compréhension.</p>
                        <a className='top' href='https://task-manager-one-orcin.vercel.app'  target='_blank' rel='noreferrer'>Task Manager</a>
                        <a className='middle' href='https://github.com/JeremyLamacq/Task-Manager-Front'  target='_blank' rel='noreferrer'>dépôt GitHub Front</a>
                        <a href='https://github.com/JeremyLamacq/Task-Manager-Back'  target='_blank' rel='noreferrer'>dépôt GitHub Back</a>
                    </div>
                    <a className='pictures' href='https://github.com/JeremyLamacq/TripOdvisor'  target='_blank' rel='noreferrer'>
                        <img src='/projets/TaskManager.png' alt='chargé d&apos;affaires' className='pictures'/>
                    </a>
                </div>
            </article>

            <article className='article'>
                <h2>Task Giver</h2>
                <div>
                    <a className='pictures' href='https://github.com/JeremyLamacq/TripOdvisor'  target='_blank' rel='noreferrer'>
                        <img src='/projets/TaskGiver.png' alt='Task Giver' className='pictures'/>
                    </a>
                    <div className='paragraphe'>
                        <p>Task Giver est un projet de gestion de tâches, en effet on commence par créer ou intégrer une équipe qui n&apos;est pas limitée en nombre de personnes, mais où le rôle de chacun est décomposé en trois niveaux distincts (LEADER, GIVER, TASKER). Chaque personne peut avoir un ou plusieurs rôles, ce qui facilite l&apos;usage du site pour de petites équipes.</p>
                        <p>Le LEADER a pour missions de gérer son équipe (ajout/suppression de membres ou attributions de nouveaux rôles), les catégories de tâches à accomplir et a une vue sur ce les tâches de son équipe.</p>
                        <p>Le GIVER a pour rôle de gérer les tâches (créer, modifier, réassigner, supprimer)</p>
                        <p>Le TASKER regarde et accepte ou refuse la tâche qu&apos;on lui a assignée, ensuite il l&apos;éxécute, puis confirme que la tâche est terminée sur la plateforme.</p>
                        <p>Codé avec PHP =&gt; Symfony, JavaScript =&gt; ReactJS, MariaDB en local et PostgreSQL en production</p>
                        <p>La partie back de cette plateforme sera mise en production sous peu.</p>
                        <a className='top' href='https://task-giver-nprkh4ags-jeremylamacqs-projects.vercel.app'  target='_blank' rel='noreferrer'>Task Manager</a>
                        <a className='middle' href='https://github.com/JeremyLamacq/Task-Giver-Front'  target='_blank' rel='noreferrer'>dépôt GitHub Front</a>
                        <a href='https://github.com/JeremyLamacq/Task-Giver-Back'  target='_blank' rel='noreferrer'>dépôt GitHub Back</a>
                    </div>
                </div>
            </article>

            <article className='article'>
                <h2>Prochainement</h2>
                <div id='last'>
                    <p>Le prochain projet déployé sera un site permettant à des équipes de faire des pronostics entre eux sur les sujets de leurs choix. Je ne vous en dis pas plus, mais j&apos;espère pouvoir le présenter avant la fin de l&apos;année.</p>
                    <p>Codé avec Node.js, JavaScript =&gt; ReactJS</p>
                </div>
            </article>
            <div id="transition"/>
        </main>
    )
}

export default Projets;