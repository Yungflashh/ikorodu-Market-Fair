import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Upload, X, CheckCircle, ArrowRight, ArrowLeft, Store } from 'lucide-react';
import Button from '../components/common/Button';
import { merchantService } from '../services/merchantService';
import toast from 'react-hot-toast';
const MerchantApplicationPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    businessCategory: '',
    registrationStatus: 'informal',
    yearsInOperation: 0,
    productDescription: '',
    priceRange: '',
    boothPackage: 'standard',
    specialRequirements: [] as string[],
    paymentPlan: 'full'
  });
  const [images, setImages] = useState<File[]>([]);
  const categories = ['Fashion & Clothing', 'Food & Beverages', 'Technology & Electronics', 'Beauty & Cosmetics', 'Home & Living', 'Arts & Crafts', 'Health & Wellness', 'Services', 'Other'];
  const requirements = ['Electricity supply', 'Internet/WiFi', 'Extra table', 'Storage space', 'Display equipment'];
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (images.length + files.length > 5) {
      toast.error('Maximum 5 images allowed');
      return;
    }
    setImages([...images, ...files]);
  };
  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };
  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const submitData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          submitData.append(key, JSON.stringify(value));
        } else {
          submitData.append(key, value.toString());
        }
      });
      images.forEach(image => {
        submitData.append('productImages', image);
      });
      await merchantService.submitApplication(submitData);
      toast.success('Application submitted successfully!');
      navigate('/application-success');
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Submission failed');
    } finally {
      setIsSubmitting(false);
    }
  };
  const steps = [{
    number: 1,
    title: 'Business Info'
  }, {
    number: 2,
    title: 'Products'
  }, {
    number: 3,
    title: 'Booth Selection'
  }, {
    number: 4,
    title: 'Review & Submit'
  }];
  return <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 py-12">
      <div className="container-custom max-w-4xl">
        {}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${currentStep >= step.number ? 'bg-primary-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
                    {currentStep > step.number ? <CheckCircle size={24} /> : step.number}
                  </div>
                  <div className="text-sm mt-2 font-medium hidden md:block">{step.title}</div>
                </div>
                {index < steps.length - 1 && <div className={`flex-1 h-1 mx-4 ${currentStep > step.number ? 'bg-primary-600' : 'bg-gray-300'}`} />}
              </div>)}
          </div>
        </div>

        {}
        <motion.div key={currentStep} initial={{
        opacity: 0,
        x: 20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.3
      }} className="card p-8">
          {}
          {currentStep === 1 && <div className="space-y-6">
              <div>
                <h2 className="heading-3 mb-2">Business Information</h2>
                <p className="text-gray-600">Tell us about your business</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Business Name *</label>
                  <input type="text" className="input-field" value={formData.businessName} onChange={e => setFormData({
                ...formData,
                businessName: e.target.value
              })} required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Owner Name *</label>
                  <input type="text" className="input-field" value={formData.ownerName} onChange={e => setFormData({
                ...formData,
                ownerName: e.target.value
              })} required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input type="email" className="input-field" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone *</label>
                  <input type="tel" className="input-field" value={formData.phone} onChange={e => setFormData({
                ...formData,
                phone: e.target.value
              })} required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Business Category *</label>
                <select className="input-field" value={formData.businessCategory} onChange={e => setFormData({
              ...formData,
              businessCategory: e.target.value
            })} required>
                  <option value="">Select category</option>
                  {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Registration Status *</label>
                  <select className="input-field" value={formData.registrationStatus} onChange={e => setFormData({
                ...formData,
                registrationStatus: e.target.value as any
              })}>
                    <option value="registered">Registered with CAC</option>
                    <option value="informal">Informal (Not registered)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Years in Operation *</label>
                  <input type="number" min="0" className="input-field" value={formData.yearsInOperation} onChange={e => setFormData({
                ...formData,
                yearsInOperation: parseInt(e.target.value)
              })} required />
                </div>
              </div>
            </div>}

          {}
          {currentStep === 2 && <div className="space-y-6">
              <div>
                <h2 className="heading-3 mb-2">Product Information</h2>
                <p className="text-gray-600">Describe what you'll be selling</p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Product Description *</label>
                <textarea rows={6} className="input-field" placeholder="Describe your products, unique selling points, target customers..." value={formData.productDescription} onChange={e => setFormData({
              ...formData,
              productDescription: e.target.value
            })} required />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Price Range *</label>
                <input type="text" className="input-field" placeholder="e.g., ₦5,000 - ₦50,000" value={formData.priceRange} onChange={e => setFormData({
              ...formData,
              priceRange: e.target.value
            })} required />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Product Images (3-5 images)</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary-500 transition-colors">
                  <input type="file" accept="image/*" multiple onChange={handleImageUpload} className="hidden" id="image-upload" />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <Upload className="mx-auto mb-4 text-gray-400" size={48} />
                    <p className="text-gray-600">Click to upload or drag and drop</p>
                    <p className="text-sm text-gray-500 mt-2">PNG, JPG up to 5MB each</p>
                  </label>
                </div>

                {images.length > 0 && <div className="grid grid-cols-3 gap-4 mt-4">
                    {images.map((image, index) => <div key={index} className="relative">
                        <img src={URL.createObjectURL(image)} alt={`Product ${index + 1}`} className="w-full h-32 object-cover rounded-lg" />
                        <button onClick={() => removeImage(index)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600">
                          <X size={16} />
                        </button>
                      </div>)}
                  </div>}
              </div>
            </div>}

          {}
          {currentStep === 3 && <div className="space-y-6">
              <div>
                <h2 className="heading-3 mb-2">Booth Selection</h2>
                <p className="text-gray-600">Choose your booth package</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[{
              value: 'basic',
              name: 'Basic',
              price: '₦50,000',
              space: '2m x 2m'
            }, {
              value: 'standard',
              name: 'Standard',
              price: '₦100,000',
              space: '3m x 3m'
            }, {
              value: 'premium',
              name: 'Premium',
              price: '₦200,000',
              space: '4m x 4m'
            }].map(pkg => <label key={pkg.value} className="cursor-pointer">
                    <input type="radio" name="booth" value={pkg.value} checked={formData.boothPackage === pkg.value} onChange={e => setFormData({
                ...formData,
                boothPackage: e.target.value as any
              })} className="sr-only" />
                    <div className={`card p-6 text-center transition-all ${formData.boothPackage === pkg.value ? 'ring-2 ring-primary-600 bg-primary-50' : 'hover:bg-gray-50'}`}>
                      <div className="text-xl font-bold mb-2">{pkg.name}</div>
                      <div className="text-3xl font-bold text-primary-600 mb-2">{pkg.price}</div>
                      <div className="text-gray-600">{pkg.space}</div>
                    </div>
                  </label>)}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Special Requirements</label>
                <div className="space-y-2">
                  {requirements.map(req => <label key={req} className="flex items-center">
                      <input type="checkbox" checked={formData.specialRequirements.includes(req)} onChange={e => {
                  if (e.target.checked) {
                    setFormData({
                      ...formData,
                      specialRequirements: [...formData.specialRequirements, req]
                    });
                  } else {
                    setFormData({
                      ...formData,
                      specialRequirements: formData.specialRequirements.filter(r => r !== req)
                    });
                  }
                }} className="rounded border-gray-300 text-primary-600 focus:ring-primary-500 mr-2" />
                      <span>{req}</span>
                    </label>)}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Payment Plan</label>
                <select className="input-field" value={formData.paymentPlan} onChange={e => setFormData({
              ...formData,
              paymentPlan: e.target.value as any
            })}>
                  <option value="full">Pay in Full (Get 5% discount)</option>
                  <option value="installment">Pay in Installments</option>
                </select>
              </div>
            </div>}

          {}
          {currentStep === 4 && <div className="space-y-6">
              <div>
                <h2 className="heading-3 mb-2">Review & Submit</h2>
                <p className="text-gray-600">Please review your application</p>
              </div>

              <div className="space-y-4">
                <div className="card p-4 bg-gray-50">
                  <h3 className="font-bold mb-2">Business Information</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>Business: {formData.businessName}</div>
                    <div>Owner: {formData.ownerName}</div>
                    <div>Email: {formData.email}</div>
                    <div>Phone: {formData.phone}</div>
                    <div>Category: {formData.businessCategory}</div>
                    <div>Years: {formData.yearsInOperation}</div>
                  </div>
                </div>

                <div className="card p-4 bg-gray-50">
                  <h3 className="font-bold mb-2">Booth Package</h3>
                  <div className="text-sm">
                    <div className="capitalize">{formData.boothPackage} Package</div>
                    <div>Payment: {formData.paymentPlan}</div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    By submitting, you agree to our terms and conditions. You'll receive a confirmation email within 72 hours.
                  </p>
                </div>
              </div>
            </div>}

          {}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <Button variant="outline" onClick={() => setCurrentStep(Math.max(1, currentStep - 1))} disabled={currentStep === 1}>
              <ArrowLeft className="mr-2" size={20} />
              Previous
            </Button>

            {currentStep < 4 ? <Button onClick={() => setCurrentStep(currentStep + 1)}>
                Next
                <ArrowRight className="ml-2" size={20} />
              </Button> : <Button onClick={handleSubmit} isLoading={isSubmitting}>
                <CheckCircle className="mr-2" size={20} />
                Submit Application
              </Button>}
          </div>
        </motion.div>
      </div>
    </div>;
};
export default MerchantApplicationPage;