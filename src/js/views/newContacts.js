import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const NewContacts = () => {
    const { actions } = useContext(Context);
    const [formData, setFormData] = useState({
        "fullName": "",
        "email": "",
        "phone": "",
        "address": "",
        "agenda_slug": "stanxlin_agenda"
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        console.log("hi")
        e.preventDefault();

        const success = await actions.addContact(formData);

        if (success) {
            setFormData({
                "fullName": "",
                "email": "",
                "phone": "",
                "address": "",
            });
        }
    };

    return (
        <div className="container mt-4" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="jumbotron" style={{ width: "70%" }}>
                <h1 className="text-center">Add a new contact</h1>
                <form className="addContactForm" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="fullName" className="form-label">Full Name</label>
                        <input type="text" value={formData.fullName} id="fullName" name="fullName" className="form-control" placeholder="Full Name" autoComplete="name" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" value={formData.email} id="email" name="email" className="form-control" placeholder="Enter email" autoComplete="email" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="tel" value={formData.phone} id="phone" name="phone" className="form-control" placeholder="Enter phone" autoComplete="tel" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" value={formData.address} id="address" name="address" className="form-control" placeholder="Enter address" autoComplete="address-line1" onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        </div>
    );
};

NewContacts.propTypes = {
    match: PropTypes.object
};

export default NewContacts;
