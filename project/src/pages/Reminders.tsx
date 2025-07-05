import React, { useState } from 'react';
import { Bell, Calendar, Plus, Trash2, AlertCircle } from 'lucide-react';
import { format, isAfter, isBefore, addDays } from 'date-fns';

interface ReminderItem {
  id: string;
  productName: string;
  expiryDate: string;
  category: string;
  isNotified: boolean;
}

const Reminders: React.FC = () => {
  const [reminders, setReminders] = useState<ReminderItem[]>([
    {
      id: '1',
      productName: 'Fresh Milk',
      expiryDate: '2024-12-10',
      category: 'Dairy',
      isNotified: false
    },
    {
      id: '2',
      productName: 'Bread',
      expiryDate: '2024-12-08',
      category: 'Bakery',
      isNotified: true
    },
    {
      id: '3',
      productName: 'Yogurt',
      expiryDate: '2024-12-15',
      category: 'Dairy',
      isNotified: false
    }
  ]);

  const [newReminder, setNewReminder] = useState({
    productName: '',
    expiryDate: '',
    category: 'Dairy'
  });

  const [showAddForm, setShowAddForm] = useState(false);

  const today = new Date();
  const threeDaysFromNow = addDays(today, 3);

  const getExpiryStatus = (expiryDate: string) => {
    const expiry = new Date(expiryDate);
    
    if (isBefore(expiry, today)) {
      return { status: 'expired', color: 'text-red-600 bg-red-50' };
    } else if (isBefore(expiry, threeDaysFromNow)) {
      return { status: 'expiring-soon', color: 'text-orange-600 bg-orange-50' };
    } else {
      return { status: 'fresh', color: 'text-green-600 bg-green-50' };
    }
  };

  const handleAddReminder = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReminder.productName && newReminder.expiryDate) {
      const reminder: ReminderItem = {
        id: Date.now().toString(),
        productName: newReminder.productName,
        expiryDate: newReminder.expiryDate,
        category: newReminder.category,
        isNotified: false
      };
      setReminders([...reminders, reminder]);
      setNewReminder({ productName: '', expiryDate: '', category: 'Dairy' });
      setShowAddForm(false);
    }
  };

  const handleDeleteReminder = (id: string) => {
    setReminders(reminders.filter(reminder => reminder.id !== id));
  };

  const expiredItems = reminders.filter(item => getExpiryStatus(item.expiryDate).status === 'expired');
  const expiringSoonItems = reminders.filter(item => getExpiryStatus(item.expiryDate).status === 'expiring-soon');
  const freshItems = reminders.filter(item => getExpiryStatus(item.expiryDate).status === 'fresh');

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <Bell className="w-8 h-8 text-emerald-600" />
            <h1 className="text-3xl font-bold text-gray-900">Expiry Reminders</h1>
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors flex items-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>Add Reminder</span>
          </button>
        </div>

        {/* Add Reminder Form */}
        {showAddForm && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Add New Reminder</h2>
            <form onSubmit={handleAddReminder} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Product Name
                  </label>
                  <input
                    type="text"
                    value={newReminder.productName}
                    onChange={(e) => setNewReminder({...newReminder, productName: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Enter product name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="date"
                    value={newReminder.expiryDate}
                    onChange={(e) => setNewReminder({...newReminder, expiryDate: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    value={newReminder.category}
                    onChange={(e) => setNewReminder({...newReminder, category: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="Dairy">Dairy</option>
                    <option value="Fruits">Fruits</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  Add Reminder
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Expired Items */}
        {expiredItems.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-red-600 mb-4 flex items-center">
              <AlertCircle className="w-5 h-5 mr-2" />
              Expired Items ({expiredItems.length})
            </h2>
            <div className="space-y-3">
              {expiredItems.map((item) => (
                <div key={item.id} className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-red-800">{item.productName}</h3>
                      <p className="text-sm text-red-600">
                        Category: {item.category} | Expired on: {format(new Date(item.expiryDate), 'MMM dd, yyyy')}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDeleteReminder(item.id)}
                      className="text-red-500 hover:text-red-700 p-2"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Expiring Soon Items */}
        {expiringSoonItems.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-orange-600 mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Expiring Soon ({expiringSoonItems.length})
            </h2>
            <div className="space-y-3">
              {expiringSoonItems.map((item) => (
                <div key={item.id} className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-orange-800">{item.productName}</h3>
                      <p className="text-sm text-orange-600">
                        Category: {item.category} | Expires on: {format(new Date(item.expiryDate), 'MMM dd, yyyy')}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDeleteReminder(item.id)}
                      className="text-orange-500 hover:text-orange-700 p-2"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Fresh Items */}
        {freshItems.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-green-600 mb-4">
              Fresh Items ({freshItems.length})
            </h2>
            <div className="space-y-3">
              {freshItems.map((item) => (
                <div key={item.id} className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-green-800">{item.productName}</h3>
                      <p className="text-sm text-green-600">
                        Category: {item.category} | Expires on: {format(new Date(item.expiryDate), 'MMM dd, yyyy')}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDeleteReminder(item.id)}
                      className="text-green-500 hover:text-green-700 p-2"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {reminders.length === 0 && (
          <div className="text-center py-12">
            <Bell className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <h2 className="text-xl font-semibold text-gray-600 mb-2">No reminders set</h2>
            <p className="text-gray-500">Add your first expiry reminder to get started</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reminders;