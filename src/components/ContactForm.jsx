import { useState } from "react";

function encode(data) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");
}

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "idle", msg: "" });

  function onChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e) {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: "error", msg: "Please fill in all fields." });
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setStatus({ type: "error", msg: "Please enter a valid email address." });
      return;
    }

    setStatus({ type: "loading", msg: "Sending..." });

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...form }),
      });

      setStatus({
        type: "success",
        msg: "Message sent. I’ll get back to you soon.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({
        type: "error",
        msg: "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <form
      className="contact-form"
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={onSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p style={{ display: "none" }}>
        <label>
          Don’t fill this out: <input name="bot-field" onChange={() => {}} />
        </label>
      </p>

      <div className="form-row">
        <div className="field">
          <label className="muted">Name</label>
          <input
            name="name"
            className="search-input"
            value={form.name}
            onChange={onChange}
          />
        </div>

        <div className="field">
          <label className="muted">Email</label>
          <input
            name="email"
            className="search-input"
            value={form.email}
            onChange={onChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="muted">Message</label>
        <textarea
          name="message"
          className="search-input"
          style={{ minHeight: 120, resize: "vertical" }}
          value={form.message}
          onChange={onChange}
        />
      </div>

      <div className="portfolio__cta">
        <button
          className="btn"
          type="submit"
          disabled={status.type === "loading"}
        >
          Send
        </button>
        {status.type !== "idle" ? (
          <p className="muted" style={{ margin: 0 }}>
            {status.msg}
          </p>
        ) : null}
      </div>
    </form>
  );
}
