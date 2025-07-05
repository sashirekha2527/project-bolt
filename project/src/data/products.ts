import { Product } from '../types';

// Generate 500 products with realistic data
const generateProducts = (): Product[] => {
  const categories = [
    { name: 'Fruits', icon: '🍎' },
    { name: 'Vegetables', icon: '🥬' },
    { name: 'Dairy', icon: '🥛' },
    { name: 'Meat', icon: '🥩' },
    { name: 'Bakery', icon: '🍞' },
    { name: 'Grains', icon: '🌾' },
    { name: 'Beverages', icon: '🥤' },
    { name: 'Snacks', icon: '🍿' },
    { name: 'Frozen', icon: '🧊' },
    { name: 'Personal Care', icon: '🧴' },
    { name: 'Household', icon: '🧽' },
    { name: 'Baby Care', icon: '👶' }
  ];

  const productTemplates = {
    Fruits: [
      { name: 'Bananas', basePrice: 45, unit: '1 kg', description: 'Fresh and ripe bananas, perfect for breakfast or snacking.' },
      { name: 'Apples', basePrice: 180, unit: '1 kg', description: 'Crisp and juicy apples, rich in vitamins and fiber.' },
      { name: 'Oranges', basePrice: 120, unit: '1 kg', description: 'Sweet and tangy oranges, packed with vitamin C.' },
      { name: 'Mangoes', basePrice: 200, unit: '1 kg', description: 'Sweet and juicy mangoes, the king of fruits.' },
      { name: 'Grapes', basePrice: 150, unit: '500g', description: 'Fresh grapes, perfect for snacking or making juice.' },
      { name: 'Strawberries', basePrice: 250, unit: '250g', description: 'Sweet and aromatic strawberries, rich in antioxidants.' },
      { name: 'Pineapple', basePrice: 80, unit: '1 piece', description: 'Sweet and tangy pineapple, rich in enzymes.' },
      { name: 'Watermelon', basePrice: 30, unit: '1 kg', description: 'Refreshing watermelon, perfect for summer.' },
      { name: 'Pomegranate', basePrice: 180, unit: '500g', description: 'Antioxidant-rich pomegranate seeds.' },
      { name: 'Kiwi', basePrice: 300, unit: '500g', description: 'Tangy kiwi fruit, rich in vitamin C.' }
    ],
    Vegetables: [
      { name: 'Tomatoes', basePrice: 40, unit: '500g', description: 'Ripe and juicy tomatoes, great for cooking and salads.' },
      { name: 'Onions', basePrice: 35, unit: '1 kg', description: 'Fresh onions, essential for cooking.' },
      { name: 'Potatoes', basePrice: 25, unit: '1 kg', description: 'Fresh potatoes, versatile for any dish.' },
      { name: 'Carrots', basePrice: 45, unit: '500g', description: 'Crunchy carrots, rich in beta-carotene.' },
      { name: 'Spinach', basePrice: 25, unit: '250g', description: 'Fresh leafy spinach, packed with iron and vitamins.' },
      { name: 'Broccoli', basePrice: 80, unit: '500g', description: 'Nutritious broccoli, rich in vitamins and minerals.' },
      { name: 'Cauliflower', basePrice: 60, unit: '1 piece', description: 'Fresh cauliflower, perfect for curries and salads.' },
      { name: 'Bell Peppers', basePrice: 120, unit: '500g', description: 'Colorful bell peppers, rich in vitamin C.' },
      { name: 'Cucumber', basePrice: 30, unit: '500g', description: 'Fresh cucumbers, perfect for salads and snacks.' },
      { name: 'Lettuce', basePrice: 40, unit: '1 piece', description: 'Crisp lettuce leaves, perfect for salads.' }
    ],
    Dairy: [
      { name: 'Milk', basePrice: 65, unit: '1 liter', description: 'Pure and fresh milk, rich in calcium and protein.' },
      { name: 'Yogurt', basePrice: 85, unit: '400g', description: 'Creamy yogurt, high in protein and probiotics.' },
      { name: 'Cheese', basePrice: 180, unit: '200g', description: 'Fresh cheese, perfect for sandwiches and cooking.' },
      { name: 'Butter', basePrice: 120, unit: '100g', description: 'Creamy butter, perfect for cooking and baking.' },
      { name: 'Paneer', basePrice: 200, unit: '250g', description: 'Fresh paneer, high in protein.' },
      { name: 'Cream', basePrice: 80, unit: '200ml', description: 'Fresh cream, perfect for desserts and cooking.' },
      { name: 'Eggs', basePrice: 90, unit: '12 pieces', description: 'Fresh eggs from free-range chickens, high in protein.' },
      { name: 'Ghee', basePrice: 450, unit: '500ml', description: 'Pure ghee, perfect for cooking and health.' },
      { name: 'Cottage Cheese', basePrice: 150, unit: '200g', description: 'Fresh cottage cheese, low in fat and high in protein.' },
      { name: 'Sour Cream', basePrice: 120, unit: '200g', description: 'Tangy sour cream, perfect for dips and cooking.' }
    ],
    Meat: [
      { name: 'Chicken Breast', basePrice: 280, unit: '500g', description: 'Fresh chicken breast, lean protein for healthy meals.' },
      { name: 'Chicken Thighs', basePrice: 220, unit: '500g', description: 'Juicy chicken thighs, perfect for grilling.' },
      { name: 'Mutton', basePrice: 650, unit: '500g', description: 'Fresh mutton, perfect for curries and roasts.' },
      { name: 'Fish Fillet', basePrice: 400, unit: '500g', description: 'Fresh fish fillet, rich in omega-3 fatty acids.' },
      { name: 'Prawns', basePrice: 550, unit: '500g', description: 'Fresh prawns, perfect for seafood dishes.' },
      { name: 'Chicken Wings', basePrice: 200, unit: '500g', description: 'Tender chicken wings, perfect for snacks.' },
      { name: 'Ground Beef', basePrice: 350, unit: '500g', description: 'Fresh ground beef, perfect for burgers and meatballs.' },
      { name: 'Salmon', basePrice: 800, unit: '500g', description: 'Fresh salmon, rich in omega-3 and protein.' },
      { name: 'Tuna', basePrice: 600, unit: '500g', description: 'Fresh tuna, perfect for steaks and sushi.' },
      { name: 'Crab', basePrice: 700, unit: '500g', description: 'Fresh crab, perfect for seafood lovers.' }
    ],
    Bakery: [
      { name: 'Bread', basePrice: 35, unit: '400g', description: 'Fresh bread, perfect for sandwiches and toast.' },
      { name: 'Croissants', basePrice: 120, unit: '4 pieces', description: 'Buttery croissants, perfect for breakfast.' },
      { name: 'Bagels', basePrice: 80, unit: '4 pieces', description: 'Fresh bagels, perfect for breakfast and snacks.' },
      { name: 'Muffins', basePrice: 150, unit: '6 pieces', description: 'Sweet muffins, perfect for breakfast and tea time.' },
      { name: 'Cookies', basePrice: 100, unit: '200g', description: 'Crispy cookies, perfect for snacking.' },
      { name: 'Cake', basePrice: 300, unit: '500g', description: 'Delicious cake, perfect for celebrations.' },
      { name: 'Donuts', basePrice: 180, unit: '6 pieces', description: 'Sweet donuts, perfect for treats.' },
      { name: 'Pizza Base', basePrice: 60, unit: '2 pieces', description: 'Fresh pizza base, ready to top and bake.' },
      { name: 'Buns', basePrice: 40, unit: '6 pieces', description: 'Soft buns, perfect for burgers and sandwiches.' },
      { name: 'Pastries', basePrice: 200, unit: '4 pieces', description: 'Delicious pastries, perfect for tea time.' }
    ],
    Grains: [
      { name: 'Basmati Rice', basePrice: 120, unit: '1 kg', description: 'Premium quality basmati rice, perfect for biryanis.' },
      { name: 'Brown Rice', basePrice: 100, unit: '1 kg', description: 'Healthy brown rice, rich in fiber.' },
      { name: 'Wheat Flour', basePrice: 45, unit: '1 kg', description: 'Fresh wheat flour, perfect for making rotis.' },
      { name: 'Quinoa', basePrice: 350, unit: '500g', description: 'Nutritious quinoa, rich in protein and fiber.' },
      { name: 'Oats', basePrice: 120, unit: '500g', description: 'Healthy oats, perfect for breakfast.' },
      { name: 'Barley', basePrice: 80, unit: '500g', description: 'Nutritious barley, perfect for soups and salads.' },
      { name: 'Millet', basePrice: 90, unit: '500g', description: 'Healthy millet, rich in nutrients.' },
      { name: 'Corn Flour', basePrice: 60, unit: '500g', description: 'Fine corn flour, perfect for baking.' },
      { name: 'Semolina', basePrice: 70, unit: '500g', description: 'Fresh semolina, perfect for making upma.' },
      { name: 'Rice Flour', basePrice: 55, unit: '500g', description: 'Fine rice flour, perfect for making dosas.' }
    ],
    Beverages: [
      { name: 'Orange Juice', basePrice: 80, unit: '1 liter', description: 'Fresh orange juice, rich in vitamin C.' },
      { name: 'Apple Juice', basePrice: 90, unit: '1 liter', description: 'Pure apple juice, naturally sweet.' },
      { name: 'Green Tea', basePrice: 200, unit: '100g', description: 'Premium green tea, rich in antioxidants.' },
      { name: 'Coffee Beans', basePrice: 400, unit: '250g', description: 'Premium coffee beans, freshly roasted.' },
      { name: 'Energy Drink', basePrice: 60, unit: '250ml', description: 'Refreshing energy drink for instant energy.' },
      { name: 'Coconut Water', basePrice: 40, unit: '250ml', description: 'Natural coconut water, rich in electrolytes.' },
      { name: 'Soda', basePrice: 35, unit: '500ml', description: 'Refreshing soda, perfect for parties.' },
      { name: 'Sports Drink', basePrice: 50, unit: '500ml', description: 'Hydrating sports drink for active lifestyle.' },
      { name: 'Herbal Tea', basePrice: 180, unit: '100g', description: 'Soothing herbal tea, perfect for relaxation.' },
      { name: 'Protein Shake', basePrice: 120, unit: '250ml', description: 'Nutritious protein shake for fitness enthusiasts.' }
    ],
    Snacks: [
      { name: 'Potato Chips', basePrice: 50, unit: '100g', description: 'Crispy potato chips, perfect for snacking.' },
      { name: 'Nuts Mix', basePrice: 200, unit: '200g', description: 'Healthy nuts mix, rich in protein and healthy fats.' },
      { name: 'Popcorn', basePrice: 80, unit: '150g', description: 'Crunchy popcorn, perfect for movie nights.' },
      { name: 'Crackers', basePrice: 60, unit: '200g', description: 'Crispy crackers, perfect with cheese and dips.' },
      { name: 'Granola Bars', basePrice: 150, unit: '6 pieces', description: 'Healthy granola bars, perfect for on-the-go snacking.' },
      { name: 'Trail Mix', basePrice: 180, unit: '200g', description: 'Nutritious trail mix, perfect for hiking and snacking.' },
      { name: 'Pretzels', basePrice: 90, unit: '150g', description: 'Crunchy pretzels, perfect for snacking.' },
      { name: 'Rice Cakes', basePrice: 70, unit: '100g', description: 'Light rice cakes, perfect for healthy snacking.' },
      { name: 'Chocolate Bar', basePrice: 120, unit: '100g', description: 'Delicious chocolate bar, perfect for sweet cravings.' },
      { name: 'Dried Fruits', basePrice: 250, unit: '200g', description: 'Healthy dried fruits, perfect for snacking.' }
    ],
    Frozen: [
      { name: 'Frozen Peas', basePrice: 80, unit: '500g', description: 'Fresh frozen peas, perfect for quick cooking.' },
      { name: 'Frozen Corn', basePrice: 90, unit: '500g', description: 'Sweet frozen corn, perfect for salads and cooking.' },
      { name: 'Ice Cream', basePrice: 200, unit: '500ml', description: 'Creamy ice cream, perfect for desserts.' },
      { name: 'Frozen Pizza', basePrice: 250, unit: '400g', description: 'Ready-to-bake frozen pizza, perfect for quick meals.' },
      { name: 'Frozen Berries', basePrice: 300, unit: '500g', description: 'Mixed frozen berries, perfect for smoothies.' },
      { name: 'Frozen Fish', basePrice: 350, unit: '500g', description: 'Fresh frozen fish, perfect for quick cooking.' },
      { name: 'Frozen Vegetables', basePrice: 120, unit: '500g', description: 'Mixed frozen vegetables, perfect for stir-fries.' },
      { name: 'Frozen Chicken', basePrice: 280, unit: '500g', description: 'Fresh frozen chicken, perfect for quick meals.' },
      { name: 'Frozen Shrimp', basePrice: 450, unit: '500g', description: 'Fresh frozen shrimp, perfect for seafood dishes.' },
      { name: 'Frozen Yogurt', basePrice: 180, unit: '500ml', description: 'Healthy frozen yogurt, perfect for desserts.' }
    ],
    'Personal Care': [
      { name: 'Shampoo', basePrice: 180, unit: '400ml', description: 'Gentle shampoo for all hair types.' },
      { name: 'Toothpaste', basePrice: 80, unit: '100g', description: 'Fluoride toothpaste for healthy teeth and gums.' },
      { name: 'Soap', basePrice: 45, unit: '100g', description: 'Moisturizing soap for soft and clean skin.' },
      { name: 'Face Wash', basePrice: 150, unit: '150ml', description: 'Gentle face wash for clean and fresh skin.' },
      { name: 'Deodorant', basePrice: 120, unit: '150ml', description: 'Long-lasting deodorant for all-day freshness.' },
      { name: 'Moisturizer', basePrice: 200, unit: '200ml', description: 'Hydrating moisturizer for soft and smooth skin.' },
      { name: 'Sunscreen', basePrice: 250, unit: '100ml', description: 'SPF 50 sunscreen for protection against UV rays.' },
      { name: 'Hair Oil', basePrice: 100, unit: '200ml', description: 'Nourishing hair oil for healthy and shiny hair.' },
      { name: 'Body Lotion', basePrice: 180, unit: '300ml', description: 'Moisturizing body lotion for soft skin.' },
      { name: 'Lip Balm', basePrice: 60, unit: '10g', description: 'Moisturizing lip balm for soft and smooth lips.' }
    ],
    Household: [
      { name: 'Dish Soap', basePrice: 80, unit: '500ml', description: 'Effective dish soap for clean and spotless dishes.' },
      { name: 'Laundry Detergent', basePrice: 150, unit: '1 kg', description: 'Powerful laundry detergent for clean and fresh clothes.' },
      { name: 'All-Purpose Cleaner', basePrice: 120, unit: '500ml', description: 'Versatile cleaner for all surfaces.' },
      { name: 'Toilet Paper', basePrice: 200, unit: '12 rolls', description: 'Soft and strong toilet paper for comfort.' },
      { name: 'Paper Towels', basePrice: 150, unit: '6 rolls', description: 'Absorbent paper towels for quick cleanup.' },
      { name: 'Trash Bags', basePrice: 100, unit: '30 pieces', description: 'Strong trash bags for waste disposal.' },
      { name: 'Sponges', basePrice: 60, unit: '6 pieces', description: 'Durable sponges for cleaning dishes and surfaces.' },
      { name: 'Glass Cleaner', basePrice: 90, unit: '500ml', description: 'Streak-free glass cleaner for crystal clear windows.' },
      { name: 'Floor Cleaner', basePrice: 110, unit: '1 liter', description: 'Effective floor cleaner for sparkling clean floors.' },
      { name: 'Air Freshener', basePrice: 80, unit: '300ml', description: 'Long-lasting air freshener for pleasant home fragrance.' }
    ],
    'Baby Care': [
      { name: 'Baby Diapers', basePrice: 400, unit: '30 pieces', description: 'Soft and absorbent diapers for baby comfort.' },
      { name: 'Baby Wipes', basePrice: 150, unit: '80 pieces', description: 'Gentle baby wipes for sensitive skin.' },
      { name: 'Baby Shampoo', basePrice: 180, unit: '200ml', description: 'Tear-free baby shampoo for gentle cleansing.' },
      { name: 'Baby Lotion', basePrice: 200, unit: '200ml', description: 'Moisturizing baby lotion for soft skin.' },
      { name: 'Baby Food', basePrice: 120, unit: '200g', description: 'Nutritious baby food for healthy growth.' },
      { name: 'Baby Powder', basePrice: 100, unit: '200g', description: 'Gentle baby powder for dry and comfortable skin.' },
      { name: 'Baby Oil', basePrice: 150, unit: '200ml', description: 'Gentle baby oil for massage and moisturizing.' },
      { name: 'Baby Soap', basePrice: 80, unit: '100g', description: 'Mild baby soap for gentle cleansing.' },
      { name: 'Baby Cream', basePrice: 180, unit: '100g', description: 'Protective baby cream for diaper rash prevention.' },
      { name: 'Baby Bottles', basePrice: 250, unit: '2 pieces', description: 'BPA-free baby bottles for safe feeding.' }
    ]
  };

  // Single set of generic product images for all categories
  const productImages = [
    'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2325702/pexels-photo-2325702.jpeg?auto=compress&cs=tinysrgb&w=400'
  ];

  const products: Product[] = [];
  let productId = 1;

  // Generate products for each category
  categories.forEach(category => {
    const templates = productTemplates[category.name as keyof typeof productTemplates] || [];
    
    // Generate multiple variants for each template
    templates.forEach((template, templateIndex) => {
      // Create 4-5 variants per template
      const variantCount = Math.floor(Math.random() * 2) + 4; // 4-5 variants
      
      for (let i = 0; i < variantCount; i++) {
        const priceVariation = 1 + (Math.random() * 0.4 - 0.2); // ±20% price variation
        const price = Math.round(template.basePrice * priceVariation);
        const hasDiscount = Math.random() < 0.3; // 30% chance of discount
        const discount = hasDiscount ? Math.floor(Math.random() * 30) + 5 : undefined; // 5-35% discount
        const originalPrice = hasDiscount ? Math.round(price / (1 - (discount! / 100))) : undefined;
        
        const brands = ['Fresh Farm', 'Organic Valley', 'Nature\'s Best', 'Premium Choice', 'Daily Fresh', 'Green Harvest', 'Pure & Natural', 'Farm Direct'];
        const brand = brands[Math.floor(Math.random() * brands.length)];
        
        const variantName = i === 0 ? template.name : `${brand} ${template.name}`;
        
        // Skip specific products that should be removed
        const productsToRemove = ['Premium Choice Bananas', 'Premium Choice Oranges', 'Farm Direct Oranges', 'Nature\'s Best Oranges', 'Organic Valley Oranges'];
        if (productsToRemove.includes(variantName)) {
          continue;
        }
        
        // Rename specific products
        let finalProductName = variantName;
        if (variantName === 'Daily Fresh Mangoes') {
          finalProductName = 'Daily Fresh Tomatoes';
        }
        
        products.push({
          id: productId.toString(),
          name: finalProductName,
          category: category.name,
          price: price,
          originalPrice: originalPrice,
          image: productImages[templateIndex % productImages.length],
          description: template.description,
          unit: template.unit,
          inStock: Math.random() > 0.05, // 95% chance of being in stock
          discount: discount,
          rating: Math.round((Math.random() * 2 + 3) * 10) / 10, // 3.0-5.0 rating
          reviews: Math.floor(Math.random() * 200) + 10, // 10-210 reviews
          brand: brand,
          nutritionalInfo: generateNutritionalInfo(category.name),
          ingredients: generateIngredients(category.name, template.name),
          expiryDate: generateExpiryDate(category.name),
          origin: generateOrigin(category.name),
          certifications: generateCertifications(category.name)
        });
        
        productId++;
        
        // Stop when we reach 500 products
        if (products.length >= 500) {
          return;
        }
      }
      
      if (products.length >= 500) {
        return;
      }
    });
    
    if (products.length >= 500) {
      return;
    }
  });

  return products.slice(0, 500);
};

const generateNutritionalInfo = (category: string) => {
  const nutritionTemplates = {
    'Fruits': { calories: 60, protein: 1, carbs: 15, fat: 0.2, fiber: 3 },
    'Vegetables': { calories: 25, protein: 2, carbs: 5, fat: 0.1, fiber: 2 },
    'Dairy': { calories: 150, protein: 8, carbs: 12, fat: 8, fiber: 0 },
    'Meat': { calories: 250, protein: 25, carbs: 0, fat: 15, fiber: 0 },
    'Bakery': { calories: 300, protein: 8, carbs: 50, fat: 10, fiber: 3 },
    'Grains': { calories: 350, protein: 10, carbs: 70, fat: 2, fiber: 8 }
  };
  
  const base = nutritionTemplates[category as keyof typeof nutritionTemplates] || nutritionTemplates.Fruits;
  
  return {
    calories: Math.round(base.calories * (0.8 + Math.random() * 0.4)),
    protein: Math.round(base.protein * (0.8 + Math.random() * 0.4) * 10) / 10,
    carbs: Math.round(base.carbs * (0.8 + Math.random() * 0.4) * 10) / 10,
    fat: Math.round(base.fat * (0.8 + Math.random() * 0.4) * 10) / 10,
    fiber: Math.round(base.fiber * (0.8 + Math.random() * 0.4) * 10) / 10
  };
};

const generateIngredients = (category: string, productName: string) => {
  const ingredientTemplates = {
    'Fruits': ['Fresh fruit', 'Natural sugars', 'Vitamins', 'Minerals'],
    'Vegetables': ['Fresh vegetables', 'Natural nutrients', 'Vitamins', 'Minerals'],
    'Dairy': ['Milk', 'Cultures', 'Natural enzymes'],
    'Meat': ['Fresh meat', 'Natural proteins'],
    'Bakery': ['Wheat flour', 'Water', 'Yeast', 'Salt', 'Sugar'],
    'Grains': ['Whole grains', 'Natural nutrients']
  };
  
  return ingredientTemplates[category as keyof typeof ingredientTemplates] || ['Natural ingredients'];
};

const generateExpiryDate = (category: string) => {
  const daysFromNow = {
    'Fruits': 7,
    'Vegetables': 5,
    'Dairy': 10,
    'Meat': 3,
    'Bakery': 5,
    'Grains': 365,
    'Beverages': 180,
    'Snacks': 90,
    'Frozen': 180,
    'Personal Care': 730,
    'Household': 1095,
    'Baby Care': 365
  };
  
  const days = daysFromNow[category as keyof typeof daysFromNow] || 30;
  const date = new Date();
  date.setDate(date.getDate() + days + Math.floor(Math.random() * days));
  return date.toISOString().split('T')[0];
};

const generateOrigin = (category: string) => {
  const origins = ['Local Farm', 'Organic Farm', 'Imported', 'Regional Producer', 'Certified Farm'];
  return origins[Math.floor(Math.random() * origins.length)];
};

const generateCertifications = (category: string) => {
  const allCertifications = ['Organic', 'Non-GMO', 'Fair Trade', 'Gluten-Free', 'Vegan', 'Kosher', 'Halal'];
  const count = Math.floor(Math.random() * 3) + 1;
  const selected: string[] = [];
  
  for (let i = 0; i < count; i++) {
    const cert = allCertifications[Math.floor(Math.random() * allCertifications.length)];
    if (!selected.includes(cert)) {
      selected.push(cert);
    }
  }
  
  return selected;
};

export const products = generateProducts();

export const categories = [
  { id: 'all', name: 'All', icon: '🏪' },
  { id: 'fruits', name: 'Fruits', icon: '🍎' },
  { id: 'vegetables', name: 'Vegetables', icon: '🥬' },
  { id: 'dairy', name: 'Dairy', icon: '🥛' },
  { id: 'meat', name: 'Meat', icon: '🥩' },
  { id: 'bakery', name: 'Bakery', icon: '🍞' },
  { id: 'grains', name: 'Grains', icon: '🌾' },
  { id: 'beverages', name: 'Beverages', icon: '🥤' },
  { id: 'snacks', name: 'Snacks', icon: '🍿' },
  { id: 'frozen', name: 'Frozen', icon: '🧊' },
  { id: 'personal care', name: 'Personal Care', icon: '🧴' },
  { id: 'household', name: 'Household', icon: '🧽' },
  { id: 'baby care', name: 'Baby Care', icon: '👶' }
];