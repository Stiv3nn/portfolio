import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');
    const [copyFeedback, setCopyFeedback] = useState(false);

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
                setStatus('MESSAGGIO_INVIATO');
                form.current.reset();
                setTimeout(() => setStatus(''), 3000);
            }, (error) => {
                setStatus('ERRORE_INVIO');
                setTimeout(() => setStatus(''), 3000);
            });
    };

    // Funzione per copiare l'email
    const handleCopyEmail = () => {
        navigator.clipboard.writeText('hstiven.dev@gmail.com');
        setCopyFeedback(true);
        setTimeout(() => setCopyFeedback(false), 2000);
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
                        {/* CARD EMAIL CON FUNZIONE COPIA */}
                        <div className="info-item clickable-card" onClick={handleCopyEmail}>
                            <i className="devicon-google-plain"></i>
                            <div className="info-text">
                                <h4>Email</h4>
                                <p>{copyFeedback ? "Copiato negli appunti!" : "hstiven.dev@gmail.com"}</p>
                            </div>
                        </div>

                        {/* CARD GITHUB (LINK ESTERNO) */}
                        <a
                            href="https://github.com/stiv3nn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="info-item clickable-card"
                        >
                            <i className="devicon-github-original"></i>
                            <div className="info-text">
                                <h4>GitHub</h4>
                                <p>@stiv3nn</p>
                            </div>
                        </a>
                    </div>

                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                        <div className="form-row">
                            <div className="form-group">
                                <input type="text" name="name" placeholder="Nome Cognome" required />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Email" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea name="message" placeholder="Il tuo messaggio" rows="5" required></textarea>
                        </div>

                        <button type="submit" className="btn-submit" disabled={status === 'SENDING...'}>
                            {status === 'SENDING...' ? 'CARICAMENTO...' : 'Invia Messaggio'}
                        </button>
                    </form>
                </div>
            </div>

            {status === 'MESSAGGIO_INVIATO' && (
                <div className="cy-success-overlay">
                    <div className="cy-success-content">
                        <div className="success-icon">✓</div>
                        <h3>MESSAGGIO INVIATO</h3>
                        <p>Grazie per avermi contattato. Ti risponderò al più presto!</p>
                        <div className="loading-bar"></div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;