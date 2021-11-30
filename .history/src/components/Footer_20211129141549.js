import React from 'react'
import styled from "styled-components"


const PageFooter = styled.footer`
    width : 100%;
    display : flex;
    flex-direction : column;
    justify-content: center;
    background-color:#ABE7E7;
    padding-top : 20px;
`
const ListContainer= styled.div`
    display : flex;
    justify-content : center;
    gap: 10%;
`
const ListElements = styled.div`

`
const LogoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap : 10%;
    padding : 40px;
`


export default function Footer() {
    return (
        <PageFooter>
            {/* <Nav/> */}
            <ListContainer>
                <ListElements>
                    <ul>
                        <h3>À propos de Tripadvisor</h3>
                        <li>À propos de Tripadvisor</li>
                        <li>Presse</li>
                        <li>Ressources et règlements</li>
                        <li>Emplois</li>
                        <li>Confiance et sécurité</li>
                        <li>Fonctionnement du site</li>
                    </ul>
                </ListElements>
                <ListElements>
                    <ul>
                        <h3>Explorez</h3>
                        <li>Écrire un avis</li>
                        <li>Ajouter un lieu</li>
                        <li>S'inscrire </li>
                        <li>Travellers' Choice</li>
                        <li>ÉcoLeaders</li>
                        <li>Assistance</li>
                    </ul>
                </ListElements>
                <ListElements>
                    <ul>
                        <h3>Utilisez nos solutions</h3>
                        <li>Propriétaires</li>
                        <li>Avantage business</li>
                        <li>Résultats sponsorisés</li>
                        <li>Faites votre publicité avec nous</li>
                        <li>S'affilier</li>
                    </ul>
                </ListElements>
                <ListElements>
                    <ul>
                        <h3>Télécharger l'appli</h3>
                        <li>Application iPhone</li>
                        <li>Application Android</li>
                    </ul>
                </ListElements>
            </ListContainer>
           <LogoContainer>
                <i className="fab fa-facebook icon" style={{fontSize : "40px"}}></i>
                <i className="fab fa-instagram icon" style={{fontSize : "40px"}}></i>
                <i className="fab fa-twitter-square icon" style={{fontSize : "40px"}}></i>
           </LogoContainer>
        </PageFooter>
    )
}
