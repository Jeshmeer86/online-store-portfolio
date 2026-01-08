import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <main style={{ padding: "3rem 1rem", maxWidth: 900, margin: "0 auto" }}>
      <h1>Contact</h1>
      <p className="muted" style={{ marginTop: 8 }}>
        Send me a message and I will get back to you.
      </p>

      <ContactForm />
    </main>
  );
}
