import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Button from '../components/common/Button';
import { useForm } from 'react-hook-form';
import { contactService } from '../services';
import toast from 'react-hot-toast';
const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    reset
  } = useForm();
  const contactInfo = [{
    icon: Phone,
    title: 'Phone',
    value: '+234 XXX XXX XXXX',
    link: 'tel:+234XXXXXXXXX'
  }, {
    icon: Mail,
    title: 'Email',
    value: 'info@ikorodumarketfair.com',
    link: 'mailto:info@ikorodumarketfair.com'
  }, {
    icon: MapPin,
    title: 'Address',
    value: 'Ikorodu Town Hall, Lagos State, Nigeria',
    link: '#'
  }, {
    icon: Clock,
    title: 'Office Hours',
    value: 'Mon-Fri: 9AM-5PM',
    link: '#'
  }];
  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      await contactService.submitContact(data);
      toast.success('Message sent successfully!');
      reset();
    } catch (error) {
      toast.error('Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }}>
            <h1 className="heading-1 mb-6">Get In Touch</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {}
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }}>
              <h2 className="heading-3 mb-8">Contact Information</h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{info.title}</h3>
                      <a href={info.link} className="text-gray-600 hover:text-primary-600">
                        {info.value}
                      </a>
                    </div>
                  </div>)}
              </div>

              <div className="bg-gray-100 p-6 rounded-xl">
                <h3 className="font-bold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map(social => <a key={social} href="#" className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center hover:bg-primary-700">
                      {social[0]}
                    </a>)}
                </div>
              </div>
            </motion.div>

            {}
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }}>
              <form onSubmit={handleSubmit(onSubmit)} className="card p-8">
                <h2 className="heading-3 mb-6">Send Us a Message</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <input {...register('name', {
                    required: true
                  })} className="input-field" placeholder="Your name" />
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
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input {...register('phone')} className="input-field" placeholder="+234 XXX XXX XXXX" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Subject *</label>
                    <input {...register('subject', {
                    required: true
                  })} className="input-field" placeholder="What is this about?" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <textarea {...register('message', {
                    required: true
                  })} className="input-field" rows={5} placeholder="Your message..." />
                  </div>

                  <Button type="submit" isLoading={isSubmitting} className="w-full">
                    <Send className="mr-2" size={20} />
                    Send Message
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>;
};
export default ContactPage;