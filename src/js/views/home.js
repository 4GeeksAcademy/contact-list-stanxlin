import rigoImage from "../../img/rigo-baby.jpg";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

/*const apiURL = "https://playground.4geeks.com/apis/fake/contact/agenda/stanxlin_agenda";
const getContacts = async () => {
	return await fetch(apiURL)
		.then(response => response.json())
		.catch(error => console.log(error))
};
*/

export const Home = () => {
    const { store, actions } = useContext(Context);
    //adds to store
    actions.getContacts();
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    {store?.contacts?.map((contact) => (
                        <div key={contact.id} className="section" style={{ paddingTop: '25px', paddingBottom: '25px', display: 'flex', alignItems: 'center' }}>
                            <img src={rigoImage} style={{ width: '120px', height: 'auto', borderRadius: '75%', border: '1px solid grey', marginRight: '10px' }} alt="Rigo Baby" />
                            <div className="info-container" style={{ display: "block" }}>
                                <div className="name">
                                    {contact?.full_name}
                                </div>
                                <div className="address">
                                    <i className="fas fa-location-dot" style={{ marginRight: "10px" }}></i>
                                    {contact?.address}
                                </div>
                                <div className="Phone">
                                    <i className="fas fa-phone" style={{ marginRight: "10px" }}></i>
                                    {contact?.phone}
                                </div>
                                <div className="email">
                                    <i className="fas fa-envelope" style={{ marginRight: "10px" }}></i>
                                    {contact?.email}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

