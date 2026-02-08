import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('SENDING...');

        emailjs.sendForm(
            'service_coding',
            'template_txrg0gl',
            form.current,
            'f3vMo7_Nj60quGQ90'
        )
            .then((result) => {
                console.log(result.text);
                setStatus('MESSAGGIO_INVIATO');
                form.current.reset();

                // Il messaggio ora scompare dopo 3 secondi (3000ms)
                setTimeout(() => {
                    setStatus('');
                }, 3000);
            }, (error) => {
                console.log(error.text);
                setStatus('ERRORE_INVIO');

                setTimeout(() => {
                    setStatus('');
                }, 3000);
            });
    };

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
                    </div>

                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                        <div className="form-row">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Nome Cognome"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Il tuo messaggio"
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn-submit"
                            disabled={status === 'SENDING...'}
                        >
                            {status === 'SENDING...' ? 'CARICAMENTO...' : 'Invia Messaggio'}
                        </button>
                    </form>
                </div>
            </div>

            {/* OVERLAY DI SUCCESSO AGGIORNATO */}
            {status === 'MESSAGGIO_INVIATO' && (
                <div className="cy-success-overlay">
                    <div className="cy-success-content">
                        <div className="success-icon">✓</div>
                        <h3>MESSAGGIO INVIATO</h3>
                        <p>Grazie per avermi contattato. Ti risponderò al più presto!</p>
                        {/* Ricorda di aggiornare l'animazione 'shrink' nel CSS a 3s */}
                        <div className="loading-bar"></div>
                    </div>
                </div>
            )}

            {status === 'ERRORE_INVIO' && (
                <div className="cy-error-toast">
                    <p>Si è verificato un errore. Riprova più tardi.</p>
                </div>
            )}
        </section>
    );
};

export default Contact;