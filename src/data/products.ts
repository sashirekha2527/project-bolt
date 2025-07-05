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
      { name: 'Bananas', basePrice: 45, unit: '1 kg', description: 'Fresh and ripe bananas, perfect for breakfast or snacking.', image: 'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Apples', basePrice: 180, unit: '1 kg', description: 'Crisp and juicy apples, rich in vitamins and fiber.', image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Oranges', basePrice: 120, unit: '1 kg', description: 'Sweet and tangy oranges, packed with vitamin C.', image: 'https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Mangoes', basePrice: 200, unit: '1 kg', description: 'Sweet and juicy mangoes, the king of fruits.', image: 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Grapes', basePrice: 150, unit: '500g', description: 'Fresh grapes, perfect for snacking or making juice.', image: 'https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Strawberries', basePrice: 250, unit: '250g', description: 'Sweet and aromatic strawberries, rich in antioxidants.', image: 'https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Pineapple', basePrice: 80, unit: '1 piece', description: 'Sweet and tangy pineapple, rich in enzymes.', image: 'https://images.pexels.com/photos/947879/pexels-photo-947879.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Watermelon', basePrice: 30, unit: '1 kg', description: 'Refreshing watermelon, perfect for summer.', image: 'https://images.pexels.com/photos/1313267/pexels-photo-1313267.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Pomegranate', basePrice: 180, unit: '500g', description: 'Antioxidant-rich pomegranate seeds.', image: 'https://images.pexels.com/photos/65256/pomegranate-open-cores-fruit-65256.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Kiwi', basePrice: 300, unit: '500g', description: 'Tangy kiwi fruit, rich in vitamin C.', image: 'https://images.pexels.com/photos/1414110/pexels-photo-1414110.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    Vegetables: [
      { name: 'Tomatoes', basePrice: 40, unit: '500g', description: 'Ripe and juicy tomatoes, great for cooking and salads.', image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Onions', basePrice: 35, unit: '1 kg', description: 'Fresh onions, essential for cooking.', image: 'https://images.pexels.com/photos/144248/onions-food-vegetables-healthy-144248.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Potatoes', basePrice: 25, unit: '1 kg', description: 'Fresh potatoes, versatile for any dish.', image: 'https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Carrots', basePrice: 45, unit: '500g', description: 'Crunchy carrots, rich in beta-carotene.', image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Spinach', basePrice: 25, unit: '250g', description: 'Fresh leafy spinach, packed with iron and vitamins.', image: 'https://images.pexels.com/photos/2325702/pexels-photo-2325702.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Broccoli', basePrice: 80, unit: '500g', description: 'Nutritious broccoli, rich in vitamins and minerals.', image: 'https://images.pexels.com/photos/47347/broccoli-vegetable-food-healthy-47347.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Cauliflower', basePrice: 60, unit: '1 piece', description: 'Fresh cauliflower, perfect for curries and salads.', image: 'https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Bell Peppers', basePrice: 120, unit: '500g', description: 'Colorful bell peppers, rich in vitamin C.', image: 'https://images.pexels.com/photos/594137/pexels-photo-594137.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Cucumber', basePrice: 30, unit: '500g', description: 'Fresh cucumbers, perfect for salads and snacks.', image: 'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Lettuce', basePrice: 40, unit: '1 piece', description: 'Crisp lettuce leaves, perfect for salads.', image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    Dairy: [
      { name: 'Milk', basePrice: 65, unit: '1 liter', description: 'Pure and fresh milk, rich in calcium and protein.', image: 'https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Yogurt', basePrice: 85, unit: '400g', description: 'Creamy yogurt, high in protein and probiotics.', image: 'https://images.pexels.com/photos/434295/pexels-photo-434295.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Cheese', basePrice: 180, unit: '200g', description: 'Fresh cheese, perfect for sandwiches and cooking.', image: 'https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Butter', basePrice: 120, unit: '100g', description: 'Creamy butter, perfect for cooking and baking.', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Paneer', basePrice: 200, unit: '250g', description: 'Fresh paneer, high in protein.', image: 'https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Cream', basePrice: 80, unit: '200ml', description: 'Fresh cream, perfect for desserts and cooking.', image: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Eggs', basePrice: 90, unit: '12 pieces', description: 'Fresh eggs from free-range chickens, high in protein.', image: 'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Ghee', basePrice: 450, unit: '500ml', description: 'Pure ghee, perfect for cooking and health.', image: 'https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Cottage Cheese', basePrice: 150, unit: '200g', description: 'Fresh cottage cheese, low in fat and high in protein.', image: 'https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Sour Cream', basePrice: 120, unit: '200g', description: 'Tangy sour cream, perfect for dips and cooking.', image: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    Meat: [
      { name: 'Chicken Breast', basePrice: 280, unit: '500g', description: 'Fresh chicken breast, lean protein for healthy meals.', image: 'https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Chicken Thighs', basePrice: 220, unit: '500g', description: 'Juicy chicken thighs, perfect for grilling.', image: 'https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Mutton', basePrice: 650, unit: '500g', description: 'Fresh mutton, perfect for curries and roasts.', image: 'https://images.pexels.com/photos/1539684/pexels-photo-1539684.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Fish Fillet', basePrice: 400, unit: '500g', description: 'Fresh fish fillet, rich in omega-3 fatty acids.', image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Prawns', basePrice: 550, unit: '500g', description: 'Fresh prawns, perfect for seafood dishes.', image: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Chicken Wings', basePrice: 200, unit: '500g', description: 'Tender chicken wings, perfect for snacks.', image: 'https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Ground Beef', basePrice: 350, unit: '500g', description: 'Fresh ground beef, perfect for burgers and meatballs.', image: 'https://images.pexels.com/photos/1539684/pexels-photo-1539684.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Salmon', basePrice: 800, unit: '500g', description: 'Fresh salmon, rich in omega-3 and protein.', image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Tuna', basePrice: 600, unit: '500g', description: 'Fresh tuna, perfect for steaks and sushi.', image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Crab', basePrice: 700, unit: '500g', description: 'Fresh crab, perfect for seafood lovers.', image: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    Bakery: [
      { name: 'Bread', basePrice: 35, unit: '400g', description: 'Fresh bread, perfect for sandwiches and toast.', image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Croissants', basePrice: 120, unit: '4 pieces', description: 'Buttery croissants, perfect for breakfast.', image: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Bagels', basePrice: 80, unit: '4 pieces', description: 'Fresh bagels, perfect for breakfast and snacks.', image: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Muffins', basePrice: 150, unit: '6 pieces', description: 'Sweet muffins, perfect for breakfast and tea time.', image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Cookies', basePrice: 100, unit: '200g', description: 'Crispy cookies, perfect for snacking.', image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Cake', basePrice: 300, unit: '500g', description: 'Delicious cake, perfect for celebrations.', image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Donuts', basePrice: 180, unit: '6 pieces', description: 'Sweet donuts, perfect for treats.', image: 'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Pizza Base', basePrice: 60, unit: '2 pieces', description: 'Fresh pizza base, ready to top and bake.', image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Buns', basePrice: 40, unit: '6 pieces', description: 'Soft buns, perfect for burgers and sandwiches.', image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Pastries', basePrice: 200, unit: '4 pieces', description: 'Delicious pastries, perfect for tea time.', image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    Grains: [
      { name: 'Basmati Rice', basePrice: 120, unit: '1 kg', description: 'Premium quality basmati rice, perfect for biryanis.', image: 'https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Brown Rice', basePrice: 100, unit: '1 kg', description: 'Healthy brown rice, rich in fiber.', image: 'https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Wheat Flour', basePrice: 45, unit: '1 kg', description: 'Fresh wheat flour, perfect for making rotis.', image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Quinoa', basePrice: 350, unit: '500g', description: 'Nutritious quinoa, rich in protein and fiber.', image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Oats', basePrice: 120, unit: '500g', description: 'Healthy oats, perfect for breakfast.', image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Barley', basePrice: 80, unit: '500g', description: 'Nutritious barley, perfect for soups and salads.', image: 'https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Millet', basePrice: 90, unit: '500g', description: 'Healthy millet, rich in nutrients.', image: 'https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Corn Flour', basePrice: 60, unit: '500g', description: 'Fine corn flour, perfect for baking.', image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Semolina', basePrice: 70, unit: '500g', description: 'Fresh semolina, perfect for making upma.', image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Rice Flour', basePrice: 55, unit: '500g', description: 'Fine rice flour, perfect for making dosas.', image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    Beverages: [
      { name: 'Orange Juice', basePrice: 80, unit: '1 liter', description: 'Fresh orange juice, rich in vitamin C.', image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Apple Juice', basePrice: 90, unit: '1 liter', description: 'Pure apple juice, naturally sweet.', image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Green Tea', basePrice: 200, unit: '100g', description: 'Premium green tea, rich in antioxidants.', image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Coffee Beans', basePrice: 400, unit: '250g', description: 'Premium coffee beans, freshly roasted.', image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Energy Drink', basePrice: 60, unit: '250ml', description: 'Refreshing energy drink for instant energy.', image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Coconut Water', basePrice: 40, unit: '250ml', description: 'Natural coconut water, rich in electrolytes.', image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Soda', basePrice: 35, unit: '500ml', description: 'Refreshing soda, perfect for parties.', image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Sports Drink', basePrice: 50, unit: '500ml', description: 'Hydrating sports drink for active lifestyle.', image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Herbal Tea', basePrice: 180, unit: '100g', description: 'Soothing herbal tea, perfect for relaxation.', image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Protein Shake', basePrice: 120, unit: '250ml', description: 'Nutritious protein shake for fitness enthusiasts.', image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    Snacks: [
      { name: 'Potato Chips', basePrice: 50, unit: '100g', description: 'Crispy potato chips, perfect for snacking.', image: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Nuts Mix', basePrice: 200, unit: '200g', description: 'Healthy nuts mix, rich in protein and healthy fats.', image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Popcorn', basePrice: 80, unit: '150g', description: 'Crunchy popcorn, perfect for movie nights.', image: 'https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Crackers', basePrice: 60, unit: '200g', description: 'Crispy crackers, perfect with cheese and dips.', image: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Granola Bars', basePrice: 150, unit: '6 pieces', description: 'Healthy granola bars, perfect for on-the-go snacking.', image: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Trail Mix', basePrice: 180, unit: '200g', description: 'Nutritious trail mix, perfect for hiking and snacking.', image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Pretzels', basePrice: 90, unit: '150g', description: 'Crunchy pretzels, perfect for snacking.', image: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Rice Cakes', basePrice: 70, unit: '100g', description: 'Light rice cakes, perfect for healthy snacking.', image: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Chocolate Bar', basePrice: 120, unit: '100g', description: 'Delicious chocolate bar, perfect for sweet cravings.', image: 'https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Dried Fruits', basePrice: 250, unit: '200g', description: 'Healthy dried fruits, perfect for snacking.', image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    Frozen: [
      { name: 'Frozen Peas', basePrice: 80, unit: '500g', description: 'Fresh frozen peas, perfect for quick cooking.', image: 'https://images.pexels.com/photos/2325702/pexels-photo-2325702.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Frozen Corn', basePrice: 90, unit: '500g', description: 'Sweet frozen corn, perfect for salads and cooking.', image: 'https://images.pexels.com/photos/2325702/pexels-photo-2325702.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Ice Cream', basePrice: 200, unit: '500ml', description: 'Creamy ice cream, perfect for desserts.', image: 'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Frozen Pizza', basePrice: 250, unit: '400g', description: 'Ready-to-bake frozen pizza, perfect for quick meals.', image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Frozen Berries', basePrice: 300, unit: '500g', description: 'Mixed frozen berries, perfect for smoothies.', image: 'https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Frozen Fish', basePrice: 350, unit: '500g', description: 'Fresh frozen fish, perfect for quick cooking.', image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Frozen Vegetables', basePrice: 120, unit: '500g', description: 'Mixed frozen vegetables, perfect for stir-fries.', image: 'https://images.pexels.com/photos/2325702/pexels-photo-2325702.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Frozen Chicken', basePrice: 280, unit: '500g', description: 'Fresh frozen chicken, perfect for quick meals.', image: 'https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Frozen Shrimp', basePrice: 450, unit: '500g', description: 'Fresh frozen shrimp, perfect for seafood dishes.', image: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Frozen Yogurt', basePrice: 180, unit: '500ml', description: 'Healthy frozen yogurt, perfect for desserts.', image: 'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    'Personal Care': [
      { name: 'Shampoo', basePrice: 180, unit: '400ml', description: 'Gentle shampoo for all hair types.', image: 'https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Toothpaste', basePrice: 80, unit: '100g', description: 'Fluoride toothpaste for healthy teeth and gums.', image: 'https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Soap', basePrice: 45, unit: '100g', description: 'Moisturizing soap for soft and clean skin.', image: 'https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Face Wash', basePrice: 150, unit: '150ml', description: 'Gentle face wash for clean and fresh skin.', image: 'https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Deodorant', basePrice: 120, unit: '150ml', description: 'Long-lasting deodorant for all-day freshness.', image: 'https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Moisturizer', basePrice: 200, unit: '200ml', description: 'Hydrating moisturizer for soft and smooth skin.', image: 'https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Sunscreen', basePrice: 250, unit: '100ml', description: 'SPF 50 sunscreen for protection against UV rays.', image: 'https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Hair Oil', basePrice: 100, unit: '200ml', description: 'Nourishing hair oil for healthy and shiny hair.', image: 'https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Body Lotion', basePrice: 180, unit: '300ml', description: 'Moisturizing body lotion for soft skin.', image: 'https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Lip Balm', basePrice: 60, unit: '10g', description: 'Moisturizing lip balm for soft and smooth lips.', image: 'https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    Household: [
      { name: 'Dish Soap', basePrice: 80, unit: '500ml', description: 'Effective dish soap for clean and spotless dishes.', image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Laundry Detergent', basePrice: 150, unit: '1 kg', description: 'Powerful laundry detergent for clean and fresh clothes.', image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'All-Purpose Cleaner', basePrice: 120, unit: '500ml', description: 'Versatile cleaner for all surfaces.', image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Toilet Paper', basePrice: 200, unit: '12 rolls', description: 'Soft and strong toilet paper for comfort.', image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Paper Towels', basePrice: 150, unit: '6 rolls', description: 'Absorbent paper towels for quick cleanup.', image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Trash Bags', basePrice: 100, unit: '30 pieces', description: 'Strong trash bags for waste disposal.', image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Sponges', basePrice: 60, unit: '6 pieces', description: 'Durable sponges for cleaning dishes and surfaces.', image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Glass Cleaner', basePrice: 90, unit: '500ml', description: 'Streak-free glass cleaner for crystal clear windows.', image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Floor Cleaner', basePrice: 110, unit: '1 liter', description: 'Effective floor cleaner for sparkling clean floors.', image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Air Freshener', basePrice: 80, unit: '300ml', description: 'Long-lasting air freshener for pleasant home fragrance.', image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    'Baby Care': [
      { name: 'Baby Diapers', basePrice: 400, unit: '30 pieces', description: 'Soft and absorbent diapers for baby comfort.', image: 'https://images.pexels.com/photos/1648375/pexels-photo-1648375.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Baby Wipes', basePrice: 150, unit: '80 pieces', description: 'Gentle baby wipes for sensitive skin.', image: 'https://images.pexels.com/photos/1648375/pexels-photo-1648375.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Baby Shampoo', basePrice: 180, unit: '200ml', description: 'Tear-free baby shampoo for gentle cleansing.', image: 'https://images.pexels.com/photos/1648375/pexels-photo-1648375.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Baby Lotion', basePrice: 200, unit: '200ml', description: 'Moisturizing baby lotion for soft skin.', image: 'https://images.pexels.com/photos/1648375/pexels-photo-1648375.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Baby Food', basePrice: 120, unit: '200g', description: 'Nutritious baby food for healthy growth.', image: 'https://images.pexels.com/photos/1648375/pexels-photo-1648375.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Baby Powder', basePrice: 100, unit: '200g', description: 'Gentle baby powder for dry and comfortable skin.', image: 'https://images.pexels.com/photos/1648375/pexels-photo-1648375.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Baby Oil', basePrice: 150, unit: '200ml', description: 'Gentle baby oil for massage and moisturizing.', image: 'https://images.pexels.com/photos/1648375/pexels-photo-1648375.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Baby Soap', basePrice: 80, unit: '100g', description: 'Mild baby soap for gentle cleansing.', image: 'https://images.pexels.com/photos/1648375/pexels-photo-1648375.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Baby Cream', basePrice: 180, unit: '100g', description: 'Protective baby cream for diaper rash prevention.', image: 'https://images.pexels.com/photos/1648375/pexels-photo-1648375.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Baby Bottles', basePrice: 250, unit: '2 pieces', description: 'BPA-free baby bottles for safe feeding.', image: 'https://images.pexels.com/photos/1648375/pexels-photo-1648375.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ]
  };

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
        )
        )
        )
        
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
          image: template.image,
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