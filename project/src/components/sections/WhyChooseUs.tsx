import React from 'react';
import { Shield, Clock, DollarSign, Users } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  highlightColor: string;
}

const WhyChooseUs: React.FC = () => {
  const features: Feature[] = [
    {
      title: 'Secure Transactions',
      description: 'Bank-level encryption and escrow protection for all license transfers.',
      icon: <Shield className="w-6 h-6" />,
      highlightColor: 'text-emerald-600 dark:text-emerald-400'
    },
    {
      title: 'Fast Turnaround',
      description: 'Get valuations in minutes and payment within 48 hours of sale.',
      icon: <Clock className="w-6 h-6" />,
      highlightColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      title: 'Maximum Value',
      description: 'Our AI pricing algorithm ensures you get top dollar for your licenses.',
      icon: <DollarSign className="w-6 h-6" />,
      highlightColor: 'text-amber-600 dark:text-amber-400'
    },
    {
      title: 'Verified Buyers',
      description: 'We verify all buyers to ensure legitimate transactions and prevent fraud.',
      icon: <Users className="w-6 h-6" />,
      highlightColor: 'text-purple-600 dark:text-purple-400'
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose SoftSell
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            We've revolutionized the software resale market with our secure platform, delivering unmatched value and convenience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className={`p-3 rounded-full bg-opacity-10 dark:bg-opacity-10 inline-flex ${feature.highlightColor.replace('text', 'bg')} mb-4`}>
                <span className={feature.highlightColor}>{feature.icon}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 rounded-xl overflow-hidden shadow-lg">
          <div className="p-8 md:p-12 relative">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" fill="none">
                <defs>
                  <pattern id="small-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#small-grid)" />
              </svg>
            </div>
            
            <div className="relative z-10 md:flex items-center justify-between">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Ready to unlock the value of your idle licenses?
                </h3>
                <p className="text-blue-100">
                  Join thousands of businesses who have already recouped millions in software investments.
                </p>
              </div>
              <div>
                <a 
                  href="#contact" 
                  className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-blue-50 transition"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;