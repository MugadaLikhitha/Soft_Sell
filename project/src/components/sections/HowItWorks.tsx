import React, { useState } from 'react';
import { Upload, LineChart, DollarSign } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  actionText: string;
}

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [valuation, setValuation] = useState<string | null>(null);
  const [isPaid, setIsPaid] = useState<boolean>(false);

  const steps: Step[] = [
    {
      id: 1,
      title: 'Upload License',
      description: 'Upload your unused software license details securely to our platform.',
      icon: <Upload className="w-8 h-8" />,
      actionText: 'Upload License'
    },
    {
      id: 2,
      title: 'Get Valuation',
      description: 'Our AI-powered system analyzes your license to determine its market value.',
      icon: <LineChart className="w-8 h-8" />,
      actionText: 'Get Valuation'
    },
    {
      id: 3,
      title: 'Get Paid',
      description: 'Once a buyer is matched, you receive payment directly to your account.',
      icon: <DollarSign className="w-8 h-8" />,
      actionText: 'Get Paid'
    }
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setUploadedFile(files[0]);
      setActiveStep(1);
      
      // Reset other states
      setValuation(null);
      setIsPaid(false);
    }
  };

  const handleGetValuation = () => {
    if (!uploadedFile) return;
    
    // Simulate valuation process
    setTimeout(() => {
      // Generate random value between $500 and $10,000
      const randomValue = Math.floor(Math.random() * (10000 - 500 + 1) + 500);
      setValuation(`$${randomValue.toLocaleString()}`);
      setActiveStep(2);
    }, 1500);
  };

  const handleGetPaid = () => {
    if (!valuation) return;
    
    // Simulate payment process
    setTimeout(() => {
      setIsPaid(true);
      setActiveStep(3);
    }, 1500);
  };

  const handleActionClick = (stepId: number) => {
    switch (stepId) {
      case 1:
        // Programmatically click the hidden file input
        document.getElementById('license-upload')?.click();
        break;
      case 2:
        handleGetValuation();
        break;
      case 3:
        handleGetPaid();
        break;
      default:
        break;
    }
  };

  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How SoftSell Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Our simple three-step process makes selling your unused software licenses effortless and profitable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className={`relative flex flex-col items-center p-6 rounded-xl transition-all duration-300 ${
                activeStep === step.id - 1 ? 'scale-95 opacity-60' : 
                activeStep === step.id ? 'scale-105 shadow-xl' : 
                activeStep === null ? '' : 'scale-95 opacity-60'
              } ${
                activeStep === step.id
                  ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800'
                  : 'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {/* Step Number */}
              <div className={`absolute -top-4 -left-4 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                activeStep === step.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}>
                {step.id}
              </div>
              
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 dark:bg-gray-700 z-0"></div>
              )}
              
              {/* Icon */}
              <div className={`mb-4 p-3 rounded-full ${
                activeStep === step.id
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40'
                  : 'text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700'
              }`}>
                {step.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-6">{step.description}</p>
              
              {/* Action Button */}
              <button
                onClick={() => handleActionClick(step.id)}
                className={`mt-auto px-4 py-2 rounded-md font-medium transition-colors ${
                  (step.id === 2 && !uploadedFile) || (step.id === 3 && !valuation)
                    ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                    : activeStep === step.id
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'
                }`}
                disabled={(step.id === 2 && !uploadedFile) || (step.id === 3 && !valuation)}
              >
                {step.actionText}
              </button>
              
              {/* Status Indicators */}
              {step.id === 1 && uploadedFile && (
                <div className="mt-3 text-sm text-green-600 dark:text-green-400 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {uploadedFile.name}
                </div>
              )}
              
              {step.id === 2 && valuation && (
                <div className="mt-3 text-sm text-green-600 dark:text-green-400 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Estimated Value: {valuation}
                </div>
              )}
              
              {step.id === 3 && isPaid && (
                <div className="mt-3 text-sm text-green-600 dark:text-green-400 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Payment Complete!
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Hidden file input */}
        <input 
          type="file" 
          id="license-upload" 
          className="hidden" 
          accept=".pdf,.doc,.docx,.txt,.xml,.json"
          onChange={handleFileUpload}
        />
      </div>
    </section>
  );
};

export default HowItWorks;