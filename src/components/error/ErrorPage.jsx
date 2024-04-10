import './ErrorPage.scss';

const ErrorPage = () => {

    const handleReturnClick = () => {
        window.history.back();
    }

    return (
        <main id='mainError'>

            <h1>Erreur</h1>

            <img src='/404.svg' alt='404 robot'/>

            <p>Je pense que vous cherchez une ressource inexistante, je vous prie de bien vouloir vous servir du menu de navigation pour retourner sur le droit chemin ou du bouton ci-dessous, merci.</p>

            <button onClick={handleReturnClick}>Retour</button>
        </main>
    )

}

export default ErrorPage;