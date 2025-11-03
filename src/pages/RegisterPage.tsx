import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Lock, Eye, EyeOff, UserPlus } from 'lucide-react';
import Button from '../components/common/Button';
import { useForm } from 'react-hook-form';
import { authService } from '../services/authService';
import toast from 'react-hot-toast';
interface RegisterFormInputs {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
  role: string;
}
const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const roleParam = searchParams.get('role') || 'customer';
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState(roleParam);
  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    watch
  } = useForm<RegisterFormInputs>({
    defaultValues: {
      role: roleParam
    }
  });
  const password = watch('password');
  const roles = [{
    value: 'customer',
    label: 'Customer',
    description: 'Shop at the event'
  }, {
    value: 'merchant',
    label: 'Merchant',
    description: 'Sell your products'
  }, {
    value: 'sponsor',
    label: 'Sponsor',
    description: 'Partner with us'
  }];
  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      await authService.register({
        ...data,
        role: selectedRole
      });
      toast.success('Registration successful!');
      if (selectedRole === 'merchant') {
        navigate('/merchants');
      } else {
        navigate('/');
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };
  return <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 py-12 px-4">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="max-w-2xl w-full">
        <div className="card p-8">
          {}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">IMF</span>
            </div>
            <h1 className="text-3xl font-bold mb-2">Create Your Account</h1>
            <p className="text-gray-600">Join Ikorodu Market Fair today</p>
          </div>

          {}
          <div className="mb-8">
            <label className="block text-sm font-medium mb-4">I am a:</label>
            <div className="grid grid-cols-3 gap-4">
              {roles.map(role => <button key={role.value} type="button" onClick={() => setSelectedRole(role.value)} className={`p-4 border-2 rounded-lg transition-all text-center ${selectedRole === role.value ? 'border-primary-600 bg-primary-50' : 'border-gray-200 hover:border-primary-300'}`}>
                  <div className="font-semibold mb-1">{role.label}</div>
                  <div className="text-xs text-gray-600">{role.description}</div>
                </button>)}
            </div>
          </div>

          {}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input {...register('name', {
                  required: 'Name is required'
                })} className="input-field pl-12" placeholder="John Doe" />
                </div>
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message as string}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input type="email" {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })} className="input-field pl-12" placeholder="john@example.com" />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input {...register('phone', {
                  required: 'Phone number is required'
                })} className="input-field pl-12" placeholder="+234 XXX XXX XXXX" />
                </div>
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message as string}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Password *</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input type={showPassword ? 'text' : 'password'} {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters'
                  }
                })} className="input-field pl-12 pr-12" placeholder="••••••••" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message as string}</p>}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Confirm Password *</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input type={showConfirmPassword ? 'text' : 'password'} {...register('confirmPassword', {
                  required: 'Please confirm your password',
                  validate: value => value === password || 'Passwords do not match'
                })} className="input-field pl-12 pr-12" placeholder="••••••••" />
                  <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message as string}</p>}
              </div>
            </div>

            {}
            <div>
              <label className="flex items-start gap-2">
                <input type="checkbox" {...register('terms', {
                required: 'You must accept the terms'
              })} className="rounded border-gray-300 text-primary-600 mt-1" />
                <span className="text-sm text-gray-600">
                  I agree to the{' '}
                  <Link to="/terms" className="text-primary-600 hover:underline">
                    Terms & Conditions
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-primary-600 hover:underline">
                    Privacy Policy
                  </Link>
                </span>
              </label>
              {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms.message as string}</p>}
            </div>

            <Button type="submit" isLoading={isLoading} className="w-full">
              <UserPlus className="mr-2" size={20} />
              Create Account
            </Button>
          </form>

          {}
          <p className="text-center mt-6 text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-primary-600 font-semibold hover:text-primary-700">
              Sign in
            </Link>
          </p>
        </div>

        {}
        <div className="mt-6 text-center text-sm text-gray-600">
          <Link to="/" className="hover:text-primary-600 mx-2">Home</Link>
          <span>•</span>
          <Link to="/about" className="hover:text-primary-600 mx-2">About</Link>
          <span>•</span>
          <Link to="/contact" className="hover:text-primary-600 mx-2">Contact</Link>
        </div>
      </motion.div>
    </div>;
};
export default RegisterPage;