import "../style/pages/Partners.css";
import logos from "../JSONs/partners.json";
import GroupOfPartners from "../components/GroupOfPartners";
import React, { useState, useEffect } from 'react';

function Partners(){

    const [supporters, setSupporters] = useState([]);
    const [organizers, setOrganizers] = useState([]);
    
    useEffect(() => {
        const fetchPartners = async () => {
        try {
            const response = await fetch("./partners.json");
            const data = await response.json();
            setSupporters(data.supporters);
            setOrganizers(data.organizers);
        } catch (error) {
            console.error('Ocorreu um erro ao obter os integrantes:', error);
        }
        };

        fetchPartners();
    }, []);

    return (
        <div id="organizers" className="partners">
            <div className="partnersTile">
            <GroupOfPartners logos={supporters} text="Apoiadores"/>
            <GroupOfPartners logos={organizers} text="Realizadores"/>
            </div>
        </div>
    )
}

export default Partners;