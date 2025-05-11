import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 lg:pt-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5 -z-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-12">
          <div className="lg:w-1/2 space-y-8 mb-12 lg:mb-0">
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                <span className="block">Turn Unused Software</span>
                <span className="block text-blue-600 dark:text-blue-400">Into Revenue</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                SoftSell helps businesses recover value from idle software licenses. 
                Our secure platform connects sellers with verified buyers for hassle-free transactions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition"
              >
                Sell My Licenses
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a 
                href="#how-it-works" 
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-white bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                Learn More
              </a>
            </div>
            
            <div className="pt-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Trusted by leading companies worldwide
              </p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-3">
                {['Acme Inc', 'TechCorp', 'DataSystems', 'InnovateX'].map((company, index) => (
                  <div key={index} className="text-gray-400 dark:text-gray-500 font-medium">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl transform transition-all hover:scale-[1.01] duration-500">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team working on software licensing" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-lg font-medium">
                  "SoftSell helped us recover $125,000 from unused licenses in just 3 months."
                </p>
                <p className="text-gray-300 text-sm mt-2">
                  — Financial Director, Fortune 500 Company
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 dark:bg-blue-900/30 rounded-full -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-50 dark:bg-blue-900/20 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;