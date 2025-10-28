import api from './api';
import { ApiResponse, MerchantApplication } from '@/types';

export const merchantService = {
  submitApplication: async (formData: FormData): Promise<ApiResponse<MerchantApplication>> => {
    const response = await api.post('/merchants/apply', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  getMyApplications: async (): Promise<ApiResponse<MerchantApplication[]>> => {
    const response = await api.get('/merchants/my-applications');
    return response.data;
  },

  getAllApplications: async (
    page = 1,
    limit = 10,
    status?: string
  ): Promise<ApiResponse<MerchantApplication[]>> => {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...(status && { status }),
    });
    const response = await api.get(`/merchants/applications?${params}`);
    return response.data;
  },

  getApplication: async (id: string): Promise<ApiResponse<MerchantApplication>> => {
    const response = await api.get(`/merchants/applications/${id}`);
    return response.data;
  },

  updateApplicationStatus: async (
    id: string,
    status: string,
    boothNumber?: string
  ): Promise<ApiResponse<MerchantApplication>> => {
    const response = await api.put(`/merchants/applications/${id}/status`, {
      status,
      boothNumber,
    });
    return response.data;
  },
};
