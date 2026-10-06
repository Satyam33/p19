"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

type Fields = { name: string; phone: string; email: string; fabric: string; quantity: string; message: string };

const empty: Fields = { name: "", phone: "", email: "", fabric: "", quantity: "", message: "" };

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [fields, setFields] = useState<Fields>(() => {
    const match = products.find((p) => p.slug === searchParams.get("fabric"));
    return match ? { ...empty, fabric: match.name } : empty;
  });
  const [sent, setSent] = useState(false);

  const update = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFields((f) => ({ ...f, [key]: e.target.value }));

  const composeMessage = () =>
    [
      `New enquiry from ${site.url.replace(/^https?:\/\//, "")}`,
      `Name: ${fields.name}`,
      `Phone: ${fields.phone}`,
      fields.email && `Email: ${fields.email}`,
      fields.fabric && `Fabric: ${fields.fabric}`,
      fields.quantity && `Quantity: ${fields.quantity}`,
      fields.message && `Message: ${fields.message}`,
    ]
      .filter(Boolean)
      .join("\n");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.open(`${site.whatsappHref}?text=${encodeURIComponent(composeMessage())}`, "_blank", "noopener");
    setSent(true);
  };

  const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent(
    `Fabric enquiry${fields.fabric ? ` — ${fields.fabric}` : ""}`,
  )}&body=${encodeURIComponent(composeMessage())}`;

  const inputClass =
    "w-full border border-line bg-white px-5 py-4 text-ink placeholder:text-body/70 outline-none transition-colors focus:border-gold";

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" aria-describedby="form-note">
      <label className="sm:col-span-1">
        <span className="sr-only">Your name</span>
        <input required autoComplete="name" placeholder="Your Name *" value={fields.name} onChange={update("name")} className={inputClass} />
      </label>
      <label>
        <span className="sr-only">Phone number</span>
        <input
          required
          type="tel"
          autoComplete="tel"
          placeholder="Phone Number *"
          value={fields.phone}
          onChange={update("phone")}
          className={inputClass}
        />
      </label>
      <label>
        <span className="sr-only">Email address</span>
        <input type="email" autoComplete="email" placeholder="Email Address" value={fields.email} onChange={update("email")} className={inputClass} />
      </label>
      <label>
        <span className="sr-only">Fabric of interest</span>
        <select value={fields.fabric} onChange={update("fabric")} className={`${inputClass} appearance-none`}>
          <option value="">Fabric of Interest</option>
          {products.map((p) => (
            <option key={p.slug} value={p.name}>
              {p.name}
            </option>
          ))}
          <option value="Other / Custom">Other / Custom</option>
        </select>
      </label>
      <label className="sm:col-span-2">
        <span className="sr-only">Approximate quantity</span>
        <input placeholder="Approximate Quantity (e.g. 2,000 metres)" value={fields.quantity} onChange={update("quantity")} className={inputClass} />
      </label>
      <label className="sm:col-span-2">
        <span className="sr-only">Your message</span>
        <textarea
          rows={5}
          placeholder="Tell us about your requirement — design, colour, GSM, timeline…"
          value={fields.message}
          onChange={update("message")}
          className={`${inputClass} resize-y`}
        />
      </label>
      <div className="flex flex-wrap items-center gap-x-8 gap-y-4 sm:col-span-2">
        <button type="submit" className="btn">
          Send Enquiry on WhatsApp
        </button>
        <a href={mailtoHref} className="link-underline">
          or send by email
        </a>
      </div>
      <p id="form-note" className="text-sm sm:col-span-2" role="status">
        {sent
          ? "Thank you! WhatsApp has opened with your enquiry — just press send and our team will reply shortly."
          : "Your enquiry opens in WhatsApp (or your email app) so it reaches our team directly."}
      </p>
    </form>
  );
}
