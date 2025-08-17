import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Heart, Zap, Shield, Users, Clock } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Activity,
      title: 'Sports Physiotherapy',
      description: 'Specialized treatment for sports injuries and performance enhancement.',
      features: ['Injury Prevention', 'Performance Optimization', 'Recovery Programs']
    },
    {
      icon: Heart,
      title: 'Orthopedic Rehabilitation',
      description: 'Comprehensive care for bone, joint, and muscle conditions.',
      features: ['Joint Mobility', 'Strength Training', 'Pain Management']
    },
    {
      icon: Zap,
      title: 'Neurological Physiotherapy',
      description: 'Expert care for neurological conditions and recovery.',
      features: ['Stroke Recovery', 'Balance Training', 'Motor Skills']
    },
    {
      icon: Shield,
      title: 'Post-Surgery Recovery',
      description: 'Specialized rehabilitation after surgical procedures.',
      features: ['Wound Care', 'Mobility Restoration', 'Strength Building']
    },
    {
      icon: Users,
      title: 'Pediatric Physiotherapy',
      description: 'Gentle, effective treatment for children and adolescents.',
      features: ['Developmental Delays', 'Injury Recovery', 'Movement Disorders']
    },
    {
      icon: Clock,
      title: 'Geriatric Care',
      description: 'Compassionate care tailored for elderly patients.',
      features: ['Fall Prevention', 'Mobility Support', 'Pain Relief']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive physiotherapy services delivered by certified professionals at your convenience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 group"
            >
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors">
                <service.icon className="h-6 w-6 text-teal-600 group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-6 text-teal-600 hover:text-teal-700 font-medium text-sm transition-colors">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Service Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">100% Verified</h3>
              <p className="text-gray-600 text-sm">All physiotherapists are licensed and background-checked</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-gray-600 text-sm">Satisfaction guaranteed or your money back</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Round-the-clock customer support for your peace of mind</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;