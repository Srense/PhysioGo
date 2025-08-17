import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Shield, Clock, Star } from 'lucide-react';
import Button from '../common/Button';
import BookingModal from '../booking/BookingModal';

const Hero: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const features = [
    {
      icon: Calendar,
      title: 'Easy Booking',
      description: 'Book appointments in just a few clicks'
    },
    {
      icon: Shield,
      title: 'Verified Professionals',
      description: 'All physiotherapists are verified and licensed'
    },
    {
      icon: Clock,
      title: 'Flexible Timing',
      description: 'Available 7 days a week at your convenience'
    },
    {
      icon: Star,
      title: 'Quality Care',
      description: 'Rated 4.9/5 by thousands of satisfied patients'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-teal-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Professional
                <span className="text-teal-600"> Physiotherapy</span>
                <br />
                At Your Doorstep
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Get expert physiotherapy treatment in the comfort of your home. 
                Our certified professionals provide personalized care tailored to your needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => setIsBookingOpen(true)}
                className="text-lg px-8 py-4"
              >
                Book Appointment
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">500+</div>
                <div className="text-sm text-gray-600">Verified Physios</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">10k+</div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">4.9★</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Physiotherapy session"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">100% Verified</div>
                    <div className="text-sm text-gray-600">Licensed Professionals</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-200 to-blue-200 rounded-2xl transform rotate-3 -z-10"></div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </section>
  );
};

export default Hero;