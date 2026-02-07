import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, limit, getDocs, where, Timestamp } from 'firebase/firestore';
import { db, isFirebaseConfigured } from '../firebaseConfig';
import { FaUsers, FaEye, FaGlobe, FaChartLine, FaClock, FaDesktop, FaExclamationTriangle } from 'react-icons/fa';

const AdminDashboard = () => {
  const [visitors, setVisitors] = useState([]);
  const [stats, setStats] = useState({
    totalVisitors: 0,
    todayVisitors: 0,
    totalPageViews: 0,
    uniqueSessions: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isFirebaseConfigured) {
      setError('Firebase is not configured. See ADMIN_SETUP.md for setup instructions.');
      setLoading(false);
      return;
    }
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetch recent visitors
      const visitorsQuery = query(
        collection(db, 'visitors'),
        orderBy('timestamp', 'desc'),
        limit(50)
      );
      const visitorsSnapshot = await getDocs(visitorsQuery);
      const visitorsData = visitorsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate?.() || new Date(),
      }));
      setVisitors(visitorsData);

      // Calculate stats
      const totalVisitors = visitorsData.length;
      
      // Today's visitors
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const todayVisitors = visitorsData.filter(v => 
        v.timestamp >= today
      ).length;

      // Unique sessions
      const uniqueSessions = new Set(visitorsData.map(v => v.sessionId)).size;

      // Fetch page views
      const pageViewsSnapshot = await getDocs(collection(db, 'pageViews'));
      const totalPageViews = pageViewsSnapshot.size;

      setStats({
        totalVisitors,
        todayVisitors,
        totalPageViews,
        uniqueSessions,
      });
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      setError('Failed to fetch dashboard data. Make sure Firebase is properly configured.');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-gray-800 rounded-2xl p-8 text-center border border-[#CD291F]/30">
          <FaExclamationTriangle className="text-6xl text-[#CD291F] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">Firebase Not Configured</h2>
          <p className="text-gray-300 mb-6">{error}</p>
          <div className="bg-gray-900 rounded-lg p-4 text-left">
            <p className="text-sm text-gray-400 mb-2">To enable visitor tracking:</p>
            <ol className="text-sm text-gray-300 space-y-1 list-decimal list-inside">
              <li>Create a Firebase project</li>
              <li>Enable Firestore Database</li>
              <li>Copy your config to .env file</li>
              <li>Restart the dev server</li>
            </ol>
          </div>
          <a 
            href="https://console.firebase.google.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-[#0A693A] to-[#6B7D29] text-white rounded-full font-semibold hover:from-[#0D8347] hover:to-[#8A9F3D] transition-all duration-300"
          >
            Go to Firebase Console
          </a>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#0D8347] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-300">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-gray-400">Track your portfolio visitors and analytics</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={<FaUsers />}
            title="Total Visitors"
            value={stats.totalVisitors}
            color="from-[#0A693A] to-[#6B7D29]"
          />
          <StatCard
            icon={<FaClock />}
            title="Today's Visitors"
            value={stats.todayVisitors}
            color="from-[#0D8347] to-[#8A9F3D]"
          />
          <StatCard
            icon={<FaEye />}
            title="Page Views"
            value={stats.totalPageViews}
            color="from-[#6B7D29] to-[#D4AF37]"
          />
          <StatCard
            icon={<FaChartLine />}
            title="Unique Sessions"
            value={stats.uniqueSessions}
            color="from-[#D4AF37] to-[#CD291F]"
          />
        </div>

        {/* Visitors Table */}
        <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-[#6B7D29]/30">
          <div className="px-6 py-4 border-b border-gray-700">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <FaGlobe className="text-[#0D8347]" />
              Recent Visitors
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-700/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Page
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Platform
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Resolution
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Referrer
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {visitors.map((visitor) => (
                  <tr key={visitor.id} className="hover:bg-gray-700/30 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {formatDate(visitor.timestamp)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#0D8347]">
                      {visitor.page}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <FaDesktop className="text-[#6B7D29]" />
                        {visitor.platform}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                      {visitor.screenResolution}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400 max-w-xs truncate">
                      {visitor.referrer}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, title, value, color }) => {
  return (
    <div className={`bg-gradient-to-br ${color} p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white/80 text-sm font-medium mb-1">{title}</p>
          <p className="text-3xl font-bold text-white">{value}</p>
        </div>
        <div className="text-4xl text-white/80">{icon}</div>
      </div>
    </div>
  );
};

export default AdminDashboard;
