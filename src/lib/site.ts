export const site = {
  name: "P19 Versatile Fab",
  legalName: "P19 Versatile Fab",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.p19versatilefab.com",
  tagline: "Weaving Factory & Fabric Manufacturer in Surat",
  description:
    "P19 Versatile Fab is a weaving factory in Surat, Gujarat manufacturing premium cotton, woolen, polyester, chiffon, georgette, taffeta and jacquard fabrics with tested quality for garments and home textiles.",
  keywords: [
    "fabric manufacturer in Surat",
    "weaving factory Surat",
    "textile manufacturer Gujarat",
    "cotton fabric manufacturer",
    "polyester fabric manufacturer",
    "chiffon fabric supplier",
    "diamond georgette fabric",
    "satin jacquard fabric",
    "cotton jacquard fabric",
    "taffeta fabric",
    "woolen fabric",
    "wholesale fabric Surat",
    "P19 Versatile Fab",
  ],
  phone: "+91 84019 19841",
  phoneHref: "tel:+918401919841",
  whatsappHref: "https://wa.me/918401919841",
  email: "p19versatilefab@gmail.com",
  address: {
    street: "Plot No A3, Rajhans Texpa, Baleshwar, Palsana",
    city: "Surat",
    region: "Gujarat",
    postalCode: "394315",
    country: "IN",
    full: "Plot No A3, Rajhans Texpa, Baleshwar, Palsana, Surat, Gujarat 394315",
  },
  geo: { latitude: 21.113413, longitude: 72.973021 },
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930.4946862932294!2d72.97302186542818!3d21.113413546424237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be05b612581f865%3A0x46a769a3a6c69f8d!2sP19%20Versatile%20Fab!5e0!3m2!1sen!2sin!4v1678793558927!5m2!1sen!2sin",
  mapLink: "https://www.google.com/maps/search/?api=1&query=P19+Versatile+Fab+Palsana+Surat",
  hours: [
    { days: "Monday – Saturday", time: "9:00 AM – 6:00 PM" },
    { days: "Sunday & Public Holidays", time: "Closed" },
  ],
  logo: "/images/p19-versatile-fab-logo.png",
  logoLight: "/images/p19-versatile-fab-logo-light.png",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/contact-us", label: "Contact" },
];

export const testimonials = [
  {
    name: "Vivek Patel",
    role: "Regular Client",
    quote:
      "I am a regular client of P19 Versatile Fab and I can say that they produce some of the highest quality fabrics I have ever seen. I am very happy to be a customer of this mill.",
  },
  {
    name: "Harsha Desai",
    role: "Custom Design Client",
    quote:
      "P19 Versatile Fab exceeded my expectations in designing a fabric. I wanted a fabric in a specific design — they took my requirements and the results were mind blowing. Always happy to be a regular customer.",
  },
  {
    name: "Jenit Tankaria",
    role: "Bulk Order Client",
    quote:
      "They took my requirement and delivered results in comparatively less time than other mills, and always on time. I recommend them as the go-to option for urgent orders.",
  },
];

export const qualityTests = [
  { label: "Tensile Strength", value: 95 },
  { label: "Tear Strength", value: 90 },
  { label: "Seam Properties", value: 85 },
  { label: "Pilling Resistance", value: 80 },
];

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
