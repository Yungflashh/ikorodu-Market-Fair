export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'customer' | 'merchant' | 'admin' | 'sponsor';
  isVerified: boolean;
  qrCode?: string;
  interests?: string[];
  createdAt: string;
  updatedAt: string;
}
export interface AuthResponse {
  success: boolean;
  token: string;
  user: User;
}
export interface MerchantApplication {
  _id: string;
  userId: string;
  businessName: string;
  ownerName: string;
  email: string;
  phone: string;
  businessCategory: string;
  registrationStatus: 'registered' | 'informal';
  yearsInOperation: number;
  productDescription: string;
  productImages: string[];
  priceRange: string;
  boothPackage: 'basic' | 'standard' | 'premium';
  specialRequirements: string[];
  paymentPlan: 'full' | 'installment';
  status: 'pending' | 'approved' | 'rejected';
  boothNumber?: string;
  paymentStatus: 'unpaid' | 'partial' | 'paid';
  applicationId: string;
  createdAt: string;
  updatedAt: string;
}
export interface Sponsor {
  _id: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  sponsorshipTier: 'bronze' | 'silver' | 'gold' | 'platinum';
  sponsorshipAmount: number;
  benefits: string[];
  logo?: string;
  website?: string;
  status: 'inquiry' | 'negotiating' | 'confirmed' | 'declined';
  message?: string;
  createdAt: string;
  updatedAt: string;
}
export interface Testimonial {
  _id: string;
  name: string;
  businessName: string;
  photo?: string;
  quote: string;
  rating: number;
  isApproved: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface Contact {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
export interface Newsletter {
  email: string;
}
export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  count?: number;
  total?: number;
  page?: number;
  pages?: number;
}
export interface BoothPackage {
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
}
export interface SponsorshipTier {
  name: string;
  tier: 'bronze' | 'silver' | 'gold' | 'platinum';
  amount: number;
  benefits: string[];
  color: string;
}
export interface Stat {
  value: string;
  label: string;
  icon: any;
}