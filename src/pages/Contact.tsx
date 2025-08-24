import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleBackClick = () => {
    window.history.back();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-main font-poppins">
      {/* Header */}
      <header className="bg-secondary text-secondary-foreground py-6 px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-secondary-foreground mb-4 animate-typing overflow-hidden whitespace-nowrap border-r-[3px] border-secondary-foreground w-0 mx-auto [animation-fill-mode:forwards]">
            Contact Us
          </h1>
          <p className="text-xl text-secondary-foreground/90 animate-typing-delayed overflow-hidden whitespace-nowrap border-r-[2px] border-secondary-foreground w-0 mx-auto [animation-fill-mode:forwards] [animation-delay:2s]">
            We'd love to hear from you! Reach out using the form or contact us directly.
          </p>
        </div>
      </header>

      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="fixed top-5 left-5 bg-primary text-primary-foreground border-2 border-foreground rounded-full px-4 py-2 font-semibold cursor-pointer flex items-center gap-2 shadow-lg transition-all duration-300 hover:bg-muted hover:text-foreground hover:scale-110 z-[1000]"
      >
        <i className="fa-solid fa-reply text-foreground"></i> Back
      </button>

      {/* Contact Container */}
      <div className="flex justify-center items-center py-8 px-4">
        <div className="w-full max-w-4xl bg-card rounded-2xl shadow-2xl overflow-hidden animate-fadeInContainer flex flex-wrap min-h-[550px]">
          
          {/* Contact Info Section */}
          <div className="flex-1 min-w-[350px] bg-gradient-contact-info text-primary-foreground p-12 border-2 border-foreground">
            <div className="text-center mb-8">
              <div className="flex justify-center items-center h-36 mb-6 animate-scaleIn">
                <i className="fa-solid fa-address-card text-[12rem] text-primary"></i>
              </div>
              <h1 className="text-4xl font-bold mb-6 text-primary">Contact Us</h1>
              <p className="text-xl leading-relaxed text-primary-foreground/90">
                We'd love to hear from you! Reach out using the form or contact us directly.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center text-lg">
                <i className="fa-solid fa-phone text-3xl text-primary mr-4"></i>
                <span className="text-primary-foreground">+91 9876543210</span>
              </div>
              <div className="flex items-center text-lg">
                <i className="fas fa-envelope text-3xl text-primary mr-4"></i>
                <span className="text-primary-foreground">Support@electroscoot.com</span>
              </div>
              <div className="flex items-center text-lg">
                <i className="fa-solid fa-location-dot text-3xl text-primary mr-4"></i>
                <span className="text-primary-foreground">ElectroScoot HQ, Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="flex-1 min-w-[350px] p-8 animate-fadeSlideIn">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xl font-bold font-signika mb-2 text-foreground">
                  <i className="fa-solid fa-user text-2xl text-foreground mr-2"></i>
                  Your Name
                </label>
                <Input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                  className="w-full p-3 text-base bg-input border-2 border-foreground rounded-lg transition-all duration-300 focus:bg-contact-light focus:scale-105 focus:border-foreground focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xl font-bold font-signika mb-2 text-foreground">
                  <i className="fa-solid fa-envelope-open text-2xl text-foreground mr-2"></i>
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                  className="w-full p-3 text-base bg-input border-2 border-foreground rounded-lg transition-all duration-300 focus:bg-contact-light focus:scale-105 focus:border-foreground focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xl font-bold font-signika mb-2 text-foreground">
                  <i className="fa-solid fa-phone text-2xl text-foreground mr-2"></i>
                  Phone Number
                </label>
                <Input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your Phone number"
                  required
                  className="w-full p-3 text-base bg-input border-2 border-foreground rounded-lg transition-all duration-300 focus:bg-contact-light focus:scale-105 focus:border-foreground focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xl font-bold font-signika mb-2 text-foreground">
                  <i className="fa-solid fa-pen text-2xl text-foreground mr-2"></i>
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Type your message here..."
                  required
                  className="w-full p-3 text-base bg-input border-2 border-foreground rounded-lg transition-all duration-300 focus:bg-contact-light focus:scale-105 focus:border-foreground focus:ring-2 focus:ring-ring resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full py-4 bg-secondary text-secondary-foreground text-lg font-medium rounded-[35px] transition-all duration-300 hover:bg-contact-dark hover:scale-105 hover:border-2 hover:border-foreground animate-fadeInUp"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-footer-bg text-muted-foreground">
        <div className="bg-footer-accent py-4 text-center">
          <button
            onClick={scrollToTop}
            className="text-muted-foreground hover:text-primary hover:scale-125 transition-all duration-300 inline-flex items-center gap-2 font-medium"
          >
            <i className="fas fa-arrow-up"></i>
            <span>Back to top</span>
          </button>
        </div>

        <div className="px-[5%] py-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div>
            <h3 className="text-xl mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-primary">
              Waha Mobility
            </h3>
            <p className="mb-6 text-muted-foreground">
              Creating sustainable solutions for a better tomorrow through innovation and technology.
            </p>
            <div className="flex gap-4">
              {['facebook-f', 'linkedin-in', 'twitter', 'youtube', 'instagram'].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="bg-footer-accent w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-primary hover:-translate-y-1"
                  aria-label={icon}
                >
                  <i className={`fab fa-${icon} text-muted-foreground hover:text-primary-foreground`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-primary">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="flex items-center gap-2 transition-all duration-300 hover:text-primary hover:pl-1 hover:scale-115">
                  <i className="fas fa-chevron-right text-sm"></i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="/about" className="flex items-center gap-2 transition-all duration-300 hover:text-primary hover:pl-1 hover:scale-115">
                  <i className="fas fa-chevron-right text-sm"></i>
                  <span>About Us</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-primary">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <i className="fas fa-envelope text-primary"></i>
                <span>info@wahamobility.com</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone text-primary"></i>
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-map-marker-alt text-primary"></i>
                <span>Mumbai, India</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-clock text-primary"></i>
                <span>Mon-Fri: 9AM - 5PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted/20 py-6 px-[5%]">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Cookies</a>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            © 2025 Waha Mobility. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;