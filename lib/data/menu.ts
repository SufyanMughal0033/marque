import type { MenuCategory } from "@/lib/types";

export const menuCategories: MenuCategory[] = [
  {
    id: "starters",
    title: "Starters",
    description: "Warm and cold openings served as guests arrive.",
    items: [
      { id: "s1", name: "Chicken Seekh Kebab", description: "Hand-minced, char-grilled skewers with mint chutney." },
      { id: "s2", name: "Dahi Baray", description: "Lentil dumplings in spiced yogurt with tamarind." },
      { id: "s3", name: "Vegetable Spring Rolls", description: "Crisp rolls with a sweet chilli dip.", },
      { id: "s4", name: "Chicken Malai Tikka", description: "Creamy marinated tikka finished on the grill.", isSignature: true },
    ],
  },
  {
    id: "main-course",
    title: "Main Course",
    description: "Traditional and contemporary mains, served family style or plated.",
    items: [
      { id: "m1", name: "Chicken Karahi", description: "Tomato-based karahi finished with ginger and green chillies." },
      { id: "m2", name: "Mutton Biryani", description: "Layered basmati rice with slow-cooked mutton.", isSignature: true },
      { id: "m3", name: "Beef Nihari", description: "Slow-braised beef in a rich, spiced gravy." },
      { id: "m4", name: "Vegetable Handi", description: "Seasonal vegetables in a light, home-style gravy." },
    ],
  },
  {
    id: "bbq",
    title: "BBQ",
    description: "Live grilling stations for a hands-on dining moment.",
    items: [
      { id: "b1", name: "Beef Boti", description: "Marinated cubes grilled to order." },
      { id: "b2", name: "Chicken Tikka", description: "Classic tandoor-style tikka.", isSignature: true },
      { id: "b3", name: "Reshmi Kebab", description: "Silky, mildly spiced chicken kebabs." },
    ],
  },
  {
    id: "rice",
    title: "Rice",
    description: "Fragrant rice preparations to accompany the mains.",
    items: [
      { id: "r1", name: "Chicken Pulao", description: "Fragrant rice cooked in seasoned chicken stock." },
      { id: "r2", name: "Vegetable Biryani", description: "Layered rice with mixed seasonal vegetables." },
      { id: "r3", name: "Plain Steamed Rice", description: "A simple accompaniment for richer curries." },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    description: "A sweet close to the evening.",
    items: [
      { id: "d1", name: "Gulab Jamun", description: "Soft milk dumplings in rose-cardamom syrup." },
      { id: "d2", name: "Kheer", description: "Slow-cooked rice pudding with pistachio." },
      { id: "d3", name: "Live Dessert Counter", description: "Chef-attended counter with seasonal options.", isSignature: true },
    ],
  },
  {
    id: "beverages",
    title: "Beverages",
    description: "Refreshments served throughout the event.",
    items: [
      { id: "bv1", name: "Fresh Lime Soda", description: "Classic sparkling lime refresher." },
      { id: "bv2", name: "Mixed Fruit Mocktail", description: "Seasonal fruit blend, served chilled." },
      { id: "bv3", name: "Rooh Afza Sharbat", description: "A traditional rose-flavoured cooler." },
    ],
  },
  {
    id: "tea",
    title: "Tea",
    description: "A closing tea and coffee service.",
    items: [
      { id: "t1", name: "Kashmiri Chai", description: "Pink tea served with crushed nuts." },
      { id: "t2", name: "Doodh Patti", description: "Classic milk tea, brewed strong." },
      { id: "t3", name: "Black Coffee", description: "Freshly brewed, served on request." },
    ],
  },
  {
    id: "special-menu",
    title: "Special Menu",
    description: "Curated additions for signature and royal packages.",
    items: [
      { id: "sp1", name: "Live Chaat Counter", description: "Interactive counter with regional chaat varieties.", isSignature: true },
      { id: "sp2", name: "Continental Station", description: "A rotating selection of continental dishes." },
      { id: "sp3", name: "Regional Specialities", description: "Rotating dishes representing regional Pakistani cuisine." },
    ],
  },
];
