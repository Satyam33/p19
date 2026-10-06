export type Product = {
  slug: string;
  name: string;
  shortName: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  description: string[];
  features: string[];
  applications: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
};

export const products: Product[] = [
  {
    slug: "cotton-fabric",
    name: "Cotton Fabric",
    shortName: "Cotton",
    image: "/images/products/cotton-fabric.jpg",
    imageAlt: "Printed cotton fabric kurta woven by P19 Versatile Fab",
    excerpt:
      "Breathable, hypoallergenic and naturally soft — cotton is the backbone of the natural-fibre garment market.",
    description: [
      "Cotton is a highly breathable material derived from easily sustainable plants, with natural hypoallergenic and insulation properties. It makes up the majority of the natural-fibre garment market.",
      "At P19 Versatile Fab we weave plain and printed cotton fabrics from carefully sourced yarn, producing a soft, durable cloth that is ideal for everyday wear, ethnic garments and home textiles such as bed sheets and towels.",
    ],
    features: [
      "Soft, breathable and skin friendly",
      "Naturally hypoallergenic fibre",
      "High absorbency and easy to dye",
      "Durable for repeated washing",
    ],
    applications: ["Kurtis & ethnic wear", "Shirts & T-shirts", "Bed sheets & towels", "Robes & nightwear"],
    metaTitle: "Cotton Fabric Manufacturer in Surat",
    metaDescription:
      "Buy premium plain and printed cotton fabric direct from P19 Versatile Fab, a weaving factory in Surat. Breathable, durable cotton for garments and home textiles.",
    keywords: ["cotton fabric manufacturer", "cotton fabric Surat", "printed cotton fabric", "plain cotton fabric wholesale"],
  },
  {
    slug: "woolen-fabric",
    name: "Woolen Fabric",
    shortName: "Woolen",
    image: "/images/products/woolen-fabric.jpg",
    imageAlt: "Woolen fabric ethnic suit by P19 Versatile Fab",
    excerpt:
      "Soft, light and full of air — woolen fabric is a natural insulator for warm, comfortable garments.",
    description: [
      "Woolen is a type of yarn made from carded wool. Woolen yarn is soft, light, stretchy and full of air, which makes it an excellent insulator.",
      "Unlike worsted yarn, where fibres are combed to lie parallel, carded woolen yarn produces a lofty, warm fabric. We weave woolen fabrics that retain warmth while staying comfortable and lightweight.",
    ],
    features: ["Excellent natural insulation", "Soft, light and stretchy", "Breathable warmth", "Rich texture and drape"],
    applications: ["Winter suits & kurtas", "Shawls & stoles", "Jackets & coats", "Blankets"],
    metaTitle: "Woolen Fabric Manufacturer in Surat",
    metaDescription:
      "Soft, warm and lightweight woolen fabric woven by P19 Versatile Fab in Surat, Gujarat. Ideal for winter wear, shawls and jackets. Enquire for wholesale orders.",
    keywords: ["woolen fabric manufacturer", "woolen fabric Surat", "wool fabric wholesale"],
  },
  {
    slug: "polyester-fabric",
    name: "Polyester Fabric",
    shortName: "Polyester",
    image: "/images/products/polyester-fabric.jpg",
    imageAlt: "Polyester fabric garment woven at P19 Versatile Fab",
    excerpt:
      "Strong, wrinkle resistant and colour-fast — polyester is used extensively in apparel and home furnishing.",
    description: [
      "Fabrics woven from polyester thread or yarn are used extensively in apparel and home furnishings — from shirts, trousers, coats and caps to bed sheets, blankets and upholstered furniture.",
      "Polyester fibre is also used as a cushioning and insulating material in pillows, comforters and upholstery padding. Our polyester fabrics offer excellent strength, shape retention and vibrant, long-lasting colour.",
    ],
    features: ["High strength and durability", "Wrinkle and shrink resistant", "Quick drying", "Holds colour exceptionally well"],
    applications: ["Shirts, trousers & coats", "Sarees & dress material", "Upholstery & furnishing", "Bed sheets & blankets"],
    metaTitle: "Polyester Fabric Manufacturer in Surat",
    metaDescription:
      "Durable, wrinkle-resistant polyester fabric manufactured by P19 Versatile Fab, Surat. Perfect for apparel, sarees and home furnishing. Bulk orders welcome.",
    keywords: ["polyester fabric manufacturer", "polyester fabric Surat", "polyester fabric wholesale"],
  },
  {
    slug: "chiffon-fabric",
    name: "Chiffon Fabric",
    shortName: "Chiffon",
    image: "/images/products/chiffon-fabric.jpg",
    imageAlt: "Lightweight chiffon fabric dress by P19 Versatile Fab",
    excerpt:
      "Lightweight, sheer and elegant — chiffon brings flow and grace to every garment.",
    description: [
      "Chiffon is a lightweight fabric made from synthetic material or silk fibres. It is a sheer, net-like fabric that is translucent and soft to the touch.",
      "To minimise the translucent effect, several layers of chiffon are often used together in dresses. Chiffon can be used in almost any garment and instantly brings elegance and style.",
    ],
    features: ["Lightweight and sheer", "Beautiful flowing drape", "Soft to the touch", "Layers elegantly"],
    applications: ["Sarees & dupattas", "Evening gowns", "Blouses & tops", "Scarves"],
    metaTitle: "Chiffon Fabric Manufacturer & Supplier in Surat",
    metaDescription:
      "Elegant, lightweight chiffon fabric from P19 Versatile Fab, Surat. Sheer and flowing chiffon for sarees, dupattas, gowns and scarves. Request a quote today.",
    keywords: ["chiffon fabric manufacturer", "chiffon fabric Surat", "chiffon fabric supplier"],
  },
  {
    slug: "satin-jacquard-fabric",
    name: "Satin Jacquard Fabric",
    shortName: "Satin Jacquard",
    image: "/images/products/satin-jacquard-fabric.jpg",
    imageAlt: "Satin jacquard lehenga fabric by P19 Versatile Fab",
    excerpt:
      "A soft, lustrous satin finish combined with intricate woven jacquard patterns.",
    description: [
      "Satin is more than just a soft, shiny fabric used for fancy dresses. Satin refers to the weave, not the fibre, and most fabric characterised as satin has a smooth, lustrous finish.",
      "Our satin jacquard fabrics combine that signature sheen with patterns woven directly into the cloth on jacquard looms — perfect for festive wear, evening bags and premium upholstery.",
    ],
    features: ["Lustrous satin finish", "Patterns woven into the fabric", "Smooth, luxurious hand-feel", "Rich, festive appearance"],
    applications: ["Lehengas & festive wear", "Gowns & bridal wear", "Evening bags", "Premium upholstery"],
    metaTitle: "Satin Jacquard Fabric Manufacturer in Surat",
    metaDescription:
      "Luxurious satin jacquard fabric woven by P19 Versatile Fab in Surat. Lustrous satin with intricate jacquard patterns for festive and bridal wear.",
    keywords: ["satin jacquard fabric", "satin jacquard manufacturer", "jacquard fabric Surat"],
  },
  {
    slug: "diamond-georgette-fabric",
    name: "Diamond Georgette Fabric",
    shortName: "Diamond Georgette",
    image: "/images/products/diamond-georgette-fabric.jpg",
    imageAlt: "Diamond georgette fabric outfit by P19 Versatile Fab",
    excerpt:
      "A premium, thicker georgette that holds colour and shape — no lining required.",
    description: [
      "Diamond Georgette is a premium-quality georgette fabric that is thicker than regular georgette and does not require lining.",
      "Its ability to retain colour and shape over time makes it one of the most popular fabrics for ethnic and western wear alike, offering a graceful fall with a rich, textured surface.",
    ],
    features: ["Thicker premium georgette", "No lining required", "Retains colour and shape", "Graceful fall and texture"],
    applications: ["Sarees & suits", "Kurtis & gowns", "Lehengas", "Western dresses"],
    metaTitle: "Diamond Georgette Fabric Manufacturer in Surat",
    metaDescription:
      "Premium diamond georgette fabric from P19 Versatile Fab, Surat — thicker, lining-free georgette that keeps its colour and shape. Wholesale enquiries welcome.",
    keywords: ["diamond georgette fabric", "georgette fabric manufacturer", "georgette fabric Surat"],
  },
  {
    slug: "cotton-jacquard-fabric",
    name: "Cotton Jacquard Fabric",
    shortName: "Cotton Jacquard",
    image: "/images/fabric-swatches.jpg",
    imageAlt: "Cotton jacquard fabric swatches in multiple colours",
    excerpt:
      "Affordable, loom-woven patterns with the comfort of natural cotton.",
    description: [
      "Cotton jacquard fabrics are among the most affordable patterned fabrics made on looms. Cotton is less complex to work with and is a great alternative to linen jacquard fabrics.",
      "The design is woven directly into the cloth, giving a durable, textured pattern that will not fade or peel like a print — while keeping the breathability of cotton.",
    ],
    features: ["Woven-in patterns", "Breathable natural cotton", "Affordable alternative to linen jacquard", "Durable, long-lasting design"],
    applications: ["Kurtas & jackets", "Dress material", "Cushion covers", "Table linen & curtains"],
    metaTitle: "Cotton Jacquard Fabric Manufacturer in Surat",
    metaDescription:
      "Breathable cotton jacquard fabric with woven-in designs, manufactured by P19 Versatile Fab in Surat. Ideal for garments and home décor.",
    keywords: ["cotton jacquard fabric", "cotton jacquard manufacturer", "jacquard fabric Surat"],
  },
  {
    slug: "taffeta-fabric",
    name: "Taffeta Fabric",
    shortName: "Taffeta",
    image: "/images/fabric-quality.jpg",
    imageAlt: "Taffeta fabric lehenga woven by P19 Versatile Fab",
    excerpt:
      "Crisp, smooth and with a subtle sheen — taffeta gives structure to occasion wear.",
    description: [
      "Taffeta is a crisp, smooth, plain-woven fabric with a distinctive rustle and subtle sheen. It holds its shape beautifully, giving volume and structure to garments.",
      "We weave taffeta that is ideal for festive outfits, linings and décor, offering a rich look with dependable strength.",
    ],
    features: ["Crisp, structured hand-feel", "Subtle lustrous sheen", "Holds shape and volume", "Smooth plain weave"],
    applications: ["Lehengas & gowns", "Garment linings", "Curtains & drapes", "Decorative accessories"],
    metaTitle: "Taffeta Fabric Manufacturer in Surat",
    metaDescription:
      "Crisp, lustrous taffeta fabric manufactured by P19 Versatile Fab in Surat, Gujarat. Perfect for lehengas, gowns, linings and décor.",
    keywords: ["taffeta fabric", "taffeta fabric manufacturer", "taffeta fabric Surat"],
  },
  {
    slug: "polyester-jacquard-fabric",
    name: "Polyester Jacquard Fabric",
    shortName: "Polyester Jacquard",
    image: "/images/georgette-lehenga.jpg",
    imageAlt: "Polyester jacquard fabric outfit by P19 Versatile Fab",
    excerpt:
      "The strength of polyester with elegant woven jacquard designs.",
    description: [
      "Polyester jacquard combines the strength, wrinkle resistance and colour-fastness of polyester with intricate patterns woven on jacquard looms.",
      "It is an excellent choice for garments and furnishings that need to look premium while standing up to everyday use.",
    ],
    features: ["Strong and wrinkle resistant", "Intricate woven designs", "Excellent colour retention", "Low maintenance"],
    applications: ["Ethnic & festive wear", "Blazers & jackets", "Upholstery", "Curtains & furnishing"],
    metaTitle: "Polyester Jacquard Fabric Manufacturer in Surat",
    metaDescription:
      "Durable polyester jacquard fabric with elegant woven patterns, made by P19 Versatile Fab in Surat. For ethnic wear, jackets and furnishing.",
    keywords: ["polyester jacquard fabric", "polyester jacquard manufacturer", "jacquard fabric Surat"],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
