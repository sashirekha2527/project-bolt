import React, { useState } from 'react';
import { Star, TrendingUp, ShoppingCart, Download, Calendar } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Recommendations: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  // Mock purchase history analysis
  const frequentlyBought = [
    { id: '1', name: 'Fresh Bananas', frequency: 8, category: 'Fruits' },
    { id: '3', name: 'Fresh Milk', frequency: 6, category: 'Dairy' },
    { id: '5', name: 'Farm Fresh Eggs', frequency: 5, category: 'Dairy' },
    { id: '2', name: 'Organic Apples', frequency: 4, category: 'Fruits' },
    { id: '4', name: 'Whole Wheat Bread', frequency: 4, category: 'Bakery' }
  ];

  const recommendedProducts = products.filter(product => 
    frequentlyBought.some(item => item.id === product.id)
  );

  const seasonalRecommendations = products.filter(product => 
    product.category === 'Fruits' || product.category === 'Vegetables'
  ).slice(0, 4);

  const trendingProducts = products.filter(product => 
    product.rating >= 4.5
  ).slice(0, 4);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const generateShoppingList = () => {
    const shoppingList = recommendedProducts.map(product => ({
      name: product.name,
      category: product.category,
      estimatedPrice: product.price,
      unit: product.unit
    }));

    const listContent = shoppingList.map(item => 
      `• ${item.name} (${item.unit}) - ₹${item.estimatedPrice}`
    ).join('\n');

    const content = `Shopping List for ${monthNames[selectedMonth]}\n\n${listContent}\n\nEstimated Total: ₹${shoppingList.reduce((sum, item) => sum + item.estimatedPrice, 0)}`;

    // Create and download file
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `shopping-list-${monthNames[selectedMonth].toLowerCase()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <Star className="w-8 h-8 text-emerald-600" />
            <h1 className="text-3xl font-bold text-gray-900">Smart Recommendations</h1>
          </div>
        </div>

        {/* Monthly Shopping List Generator */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-emerald-600" />
            Monthly Shopping List
          </h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Month
              </label>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                {monthNames.map((month, index) => (
                  <option key={index} value={index}>{month}</option>
                ))}
              </select>
            </div>
            <button
              onClick={generateShoppingList}
              className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors flex items-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Generate List</span>
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Based on your purchase history, we've created a personalized shopping list for {monthNames[selectedMonth]}
          </p>
        </div>

        {/* Frequently Bought Items */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Your Frequently Bought Items
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recommendedProducts.map((product) => (
              <div key={product.id} className="relative">
                <ProductCard product={product} />
                <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  {frequentlyBought.find(item => item.id === product.id)?.frequency}x/month
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trending Products */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <TrendingUp className="w-6 h-6 mr-2 text-orange-500" />
            Trending This Week
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Seasonal Recommendations */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Seasonal Picks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {seasonalRecommendations.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Purchase Pattern Analysis */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Your Shopping Patterns</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-emerald-50 rounded-lg">
              <div className="text-2xl font-bold text-emerald-600">₹1,250</div>
              <div className="text-sm text-gray-600">Average Monthly Spend</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">12</div>
              <div className="text-sm text-gray-600">Items per Order</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">Dairy</div>
              <div className="text-sm text-gray-600">Most Bought Category</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Recommendations;