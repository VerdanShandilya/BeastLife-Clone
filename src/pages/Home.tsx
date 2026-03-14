import { Link } from 'react-router-dom';
import { Dumbbell, Zap, Award, TrendingUp } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen">
      <section className="relative h-[600px] bg-gradient-to-r from-black via-gray-900 to-red-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Fuel Your <span className="text-red-500">Fitness</span> Journey
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Premium quality protein supplements for maximum muscle growth and recovery
            </p>
            <Link
              to="/products"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Why Choose <span className="text-red-600">Protein?</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Protein is the essential building block your body needs for muscle growth, recovery, and overall fitness success
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Dumbbell className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Muscle Building</h3>
              <p className="text-gray-600">
                Protein provides essential amino acids that stimulate muscle protein synthesis, helping you build lean muscle mass
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Faster Recovery</h3>
              <p className="text-gray-600">
                Post-workout protein intake accelerates muscle recovery, reducing soreness and preparing you for your next session
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Enhanced Performance</h3>
              <p className="text-gray-600">
                Adequate protein intake supports strength gains, endurance, and overall athletic performance during training
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Weight Management</h3>
              <p className="text-gray-600">
                High-protein diets increase satiety and boost metabolism, making it easier to maintain a healthy body composition
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Featured <span className="text-red-600">Products</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Discover our most popular protein supplements
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Transform Your Body Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of athletes who trust MuscleBlazer for their fitness nutrition needs
          </p>
          <Link
            to="/products"
            className="inline-block bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </section>
    </div>
  );
};
