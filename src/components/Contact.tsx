
import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-16">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-slate-800">
              Contact Information
            </h3>
            <p className="text-slate-600 mb-8">
              I'm always open to interesting conversations, collaborations, and consulting opportunities 
              in product strategy, gaming, health tech, or digital innovation.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-500">Email</h4>
                  <a
                    href="mailto:arpit01999@gmail.com"
                    className="text-slate-800 hover:text-blue-600 transition-colors"
                  >
                    arpit01999@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-500">Phone</h4>
                  <a
                    href="tel:+917290809136"
                    className="text-slate-800 hover:text-blue-600 transition-colors"
                  >
                    +91 7290809136
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-500">Location</h4>
                  <p className="text-slate-800">India</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-medium text-slate-800 mb-4">Achievements</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 text-xl">🏆</span>
                  <p className="text-slate-700">Most Innovative Employee of the Year – 2024</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 text-xl">🛠</span>
                  <p className="text-slate-700">Product Milestone Achiever – 2024</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 text-xl">📜</span>
                  <p className="text-slate-700">Certified in Product-Led Growth & Roadmapping</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 text-xl">🎓</span>
                  <p className="text-slate-700">B.E. in Computer Science – AKTU</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="bg-slate-50 p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
