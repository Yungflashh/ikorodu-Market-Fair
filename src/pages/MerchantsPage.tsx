import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Store, Users, TrendingUp, Award, CheckCircle, DollarSign, Calendar, MapPin, Zap, Target, Briefcase, GraduationCap, ArrowRight, Star, Sparkles } from 'lucide-react';
import Button from '../components/common/Button';
import { useForm } from 'react-hook-form';
import { merchantService } from '../services/merchantService';
import toast from 'react-hot-toast';
import { authService } from '../services/authService';
import woman from '../assets/woman.jpg'
interface BoothPackage {
  id: string;
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
  color: string;
}
const MerchantsPage: React.FC = () => {
  const navigate = useNavigate();
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>('standard');
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm();
  const boothPackages: BoothPackage[] = [{
    id: 'basic',
    name: 'Basic Booth',
    price: '₦50,000',
    color: 'from-gray-500 to-gray-700',
    features: ['3m x 3m booth space', 'Basic table and chairs', 'Business name display', 'Access to common areas', 'Event marketing inclusion', 'Digital catalog listing']
  }, {
    id: 'standard',
    name: 'Standard Booth',
    price: '₦100,000',
    popular: true,
    color: 'from-primary-500 to-primary-700',
    features: ['4m x 4m booth space', 'Premium furniture setup', 'Branded backdrop', 'Electricity connection', 'Priority booth location', 'Featured catalog listing', 'Social media promotion', 'Business advisory session']
  }, {
    id: 'premium',
    name: 'Premium Booth',
    price: '₦200,000',
    color: 'from-amber-500 to-amber-700',
    features: ['6m x 6m booth space', 'Deluxe furniture package', 'Custom branded setup', 'Dedicated power supply', 'Corner/premium location', 'VIP catalog placement', 'Dedicated marketing campaign', 'Investor pitch opportunity', 'Free business registration', 'Mentorship program access']
  }];
  const benefits = [{
    icon: Users,
    title: 'Access 15,000+ Customers',
    description: 'Connect with thousands of potential customers actively looking for products.'
  }, {
    icon: TrendingUp,
    title: 'Boost Sales & Revenue',
    description: 'Average merchants report 300% increase in sales during the event.'
  }, {
    icon: GraduationCap,
    title: 'Business Mentorship',
    description: 'Access to Talent Plus program and experienced business advisors.'
  }, {
    icon: DollarSign,
    title: 'Funding Opportunities',
    description: 'Pitch to investors and access funding options for business growth.'
  }, {
    icon: Award,
    title: 'Business Registration',
    description: 'On-site CAC registration support to formalize your business.'
  }, {
    icon: Zap,
    title: 'Digital Marketplace',
    description: 'Continue selling online after the event on our platform.'
  }];
  const successStories = [{
    name: 'Adebayo Fashion House',
    revenue: '₦2.5M',
    quote: 'IMF transformed my small tailoring business into a thriving fashion brand.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=100'
  }, {
    name: 'Mama Risi Foods',
    revenue: '₦1.8M',
    quote: 'I connected with suppliers and customers that tripled my business.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100'
  }, {
    name: 'TechCraft Innovations',
    revenue: '₦3.2M',
    quote: 'Met an investor who funded my expansion. Best decision ever!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'
  }];
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      if (uploadedImages.length + files.length > 5) {
        toast.error('Maximum 5 images allowed');
        return;
      }
      setUploadedImages([...uploadedImages, ...files]);
    }
  };
  const removeImage = (index: number) => {
    setUploadedImages(uploadedImages.filter((_, i) => i !== index));
  };
  const onSubmit = async (data: any) => {
    if (!authService.isAuthenticated()) {
      toast.error('Please login to apply');
      navigate('/login');
      return;
    }
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      Object.keys(data).forEach(key => {
        formData.append(key, data[key]);
      });
      formData.append('boothPackage', selectedPackage);
      uploadedImages.forEach(image => {
        formData.append('productImages', image);
      });
      await merchantService.submitApplication(formData);
      toast.success('Application submitted successfully!');
      setShowApplicationForm(false);
      navigate('/dashboard');
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to submit application');
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="min-h-screen">
    { }
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white section-padding overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">

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
              <span className="text-sm font-semibold">🚀 Transform Your Business</span>
            </div>
            <h1 className="heading-1 mb-6">
              Grow Your Business at Ikorodu Market Fair
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Get booth space, connect with 15,000+ customers, access mentorship, secure funding, and skyrocket your sales.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => setShowApplicationForm(true)} className="bg-secondary text-primary-700 hover:bg-gray-100">
                Apply Now <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="primary" className="border-2 border-white bg-transparent hover:bg-white/10">
                Download Brochure
              </Button>
            </div>

            { }
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold">100+</div>
                <div className="text-sm text-white/80">Exhibitors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">15K+</div>
                <div className="text-sm text-white/80">Visitors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">₦500M+</div>
                <div className="text-sm text-white/80">Potential</div>
              </div>
            </div>
          </motion.div>

          <motion.div
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="hidden lg:flex items-center justify-center"
>
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute inset-0 bg-gradient-to-br from-primary-400/30 to-primary-800/30 rounded-3xl transform rotate-6"></div>
    <img
      src={woman}
      alt="Business growth"
      className="relative rounded-3xl shadow-2xl object-cover w-full h-full"
    />
    <div className="absolute bottom-4 right-4 bg-white rounded-xl p-4 shadow-lg">
      <div className="flex items-center gap-2">
        <TrendingUp className="text-green-600" size={24} />
        <div>
          <div className="text-2xl font-bold text-green-600">300%</div>
          <div className="text-xs text-gray-600">Avg. Sales Increase</div>
        </div>
      </div>
    </div>
  </div>
</motion.div>

        </div>
      </div>
    </section>

    { }
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
          <h2 className="heading-2 mb-4">Why Exhibit at IMF?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join Nigeria's fastest-growing market fair and unlock unlimited opportunities for your business
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
            <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mb-4">
              <benefit.icon className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </motion.div>)}
        </div>
      </div>
    </section>

    { }
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
          <h2 className="heading-2 mb-4">Choose Your Booth Package</h2>
          <p className="text-xl text-gray-600">
            Select the perfect package for your business needs and budget
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {boothPackages.map((pkg, index) => <motion.div key={pkg.id} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className={`card p-8 relative ${pkg.popular ? 'ring-2 ring-primary-600 transform scale-105' : ''}`}>
            {pkg.popular && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>}

            <div className={`w-16 h-16 bg-gradient-to-br ${pkg.color} rounded-xl flex items-center justify-center mb-6`}>
              <Store className="text-white" size={32} />
            </div>

            <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
            <div className="text-4xl font-bold text-primary-600 mb-6">{pkg.price}</div>

            <ul className="space-y-3 mb-8">
              {pkg.features.map((feature, i) => <li key={i} className="flex items-start">
                <CheckCircle className="text-primary-600 mr-2 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">{feature}</span>
              </li>)}
            </ul>

            <Button onClick={() => {
              setSelectedPackage(pkg.id);
              setShowApplicationForm(true);
            }} className="w-full" variant={pkg.popular ? 'primary' : 'secondary'}>
              Select {pkg.name}
            </Button>
          </motion.div>)}
        </div>
      </div>
    </section>

    { }
    <div className='py-12'>

      <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className=" text-center">
        <div className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl p-8 max-w-4xl mx-auto border-2 border-green-200">
          <Sparkles className="mx-auto mb-4 text-green-600" size={48} />
          <h3 className="text-2xl font-bold mb-3 text-green-800">
            Strengthening MSMEs Through Partnerships and Sales
          </h3>
          <p className="text-lg text-gray-700">
            When MSMEs thrive, communities prosper. Join us in creating a marketplace where everyone wins – merchants grow their businesses and customers save money.
          </p>
        </div>
      </motion.div>
    </div>
    { }
    <section className="section-padding bg-primary-50">
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
            <h2 className="heading-2 mb-6">Event Details</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Date & Time</h3>
                  <p className="text-gray-600">3-Day Event | Coming Soon</p>
                  <p className="text-gray-600">Daily: 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Venue</h3>
                  <p className="text-gray-600">Ikorodu Town Hall</p>
                  <p className="text-gray-600">Lagos State, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Expected Attendance</h3>
                  <p className="text-gray-600">15,000+ Visitors</p>
                  <p className="text-gray-600">200+ Exhibitors</p>
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
            <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800" alt="Event venue" className="rounded-2xl shadow-xl w-full" />
          </motion.div>
        </div>
      </div>
    </section>

    { }
    <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
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
          <h2 className="heading-2 mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Limited booth spaces available. Apply now and secure your spot at Nigeria's premier market fair.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" onClick={() => setShowApplicationForm(true)} className="bg-secondary text-primary-700 hover:bg-gray-100">
              Apply as Merchant
            </Button>
            <Button size="lg" className="border-2 border-white bg-transparent hover:bg-white/10">
              Contact Sales Team
            </Button>
          </div>
          <p className="mt-6 text-white/80">
            Questions? Call us at +234 XXX XXX XXXX or email merchants@imf.com
          </p>
        </motion.div>
      </div>
    </section>

    { }
    {showApplicationForm && <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} className="bg-white rounded-2xl max-w-2xl w-full my-8">
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Merchant Application</h2>
            <button onClick={() => setShowApplicationForm(false)} className="text-gray-500 hover:text-gray-700">
              ✕
            </button>
          </div>
          <p className="text-gray-600 mt-2">
            Selected Package: <span className="font-semibold text-primary-600">
              {boothPackages.find(p => p.id === selectedPackage)?.name}
            </span>
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
          { }
          <div>
            <h3 className="font-semibold text-lg mb-4">Business Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Business Name *</label>
                <input {...register('businessName', {
                  required: true
                })} className="input-field" placeholder="Your business name" />
                {errors.businessName && <span className="text-red-500 text-sm">Required</span>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Owner Name *</label>
                <input {...register('ownerName', {
                  required: true
                })} className="input-field" placeholder="Full name" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input type="email" {...register('email', {
                  required: true
                })} className="input-field" placeholder="business@email.com" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone *</label>
                <input {...register('phone', {
                  required: true
                })} className="input-field" placeholder="+234 XXX XXX XXXX" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Business Category *</label>
                <select {...register('businessCategory', {
                  required: true
                })} className="input-field">
                  <option value="">Select category</option>
                  <option value="fashion">Fashion & Clothing</option>
                  <option value="food">Food & Beverages</option>
                  <option value="beauty">Beauty & Cosmetics</option>
                  <option value="tech">Technology & Electronics</option>
                  <option value="crafts">Arts & Crafts</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Years in Operation *</label>
                <input type="number" {...register('yearsInOperation', {
                  required: true,
                  min: 0
                })} className="input-field" placeholder="0" />
              </div>
            </div>
          </div>

          { }
          <div>
            <h3 className="font-semibold text-lg mb-4">Product/Service Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Product Description *</label>
                <textarea {...register('productDescription', {
                  required: true
                })} className="input-field" rows={4} placeholder="Describe your products or services..." />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Price Range *</label>
                <input {...register('priceRange', {
                  required: true
                })} className="input-field" placeholder="e.g., ₦5,000 - ₦50,000" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Product Images (Max 5) *
                </label>
                <input type="file" accept="image/*" multiple onChange={handleImageUpload} className="input-field" />
                <div className="grid grid-cols-5 gap-2 mt-2">
                  {uploadedImages.map((file, index) => <div key={index} className="relative">
                    <img src={URL.createObjectURL(file)} alt={`Product ${index + 1}`} className="w-full h-20 object-cover rounded" />
                    <button type="button" onClick={() => removeImage(index)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                      ✕
                    </button>
                  </div>)}
                </div>
              </div>
            </div>
          </div>

          { }
          <div>
            <h3 className="font-semibold text-lg mb-4">Additional Options</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-2">
                <input type="checkbox" {...register('registrationStatus')} value="registered" />
                <span>My business is registered with CAC</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" {...register('paymentPlan')} value="installment" />
                <span>I prefer installment payment plan</span>
              </label>
            </div>
          </div>

          { }
          <div className="flex gap-4 pt-4">
            <Button type="button" variant="outline" onClick={() => setShowApplicationForm(false)} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" isLoading={isSubmitting} className="flex-1">
              Submit Application
            </Button>
          </div>
        </form>
      </motion.div>
    </div>}
  </div>;
};
export default MerchantsPage;