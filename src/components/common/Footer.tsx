import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import Button from './Button';
import { contactService } from '@/services';
import toast from 'react-hot-toast';
const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await contactService.subscribeNewsletter({
        email
      });
      toast.success('Successfully subscribed to newsletter!');
      setEmail('');
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to subscribe');
    } finally {
      setIsLoading(false);
    }
  };
  const quickLinks = [{
    label: 'Home',
    path: '/'
  }, {
    label: 'For Customers',
    path: '/customers'
  }, {
    label: 'For Merchants',
    path: '/merchants'
  }, {
    label: 'For Sponsors',
    path: '/sponsors'
  }];
  const resources = [{
    label: 'About Us',
    path: '/about'
  }, {
    label: 'Event Details',
    path: '/event'
  }, {
    label: 'Exhibitors',
    path: '/exhibitors'
  }, {
    label: 'Contact',
    path: '/contact'
  }];
  const legal = [{
    label: 'Privacy Policy',
    path: '/privacy'
  }, {
    label: 'Terms & Conditions',
    path: '/terms'
  }];
  const socialLinks = [{
    icon: Facebook,
    href: '#',
    label: 'Facebook'
  }, {
    icon: Twitter,
    href: '#',
    label: 'Twitter'
  }, {
    icon: Instagram,
    href: '#',
    label: 'Instagram'
  }, {
    icon: Linkedin,
    href: '#',
    label: 'LinkedIn'
  }];
  return <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {}
          <div>
            <h3 className="text-xl font-bold mb-4">Ikorodu Market Fair</h3>
            <p className="text-gray-400 mb-4">
              Empowering MSMEs and connecting customers with quality local businesses.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(social => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors" aria-label={social.label}>
                  <social.icon size={20} />
                </a>)}
            </div>
          </div>

          {}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-primary-400 transition-colors">
                    {link.label}
                  </Link>
                </li>)}
            </ul>
          </div>

          {}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map(link => <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-primary-400 transition-colors">
                    {link.label}
                  </Link>
                </li>)}
              {legal.map(link => <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-primary-400 transition-colors">
                    {link.label}
                  </Link>
                </li>)}
            </ul>
          </div>

          {}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" required className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 text-white" />
              <Button type="submit" size="sm" className="w-full" isLoading={isLoading}>
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Ikorodu Market Fair. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;