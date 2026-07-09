'use client';
import { useState } from 'react';

/**
 * Formulaire de contact — préparé, non connecté.
 * Pour l'activer : créer une route app/api/contact/route.ts (ou un service
 * type Resend / Formspree) et remplacer le corps de handleSubmit.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return <p className="lead">Merci. Votre message est bien arrivé — notre équipe vous répond rapidement.</p>;
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="c-name">Nom</label>
        <input id="c-name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="c-org">Organisation</label>
        <input id="c-org" name="organization" type="text" autoComplete="organization" />
      </div>
      <div className="field">
        <label htmlFor="c-mail">Adresse e-mail</label>
        <input id="c-mail" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="c-subj">Vous êtes</label>
        <select id="c-subj" name="profile" defaultValue="Un établissement d'enseignement">
          <option>Un établissement d&apos;enseignement</option>
          <option>Une entreprise</option>
          <option>Une institution</option>
          <option>Un praticien / intervenant</option>
          <option>Autre</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="c-msg">Votre message</label>
        <textarea id="c-msg" name="message" required />
      </div>
      <button className="btn" type="submit">
        Envoyer
      </button>
    </form>
  );
}
