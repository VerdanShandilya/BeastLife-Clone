export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  weight: string;
  flavor: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface FeedbackForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}
