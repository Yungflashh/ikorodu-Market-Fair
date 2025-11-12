import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Percent, Gift, Music, Utensils, Tag, Star, Clock, MapPin, CheckCircle, QrCode, Smartphone, Award, Heart } from 'lucide-react';
import Button from '../components/common/Button';
import { useForm } from 'react-hook-form';
import { authService } from '../services/authService';
import toast from 'react-hot-toast';

const CustomersPage: React.FC = () => {
  const navigate = useNavigate();
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm();

  const benefits = [{
    icon: Percent,
    title: '30-50% Exclusive Discounts',
    description: 'Save big with special prices available only at IMF',
    color: 'from-red-500 to-red-700'
  }, {
    icon: ShoppingBag,
    title: '100+ Product Variety',
    description: 'Fashion, food, beauty, tech, crafts, and more',
    color: 'from-blue-500 to-blue-700'
  }, {
    icon: Music,
    title: 'Live Entertainment',
    description: 'Enjoy Father Christmas, fashion shows, and activities',
    color: 'from-purple-500 to-purple-700'
  }, {
    icon: Utensils,
    title: 'Food & Refreshments',
    description: 'Delicious local and international cuisine at food court',
    color: 'from-amber-500 to-amber-700'
  }, {
    icon: Gift,
    title: 'Daily Raffle Draws',
    description: 'Win amazing prizes through daily raffles',
    color: 'from-green-500 to-green-700'
  }, {
    icon: Heart,
    title: 'Support Local Business',
    description: 'Help grow the Nigerian economy by buying local',
    color: 'from-pink-500 to-pink-700'
  }];

  const categories = [{
    name: 'Fashion & Clothing',
    icon: '👗',
    count: '40+ Vendors'
  }, {
    name: 'Beauty & Cosmetics',
    icon: '💄',
    count: '25+ Vendors'
  }, {
    name: 'Food & Beverages',
    icon: '🍔',
    count: '35+ Vendors'
  }, {
    name: 'Technology & Gadgets',
    icon: '📱',
    count: '25+ Vendors'
  }, {
    name: 'Home & Lifestyle',
    icon: '🏠',
    count: '30+ Vendors'
  }, {
    name: 'Arts & Crafts',
    icon: '🎨',
    count: '20+ Vendors'
  }];

  const schedule = [{
    day: 'Day 1',
    date: 'December 16, 2025',
    events: [{
      time: '9:00 AM',
      event: 'Opening Ceremony'
    }, {
      time: '12:00 PM - 5:00 PM',
      event: 'Shopping & Exhibition'
    }, {
      time: '2:00 PM - 5:00 PM',
      event: 'Father Christmas for Children'
    }, {
      time: '5:00 PM',
      event: 'Gate Closes'
    }]
  }, {
    day: 'Day 2',
    date: 'December 17, 2025',
    events: [{
      time: '9:00 AM',
      event: 'Gate Opens'
    }, {
      time: '9:00 AM - 5:00 PM',
      event: 'Shopping & Exhibition'
    }, {
      time: '10:00 AM - 4:00 PM',
      event: 'Father Christmas for Children'
    }, {
      time: '1:00 PM - 3:00 PM',
      event: 'Young Entrepreneurs Competition'
    }, {
      time: '3:00 PM',
      event: 'Raffle Draw'
    }, {
      time: '5:00 PM',
      event: 'Event Closes'
    }]
  }, {
    day: 'Day 3',
    date: 'December 18, 2025',
    events: [{
      time: '9:00 AM',
      event: 'Gate Opens'
    }, {
      time: '9:00 AM - 5:00 PM',
      event: 'Shopping & Exhibition'
    }, {
      time: '10:00 AM - 4:00 PM',
      event: 'Father Christmas for Children'
    }, {
      time: '12:00 PM - 2:00 PM',
      event: 'MSMEs Business Clinic: Green Economy Focus'
    }, {
      time: '3:00 PM',
      event: 'Raffle Draw'
    }, {
      time: '5:00 PM',
      event: 'Event Closes'
    }]
  }, {
    day: 'Day 4',
    date: 'December 19, 2025',
    events: [{
      time: '9:00 AM',
      event: 'Gate Opens'
    }, {
      time: '9:00 AM - 5:00 PM',
      event: 'Shopping & Exhibition'
    }, {
      time: '10:00 AM - 4:00 PM',
      event: 'Father Christmas for Children'
    }, {
      time: '2:00 PM',
      event: 'Fashion Show'
    }, {
      time: '3:00 PM',
      event: 'Raffle Draw'
    }, {
      time: '5:00 PM',
      event: 'Event Closes'
    }]
  }, {
    day: 'Day 5',
    date: 'December 20, 2025',
    events: [{
      time: '9:00 AM',
      event: 'Gate Opens'
    }, {
      time: '9:00 AM - 4:00 PM',
      event: 'Shopping & Exhibition'
    }, {
      time: '10:00 AM - 3:00 PM',
      event: 'Father Christmas for Children'
    }, {
      time: '4:00 PM',
      event: 'Closing Ceremony'
    }, {
      time: '5:00 PM',
      event: 'End of Event'
    }]
  }];

  const faqs = [{
    question: 'Is registration free?',
    answer: 'Yes! Pre-registration is completely free and gives you early access perks.'
  }, {
    question: 'What should I bring?',
    answer: 'Just bring your QR code (sent via email), valid ID, and shopping bags!'
  }, {
    question: 'Are children allowed?',
    answer: 'Yes, the event is family-friendly with Father Christmas activities daily for children!'
  }, {
    question: 'Is there parking available?',
    answer: 'Yes, free parking is available at the venue.'
  }, {
    question: 'What payment methods are accepted?',
    answer: 'Cash, bank transfers, and POS payments are accepted by vendors.'
  }];

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      await authService.register({
        ...data,
        role: 'customer',
        password: Math.random().toString(36).slice(-8)
      });
      toast.success('Registration successful! Check your email for QR code.');
      setShowRegistrationForm(false);
      navigate('/');
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Registration failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-900 text-white section-padding overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)'
        }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }}>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-sm font-semibold">🎉 5 Days of Amazing Deals</span>
              </div>
              <h1 className="heading-1 mb-6">
                Shop, Save & Celebrate at Ikorodu Market Fair
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Discover incredible products from 100+ local businesses with exclusive discounts up to 50% off. Entertainment, food, and prizes await!
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <QrCode className="text-yellow-400" size={32} />
                  <div>
                    <h3 className="font-bold text-lg">Get Your Free QR Code</h3>
                    <p className="text-sm text-white/80">Skip the queue with early registration</p>
                  </div>
                </div>
                <Button size="lg" onClick={() => setShowRegistrationForm(true)} className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                  Register for Free <CheckCircle className="ml-2" size={20} />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">100+</div>
                  <div className="text-sm text-white/80">Exhibitors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">50%</div>
                  <div className="text-sm text-white/80">Max Discount</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">15K+</div>
                  <div className="text-sm text-white/80">Expected Shoppers</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="hidden lg:block">
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800" alt="Shopping" className="rounded-3xl shadow-2xl w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="heading-2 mb-4">Why Attend IMF?</h2>
            <p className="text-xl text-gray-600">
              More than just shopping - it's an experience!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="card p-6 hover:shadow-xl transition-all">
                <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-4`}>
                  <benefit.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="heading-2 mb-4">What You'll Find</h2>
            <p className="text-xl text-gray-600">
              Browse through diverse categories of quality products
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => <motion.div key={index} initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="card p-6 text-center hover:shadow-xl transition-all cursor-pointer">
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-green-600 font-semibold">{category.count}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="heading-2 mb-4">Daily Activities Schedule</h2>
            <p className="text-xl text-gray-600">
              Plan your visit with our detailed 5-day schedule
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schedule.map((day, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="card p-6">
                <div className="bg-green-600 text-white rounded-lg p-4 mb-6 text-center">
                  <h3 className="text-2xl font-bold">{day.day}</h3>
                  <p className="text-sm">{day.date}</p>
                </div>

                <div className="space-y-3">
                  {day.events.map((event, i) => <div key={i} className="flex items-start gap-3">
                      <Clock className="text-green-600 flex-shrink-0 mt-1" size={18} />
                      <div>
                        <p className="font-semibold text-sm">{event.time}</p>
                        <p className="text-gray-600 text-sm">{event.event}</p>
                      </div>
                    </div>)}
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="section-padding bg-green-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }}>
              <h2 className="heading-2 mb-6">Venue Details</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Location</h3>
                    <p className="text-gray-600">LIFE Theological Seminary Premises</p>
                    <p className="text-gray-600">79, Obafemi Awolowo Road, Oke Ota-Ona</p>
                    <p className="text-gray-600">By Grammar School, Ikorodu</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Opening Hours</h3>
                    <p className="text-gray-600">Daily: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">5-Day Event: December 16-20, 2025</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Facilities</h3>
                    <p className="text-gray-600">• Free parking available</p>
                    <p className="text-gray-600">• Children play area</p>
                    <p className="text-gray-600">• Food court</p>
                    <p className="text-gray-600">• Water & electricity</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }}>
              <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800" alt="Venue" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.05
          }} className="card p-6">
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container-custom text-center">
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }}>
            <h2 className="heading-2 mb-6">Don't Miss Out!</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Register now for free and get your QR code for fast entry. Plus, you'll receive exclusive early-bird discount codes!
            </p>
            <Button size="lg" onClick={() => setShowRegistrationForm(true)} className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
              <QrCode className="mr-2" size={20} />
              Get Your Free QR Code Now
            </Button>
            <p className="mt-6 text-white/80">
              Limited spots available for opening day. Register early!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration Modal */}
      {showRegistrationForm && <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} className="bg-white rounded-2xl max-w-md w-full p-8 max-h-[90vh] overflow-y-auto">
            <div className="text-center mb-6">
              <QrCode className="mx-auto text-green-600 mb-4" size={48} />
              <h2 className="text-2xl font-bold mb-2">Free Customer Registration</h2>
              <p className="text-gray-600">Get your QR code for fast entry</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <input {...register('name', {
              required: true
            })} className="input-field" placeholder="Your full name" />
                {errors.name && <span className="text-red-500 text-sm">Required</span>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input type="email" {...register('email', {
              required: true
            })} className="input-field" placeholder="your@email.com" />
                {errors.email && <span className="text-red-500 text-sm">Required</span>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                <input {...register('phone', {
              required: true
            })} className="input-field" placeholder="+234 XXX XXX XXXX" />
                {errors.phone && <span className="text-red-500 text-sm">Required</span>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Interested Categories (Optional)
                </label>
                <div className="space-y-2">
                  {['Fashion', 'Beauty', 'Food', 'Tech', 'Home', 'Crafts'].map(cat => <label key={cat} className="flex items-center gap-2">
                      <input type="checkbox" {...register('interests')} value={cat.toLowerCase()} />
                      <span className="text-sm">{cat}</span>
                    </label>)}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button type="button" variant="outline" onClick={() => setShowRegistrationForm(false)} className="flex-1">
                  Cancel
                </Button>
                <Button type="submit" isLoading={isSubmitting} className="flex-1">
                  Register Free
                </Button>
              </div>

              <p className="text-xs text-center text-gray-500 pt-2">
                By registering, you'll receive your QR code via email and event updates.
              </p>
            </form>
          </motion.div>
        </div>}
    </div>;
};

export default CustomersPage;