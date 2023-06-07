import NavigationBar from "./NavigationBar";
import React from "react";
import './Home.css';

const Home = () => {

    return (
        <div>
            <NavigationBar />
            <h1>Bienvenue</h1>
            <h2>Ceci est un site crée dans le but de répertorier les jeux que vous aimez et d’archiver ceux que vous avez terminé</h2>
            <p>Liste des jeux :</p>
            <p>Trier par : </p>
            <button>Nom</button>
            <button>Note</button>
            <div className="box"></div>
            <p>Nom du Jeu</p>
            <div className="box"></div>
            <p>Nom du Jeu</p>
            <div className="box"></div>
            <p>Nom du Jeu</p>
            <div className="box"></div>
            <p>Nom du Jeu</p>
            <div className="box"></div>
            <p>Nom du Jeu</p>
            <button>Voir Plus</button>
        </div>
    );
    
}
export default Home;