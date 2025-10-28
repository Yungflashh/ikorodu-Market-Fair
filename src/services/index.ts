import api from './api';
import { ApiResponse, Sponsor, Testimonial, Contact, Newsletter } from '@/types';

export const sponsorService = {
  submitInquiry: async (data: Partial<Sponsor>): Promise<ApiResponse<Sponsor>> => {
    const response = await api.post('/sponsors/inquiry', data);
    return response.data;
  },

  getAllSponsors: async (): Promise<ApiResponse<Sponsor[]>> => {
    const response = await api.get('/sponsors');
    return response.data;
  },
};

export const testimonialService = {
  getTestimonials: async (): Promise<ApiResponse<Testimonial[]>> => {
    const response = await api.get('/testimonials');
    return response.data;
  },

  createTestimonial: async (data: Partial<Testimonial>): Promise<ApiResponse<Testimonial>> => {
    const response = await api.post('/testimonials', data);
    return response.data;
  },
};

export const contactService = {
  submitContact: async (data: Contact): Promise<ApiResponse> => {
    const response = await api.post('/contact', data);
    return response.data;
  },

  subscribeNewsletter: async (data: Newsletter): Promise<ApiResponse> => {
    const response = await api.post('/contact/newsletter/subscribe', data);
    return response.data;
  },
};
