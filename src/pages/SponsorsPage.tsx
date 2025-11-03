import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Megaphone, Award, Target, BarChart, Briefcase, CheckCircle, Star, Trophy, Zap } from 'lucide-react';
import Button from '../components/common/Button';
import { useForm } from 'react-hook-form';
import { sponsorService } from '../services';
import toast from 'react-hot-toast';
interface SponsorshipTier {
  id: string;
  name: string;
  amount: string;
  color: string;
  benefits: string[];
  featured?: boolean;
}
const SponsorsPage: React.FC = () => {
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string>('gold');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    reset
  } = useForm();
  const sponsorshipTiers: SponsorshipTier[] = [{
    id: 'bronze',
    name: 'Bronze Partner',
    amount: '₦500,000',
    color: 'from-orange-600 to-orange-800',
    benefits: ['Logo on event banners', 'Social media mentions', 'Event program listing', 'Standard booth space', 'Company profile in catalog', '2 VIP passes']
  }, {
    id: 'silver',
    name: 'Silver Partner',
    amount: '₦1,000,000',
    color: 'from-gray-400 to-gray-600',
    benefits: ['All Bronze benefits', 'Premium booth location', 'Speaking opportunity', 'Logo on stage backdrop', 'Email marketing inclusion', 'Press release mention', '5 VIP passes', 'Product sampling opportunity']
  }, {
    id: 'gold',
    name: 'Gold Partner',
    amount: '₦2,500,000',
    featured: true,
    color: 'from-yellow-500 to-yellow-700',
    benefits: ['All Silver benefits', 'Title sponsor recognition', 'Prime booth location', '15-minute keynote slot', 'Dedicated social media campaign', 'Video commercial at event', 'Logo on all marketing materials', '10 VIP passes', 'Exclusive networking session', 'Post-event report with metrics']
  }, {
    id: 'platinum',
    name: 'Platinum Partner',
    amount: '₦5,000,000+',
    color: 'from-purple-500 to-purple-800',
    benefits: ['All Gold benefits', 'Presenting sponsor title', 'Custom activation area', '30-minute keynote presentation', 'Exclusive brand integration', 'Year-round partnership', 'Digital marketplace co-branding', 'Investor pitch session hosting', '20 VIP passes', 'Dedicated PR campaign', 'Custom sponsorship package']
  }];
  const sponsorshipBenefits = [{
    icon: TrendingUp,
    title: '5M+ Brand Impressions',
    description: 'Reach millions through our comprehensive marketing campaigns across all channels.'
  }, {
    icon: Users,
    title: 'Direct Customer Access',
    description: 'Connect face-to-face with 15,000+ potential customers during the event.'
  }, {
    icon: Megaphone,
    title: 'Multi-Channel Marketing',
    description: 'Your brand featured across social media, radio, TV, billboards, and digital platforms.'
  }, {
    icon: Trophy,
    title: 'CSR Recognition',
    description: 'Demonstrate corporate social responsibility by supporting MSMEs and local economy.'
  }, {
    icon: Briefcase,
    title: 'Business Networking',
    description: 'Access exclusive networking events with key stakeholders and decision-makers.'
  }, {
    icon: BarChart,
    title: 'Measurable ROI',
    description: 'Receive detailed analytics and impact reports showing your sponsorship value.'
  }];
  const stats = [{
    value: '5M+',
    label: 'Media Reach'
  }, {
    value: '15K+',
    label: 'Event Attendees'
  }, {
    value: '200+',
    label: 'Exhibitors'
  }, {
    value: '50+',
    label: 'Media Partners'
  }];
  const pastSponsors = [{
    name: 'Company A',
    logo: 'https://via.placeholder.com/150x60?text=Company+A'
  }, {
    name: 'Company B',
    logo: 'https://via.placeholder.com/150x60?text=Company+B'
  }, {
    name: 'Company C',
    logo: 'https://via.placeholder.com/150x60?text=Company+C'
  }, {
    name: 'Company D',
    logo: 'https://via.placeholder.com/150x60?text=Company+D'
  }];
  const testimonials = [{
    company: 'TechCorp Nigeria',
    name: 'Adebayo Johnson',
    position: 'Marketing Director',
    quote: 'Sponsoring IMF gave us unparalleled brand visibility and connected us with our target market. Best ROI of any sponsorship this year!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'
  }, {
    company: 'Lagos Bank Ltd',
    name: 'Chioma Okafor',
    position: 'CSR Manager',
    quote: 'The impact we made supporting MSMEs through IMF was incredible. Our brand is now associated with community development.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100'
  }];
  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      await sponsorService.submitInquiry({
        ...data,
        sponsorshipTier: selectedTier,
        sponsorshipAmount: sponsorshipTiers.find(t => t.id === selectedTier)?.amount || ''
      });
      toast.success('Inquiry submitted! Our team will contact you within 48 hours.');
      setShowInquiryForm(false);
      reset();
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to submit inquiry');
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="min-h-screen">
      {}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 text-white section-padding overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px'
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
                <span className="text-sm font-semibold">🤝 Partnership Opportunities</span>
              </div>
              <h1 className="heading-1 mb-6">
                Partner With Nigeria's Premier Market Fair
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Maximize brand visibility, demonstrate CSR impact, and connect with thousands of potential customers through strategic sponsorship.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => setShowInquiryForm(true)} className="border-2 border-white bg-transparent hover:bg-white/10">
                  {}
                  Become a Sponsor
                </Button>
                <Button size="lg" className="border-2 border-white bg-transparent hover:bg-white/10">
                  Download Sponsorship Deck
                </Button>
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
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800" alt="Partnership" className="rounded-3xl shadow-2xl w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {}
      <section className="bg-purple-100 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => <motion.div key={index} initial={{
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
                <div className="text-4xl font-bold text-purple-800 mb-1">{stat.value}</div>
                <div className="text-gray-700">{stat.label}</div>
              </motion.div>)}
          </div>
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
        }} className="text-center mb-16">
            <h2 className="heading-2 mb-4">Why Sponsor IMF?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic sponsorship opportunities that deliver measurable business value and social impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsorshipBenefits.map((benefit, index) => <motion.div key={index} initial={{
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
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {}
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
            <h2 className="heading-2 mb-4">Sponsorship Packages</h2>
            <p className="text-xl text-gray-600">
              Choose the package that aligns with your marketing goals and budget
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorshipTiers.map((tier, index) => <motion.div key={tier.id} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className={`card p-6 relative ${tier.featured ? 'ring-2 ring-purple-600 transform scale-105' : ''}`}>
                {tier.featured && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star size={14} className="fill-current" /> Recommended
                    </span>
                  </div>}

                <div className={`w-16 h-16 bg-gradient-to-br ${tier.color} rounded-xl flex items-center justify-center mb-6`}>
                  {tier.id === 'platinum' ? <Trophy className="text-white" size={32} /> : <Award className="text-white" size={32} />}
                </div>

                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-purple-600 mb-6">{tier.amount}</div>

                <ul className="space-y-3 mb-8">
                  {tier.benefits.map((benefit, i) => <li key={i} className="flex items-start text-sm">
                      <CheckCircle className="text-purple-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-gray-700">{benefit}</span>
                    </li>)}
                </ul>

                <Button onClick={() => {
              setSelectedTier(tier.id);
              setShowInquiryForm(true);
            }} className="w-full" variant={tier.featured ? 'primary' : 'secondary'}>
                  Inquire Now
                </Button>
              </motion.div>)}
          </div>
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
        }} className="text-center mb-16">
            <h2 className="heading-2 mb-4">What Our Sponsors Say</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="card p-8">
                <div className="flex items-center gap-4 mb-6">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-sm font-semibold text-purple-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {}
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
        }} className="text-center mb-12">
            <h2 className="heading-2 mb-4">Join Leading Brands</h2>
            <p className="text-gray-600">Trusted partners who've sponsored IMF</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {pastSponsors.map((sponsor, index) => <div key={index} className="flex items-center justify-center p-6 bg-white rounded-lg grayscale hover:grayscale-0 transition-all">
                <img src={sponsor.logo} alt={sponsor.name} className="max-h-12" />
              </div>)}
          </div>
        </div>
      </section>

      {}
      <section className="section-padding bg-gradient-to-r from-purple-600 to-purple-800 text-white">
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
            <h2 className="heading-2 mb-6">Ready to Make an Impact?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Partner with IMF and reach millions while supporting MSMEs and the local economy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" onClick={() => setShowInquiryForm(true)} className="border-2 border-white bg-transparent hover:bg-white/10">
                Submit Sponsorship Inquiry
              </Button>
              <Button size="lg" className="border-2 border-white bg-transparent hover:bg-white/10">
                Schedule a Call
              </Button>
            </div>
            <p className="mt-6 text-white/80">
              Questions? Contact our partnerships team: partnerships@imf.com | +234 XXX XXX XXXX
            </p>
          </motion.div>
        </div>
      </section>

      {}
      {showInquiryForm && <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} className="bg-white rounded-2xl max-w-2xl w-full my-8">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Sponsorship Inquiry</h2>
                <button onClick={() => setShowInquiryForm(false)} className="text-gray-500 hover:text-gray-700">
                  ✕
                </button>
              </div>
              <p className="text-gray-600 mt-2">
                Selected: <span className="font-semibold text-purple-600">
                  {sponsorshipTiers.find(t => t.id === selectedTier)?.name}
                </span>
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Company Name *</label>
                  <input {...register('companyName', {
                required: true
              })} className="input-field" placeholder="Your company name" />
                  {errors.companyName && <span className="text-red-500 text-sm">Required</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Contact Person *</label>
                  <input {...register('contactPerson', {
                required: true
              })} className="input-field" placeholder="Full name" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input type="email" {...register('email', {
                required: true
              })} className="input-field" placeholder="contact@company.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone *</label>
                  <input {...register('phone', {
                required: true
              })} className="input-field" placeholder="+234 XXX XXX XXXX" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">Company Website</label>
                  <input {...register('website')} className="input-field" placeholder="https://yourcompany.com" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">Message / Requirements</label>
                  <textarea {...register('message')} className="input-field" rows={4} placeholder="Tell us about your sponsorship goals and any specific requirements..." />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button type="button" variant="outline" onClick={() => setShowInquiryForm(false)} className="flex-1">
                  Cancel
                </Button>
                <Button type="submit" isLoading={isSubmitting} className="flex-1">
                  Submit Inquiry
                </Button>
              </div>
            </form>
          </motion.div>
        </div>}
    </div>;
};
export default SponsorsPage;