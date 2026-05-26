"use client";
import React, { useState } from "react";
import { filledButton } from "../components/buttons";
import { reportConversion } from "@/lib/gtag";

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

    // Validate that name includes at least first and last name
    if (name.trim().split(" ").length < 2) {
      setError("אנא הזן שם מלא הכולל שם פרטי ושם משפחה");
      return;
    }

    // Validate email using a simple regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("כתובת האימייל לא תקינה");
      return;
    }

    // Validate phone: must start with 0 and be 10 digits long (e.g., 0521234567)
    const phoneRegex = /^0\d{9}$/;
    if (!phoneRegex.test(phone)) {
      setError("מספר טלפון לא תקין. יש להזין מספר טלפון ישראלי תקני");
      return;
    }

    // Format phone number: change the leading 0 to +972
    const formattedPhone = phone.replace(/^0/, "+972");

    setLoading(true);
    try {
      const response = await fetch(
        `https://hooks.zapier.com/hooks/catch/17609357/2cnscw8?name=${encodeURIComponent(
          name
        )}&email=${encodeURIComponent(
          email
        )}&phone=${encodeURIComponent(
          formattedPhone
        )}&message=${encodeURIComponent(message)}`,
        { method: "GET" }
      );

      if (response.ok) {
        reportConversion('AW-11024127928/hF-kCJbxzLkaELiv24gp')
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
    <section className="w-full py-8 px-4" dir="rtl">
      <form
        onSubmit={handleForm}
        className="m-auto flex flex-col items-center gap-5 p-8 md:p-10 rounded-2xl bg-white border border-primary-sea/10 shadow-sm max-w-2xl w-full"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center text-primary-text">
          שלחו הודעה — <span className="text-primary-sea">נחזור אליכם</span>
        </h2>
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
