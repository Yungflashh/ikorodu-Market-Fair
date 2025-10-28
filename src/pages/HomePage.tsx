import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Store, ShoppingBag, Users, TrendingUp, DollarSign, CheckCircle, Star, ChevronRight } from 'lucide-react';
import Button from '../components/common/Button';

const HomePage: React.FC = () => {
  const stats = [
    { value: '200+', label: 'Exhibitors', icon: Store },
    { value: '15,000+', label: 'Expected Visitors', icon: Users },
    { value: '5M+', label: 'Marketing Reach', icon: TrendingUp },
    { value: '₦500M+', label: 'Business Potential', icon: DollarSign },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="heading-1 mb-6">Where Small Businesses Become Success Stories</h1>
              <p className="text-xl mb-8">Join Ikorodu's Premier Market Fair - Connect with 15,000+ Customers</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/merchants"><Button size="lg">Register Your Business</Button></Link>
                <Link to="/register"><Button size="lg" variant="primary">Get Early Access</Button></Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="hidden lg:block">
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800" alt="Market" className="rounded-3xl shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary-100 py-12">
        <div className="container-custom grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <stat.icon className="mx-auto text-primary-600 mb-2" size={40} />
              <div className="text-3xl font-bold text-primary-800">{stat.value}</div>
              <div className="text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white text-center">
        <div className="container-custom">
          <h2 className="heading-2 mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">Limited booth spaces available. Register now!</p>
          <Link to="/merchants"><Button size="lg" className="bg-secondary text-primary-700">Register as Merchant</Button></Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
