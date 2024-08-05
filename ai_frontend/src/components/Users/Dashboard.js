import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getUserProfileAPI } from "../../apis/usersAPI";
import StatusMessage from "../Alert/StatusMessage";

const Dashboard = () => {
  // Fetch the user profile
  const { isLoading, isError, data, error } = useQuery({
    queryFn: getUserProfileAPI,
    queryKey: ["profile"],
  });

  if (isLoading) {
    return <StatusMessage type="loading" message="Loading, please wait..." />;
  }

  if (isError) {
    return <StatusMessage type="error" message={error?.response?.data?.message} />;
  }

  return (
    <div className="min-h-screen bg-gray-900 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">User Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Profile Information */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-bold mb-1">Name</label>
                <p className="text-gray-900">{data?.user?.username}</p>
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-1">Email</label>
                <p className="text-gray-900">{data?.user?.email}</p>
              </div>
            </div>
          </div>

          {/* Credit Usage */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Credit Usage</h2>
            <div className="space-y-4">
              <p>Monthly Credit: {data?.user?.monthlyRequestCount}</p>
              <p>Credit Used: {data?.user?.apiRequestCount}</p>
              <p>Credit Remaining: {data?.user?.monthlyRequestCount - data?.user?.apiRequestCount}</p>
              <p>Next Billing Date: {data?.user?.nextBillingDate || 'No Billing Date'}</p>
            </div>
          </div>

          {/* Subscription Plan */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Subscription Plan</h2>
            <div className="space-y-4">
              <p>Current Plan: {data?.user?.subscriptionPlan}</p>
              <p>
                {data?.user?.subscriptionPlan === 'Trial' && 'Trial: 1000 monthly requests'}
                {data?.user?.subscriptionPlan === 'Free' && 'Free: 5 monthly requests'}
                {data?.user?.subscriptionPlan === 'Basic' && 'Basic: 50 monthly requests'}
                {data?.user?.subscriptionPlan === 'Premium' && 'Premium: 100 monthly requests'}
              </p>
              <Link
                to="/plans"
                className="mt-4 inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-md text-center shadow-sm font-medium hover:from-indigo-600 hover:to-blue-600"
              >
                Upgrade Plan
              </Link>
            </div>
          </div>

          {/* Trial Information */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Trial Information</h2>
            <div className="space-y-4">
              <p>
                Trial Status: {data?.user?.trialActive ? (
                  <span className="text-green-500">Active</span>
                ) : (
                  <span className="text-red-600">Inactive</span>
                )}
              </p>
              <p>Expires on: {new Date(data?.user?.trialExpires).toDateString()}</p>
              <Link
                to="/plans"
                className="mt-4 inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-md text-center shadow-sm font-medium hover:from-indigo-600 hover:to-blue-600"
              >
                Upgrade to Premium
              </Link>
            </div>
          </div>

          {/* Payment History */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Payment History</h2>
            {data?.user?.payments?.length > 0 ? (
              <ul className="divide-y divide-gray-200">
                {data?.user?.payments.map((payment, index) => (
                  <li key={payment?.id || index} className="py-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium text-indigo-600">{payment?.subscriptionPlan}</p>
                        <p className="text-xs text-gray-500">{new Date(payment?.createdAt).toDateString()}</p>
                      </div>
                      <div className="flex items-center">
                        <p className={`text-sm font-semibold ${payment?.status === 'succeeded' ? 'text-green-500' : 'text-orange-500'}`}>
                          {payment?.status}
                        </p>
                        <p className="text-sm text-gray-700 ml-4">${payment?.amount}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <h1 className="text-center text-gray-600">No payment history available</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
