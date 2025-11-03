import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, LogOut } from 'lucide-react';
import Button from './Button';
import { authService } from '@/services/authService';
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const user = authService.getCurrentUser();
  const isAuthenticated = authService.isAuthenticated();
  const handleLogout = () => {
    authService.logout();
    navigate('/');
    setIsOpen(false);
  };
  const navLinks = [{
    path: '/',
    label: 'Home'
  }, {
    path: '/customers',
    label: 'For Customers'
  }, {
    path: '/merchants',
    label: 'For Merchants'
  }, {
    path: '/sponsors',
    label: 'For Sponsors'
  }, {
    path: '/about',
    label: 'About'
  }, {
    path: '/contact',
    label: 'Contact'
  }];
  return <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">IMF</span>
            </div>
            <span className="font-bold text-xl text-gray-800 hidden sm:block">
              Ikorodu Market Fair
            </span>
          </Link>

          {}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                {link.label}
              </Link>)}
          </div>

          {}
          <div className="hidden lg:flex items-center space-x-4">
            {isAuthenticated ? <div className="flex items-center space-x-4">
                <Link to="/dashboard">
                  <Button variant="ghost" size="sm">
                    <User className="mr-2 h-4 w-4" />
                    {user?.name}
                  </Button>
                </Link>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </div> : <>
                <Link to="/login">
                  <Button variant="outline" size="sm">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="sm">Register</Button>
                </Link>
              </>}
          </div>

          {}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {}
        <AnimatePresence>
          {isOpen && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="lg:hidden pb-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary-600 transition-colors font-medium py-2">
                    {link.label}
                  </Link>)}
                <div className="pt-4 border-t flex flex-col space-y-2">
                  {isAuthenticated ? <>
                      <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                        <Button variant="ghost" size="sm" className="w-full">
                          <User className="mr-2 h-4 w-4" />
                          {user?.name}
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm" onClick={handleLogout} className="w-full">
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                      </Button>
                    </> : <>
                      <Link to="/login" onClick={() => setIsOpen(false)}>
                        <Button variant="outline" size="sm" className="w-full">
                          Login
                        </Button>
                      </Link>
                      <Link to="/register" onClick={() => setIsOpen(false)}>
                        <Button size="sm" className="w-full">
                          Register
                        </Button>
                      </Link>
                    </>}
                </div>
              </div>
            </motion.div>}
        </AnimatePresence>
      </div>
    </nav>;
};
export default Navbar;