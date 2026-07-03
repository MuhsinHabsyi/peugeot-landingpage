import imgExhaust from '../assets/images/h4-slider-img-1.jpg';
import imgBrakes from '../assets/images/h4-img-2.png';
import imgHelmet1 from '../assets/images/white_helmet-2.png';
import imgGloves1 from '../assets/images/h4-slider-1-img-1.png';
import imgFilter from '../assets/images/h1-img-6.png';
import imgJacket from '../assets/images/blog-4-img-2.jpg';
import imgBoots1 from '../assets/images/blog-4-img-3.jpg';
import imgKit from '../assets/images/h4-slider-img-2.jpg';
import imgBoots2 from '../assets/images/blog-4-img-1.jpg';
import imgGloves2 from '../assets/images/h4-slider-2-img-2.png';

export const products = [
  {
    id: 1,
    title: "Exhaust",
    category: "Sound",
    price: "$290.00",
    rating: 4.5,
    img: imgExhaust,
    tags: ["Fast", "Ride"],
    sku: "GP-EX-001",
    shortDesc: "High-performance racing exhaust system engineered to deliver raw power, responsive acceleration, and a signature deep rumble.",
    description: "Experience track-proven performance with the Peugeot Grand Prix Exhaust. Constructed from lightweight, high-grade alloys, this exhaust system reduces vehicle weight while optimizing gas flow mechanics. It delivers a significant horsepower increase and responsive throttle control, ensuring you dominate both highways and closed circuits.",
    specs: {
      "Weight": "4.2 kg",
      "Material": "Titanium & Stainless Steel",
      "Dimensions": "68 x 18 x 14 cm",
      "Compatibility": "Universal 51mm Inlet fitment"
    },
    reviews: [
      { author: "Marc V.", rating: 5, date: "July 2, 2026", comment: "The sound profile is absolutely insane! Deep base at low revs, screams on top. Best exhaust I have ever bought." },
      { author: "Alex K.", rating: 4, date: "June 28, 2026", comment: "Quality construction is superb. Fitment required slight bracket adjustment on my custom tail, but performance gain is noticeable." }
    ]
  },
  {
    id: 2,
    title: "Brakes",
    category: "Parts",
    price: "$150.00",
    rating: 5.0,
    img: imgBrakes,
    tags: ["Fast", "Sport"],
    sku: "GP-BR-002",
    shortDesc: "Carbon-ceramic racing brake pads designed for maximum stopping power and zero fade under high temperature conditions.",
    description: "These premium brake pads offer unmatched braking consistency. Perfect for competitive track days and aggressive street use. Engineered with premium carbon-metallic compounds to dissipate heat quickly, extending rotor life and ensuring maximum safety in demanding maneuvers.",
    specs: {
      "Weight": "1.1 kg",
      "Material": "Carbon-Ceramic Compound",
      "Dimensions": "15 x 8 x 4 cm",
      "Compatibility": "Grand Prix Sport calipers"
    },
    reviews: [
      { author: "Danielle S.", rating: 5, date: "June 25, 2026", comment: "Stops on a dime. Absolutely no fade even after multiple heat cycles at the track." }
    ]
  },
  {
    id: 3,
    title: "Helmet",
    category: "Helmets",
    price: "$420.00",
    salePrice: "$350.00",
    badge: "Sale",
    rating: 5.0,
    img: imgHelmet1,
    tags: ["Future", "Ride"],
    sku: "GP-HL-003",
    shortDesc: "Aerodynamic carbon fiber helmet with integrated ventilation and wide-angle anti-fog visor system.",
    description: "Safety meets futuristic styling. The Grand Prix helmet features a multi-density EPS liner and double-D ring closure. Its premium carbon shell offers maximum structural integrity while remaining lightweight to reduce neck fatigue on long journeys.",
    specs: {
      "Weight": "1.35 kg",
      "Material": "Carbon Fiber Shell",
      "Dimensions": "35 x 26 x 26 cm",
      "Certification": "ECE 22.06 & DOT certified"
    },
    reviews: [
      { author: "Kenji T.", rating: 5, date: "July 1, 2026", comment: "Lightest helmet I have ever owned. Wind noise is minimal even at high speeds." }
    ]
  },
  {
    id: 4,
    title: "Gloves",
    category: "Leather",
    price: "$85.00",
    rating: 4.0,
    img: imgGloves1,
    tags: ["Moto", "Ride"],
    sku: "GP-GL-004",
    shortDesc: "Premium goat leather riding gloves featuring hard knuckle armor and touchscreen compatible fingertips.",
    description: "Ride with optimal control. Crafted from select drum-dyed goatskin leather, these gloves feature reinforced palms and ergonomic pre-curved fingers. Perforated panels ensure ventilation during summer rides while TPU protectors guard your knuckles.",
    specs: {
      "Weight": "0.25 kg",
      "Material": "Goat Leather & TPU knuckle protectors",
      "Dimensions": "24 x 12 x 3 cm",
      "Features": "Touchscreen index finger"
    },
    reviews: [
      { author: "Sam H.", rating: 4, date: "May 15, 2026", comment: "Comfortable and fit well. The leather soft ended up breaking in within a week." }
    ]
  },
  {
    id: 5,
    title: "Filter",
    category: "Quality",
    price: "$45.00",
    rating: 3.5,
    img: imgFilter,
    tags: ["Apps", "Moto"],
    sku: "GP-FT-005",
    shortDesc: "High-flow reusable cotton gauze air filter, designed to increase airflow and boost performance.",
    description: "Engineered to increase horsepower and acceleration while providing exceptional engine protection. These air filters are washable, reusable, and custom-engineered to fit into your existing factory air box.",
    specs: {
      "Weight": "0.45 kg",
      "Material": "Multi-layered Cotton Gauze",
      "Dimensions": "22 x 15 x 3 cm",
      "Longevity": "Washable & Reusable"
    },
    reviews: [
      { author: "John D.", rating: 3.5, date: "April 29, 2026", comment: "Easy installation, notice a small increase in intake sound. Works well." }
    ]
  },
  {
    id: 6,
    title: "Moto Jacket",
    category: "Leather",
    price: "$650.00",
    salePrice: "$590.00",
    badge: "New",
    rating: 5.0,
    img: imgJacket,
    tags: ["Fast", "Modern Art"],
    sku: "GP-JK-006",
    shortDesc: "Top-grain cowhide leather jacket with Level 2 CE elbow and shoulder armor and thermal liner.",
    description: "The ultimate racing jacket designed for pure speed and premium style. Features premium 1.3mm drum-dyed leather, localized perforations for air cooling, and elasticated accordion panels for maximum comfort on the bike. Includes a removable quilted thermal vest.",
    specs: {
      "Weight": "3.1 kg",
      "Material": "1.3mm Cowhide Leather",
      "Dimensions": "60 x 50 x 8 cm",
      "Protection": "CE Level 2 armor included"
    },
    reviews: [
      { author: "Rico R.", rating: 5, date: "June 12, 2026", comment: "Premium fit, thick heavy leather that smells amazing. Highly protective feel." }
    ]
  },
  {
    id: 7,
    title: "M Helmet",
    category: "Helmets",
    price: "$390.00",
    rating: 4.5,
    img: imgHelmet1,
    tags: ["Future", "Track"],
    sku: "GP-HL-007",
    shortDesc: "High-impact fiberglass composite helmet designed for high-speed track racing and safety.",
    description: "Constructed with advanced aerodynamic design for minimum drag. Features dual-visor configuration (clear & dark smoke drop-down sun shield) and fully removable moisture-wicking inner padding.",
    specs: {
      "Weight": "1.48 kg",
      "Material": "Fiberglass Composite Shell",
      "Dimensions": "34 x 26 x 26 cm",
      "Visor": "Pinlock-ready anti-scratch visor"
    },
    reviews: [
      { author: "Steve M.", rating: 4, date: "May 20, 2026", comment: "Visor works great in sunny weather. Slightly heavier than carbon models but very solid build." }
    ]
  },
  {
    id: 8,
    title: "Boots",
    category: "Leather",
    price: "$240.00",
    rating: 4.0,
    img: imgBoots1,
    tags: ["Moto", "Ride"],
    sku: "GP-BT-008",
    shortDesc: "Waterproof leather riding boots featuring steel shank sole and dual-zipper closure.",
    description: "Engineered for maximum grip and weather protection. These leather boots feature a fully waterproof breathable membrane, ankle disc protectors, and a reinforced toe box for gear shifter protection.",
    specs: {
      "Weight": "1.7 kg",
      "Material": "Full Grain Leather & Vibram Sole",
      "Dimensions": "36 x 28 x 12 cm",
      "Protection": "CE certified safety boots"
    },
    reviews: []
  },
  {
    id: 9,
    title: "Mechanic Kit",
    category: "Moto",
    price: "$195.00",
    rating: 4.8,
    img: imgKit,
    tags: ["Apps", "Track"],
    sku: "GP-KT-009",
    shortDesc: "56-piece compact motorcycle tool kit containing essential metric sockets, hex keys, and wrenches.",
    description: "Never get stranded on the roadside. This professional grade mechanics tool set is packed inside a heavy-duty compact carrying wrap, designed specifically to fit under your motorcycle seat or in side panniers.",
    specs: {
      "Weight": "2.4 kg",
      "Material": "Chrome Vanadium Steel",
      "Dimensions": "30 x 15 x 8 cm",
      "Count": "56 metric pieces"
    },
    reviews: [
      { author: "Gary N.", rating: 5, date: "June 19, 2026", comment: "Already saved my ride once. Quality of sockets is top-notch." }
    ]
  },
  {
    id: 10,
    title: "M Boots",
    category: "Leather",
    price: "$320.00",
    rating: 4.5,
    img: imgBoots2,
    tags: ["Moto", "Sport"],
    sku: "GP-BT-010",
    shortDesc: "Full-height racing boots featuring external ankle bracing, replaceable magnesium toe sliders.",
    description: "Engineered for maximum agility and protection at extreme lean angles. The M Boots utilize a rigid torsion-control spine to prevent over-extension of the ankle, while high-density shin plates disperse impacts.",
    specs: {
      "Weight": "1.95 kg",
      "Material": "Microfiber leather & TPU shields",
      "Dimensions": "42 x 32 x 13 cm",
      "Features": "Adjustable calf clasp system"
    },
    reviews: [
      { author: "Luca B.", rating: 5, date: "May 10, 2026", comment: "Outstanding protection. Toe sliders work perfectly and are easy to replace." }
    ]
  },
  {
    id: 11,
    title: "M Gloves",
    category: "Leather",
    price: "$95.00",
    rating: 4.2,
    img: imgGloves2,
    tags: ["Moto", "Ride"],
    sku: "GP-GL-011",
    shortDesc: "Full-gauntlet cowhide leather gloves with carbon fiber knuckle protectors and bridge finger.",
    description: "Designed for track racing. These gloves provide ultimate protection extending over the wrist. Carbon fiber hard protectors defend knuckles and palms, and a finger bridge prevents pinky roll in slides.",
    specs: {
      "Weight": "0.38 kg",
      "Material": "Cowhide Leather & Carbon Fiber",
      "Dimensions": "32 x 14 x 5 cm",
      "Style": "Full Gauntlet"
    },
    reviews: []
  },
  {
    id: 12,
    title: "M2 Helmet",
    category: "Helmets",
    price: "$450.00",
    badge: "Sold",
    rating: 5.0,
    img: imgHelmet1,
    tags: ["Future", "Ride"],
    sku: "GP-HL-012",
    shortDesc: "Pro-edition lightweight carbon composite helmet with dynamic wind tunnel cooling system.",
    description: "Our top-tier professional helmet. Designed to meet the highest safety standards under FIM regulations. The M2 provides unmatched vision field, zero lift at speeds up to 300km/h, and customizable inner cheek fitment pads.",
    specs: {
      "Weight": "1.28 kg",
      "Material": "Carbon-Kevlar Composite",
      "Dimensions": "34 x 26 x 26 cm",
      "Aerodynamics": "Integrated rear spoiler"
    },
    reviews: [
      { author: "Fabio Q.", rating: 5, date: "June 30, 2026", comment: "Phenomenal field of view when in a full racing tuck. Extremely quiet helmet." }
    ]
  }
];
