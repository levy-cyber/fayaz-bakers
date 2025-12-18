export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  prices: { [region: string]: number };
  image: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
}

// Region-based price multipliers
const regionMultipliers: { [key: string]: number } = {
  lebanon: 1.0,
  bamburi: 1.0,
  mombasa: 1.02,
  malindi: 1.05,
  kilifi: 1.03,
  nyali: 1.02,
  likoni: 1.01,
  kisauni: 1.02,
  mvita: 1.01,
  changamwe: 1.01,
};

const generatePrices = (basePrice: number) => {
  const prices: { [key: string]: number } = {};
  Object.keys(regionMultipliers).forEach((region) => {
    prices[region] = Math.round(basePrice * regionMultipliers[region]);
  });
  return prices;
};

export const categories: Category[] = [
  {
    id: "cookies",
    name: "Fayaz Cookies",
    description: "Freshly baked cookies in various flavors",
    icon: "🍪",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400",
  },
  {
    id: "bread",
    name: "Fayaz Bread",
    description: "Fresh bread baked daily",
    icon: "🍞",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",
  },
  {
    id: "cakes",
    name: "Fayaz Cakes",
    description: "Delicious cakes for every occasion",
    icon: "🎂",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
  },
  {
    id: "savories",
    name: "Fayaz Savories",
    description: "Tasty savory snacks and pastries",
    icon: "🥧",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400",
  },
  {
    id: "icecream",
    name: "Fayaz Ice Cream",
    description: "Cool and creamy ice cream treats",
    icon: "🍦",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400",
  },
  {
    id: "snacks",
    name: "Fayaz Snacks",
    description: "Crunchy snacks and nuts",
    icon: "🥜",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400",
  },
  {
    id: "birthday",
    name: "Fayaz Birthday Cakes",
    description: "Special cakes for celebrations",
    icon: "🎉",
    image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=400",
  },
];

export const products: Product[] = [
  // FAYAZ COOKIES
  { id: "choc-chip-cookies-200g", name: "Choc Chip Cookies 200G", category: "cookies", description: "Delicious chocolate chip cookies", prices: generatePrices(180), image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400" },
  { id: "butter-choc-cookies-200g", name: "Butter Choc Cookies 200G", category: "cookies", description: "Buttery chocolate cookies", prices: generatePrices(200), image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400" },
  { id: "nut-cookies-200g", name: "Nut Cookies 200G", category: "cookies", description: "Crunchy nut cookies", prices: generatePrices(180), image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=400" },
  { id: "sim-sim-cookies-200g", name: "Sim Sim Cookies 200G", category: "cookies", description: "Sesame seed cookies", prices: generatePrices(180), image: "https://images.unsplash.com/photo-1618923850107-d1a234d7a73a?w=400" },
  { id: "ginger-cookies-200g", name: "Ginger Cookies 200G", category: "cookies", description: "Spiced ginger cookies", prices: generatePrices(180), image: "https://images.unsplash.com/photo-1548848221-0c2e497ed557?w=400" },
  { id: "nan-khatai-cookies-200g", name: "Nan Khatai Cookies 200G", category: "cookies", description: "Traditional Nan Khatai", prices: generatePrices(180), image: "https://images.unsplash.com/photo-1597733336794-12d05021d510?w=400" },
  { id: "digestive-cookies-200g", name: "Digestive Cookies 200G", category: "cookies", description: "Healthy digestive biscuits", prices: generatePrices(180), image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=400" },
  { id: "cheese-crackers-200g", name: "Cheese Crackers 200G", category: "cookies", description: "Savory cheese crackers", prices: generatePrices(180), image: "https://images.unsplash.com/photo-1590080876351-941da357a5e3?w=400" },
  { id: "palmeirs-biscuits-100g", name: "Palmeirs Biscuits 100G", category: "cookies", description: "Flaky palmier biscuits", prices: generatePrices(100), image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400" },
  { id: "coconut-cookies-200g", name: "Coconut Cookies 200G", category: "cookies", description: "Coconut flavored cookies", prices: generatePrices(180), image: "https://images.unsplash.com/photo-1618923850107-d1a234d7a73a?w=400" },
  { id: "khara-biscuits-200g", name: "Khara Biscuits 200G", category: "cookies", description: "Spicy khara biscuits", prices: generatePrices(275), image: "https://images.unsplash.com/photo-1590080876351-941da357a5e3?w=400" },
  { id: "vienese-fingers", name: "Vienese Fingers", category: "cookies", description: "Classic Viennese finger biscuits", prices: generatePrices(250), image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400" },
  { id: "mb-nankhatai-tin", name: "M.B Nankhatai Tin", category: "cookies", description: "Nankhatai in decorative tin", prices: generatePrices(300), image: "https://images.unsplash.com/photo-1597733336794-12d05021d510?w=400" },
  { id: "double-special", name: "Double Special", category: "cookies", description: "Double special cookies", prices: generatePrices(65), image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400" },
  { id: "double-chocolate", name: "Double Chocolate", category: "cookies", description: "Rich double chocolate cookies", prices: generatePrices(75), image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400" },
  { id: "double-long-choc", name: "Double Long Choc", category: "cookies", description: "Long chocolate cookies", prices: generatePrices(65), image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400" },
  { id: "jumbo-cookies", name: "Jumbo Cookies", category: "cookies", description: "Extra large cookies", prices: generatePrices(100), image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400" },
  { id: "egg-cookies", name: "Egg Cookies", category: "cookies", description: "Traditional egg cookies", prices: generatePrices(100), image: "https://images.unsplash.com/photo-1618923850107-d1a234d7a73a?w=400" },

  // FAYAZ BREAD
  { id: "600g-bread", name: "600G Bread", category: "bread", description: "Fresh 600g loaf", prices: generatePrices(100), image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400" },
  { id: "800g-white-brown-bread", name: "800G White / Brown Bread", category: "bread", description: "White or brown bread loaf", prices: generatePrices(120), image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400" },
  { id: "400g-white-brown-bread", name: "400G White / Brown Bread", category: "bread", description: "Medium bread loaf", prices: generatePrices(65), image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=400" },
  { id: "200g-white-bread", name: "200G White Bread", category: "bread", description: "Small white bread", prices: generatePrices(35), image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400" },
  { id: "kisu-bread-200g", name: "Kisu Bread 200G", category: "bread", description: "Traditional Kisu bread", prices: generatePrices(35), image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400" },
  { id: "half-brown-200g", name: "Half Brown 200G", category: "bread", description: "Half brown bread", prices: generatePrices(35), image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=400" },
  { id: "scones", name: "Scones", category: "bread", description: "Fresh baked scones", prices: generatePrices(100), image: "https://images.unsplash.com/photo-1558303126-19f54b7e7bc6?w=400" },
  { id: "long-buns-pkt-6", name: "Long Buns in PKT 6\"", category: "bread", description: "Pack of long buns", prices: generatePrices(100), image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400" },
  { id: "fruit-buns-pkt-6", name: "Fruit Buns in PKT 6\"", category: "bread", description: "Pack of fruit buns", prices: generatePrices(100), image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400" },
  { id: "burger-buns-pkt-6", name: "Burger Buns in PKT 6\"", category: "bread", description: "Pack of burger buns", prices: generatePrices(100), image: "https://images.unsplash.com/photo-1586985289071-bd45f9ec7ed0?w=400" },
  { id: "danish", name: "Danish", category: "bread", description: "Sweet Danish pastry", prices: generatePrices(85), image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400" },
  { id: "tea-toast", name: "Tea Toast", category: "bread", description: "Crispy tea toast", prices: generatePrices(75), image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400" },
  { id: "round-toast", name: "Round Toast", category: "bread", description: "Round crispy toast", prices: generatePrices(80), image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400" },
  { id: "sweet-bread", name: "Sweet Bread", category: "bread", description: "Sweet flavored bread", prices: generatePrices(90), image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400" },
  { id: "french-bread", name: "French Bread", category: "bread", description: "Classic French baguette", prices: generatePrices(80), image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400" },
  { id: "large-naan", name: "Large Naan", category: "bread", description: "Large naan bread", prices: generatePrices(60), image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400" },
  { id: "bread-crumbs", name: "Bread Crumbs", category: "bread", description: "Fresh bread crumbs", prices: generatePrices(150), image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400" },
  { id: "cheese-bread", name: "Cheese Bread", category: "bread", description: "Cheesy bread", prices: generatePrices(60), image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400" },
  { id: "garlic-bread", name: "Garlic Bread", category: "bread", description: "Garlic flavored bread", prices: generatePrices(60), image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=400" },
  { id: "bloomer-bread", name: "Bloomer Bread", category: "bread", description: "Fresh bloomer loaf", prices: generatePrices(170), image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400" },
  { id: "brown-rusks", name: "Brown Rusks", category: "bread", description: "Crunchy brown rusks", prices: generatePrices(75), image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400" },
  { id: "multi-grain", name: "Multi Grain", category: "bread", description: "Healthy multi grain bread", prices: generatePrices(150), image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=400" },
  { id: "brown-buns", name: "Brown Buns", category: "bread", description: "Fresh brown buns", prices: generatePrices(100), image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400" },

  // FAYAZ CAKES
  { id: "long-vanilla-cake", name: "Long Vanilla Cake", category: "cakes", description: "Classic vanilla cake", prices: generatePrices(280), image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" },
  { id: "long-chocolate-cake", name: "Long Chocolate Cake", category: "cakes", description: "Rich chocolate cake", prices: generatePrices(280), image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" },
  { id: "long-fruit-cake", name: "Long Fruit Cake", category: "cakes", description: "Delicious fruit cake", prices: generatePrices(280), image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400" },
  { id: "long-marble-cake", name: "Long Marble Cake", category: "cakes", description: "Swirled marble cake", prices: generatePrices(280), image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" },
  { id: "small-long-cake", name: "Small Long Cake", category: "cakes", description: "Small long cake", prices: generatePrices(150), image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" },
  { id: "marble-cake-full", name: "Marble Cake Full", category: "cakes", description: "Full size marble cake", prices: generatePrices(1200), image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" },
  { id: "square-fruit-cake-full", name: "Square Fruit Cake Full", category: "cakes", description: "Full square fruit cake", prices: generatePrices(1000), image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400" },
  { id: "chocolate-sliced", name: "Chocolate Sliced", category: "cakes", description: "Sliced chocolate cake", prices: generatePrices(140), image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" },
  { id: "cream-cake", name: "Cream Cake", category: "cakes", description: "Creamy layered cake", prices: generatePrices(120), image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" },
  { id: "black-forest-cup", name: "Black Forest Cup", category: "cakes", description: "Black forest in a cup", prices: generatePrices(150), image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" },
  { id: "chocolate-queen-cake", name: "Chocolate Queen Cake", category: "cakes", description: "Queen size chocolate cake", prices: generatePrices(60), image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" },
  { id: "large-queen-cake", name: "Large Queen Cake", category: "cakes", description: "Large queen cake", prices: generatePrices(80), image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" },
  { id: "small-queen-cake", name: "Small Queen Cake", category: "cakes", description: "Small queen cake", prices: generatePrices(30), image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" },
  { id: "yellow-cake", name: "Yellow Cake", category: "cakes", description: "Classic yellow cake", prices: generatePrices(65), image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" },
  { id: "royal-queen-cake", name: "Royal Queen Cake", category: "cakes", description: "Royal queen cake", prices: generatePrices(60), image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" },
  { id: "muffin-cakes", name: "Muffin Cakes", category: "cakes", description: "Fresh muffins", prices: generatePrices(150), image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400" },
  { id: "chocolate-tarts", name: "Chocolate Tarts", category: "cakes", description: "Chocolate filled tarts", prices: generatePrices(100), image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400" },
  { id: "cocoa-swiss-roll-s", name: "Cocoa Swiss Roll S/S", category: "cakes", description: "Cocoa swiss roll", prices: generatePrices(75), image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" },
  { id: "swiss-roll", name: "Swiss Roll", category: "cakes", description: "Classic swiss roll", prices: generatePrices(70), image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" },
  { id: "supa-roll", name: "Supa Roll", category: "cakes", description: "Super swiss roll", prices: generatePrices(80), image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" },
  { id: "desserts", name: "Desserts", category: "cakes", description: "Assorted desserts", prices: generatePrices(200), image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400" },
  { id: "mousse-cake", name: "Mousse Cake", category: "cakes", description: "Light mousse cake", prices: generatePrices(150), image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" },
  { id: "tresleches", name: "Tresleches", category: "cakes", description: "Three milk cake", prices: generatePrices(400), image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" },
  { id: "choc-eclairs", name: "Choc Eclairs", category: "cakes", description: "Chocolate eclairs", prices: generatePrices(150), image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=400" },

  // FAYAZ SAVORIES
  { id: "12-pkts-samosa-beef", name: "12\" PKTS Samosa (Beef)", category: "savories", description: "Beef samosas pack of 12", prices: generatePrices(450), image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400" },
  { id: "meat-pie", name: "Meat Pie", category: "savories", description: "Savory meat pie", prices: generatePrices(85), image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400" },
  { id: "frozen-puff-pastry", name: "Frozen Puff Pastry", category: "savories", description: "Frozen puff pastry sheets", prices: generatePrices(500), image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400" },
  { id: "kebabs-single", name: "Kebabs (Single PC)", category: "savories", description: "Single kebab", prices: generatePrices(70), image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400" },
  { id: "kima-chapati", name: "Kima Chapati", category: "savories", description: "Chapati with minced meat", prices: generatePrices(225), image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400" },
  { id: "samosa-beef-veg", name: "Samosa (Beef / Veg.)", category: "savories", description: "Beef or vegetable samosa", prices: generatePrices(40), image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400" },
  { id: "samosa-fish-chicken", name: "Samosa (Fish / Chicken)", category: "savories", description: "Fish or chicken samosa", prices: generatePrices(55), image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400" },
  { id: "pizza-beef-fish-veg", name: "Pizza (Beef/Fish/Veg)", category: "savories", description: "Pizza slices", prices: generatePrices(45), image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400" },
  { id: "pizza-kuku", name: "Pizza Kuku", category: "savories", description: "Chicken pizza", prices: generatePrices(450), image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400" },
  { id: "pizza-base", name: "Pizza Base", category: "savories", description: "Ready pizza base", prices: generatePrices(50), image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400" },
  { id: "burger-petice", name: "Burger Petice", category: "savories", description: "Burger patty", prices: generatePrices(160), image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400" },
  { id: "manda", name: "Manda", category: "savories", description: "Traditional manda", prices: generatePrices(250), image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400" },
  { id: "12-pkts-samosa-fish", name: "12\" PKTS Samosa (Fish)", category: "savories", description: "Fish samosas pack of 12", prices: generatePrices(600), image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400" },
  { id: "tortilla-wraps", name: "Tortilla Wraps", category: "savories", description: "Soft tortilla wraps", prices: generatePrices(80), image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400" },
  { id: "chicken-pie", name: "Chicken Pie", category: "savories", description: "Savory chicken pie", prices: generatePrices(120), image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400" },
  { id: "veg-spring-rolls", name: "Veg Spring Rolls", category: "savories", description: "Vegetable spring rolls", prices: generatePrices(40), image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400" },
  { id: "manda-spring-rolls", name: "Manda Spring Rolls", category: "savories", description: "Manda spring rolls", prices: generatePrices(50), image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400" },

  // FAYAZ ICE CREAM
  { id: "1l-ice-cream", name: "1L Ice Cream", category: "icecream", description: "1 litre ice cream", prices: generatePrices(450), image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400" },
  { id: "1l-ice-cream-choc-chip", name: "1L Ice Cream Choc Chip", category: "icecream", description: "1 litre choc chip ice cream", prices: generatePrices(500), image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400" },
  { id: "1l-ice-cream-vanilla-d", name: "1L Ice Cream Vanilla D", category: "icecream", description: "1 litre vanilla ice cream", prices: generatePrices(500), image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400" },
  { id: "half-litre-ice-cream", name: "Half Litre Ice Cream", category: "icecream", description: "500ml ice cream", prices: generatePrices(250), image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400" },
  { id: "0-5l-choc-chip", name: "0.5 Litre Choc Chip", category: "icecream", description: "500ml choc chip ice cream", prices: generatePrices(270), image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400" },
  { id: "0-5l-kulfi", name: "0.5 Litre Kulfi", category: "icecream", description: "500ml kulfi ice cream", prices: generatePrices(270), image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400" },
  { id: "100ml-ice-cream", name: "100ML Ice Cream", category: "icecream", description: "100ml ice cream cup", prices: generatePrices(75), image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400" },
  { id: "fayaz-ice-lollies-fb", name: "Fayaz Ice Lollies F/B", category: "icecream", description: "Fruit ice lollies", prices: generatePrices(50), image: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?w=400" },

  // FAYAZ SNACKS
  { id: "chevdo-half-kg", name: "Chevdo 1/2KG", category: "snacks", description: "Half kg chevdo mix", prices: generatePrices(500), image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400" },
  { id: "chevdo-50g", name: "Chevdo 50G", category: "snacks", description: "50g chevdo pack", prices: generatePrices(60), image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400" },
  { id: "seu-50g", name: "Seu 50G", category: "snacks", description: "50g seu snack", prices: generatePrices(60), image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400" },
  { id: "spiced-peanuts-50g", name: "Spiced Peanuts 50G", category: "snacks", description: "Spiced peanuts pack", prices: generatePrices(60), image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400" },
  { id: "masala-ghatia-50g", name: "Masala Ghatia 50G", category: "snacks", description: "Spicy ghatia snack", prices: generatePrices(60), image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400" },
  { id: "choc-chip-cookies-50g", name: "Choc Chip Cookies 50G", category: "snacks", description: "Small choc chip pack", prices: generatePrices(60), image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400" },
  { id: "dates", name: "Dates", category: "snacks", description: "Premium dates", prices: generatePrices(250), image: "https://images.unsplash.com/photo-1590165482129-1b8b27698780?w=400" },
  { id: "caramel-popcorn", name: "Caramel Popcorn", category: "snacks", description: "Sweet caramel popcorn", prices: generatePrices(80), image: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=400" },
  { id: "potato-crisps", name: "Potato Crisps", category: "snacks", description: "Crispy potato chips", prices: generatePrices(50), image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400" },
  { id: "cashew-nuts-100g", name: "Cashew Nuts 100G", category: "snacks", description: "Premium cashew nuts", prices: generatePrices(150), image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400" },
  { id: "raisins-100g", name: "Raisins 100G", category: "snacks", description: "Sweet raisins", prices: generatePrices(150), image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400" },
  { id: "pea-nuts-100g", name: "Pea Nuts 100G", category: "snacks", description: "Roasted peanuts", prices: generatePrices(80), image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400" },
  { id: "mixed-nuts", name: "Mixed Nuts", category: "snacks", description: "Assorted mixed nuts", prices: generatePrices(170), image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400" },

  // FAYAZ BIRTHDAY CAKES
  { id: "1kg-extra-cake", name: "1KG Extra Cake", category: "birthday", description: "1kg celebration cake", prices: generatePrices(950), image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=400" },
  { id: "2kg-standard-cake", name: "2KG Standard Cake", category: "birthday", description: "2kg standard birthday cake", prices: generatePrices(1800), image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=400" },
  { id: "3kg-decorated", name: "3KG Decorated", category: "birthday", description: "3kg decorated cake", prices: generatePrices(2100), image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=400" },
  { id: "1kg-chocolate-cake", name: "1KG Chocolate Cake", category: "birthday", description: "1kg chocolate birthday cake", prices: generatePrices(1250), image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" },
  { id: "850g-blackforest", name: "850G Blackforest", category: "birthday", description: "850g black forest cake", prices: generatePrices(1250), image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" },
  { id: "1kg-blackforest", name: "1KG Blackforest", category: "birthday", description: "1kg black forest cake", prices: generatePrices(1800), image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" },
  { id: "1kg-fondant", name: "1KG Fondant", category: "birthday", description: "1kg fondant cake", prices: generatePrices(1300), image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=400" },
  { id: "premium-cake", name: "Premium Cake", category: "birthday", description: "Premium celebration cake", prices: generatePrices(2500), image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=400" },
];
