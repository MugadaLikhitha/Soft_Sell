import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  licenseType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  licenseType?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const licenseTypes = [
    { value: '', label: 'Select License Type' },
    { value: 'microsoft', label: 'Microsoft' },
    { value: 'adobe', label: 'Adobe' },
    { value: 'oracle', label: 'Oracle' },
    { value: 'sap', label: 'SAP' },
    { value: 'autodesk', label: 'Autodesk' },
    { value: 'vmware', label: 'VMware' },
    { value: 'other', label: 'Other' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    
    // Clear error when field is edited
    if (errors[name as keyof FormErrors]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    }
    
    if (!formData.licenseType) {
      newErrors.licenseType = 'Please select a license type';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: '',
            email: '',
            company: '',
            licenseType: '',
            message: ''
          });
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Ready to turn your unused software licenses into revenue? Fill out the form and one of our license experts will contact you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      Email Us
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      info@softsell.example.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      Call Us
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      Visit Us
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      123 SoftSell Avenue<br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 mb-6">
                    <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                    Your message has been submitted successfully. One of our license experts will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none transition-colors ${
                        errors.name 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-200 dark:border-red-700 dark:focus:ring-red-900' 
                          : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-blue-900'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none transition-colors ${
                        errors.email 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-200 dark:border-red-700 dark:focus:ring-red-900' 
                          : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-blue-900'
                      }`}
                      placeholder="john.doe@company.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none transition-colors ${
                        errors.company 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-200 dark:border-red-700 dark:focus:ring-red-900' 
                          : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-blue-900'
                      }`}
                      placeholder="Acme Inc."
                    />
                    {errors.company && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.company}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="licenseType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      License Type
                    </label>
                    <select
                      id="licenseType"
                      name="licenseType"
                      value={formData.licenseType}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none transition-colors ${
                        errors.licenseType 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-200 dark:border-red-700 dark:focus:ring-red-900' 
                          : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-blue-900'
                      }`}
                    >
                      {licenseTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    {errors.licenseType && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.licenseType}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none transition-colors ${
                        errors.message 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-200 dark:border-red-700 dark:focus:ring-red-900' 
                          : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-blue-900'
                      }`}
                      placeholder="Tell us about your software licenses that you'd like to sell..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-3 text-white font-medium rounded-md flex items-center justify-center ${
                      isSubmitting 
                        ? 'bg-blue-400 dark:bg-blue-600 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
                    } transition-colors`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;