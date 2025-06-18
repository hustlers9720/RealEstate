import React, { useRef, useState } from 'react';
import { FaPaperPlane, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const serviceId = import.meta.VITE_EMAILJS_SERVICE_ID;
  const publicKey = import.meta.VITE_EMAILJS_PUBLIC_KEY;
  const templateId = import.meta.VITE_EMAILJS_TEMPLATE_ID;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // Replace with your EmailJS service ID, template ID, and public key
    emailjs.sendForm(
      "service_332sgls",
      "template_mmdv1pt",
      form.current,
      "dCTq5l66IijmxuKi2"
    )
      .then((result) => {
        toast.success('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'General Inquiry',
          message: ''
        });
      }, (error) => {
        toast.error('Failed to send message. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Contact Us</h1>
      <p className="text-slate-600 mb-8">
        Have questions? We're here to help! Fill out the form below or reach out directly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Send us a message</h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                Full Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                Subject*
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Property Inquiry">Property Inquiry</option>
                <option value="Feedback">Feedback</option>
                <option value="Support">Support</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-slate-700 text-white px-6 py-2 rounded-md hover:bg-slate-800 transition duration-300 flex items-center justify-center"
            >
              {loading ? 'Sending...' : (
                <>
                  <FaPaperPlane className="mr-2" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Our Contact Information</h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-slate-100 p-3 rounded-full mr-4">
                <FaMapMarkerAlt className="text-slate-700 text-xl" />
              </div>
              <div>
                <h3 className="font-medium text-slate-800">Our Address</h3>
                <p className="text-slate-600">123 Real Estate Avenue, Suite 456<br />Mumbai, Maharashtra 400001</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-slate-100 p-3 rounded-full mr-4">
                <FaPhone className="text-slate-700 text-xl" />
              </div>
              <div>
                <h3 className="font-medium text-slate-800">Phone Number</h3>
                <p className="text-slate-600">+91 98765 43210<br />Mon-Fri, 9am-6pm</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-slate-100 p-3 rounded-full mr-4">
                <FaEnvelope className="text-slate-700 text-xl" />
              </div>
              <div>
                <h3 className="font-medium text-slate-800">Email Address</h3>
                <p className="text-slate-600">adigoyal9720@gmail.com<br />supportgoyalestate@gmail.com</p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="font-medium text-slate-800 mb-2">Business Hours</h3>
              <ul className="text-slate-600 space-y-1">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default Contact;