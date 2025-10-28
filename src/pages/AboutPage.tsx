import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Users, Award, TrendingUp, MapPin } from 'lucide-react';

const AboutPage: React.FC = () => {
  const mission = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To create a thriving marketplace ecosystem that empowers MSMEs, connects customers with quality local businesses, and drives economic growth in Ikorodu and beyond.',
    },
    {
      icon: Heart,
      title: 'Our Vision',
      description: 'To become Nigeria\'s premier market fair, recognized for transforming small businesses into successful enterprises and creating lasting community impact.',
    },
    {
      icon: Users,
      title: 'Our Values',
      description: 'Integrity, Innovation, Inclusion, Impact. We believe in supporting every entrepreneur, fostering fair trade, and building sustainable business practices.',
    },
  ];

  const team = [
    { name: 'Adebayo Williams', position: 'Event Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300' },
    { name: 'Chioma Okafor', position: 'Operations Manager', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300' },
    { name: 'Ibrahim Musa', position: 'Marketing Lead', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300' },
    { name: 'Funmi Adeleke', position: 'Vendor Relations', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="heading-1 mb-6">About Ikorodu Market Fair</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Nigeria's fastest-growing marketplace connecting MSMEs with customers, investors, and opportunities for sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {mission.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-8 text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="text-primary-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 mb-6">Our Story</h2>
            <div className="text-gray-700 space-y-4 text-left">
              <p>
                Ikorodu Market Fair was born from a simple observation: thousands of talented entrepreneurs in Ikorodu and surrounding areas had incredible products and services but lacked the platform to reach their full potential.
              </p>
              <p>
                Founded in 2023, IMF has quickly grown into a movement that brings together merchants, customers, investors, and partners in a vibrant three-day celebration of entrepreneurship and commerce.
              </p>
              <p>
                What started as a modest initiative has transformed into Nigeria's premier market fair, facilitating millions in business transactions, creating countless success stories, and establishing Ikorodu as a hub for MSME development.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">Dedicated professionals making IMF a reality</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
