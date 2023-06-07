import NavigationBar from "./NavigationBar";
import React from "react";
import './Detail.css';

const Detail= () => {

    return (
        <div>
            <NavigationBar />
            <div className="largebox"></div>
            <p>Nom du Jeu</p>
            <p>3.75/5 - 155 votes</p>
            <h2>Synopsis</h2>
            <p>resumé du jeu</p>
            <h2>Date de sortie</h2>
            <p>01/07/2023</p>
            <h2>Developpeur</h2>
            <p>Ubisoft</p>
            <h2>Genre</h2>
            <p>Action</p>
            <h2>Plateformes</h2>           
        </div>
    );
    
}
export default Detail;