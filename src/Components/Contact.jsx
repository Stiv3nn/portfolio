import React from 'react';
import data from '../data/data.json';
import './Contact.css';

const Contact = () => {
    const { socials } = data;

    return (
        <section className="contact-section">
            <div className="contact-container">
                <div className="contact-header">
                    <h2 className="section-title">Lavoriamo Insieme</h2>
                    <p className="contact-subtitle">
                        Hai un progetto in mente o vuoi semplicemente fare due chiacchiere?
                        Scrivimi pure, rispondo solitamente entro 24 ore.
                    </p>
                </div>

                <div className="contact-content">
                    {/* INFO DI CONTATTO */}
                    <div className="contact-info">
                        <div className="info-item">
                            <i className="devicon-google-plain"></i>
                            <div>
                                <h4>Email</h4>
                                <p>stiven.hoxha@example.it</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <i className="devicon-github-original"></i>
                            <div>
                                <h4>GitHub</h4>
                                <p>github.com/tuo-username</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <i className="devicon-match-plain"></i>
                            <div>
                                <h4>Località</h4>
                                <p>Italia (Remoto / Ibrido)</p>
                            </div>
                        </div>
                    </div>

                    {/* FORM DI CONTATTO */}
                    <form className="contact-form">
                        <div className="form-group">
                            <input type="text" placeholder="Nome" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Email" required />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Il tuo messaggio" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn-submit">
                            Invia Messaggio
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;