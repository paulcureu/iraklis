"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Instagram, MapPin } from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <Mail size={28} strokeWidth={1.5} />,
      label: "Email",
      value: "narikaleli1@gmail.com",
      href: "mailto:narikaleli1@gmail.com",
      delay: 0.1,
    },
    {
      icon: <Phone size={28} strokeWidth={1.5} />,
      label: "Phone",
      value: "+30 697 542 1099",
      href: "tel:+306975421099",
      delay: 0.2,
    },
    {
      icon: <Instagram size={28} strokeWidth={1.5} />,
      label: "Instagram",
      value: "@athoneli.iraklis.art",
      href: "https://www.instagram.com/athoneli.iraklis.art/",
      external: true,
      delay: 0.3,
    },
    {
      icon: <MapPin size={28} strokeWidth={1.5} />,
      label: "Location",
      value: "Athos, Greece",
      href: null,
      delay: 0.4,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 pt-32 min-h-screen">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">
          Get in Touch
        </h1>
        <div className="h-px w-24 bg-accent mx-auto mb-8" />
        <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          For collaborations or to learn more about my work,
          please feel free to reach out.
        </p>
      </motion.div>

      {/* Contact Cards Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {contactInfo.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: item.delay }}
            className="group"
          >
            {item.href ? (
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="block bg-white p-8 rounded-sm shadow-md hover:shadow-xl transition-all duration-500 border border-secondary hover:border-accent h-full"
              >
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-secondary rounded-full text-primary group-hover:bg-accent group-hover:text-white transition-all duration-500 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm uppercase tracking-widest text-muted mb-2 font-medium">
                      {item.label}
                    </h3>
                    <p className="text-lg font-serif text-primary group-hover:text-accent transition-colors duration-300 break-words">
                      {item.value}
                    </p>
                  </div>
                </div>
              </a>
            ) : (
              <div className="bg-white p-8 rounded-sm shadow-md border border-secondary h-full">
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-secondary rounded-full text-primary flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm uppercase tracking-widest text-muted mb-2 font-medium">
                      {item.label}
                    </h3>
                    <p className="text-lg font-serif text-primary break-words">
                      {item.value}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Bottom Decorative Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-24 text-center"
      >
        <p className="text-2xl md:text-3xl font-serif text-primary/60 italic max-w-3xl mx-auto leading-relaxed">
          "Every block of stone has a statue inside it and it is the task of the sculptor to discover it."
        </p>
        <p className="mt-4 text-muted tracking-wider">— Michelangelo</p>
      </motion.div>
    </div>
  );
};

export default ContactPage;
