import React, { useState, useEffect } from 'react';
import { ContentStrings } from '../types';
import { Mail, Phone, MapPin, ChevronDown, Send } from 'lucide-react';

interface ContactProps {
  content: ContentStrings['contact'];
}

export const Contact: React.FC<ContactProps> = ({ content }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: content.form.serviceOptions[0] || '',
    message: ''
  });

  // Update default service when language changes
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      service: content.form.serviceOptions[0] || ''
    }));
  }, [content.form.serviceOptions]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `New Inquiry: ${formData.service} - ${formData.name}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service Type: ${formData.service}

Message:
${formData.message}`;

    const mailtoLink = `mailto:info@eagleon.digital?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-surfaceHighlight/30 skew-y-3 transform origin-bottom-left pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24">
          
          {/* Info Side */}
          <div>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-6">
              {content.title}
            </h2>
            <p className="text-xl text-textDim mb-12 leading-relaxed">
              {content.subtitle}
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-surface border border-white/10 flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-textDim text-sm mb-1">Email Us</p>
                  <a href={`mailto:${content.info.email}`} className="text-white text-lg font-bold hover:text-primary transition-colors">
                    {content.info.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                 <div className="w-14 h-14 rounded-full bg-surface border border-white/10 flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-textDim text-sm mb-1">Call Us</p>
                  <a href={`tel:${content.info.phone}`} dir="ltr" className="text-white text-lg font-bold hover:text-primary transition-colors">
                    {content.info.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                 <div className="w-14 h-14 rounded-full bg-surface border border-white/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-textDim text-sm mb-1">Visit Us</p>
                  <a 
                    href="https://www.google.com/maps?q=31.972806,35.910778" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white text-lg font-bold hover:text-primary transition-colors block leading-tight"
                  >
                    {content.info.location}
                  </a>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="mt-12 rounded-3xl overflow-hidden border border-white/10 h-64 relative group shadow-2xl">
               <iframe
                 width="100%"
                 height="100%"
                 frameBorder="0"
                 scrolling="no"
                 marginHeight={0}
                 marginWidth={0}
                 src="https://maps.google.com/maps?q=31.972806,35.910778&z=16&output=embed"
                 className="w-full h-full filter grayscale invert-[0.9] contrast-125 hover:grayscale-0 hover:invert-0 hover:contrast-100 transition-all duration-700"
                 title="Office Location"
               ></iframe>
               <a
                 href="https://www.google.com/maps?q=31.972806,35.910778"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="absolute inset-0 z-10"
                 aria-label="Open in Google Maps"
               ></a>
               <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur text-white text-xs px-3 py-1 rounded-full border border-white/10 pointer-events-none">
                 Open in Maps
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-surface p-8 md:p-10 rounded-3xl border border-white/5 h-fit">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-textDim text-sm font-medium mb-2">{content.form.name}</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white text-start focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-textDim text-sm font-medium mb-2">{content.form.email}</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white text-start focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-textDim text-sm font-medium mb-2">{content.form.phone}</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white text-start focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-textDim text-sm font-medium mb-2">{content.form.service}</label>
                <div className="relative">
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white text-start focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors appearance-none cursor-pointer"
                  >
                    {content.form.serviceOptions.map((opt, i) => (
                      <option key={i} value={opt} className="bg-surface text-white py-2">{opt}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-textDim pointer-events-none" size={20} />
                </div>
              </div>

              <div>
                <label className="block text-textDim text-sm font-medium mb-2">{content.form.message}</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white text-start focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-primary text-black font-bold text-lg rounded-xl hover:bg-primaryLight transition-colors mt-4 flex items-center justify-center gap-2 group"
              >
                {content.form.submit}
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};