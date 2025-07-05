export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  unit: string;
  inStock: boolean;
  discount?: number;
  expiryDate?: string;
  rating: number;
  reviews: number;
  brand?: string;
  nutritionalInfo?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
  };
  ingredients?: string[];
  origin?: string;
  certifications?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  expiryDate?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  address?: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'delivered' | 'cancelled';
  orderDate: string;
  deliveryDate?: string;
}

export interface ExpiryReminder {
  id: string;
  userId: string;
  productName: string;
  expiryDate: string;
  isNotified: boolean;
}