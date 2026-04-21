"use client";

import { useState } from "react";
import styles from "@/styles/ContactForm.module.css";
import { useLanguage } from "@/context/LanguageContext";

const ContactForm = () => {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    console.log("Pendiente");
  };

  return (
    <form className={styles.form} onSubmit={submitForm}>
      <div className={styles.flex}>
        <div>
          <label htmlFor="name">{t('formName')}</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">{t('formEmail')}</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject">{t('formSubject')}</label>
        <input
          type="text"
          name="subject"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="message">{t('formMessage')}</label>
        <textarea
          name="message"
          id="message"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">{t('formSubmit')}</button>
    </form>
  );
};

export default ContactForm;
