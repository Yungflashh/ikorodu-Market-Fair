import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Store, Users, DollarSign, TrendingUp, Package, Calendar, Bell, Settings, LogOut } from 'lucide-react';
import { authService } from '../services/authService';
import { merchantService } from '../services/merchantService';
import Button from '../components/common/Button';
const DashboardPage: React.FC = () => {
  const user = authService.getCurrentUser();
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    loadApplications();
  }, []);
  const loadApplications = async () => {
    try {
      const response = await merchantService.getMyApplications();
      setApplications(response.data || []);
    } catch (error) {
      console.error('Failed to load applications');
    } finally {
      setLoading(false);
    }
  };
  const stats = [{
    icon: Package,
    label: 'Applications',
    value: applications.length,
    color: 'from-blue-500 to-blue-700'
  }, {
    icon: Store,
    label: 'Active Booths',
    value: applications.filter(a => a.status === 'approved').length,
    color: 'from-green-500 to-green-700'
  }, {
    icon: Calendar,
    label: 'Upcoming Events',
    value: '1',
    color: 'from-purple-500 to-purple-700'
  }, {
    icon: TrendingUp,
    label: 'Total Reach',
    value: '15K+',
    color: 'from-orange-500 to-orange-700'
  }];
  return <div className="min-h-screen bg-gray-50">
      {}
      <div className="bg-white border-b">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <p className="text-gray-600">Welcome back, {user?.name}!</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="sm">
                <Bell size={20} />
              </Button>
              <Button variant="outline" size="sm">
                <Settings size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        {}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => <motion.div key={i} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: i * 0.1
        }} className="card p-6">
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
                <stat.icon className="text-white" size={24} />
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>)}
        </div>

        {}
        <div className="card p-6">
          <h2 className="text-xl font-bold mb-6">Your Applications</h2>
          {loading ? <p>Loading...</p> : applications.length === 0 ? <div className="text-center py-12">
              <Store className="mx-auto mb-4 text-gray-400" size={48} />
              <p className="text-gray-600 mb-4">No applications yet</p>
              <Button>Apply as Merchant</Button>
            </div> : <div className="space-y-4">
              {applications.map(app => <div key={app._id} className="border rounded-lg p-4 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold">{app.businessName}</h3>
                      <p className="text-sm text-gray-600">{app.businessCategory}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${app.status === 'approved' ? 'bg-green-100 text-green-700' : app.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                      {app.status}
                    </div>
                  </div>
                </div>)}
            </div>}
        </div>
      </div>
    </div>;
};
export default DashboardPage;