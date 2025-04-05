"use client";
import React, { useState } from "react";
import { filledButton } from "../components/buttons";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Basic validation
    if (!name || !email || !phone || !message) {
      setError("אנא מלא את כל השדות");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`https://hooks.zapier.com/hooks/catch/17609357/2cnscw8?name=${name}&email=${email}&phone=${phone}&message=${message}`, {method: "GET"});

      if (response.ok) {
        setSuccess("ההודעה נשלחה בהצלחה");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setError("ארעה שגיאה בשליחת ההודעה. אנא נסה שוב");
      }
    } catch (err) {
      setError("ארעה שגיאה בשליחת ההודעה. אנא נסה שוב");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="w-full bg-white py-20 px-6 relative overflow-hidden">
      {/* Background circles with refined placement and matching colors */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-secondary-text rounded-full opacity-20"></div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-secondary-text rounded-full opacity-20"></div>
      <div className="absolute top-10 right-10 w-16 h-16 bg-secondary-text rounded-full opacity-10"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-secondary-text rounded-full opacity-10"></div>

      <form
        onSubmit={handleForm}
        className="relative md:w-3/4 rtl m-auto flex flex-col justify-between items-center gap-6 p-14 rounded-2xl bg-background-primary-light container"
      >
        <h1 className="text-4xl py-4 font-bold text-center">
          צור קשר עם <span className="text-secondary-text">הצוות שלנו</span>
        </h1>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 p-3 rounded w-full max-w-3xl text-center">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 p-3 rounded w-full max-w-3xl text-center">
            {success}
          </div>
        )}
        <input
          className="rounded-xl p-4 w-full max-w-3xl"
          placeholder="השם שלך"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="rounded-xl p-4 w-full max-w-3xl"
          placeholder="כתובת דוא״ל"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="rounded-xl p-4 w-full max-w-3xl"
          placeholder="מספר טלפון"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <textarea
          className="rounded-xl p-4 w-full max-w-3xl"
          placeholder="הודעה לצוות שלנו"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
        />
        <button
          type="submit"
          disabled={loading}
          className={"w-fit m-auto " + filledButton}
        >
          {loading ? "טוען..." : "שלח הודעה לצוות"}
        </button>
      </form>
    </section>
  );
}
