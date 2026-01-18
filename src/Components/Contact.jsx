import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <div className="contact-header">
                    <h2 className="section-title">Lavoriamo Insieme</h2>
                    <p className="contact-subtitle">
                        Hai un progetto in mente o vuoi semplicemente fare due chiacchiere?
                        Scrivimi pure, rispondo solitamente <strong>entro 24 ore</strong>.
                    </p>
                </div>

                <div className="contact-content">
                    {/* INFO GRID: Ora centrata e in riga */}
                    <div className="contact-info-row">
                        <div className="info-item">
                            <i className="devicon-google-plain"></i>
                            <div className="info-text">
                                <h4>Email</h4>
                                <p>hstiven.dev@gmail.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <i className="devicon-github-original"></i>
                            <div className="info-text">
                                <h4>GitHub</h4>
                                <p>@stiv3nn</p>
                            </div>
                        </div>

                        {/* <div className="info-item">
                            <i className="devicon-match-plain"></i>
                            <div className="info-text">
                                <h4>Località</h4>
                                <p>Italia (Remoto)</p>
                            </div>
                        </div> */}
                    </div>

                    {/* FORM DI CONTATTO: Centrato sotto le info */}
                    <form className="contact-form">
                        <div className="form-row">
                            <div className="form-group">
                                <input type="text" placeholder="Nome" required />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Email" required />
                            </div>
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