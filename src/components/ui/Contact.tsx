'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from '@/hooks/useInView';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, 0.2);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
  });


  const [loading, setLoading] = useState(false);

  const contactInfo = [
    {
      title: 'Email',
      value: 'shaswatshukla75@gmail.com',
      href: 'mailto:shaswatshukla75@gmail.com',
      icon: '📧',
    },
    {
      title: 'LinkedIn',
      value: 'Shashwat Shukla',
      href: 'https://www.linkedin.com/in/shaswat-shukla-7b2229191/',
      icon: '💼',
    },
    {
      title: 'GitHub',
      value: 'Shashwat-ui',
      href: 'https://github.com/Shashwat-ui',
      icon: '🐙',
    },
  ];

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission
  //   window.location.href = `mailto:shaswatshukla75@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_z70bmeq",
      "template_32l7s0q",
       {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      sent_at: new Date().toLocaleString(),
    },
    "spV0KMYbOdGPXjhp4"
    ).then(
      ()=>{
        toast.success("Message Sent Successfully");
        setFormData({name: "", email: "", message: "", subject: ""});
        setLoading(false);
      },
        (error)=>{
        toast.error("Failed to send the message, please try again:" + error);
        setLoading(false);
        console.log(error);
        }

      
    );
   

  };

  return (
    <section ref={ref} id="contact" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-accent-cyan to-accent-purple mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-light text-gray-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-dark-elevated/50 backdrop-blur-xl border border-white/8 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-light text-gray-400 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-dark-elevated/50 backdrop-blur-xl border border-white/8 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className='block text-sm font-light text-gray-400 mb-2'>
                  Subject
                </label>
                <input 
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-dark-elevated/50 backdrop-blur-xl border border-white/8 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 transition-all"
                  placeholder="Subject of your message"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-light text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full glass-strong rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-cyan transition-all resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-linear-to-r from-accent-cyan to-accent-purple rounded-xl text-white font-medium text-lg cursor-pointer shadow-lg shadow-accent-cyan/20 hover:shadow-accent-cyan/40 transition-shadow"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-linear-to-br from-dark-elevated/80 to-dark-surface/60 backdrop-blur-2xl rounded-2xl p-8 border border-white/8 shadow-xl shadow-black/40">
              <h3 className="text-2xl font-medium mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center gap-4 p-4 glass rounded-xl cursor-pointer group"
                  >
                    <div className="text-3xl group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-light">{info.title}</p>
                      <p className="text-white font-medium group-hover:text-accent-cyan transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative overflow-hidden rounded-3xl group mt-12"
          >
            <div className="absolute inset-0 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl" />
            <div className="absolute inset-0 bg-linear-to-br from-accent-cyan/10 to-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 p-8 border border-white/20 rounded-3xl backdrop-blur-md">
              <h3 className="text-xl font-medium mb-3">Ready to start a project?</h3>
              <p className="text-gray-400 font-light mb-6">
                Let&apos;s build something amazing together. I&apos;m available for freelance projects and
                full-time opportunities.
              </p>
              <div className="flex  gap-3 items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse mt-1" />
                <span className="text-sm text-gray-400 font-light">Available for work</span>
              </div>
            </div>
          </motion.div>
      </div>
    </section>
  );
}
