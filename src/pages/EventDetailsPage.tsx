import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Ticket, Users, Music, Utensils, Gift, Trophy, Info, Download, Share2, Navigation, Phone, Mail, AlertCircle, CheckCircle2, Car, Bus, Train, Bike, Camera, Wifi, Shield, Heart, Accessibility, BabyIcon } from 'lucide-react';
import Button from '../components/common/Button';
const EventDetailsPage: React.FC = () => {
  const [activeDay, setActiveDay] = useState(0);
  const eventInfo = {
    name: 'Ikorodu Market Fair 2025',
    dates: 'Friday - Sunday, Coming Soon',
    time: '9:00 AM - 6:00 PM Daily',
    venue: 'Ikorodu Town Hall',
    address: 'Town Hall Road, Ikorodu, Lagos State',
    expectedAttendance: '15,000+',
    exhibitors: '200+',
    entryFee: 'FREE'
  };
  const dailySchedule = [{
    day: 'Day 1',
    date: 'Friday',
    theme: 'Grand Opening & Fashion Day',
    activities: [{
      time: '8:00 AM',
      title: 'Gates Open',
      description: 'Early bird entry for pre-registered guests',
      icon: Clock
    }, {
      time: '9:00 AM',
      title: 'Opening Ceremony',
      description: 'Welcome address by organizers and special guests',
      icon: Users
    }, {
      time: '10:00 AM',
      title: 'Shopping Begins',
      description: 'All 200+ booths officially open for business',
      icon: Gift
    }, {
      time: '11:00 AM',
      title: 'Business Registration Desk Opens',
      description: 'On-site CAC registration support',
      icon: CheckCircle2
    }, {
      time: '12:00 PM',
      title: 'Fashion Show',
      description: 'Local designers showcase latest collections',
      icon: Users
    }, {
      time: '1:00 PM',
      title: 'Lunch Break',
      description: 'Food court featuring local delicacies',
      icon: Utensils
    }, {
      time: '2:00 PM',
      title: 'Live Music Performance',
      description: 'Local artists and bands',
      icon: Music
    }, {
      time: '3:00 PM',
      title: 'Investor Pitch Session',
      description: 'Selected merchants pitch to investors',
      icon: Trophy
    }, {
      time: '4:00 PM',
      title: 'First Lucky Draw',
      description: 'Win amazing prizes!',
      icon: Gift
    }, {
      time: '5:00 PM',
      title: 'Kids Zone Activities',
      description: 'Face painting, games, and entertainment',
      icon: Heart
    }, {
      time: '6:00 PM',
      title: 'Day 1 Closing',
      description: 'See you tomorrow!',
      icon: Clock
    }]
  }, {
    day: 'Day 2',
    date: 'Saturday',
    theme: 'Family Fun & Food Festival',
    activities: [{
      time: '9:00 AM',
      title: 'Early Bird Shopping',
      description: 'Special morning deals',
      icon: Gift
    }, {
      time: '10:00 AM',
      title: 'Cooking Demonstration',
      description: 'Celebrity chefs showcase recipes',
      icon: Utensils
    }, {
      time: '11:00 AM',
      title: 'Kids Zone Opens',
      description: 'Bouncy castles, face painting, games',
      icon: BabyIcon
    }, {
      time: '12:00 PM',
      title: 'Food Tasting Tour',
      description: 'Sample dishes from various vendors',
      icon: Utensils
    }, {
      time: '1:00 PM',
      title: 'Family Photo Contest',
      description: 'Win prizes for best family photos',
      icon: Camera
    }, {
      time: '2:00 PM',
      title: 'MSME Workshop',
      description: 'Business growth strategies',
      icon: Users
    }, {
      time: '3:00 PM',
      title: 'Cultural Dance Performance',
      description: 'Traditional Nigerian dances',
      icon: Music
    }, {
      time: '4:00 PM',
      title: 'Product Sampling',
      description: 'Free samples from exhibitors',
      icon: Gift
    }, {
      time: '5:00 PM',
      title: 'Mega Lucky Draw',
      description: 'Grand prizes worth millions!',
      icon: Trophy
    }, {
      time: '6:00 PM',
      title: 'Evening Entertainment',
      description: 'Live band performance',
      icon: Music
    }, {
      time: '7:00 PM',
      title: 'Day 2 Closing',
      description: 'Final day tomorrow!',
      icon: Clock
    }]
  }, {
    day: 'Day 3',
    date: 'Sunday',
    theme: 'Final Day Super Sales',
    activities: [{
      time: '9:00 AM',
      title: 'Final Day Deals',
      description: 'Massive discounts up to 50%',
      icon: Gift
    }, {
      time: '10:00 AM',
      title: 'Meet the Makers Session',
      description: 'Chat with business owners',
      icon: Users
    }, {
      time: '11:00 AM',
      title: 'Panel Discussion',
      description: 'Future of MSMEs in Nigeria',
      icon: Users
    }, {
      time: '12:00 PM',
      title: 'Charity Auction',
      description: 'Bid on exclusive items for charity',
      icon: Heart
    }, {
      time: '1:00 PM',
      title: 'Family Games',
      description: 'Fun activities for all ages',
      icon: Trophy
    }, {
      time: '2:00 PM',
      title: 'Last Chance Shopping',
      description: 'Final opportunity for deals',
      icon: Gift
    }, {
      time: '3:00 PM',
      title: 'Grand Finale Show',
      description: 'Special performances and entertainment',
      icon: Music
    }, {
      time: '4:00 PM',
      title: 'Awards Ceremony',
      description: 'Best exhibitor, best customer, etc.',
      icon: Trophy
    }, {
      time: '5:00 PM',
      title: 'Final Lucky Draw',
      description: 'Last chance to win!',
      icon: Gift
    }, {
      time: '5:45 PM',
      title: 'Closing Ceremony',
      description: 'Thank you and see you next year!',
      icon: Users
    }, {
      time: '6:00 PM',
      title: 'Event Ends',
      description: 'Safe journey home!',
      icon: Clock
    }]
  }];
  const venues = [{
    name: 'Main Exhibition Hall',
    capacity: '5,000',
    features: ['200+ Booths', 'Air Conditioned', 'Free WiFi', 'Wheelchair Accessible']
  }, {
    name: 'Food Court',
    capacity: '2,000',
    features: ['50+ Food Vendors', 'Indoor/Outdoor Seating', 'Family Friendly', 'Various Cuisines']
  }, {
    name: 'Entertainment Arena',
    capacity: '3,000',
    features: ['Live Stage', 'Sound System', 'LED Screens', 'VIP Seating']
  }, {
    name: 'Kids Zone',
    capacity: '1,000',
    features: ['Bouncy Castles', 'Face Painting', 'Games', 'Supervised Activities']
  }];
  const facilities = [{
    icon: Wifi,
    title: 'Free WiFi',
    description: 'Throughout venue'
  }, {
    icon: Car,
    title: 'Free Parking',
    description: '500+ spaces'
  }, {
    icon: Accessibility,
    title: 'Wheelchair Access',
    description: 'Fully accessible'
  }, {
    icon: Shield,
    title: 'Security',
    description: '24/7 on-site'
  }, {
    icon: Utensils,
    title: 'Food & Drinks',
    description: 'Multiple options'
  }, {
    icon: Camera,
    title: 'Photo Booths',
    description: 'Free photos'
  }, {
    icon: BabyIcon,
    title: 'Nursing Room',
    description: 'Private space'
  }, {
    icon: AlertCircle,
    title: 'First Aid',
    description: 'Medical team'
  }];
  const transportation = [{
    icon: Bus,
    mode: 'Bus/BRT',
    details: 'BRT stops at Ikorodu Garage (5 mins walk)',
    routes: 'Routes: 100, 107, 109'
  }, {
    icon: Car,
    mode: 'Private Car',
    details: 'Free parking available (500+ spaces)',
    routes: 'GPS: Ikorodu Town Hall'
  }, {
    icon: Train,
    mode: 'Train (Coming Soon)',
    details: 'Red Line station nearby',
    routes: 'Expected completion 2025'
  }, {
    icon: Bike,
    mode: 'Bike/Walk',
    details: 'Bike racks available',
    routes: 'Safe pedestrian paths'
  }];
  const faqs = [{
    q: 'Is entry free?',
    a: 'Yes! Entry is completely FREE for all visitors. Just register online to get your QR code for fast entry.'
  }, {
    q: 'What can I buy at the fair?',
    a: 'Everything! Fashion, food, tech, beauty, home goods, crafts, and more from 200+ vendors.'
  }, {
    q: 'Can I bring my family?',
    a: 'Absolutely! The event is family-friendly with a dedicated Kids Zone and activities for all ages.'
  }, {
    q: 'Is there parking?',
    a: 'Yes, we have FREE parking with 500+ spaces available on a first-come, first-served basis.'
  }, {
    q: 'What payment methods are accepted?',
    a: 'Cash, Card, Bank Transfer, and Mobile Money (USSD). ATMs are also available on-site.'
  }, {
    q: 'Can I leave and re-enter?',
    a: 'Yes! Your QR code allows multiple entries throughout the day.'
  }, {
    q: 'What should I bring?',
    a: 'Comfortable shoes, shopping bags (or buy our eco-bags!), phone for QR code, and your enthusiasm!'
  }, {
    q: 'Is food available?',
    a: 'Yes! We have 50+ food vendors offering everything from local delicacies to international cuisine.'
  }];
  const rules = ['No weapons or dangerous items', 'No outside food or drinks (except baby food)', 'No smoking inside venue', 'No pets (except service animals)', 'Photography allowed (no flash near stage)', 'Respect all vendors and visitors', 'Follow COVID-19 protocols if active', 'Children under 12 must be supervised'];
  return <div className="min-h-screen">
      {}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white section-padding overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px'
        }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }}>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
                <Calendar className="mr-3" size={24} />
                <span className="font-semibold text-lg">Event Details</span>
              </div>
              
              <h1 className="heading-1 mb-6">
                {eventInfo.name}
              </h1>
              
              <div className="text-2xl mb-8 font-semibold">
                {eventInfo.dates}
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <Clock className="mx-auto mb-3 text-yellow-300" size={36} />
                  <div className="text-lg font-semibold mb-1">Time</div>
                  <div className="text-white/80">{eventInfo.time}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <MapPin className="mx-auto mb-3 text-green-300" size={36} />
                  <div className="text-lg font-semibold mb-1">Venue</div>
                  <div className="text-white/80">{eventInfo.venue}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <Ticket className="mx-auto mb-3 text-pink-300" size={36} />
                  <div className="text-lg font-semibold mb-1">Entry</div>
                  <div className="text-white/80 text-xl font-bold">{eventInfo.entryFee}</div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
                  <Ticket className="mr-2" size={20} />
                  Get Your Free Pass
                </Button>
                <Button size="lg" variant="secondary" className="border-2 border-white bg-transparent hover:bg-white/10">
                  <Download className="mr-2" size={20} />
                  Download Schedule
                </Button>
                <Button size="lg" variant="secondary" className="border-2 border-white bg-transparent hover:bg-white/10">
                  <Share2 className="mr-2" size={20} />
                  Share Event
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {}
      <section className="bg-white border-b">
        <div className="container-custom py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600">{eventInfo.expectedAttendance}</div>
              <div className="text-gray-600">Expected Visitors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">{eventInfo.exhibitors}</div>
              <div className="text-gray-600">Exhibitors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">3</div>
              <div className="text-gray-600">Days of Fun</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">FREE</div>
              <div className="text-gray-600">Entry Fee</div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container-custom">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <h2 className="heading-2 mb-4">3-Day Event Schedule</h2>
            <p className="text-xl text-gray-600">Plan your perfect day at IMF</p>
          </motion.div>

          {}
          <div className="flex justify-center mb-8 gap-4 flex-wrap">
            {dailySchedule.map((day, index) => <button key={index} onClick={() => setActiveDay(index)} className={`px-8 py-4 rounded-xl font-semibold transition-all ${activeDay === index ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>
                <div className="text-lg">{day.day}</div>
                <div className="text-sm opacity-80">{day.date}</div>
              </button>)}
          </div>

          {}
          <motion.div key={activeDay} initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.3
        }} className="card p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">{dailySchedule[activeDay].theme}</h3>
              <p className="text-gray-600">{dailySchedule[activeDay].date}</p>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {dailySchedule[activeDay].activities.map((activity, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: index * 0.05
            }} className="flex items-start bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <div className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold mr-4 flex-shrink-0 min-w-[100px] text-center">
                    {activity.time}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <activity.icon className="text-purple-600 mr-2" size={20} />
                      <h4 className="font-bold text-lg">{activity.title}</h4>
                    </div>
                    <p className="text-gray-600">{activity.description}</p>
                  </div>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </section>

      {}
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
        }} className="text-center mb-12">
            <h2 className="heading-2 mb-4">Venue & Facilities</h2>
            <p className="text-xl text-gray-600">Everything you need for a great experience</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {venues.map((venue, index) => <motion.div key={index} initial={{
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
                <h3 className="font-bold text-lg mb-2">{venue.name}</h3>
                <div className="text-purple-600 font-semibold mb-4">
                  Capacity: {venue.capacity}
                </div>
                <ul className="space-y-2">
                  {venue.features.map((feature, i) => <li key={i} className="flex items-center text-sm">
                      <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0" size={16} />
                      <span>{feature}</span>
                    </li>)}
                </ul>
              </motion.div>)}
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {facilities.map((facility, index) => <motion.div key={index} initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.05
          }} className="card p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <facility.icon className="text-purple-600" size={28} />
                </div>
                <h3 className="font-bold mb-1">{facility.title}</h3>
                <p className="text-sm text-gray-600">{facility.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {}
      <section className="section-padding bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container-custom">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <h2 className="heading-2 mb-4">How to Get There</h2>
            <p className="text-xl text-gray-600">Multiple transportation options available</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {}
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="card overflow-hidden h-96">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.395270315744!3d6.451512795363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d!2sLagos!5e0!3m2!1sen!2sng!4v1234567890" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" />
            </motion.div>

            {}
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="space-y-6">
              <div className="card p-6">
                <div className="flex items-start">
                  <MapPin className="text-purple-600 mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold mb-2">Address</h3>
                    <p className="text-gray-700">{eventInfo.address}</p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start">
                  <Phone className="text-purple-600 mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold mb-2">Contact</h3>
                    <p className="text-gray-700">+234 (0) 800 123 4567</p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start">
                  <Mail className="text-purple-600 mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold mb-2">Email</h3>
                    <p className="text-gray-700">info@ikorodumarketfair.com</p>
                  </div>
                </div>
              </div>

              <Button className="w-full" size="lg">
                <Navigation className="mr-2" size={20} />
                Open in Google Maps
              </Button>
            </motion.div>
          </div>

          {}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transportation.map((option, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <option.icon className="text-white" size={28} />
                </div>
                <h3 className="font-bold mb-2">{option.mode}</h3>
                <p className="text-sm text-gray-700 mb-2">{option.details}</p>
                <p className="text-xs text-gray-500">{option.routes}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know</p>
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
                <h3 className="font-bold mb-2 flex items-start">
                  <span className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                    Q
                  </span>
                  {faq.q}
                </h3>
                <p className="text-gray-700 ml-11">{faq.a}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {}
      <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container-custom max-w-4xl">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <h2 className="heading-2 mb-4">Event Rules & Guidelines</h2>
            <p className="text-xl text-gray-600">Please help us keep everyone safe and happy</p>
          </motion.div>

          <div className="card p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {rules.map((rule, index) => <div key={index} className="flex items-start">
                  <AlertCircle className="text-orange-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{rule}</span>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="section-padding bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white">
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
            <Calendar className="mx-auto mb-6" size={64} />
            <h2 className="heading-2 mb-6">Ready to Join Us?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Register now to get your free QR pass and be part of Nigeria's biggest market fair!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
                <Ticket className="mr-2" size={20} />
                Get Free Pass Now
              </Button>
              <Button size="lg" variant="secondary" className="border-2 border-white bg-transparent hover:bg-white/10">
                <Download className="mr-2" size={20} />
                Download Event Guide
              </Button>
            </div>
            <div className="mt-8 text-sm">
              <Users className="inline mr-2" size={16} />
              Join 15,000+ people already registered!
            </div>
          </motion.div>
        </div>
      </section>
    </div>;
};
export default EventDetailsPage;