import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ShoppingBag, Store, TrendingDown, Users, Gift, Award, ArrowRight, CheckCircle, MapPin, Calendar, DollarSign, Target, Zap, Heart, Sparkles, Star, TrendingUp, Package, Phone, Building, Mail } from 'lucide-react';
import Button from '../components/common/Button';
const HomePage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  useEffect(() => {
    const eventDate = new Date('2025-12-16T09:00:00').getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
          minutes: Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)),
          seconds: Math.floor(distance % (1000 * 60) / 1000)
        });
      }
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);
  const heroStats = [{
    icon: Users,
    value: '100+',
    label: 'MSMEs Exhibiting'
  }, {
    icon: ShoppingBag,
    value: '10,000+',
    label: 'Expected Visitors'
  }, {
    icon: TrendingDown,
    value: 'Up to 50%',
    label: 'Price Crashes'
  }, {
    icon: Calendar,
    value: '6 Days',
    label: 'of Opportunities'
  }];
  const whyPricesCrash = [{
    icon: Heart,
    title: 'Economic Relief',
    description: 'We understand the economic burden. Our mission is to help Nigerians buy more for less during challenging times.',
    color: 'from-red-500 to-red-700'
  }, {
    icon: Phone,
    title: 'Direct from Producers',
    description: 'No middlemen. Buy directly from manufacturers and producers, cutting out extra costs and passing savings to you.',
    color: 'from-blue-500 to-blue-700'
  }, {
    icon: Store,
    title: 'Bulk Selling Strategy',
    description: 'MSMEs sell in volume at the fair, allowing them to reduce prices while still making profit through high sales.',
    color: 'from-green-500 to-green-700'
  }, {
    icon: Award,
    title: 'Partnership Support',
    description: 'Our partners and sponsors subsidize costs, enabling merchants to offer unbeatable prices you won\'t find anywhere else.',
    color: 'from-purple-500 to-purple-700'
  }];
  const opportunities = [{
    title: 'FOR SHOPPERS',
    icon: ShoppingBag,
    color: 'from-pink-500 to-rose-600',
    benefits: ['Save 30-50% on everyday items', 'Access 200+ vendors in one place', 'Find products not available in regular stores', 'Get freebies and promotional gifts', 'Win prizes through lucky draws', 'Enjoy entertainment while shopping'],
    cta: 'Start Shopping',
    link: '/customers'
  }, {
    title: 'FOR MSME OWNERS',
    icon: Store,
    color: 'from-green-500 to-emerald-600',
    benefits: ['Reach 10,000+ potential customers', 'Network with other business owners', 'Agencies & MSMEs Ecosystem experts.', 'Meet investors and secure funding', 'Get business mentorship from experts', 'Continue selling online after event'],
    cta: 'Apply as Merchant',
    link: '/merchants'
  }, {
    title: 'FOR BRANDS & SPONSORS',
    icon: Building,
    color: 'from-blue-500 to-indigo-600',
    benefits: ['Reach 10,000+ engaged audience', 'Demonstrate corporate social responsibility', 'Build brand awareness in Ikorodu', 'Support local economic development', 'Access to extensive media coverage', 'Partnership with growing community'],
    cta: 'Become a Sponsor',
    link: '/sponsors'
  }];
  const eventCategories = [{
    name: 'Fashion & Accessories',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600',
    vendors: '40+',
    discount: 'Up to 40%'
  }, {
    name: 'Food & Groceries',
    image: 'https://images.unsplash.com/photo-1543168256-418811576931?w=600',
    vendors: '35+',
    discount: 'Up to 35%'
  }, {
    name: 'Electronics & Gadgets',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600',
    vendors: '25+',
    discount: 'Up to 30%'
  }, {
    name: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=600',
    vendors: '30+',
    discount: 'Up to 45%'
  }, {
    name: 'Beauty & Wellness',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600',
    vendors: '25+',
    discount: 'Up to 35%'
  }, {
    name: 'Arts & Crafts',
    image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600',
    vendors: '20+',
    discount: 'Up to 50%'
  }];
  const impactStats = [{
    number: '500+',
    label: 'MSMEs Empowered Since 2022',
    icon: Store
  }, {
    number: '₦50M+',
    label: 'Total Sales Generated',
    icon: DollarSign
  }, {
    number: '25,000+',
    label: 'Satisfied Customers',
    icon: Users
  }, {
    number: '95%',
    label: 'Merchant Satisfaction Rate',
    icon: Star
  }];
  const testimonials = [{
    name: 'Mrs. Blessing Adeyemi',
    role: 'Fashion Merchant',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    quote: 'IMF changed my business! I sold 3 months worth of inventory in just 6 days and made connections that tripled my customer base.',
    sales: '₦850,000 in 6 days',
    rating: 5
  }, {
    name: 'Mr. Chidi Okafor',
    role: 'Electronics Vendor',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    quote: 'The direct access to thousands of customers without paying rent for months is incredible. Best business decision I made in 2024!',
    sales: '₦1.2M in 6 days',
    rating: 5
  }, {
    name: 'Miss Fatima Hassan',
    role: 'Beauty Products',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    quote: 'I came as an informal business. I left with CAC registration, an investor, and orders that will keep me busy for months!',
    sales: '₦650,000 + Investor deal',
    rating: 5
  }];
  const partners = ['Talent Plus Resources International', 'Ikorodu Local Government', 'Nigerian Export Promotion Council'];
  return <div className="min-h-screen">
    { }
    <section
      className="relative bg-green-900 text-white section-padding overflow-hidden min-h-[90vh] flex items-center"
      style={{
        backgroundImage: `
      linear-gradient(to bottom right, rgba(0, 64, 0, 0.4), rgba(0, 48, 0, 0.8)),
      url('https://images.unsplash.com/photo-1598732736929-09778a3f366c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170')
    `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
            opacity: 0,
            x: -50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }}>
            {/* <motion.div initial={{
              scale: 0.9,
              opacity: 0
            }} animate={{
              scale: 1,
              opacity: 1
            }} transition={{
              delay: 0.2
            }} className="inline-flex items-center bg-yellow-400 text-green-900 px-6 py-3 rounded-full mb-6 font-bold shadow-lg">
              <TrendingDown className="mr-2" size={24} />
              PRICES ARE CRASHING!
            </motion.div> */}

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="text-yellow-400">IKORODU</span>
              <br />
              MARKET FAIR
            </h1>

            <p className="text-2xl md:text-3xl font-bold text-yellow-100 mb-4">
              THE MARKETPLACE OF OPPORTUNITIES
            </p>

            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-white">
              Shop smart, save big! The prices of products and services will crash to ease economic burden and help you buy more during these challenging times.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border-2 border-yellow-400">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="text-yellow-400" size={32} />
                <div>
                  <div className="text-sm text-green-200">Event Date</div>
                  <div className="text-2xl font-bold">Dec 16th - 21st, 2025</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-yellow-400" size={32} />
                <div>
                  <div className="text-sm text-green-200">Venue</div>
                  <div className="text-lg font-semibold">LIFE Theological Seminary Premises
                    79, Obafemi Awolowo Road,Oke Ota-ona by Grammar Bus stop</div>
                </div>
              </div>
            </div>

            { }
            <div className="grid grid-cols-4 gap-4 mb-8">
              {[{
                value: timeLeft.days,
                label: 'Days'
              }, {
                value: timeLeft.hours,
                label: 'Hours'
              }, {
                value: timeLeft.minutes,
                label: 'Minutes'
              }, {
                value: timeLeft.seconds,
                label: 'Seconds'
              }].map((item, index) => <motion.div key={index} initial={{
                scale: 0
              }} animate={{
                scale: 1
              }} transition={{
                delay: 0.3 + index * 0.1
              }} className="bg-yellow-400 text-green-900 rounded-xl p-4 text-center">
                <div className="text-3xl md:text-4xl font-black">{item.value}</div>
                <div className="text-xs md:text-sm font-bold">{item.label}</div>
              </motion.div>)}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/register?role=customer">
                <Button size="lg" className="bg-yellow-400 text-green-900 hover:bg-yellow-300 font-bold text-lg px-8">
                  <Gift className="mr-2" size={24} />
                  Get FREE Entry Pass
                </Button>
              </Link>
              <Link to="/event">
                <Button size="lg" className="border-2 border-white bg-transparent hover:bg-white/10 font-bold text-lg px-8">
                  <Calendar className="mr-2" size={24} />
                  View Full Schedule
                </Button>
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-4 text-sm">
              <div className="flex items-center">
                <CheckCircle className="mr-2 text-yellow-400" size={20} />
                <span className="font-semibold">100% FREE Entry</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2 text-yellow-400" size={20} />
                <span className="font-semibold">Family Friendly</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{
            opacity: 0,
            x: 50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.3
          }} className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400 rounded-3xl transform rotate-6 opacity-20"></div>
              <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800" alt="Market Fair" className="relative rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300" />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center">
                    <TrendingDown className="text-white" size={32} />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-green-700">50%</div>
                    <div className="text-sm font-bold text-gray-600">Maximum Savings</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        { }
        <motion.div initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6
        }} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {heroStats.map((stat, index) => <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
            <stat.icon className="mx-auto mb-2 text-yellow-400" size={32} />
            <div className="text-2xl md:text-3xl font-black mb-1">{stat.value}</div>
            <div className="text-xs md:text-sm text-green-200">{stat.label}</div>
          </div>)}
        </motion.div>
      </div>

    </section>

    { }
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-700 px-6 py-2 rounded-full mb-4 font-bold">
            <TrendingDown className="mr-2" size={20} />
            OUR MISSION
          </div>
          <h2 className="heading-2 mb-4">
            More than just a  <span className="text-green-600">Market </span> fair
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just a market fair – we're a movement to ease economic burden and create opportunities for everyone
          </p>
        </motion.div>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyPricesCrash.map((reason, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="card p-8 hover:shadow-2xl transition-all duration-300 group">
            <div className={`w-20 h-20 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <reason.icon className="text-white" size={36} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">{reason.title}</h3>
            <p className="text-gray-600 leading-relaxed">{reason.description}</p>
          </motion.div>)}
        </div>


      </div>
    </section>

    { }
    <section className="section-padding bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container-custom">
        <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
          <h2 className="heading-2 mb-4">
            The Marketplace of <span className="text-green-600">Opportunities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're shopping, selling, or sponsoring – IMF has something valuable for you
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {opportunities.map((opp, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.2
          }} className="card p-8 hover:shadow-2xl transition-all duration-300">
            <div className={`w-20 h-20 bg-gradient-to-br ${opp.color} rounded-2xl flex items-center justify-center mb-6`}>
              <opp.icon className="text-white" size={36} />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">{opp.title}</h3>
            <ul className="space-y-4 mb-8">
              {opp.benefits.map((benefit, i) => <li key={i} className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700">{benefit}</span>
              </li>)}
            </ul>
            <Link to={opp.link}>
              <Button className="w-full" size="lg">
                {opp.cta}
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </motion.div>)}
        </div>
      </div>
    </section>

    { }
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
          <h2 className="heading-2 mb-4">Shop by Category</h2>
          <p className="text-xl text-gray-600">Amazing deals across all product categories</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventCategories.map((category, index) => <motion.div key={index} initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="card overflow-hidden group cursor-pointer">
            <div className="relative h-64 overflow-hidden">
              <img src={category.image} alt={category.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              {/* <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                {category.discount} OFF
              </div> */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm">{category.vendors} Vendors</span>
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
                </div>
              </div>
            </div>
          </motion.div>)}
        </div>

        <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mt-12">
          <Link to="/customers">
            <Button size="lg" variant="outline">
              View All Categories
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>

    { }
    <section className="section-padding bg-gradient-to-r from-green-600 to-green-800 text-white">
      <div className="container-custom">
        <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
          <h2 className="heading-2 mb-4">Our Impact Since 2022</h2>
          <p className="text-xl text-green-100">Real results, real growth, real opportunities</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => <motion.div key={index} initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="text-center">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
              <stat.icon className="text-yellow-400" size={36} />
            </div>
            <div className="text-5xl font-black mb-2">{stat.number}</div>
            <div className="text-lg text-green-100">{stat.label}</div>
          </motion.div>)}
        </div>
      </div>
    </section>

    { }
    {/* <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="heading-2 mb-4">Success Stories from Past Merchants</h2>
            <p className="text-xl text-gray-600">Real merchants, real results</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.2
          }} className="card p-8">
                <div className="flex items-center mb-6">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-600">
                  <div className="text-sm text-gray-600 mb-1">Total Sales:</div>
                  <div className="text-xl font-bold text-green-700">{testimonial.sales}</div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section> */}

    { }
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-12">
          <h2 className="heading-3 mb-4">Powered By</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner, index) => <motion.div key={index} initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="bg-white px-8 py-6 rounded-lg shadow-sm hover:shadow-md transition-shadow font-bold text-gray-700 text-center">
            {partner}
          </motion.div>)}
        </div>
      </div>
    </section>

    { }
    <section className="section-padding bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white">
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
          <Zap className="mx-auto mb-6 text-yellow-400" size={64} />
          <h2 className="heading-1 mb-6">
            Don't Miss Nigeria's Biggest <span className="text-yellow-400">Price Crash!</span>
          </h2>
          <p className="text-2xl mb-8 max-w-3xl mx-auto text-green-100">
            December 16-21, 2025 • FREE Entry • 200+ Vendors • Save Up to 50%
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link to="/register?role=customer">
              <Button size="lg" className="bg-yellow-400 text-green-900 hover:bg-yellow-300 font-bold text-xl px-12 py-4">
                <Gift className="mr-2" size={24} />
                Get Your FREE Pass Now
              </Button>
            </Link>
            <Link to="/apply/merchant">
              <Button size="lg" variant="secondary" className="border-2 border-white bg-transparent hover:bg-white/10 font-bold text-xl px-12 py-4">
                <Store className="mr-2" size={24} />
                Apply as Merchant
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center">
              <Phone className="mr-2" size={16} />
              <span>+234 8026654545, 09044514417, 08139250638</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2" size={16} />
              <span>info@ikdmarketfair.com</span>
            </div>
          </div>
          <div className="mt-8">
            <a href="http://www.ikdmarketfair.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 font-bold text-lg">
              www.ikdmarketfair.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  </div>;
};
export default HomePage;