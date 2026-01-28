import { Mail, Phone, MapPin, Clock, Send, Calendar, Linkedin, ExternalLink, User, FileText, MessageSquare } from 'lucide-react'

const Contact = () => {
  return (
    <div id="contact" className="pt-24 min-h-screen">
      <div className="mx-auto w-full px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="space-y-8">
            <button className="flex items-center gap-2 border border-gray-700 hover:border-gray-600 text-white px-4 py-2 rounded-lg transition">
              <Mail size={18} />
              <span>Get In Touch</span>
            </button>

            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="text-white">Contact</span>{' '}
                <span className="text-gray-500">Me</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                Ready to collaborate on exciting projects or discuss opportunities in cybersecurity and software development. Let's connect and build something amazing together.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Contact Information</h3>

              {/* Email Card */}
              <div className="bg-[#1a1a1a] rounded-lg p-6 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <Mail size={20} className="text-gray-400 mt-1" />
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">Email</h4>
                      <p className="text-gray-300 text-sm">oh_khiter@esi.dz</p>
                      <p className="text-gray-500 text-xs mt-2">Best way to reach me</p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-[#2a2a2a] rounded-lg transition">
                    <ExternalLink size={16} className="text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-[#1a1a1a] rounded-lg p-6 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <Phone size={20} className="text-gray-400 mt-1" />
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">Phone</h4>
                      <p className="text-gray-300 text-sm">+213 554 764 443</p>
                      <p className="text-gray-500 text-xs mt-2">Available during business hours</p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-[#2a2a2a] rounded-lg transition">
                    <ExternalLink size={16} className="text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-[#1a1a1a] rounded-lg p-6 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <MapPin size={20} className="text-gray-400 mt-1" />
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">Location</h4>
                      <p className="text-gray-300 text-sm">Kolea, Algeria</p>
                      <p className="text-gray-500 text-xs mt-2">ESI Campus & Remote</p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-[#2a2a2a] rounded-lg transition">
                    <ExternalLink size={16} className="text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Availability Card */}
              <div className="bg-[#1a1a1a] rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-gray-400" />
                  <h4 className="text-white font-semibold">Availability</h4>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-400">Current Time:</span>{' '}
                    <span className="text-white">07:52 PM (Algeria)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-300">Will respond within 24 hours</span>
                  </div>
                  <div className="pt-2 space-y-2 border-t border-gray-800">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Sunday - Thursday:</span>
                      <span className="text-white">9:00 AM - 21:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Saturday:</span>
                      <span className="text-white">10:00 AM - 22:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Friday:</span>
                      <span className="text-red-400">Unavailable</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-[#1a1a1a] rounded-lg p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">Send Me a Message</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Whether you have a project idea, collaboration opportunity, or just want to say hello, I'd love to hear from you. Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>

            <form className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-white">
                  <User size={16} />
                  <span>Full Name *</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full bg-[#0a0a0a] border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-700 transition"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-white">
                  <Mail size={16} />
                  <span>Email Address *</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-[#0a0a0a] border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-700 transition"
                />
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-white">
                  <FileText size={16} />
                  <span>Subject</span>
                </label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  className="w-full bg-[#0a0a0a] border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-700 transition"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-white">
                  <MessageSquare size={16} />
                  <span>Message *</span>
                </label>
                <textarea
                  rows={6}
                  placeholder="Tell me about your project, idea, or just say hello..."
                  className="w-full bg-[#0a0a0a] border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-700 transition resize-none"
                ></textarea>
              </div>

              <p className="text-gray-500 text-xs">* Required fields</p>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#0a0a0a] hover:bg-[#2a2a2a] border border-gray-800 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>

            {/* Quick Links */}
            <div className="pt-6 border-t border-gray-800">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#0a0a0a] rounded-lg p-4 text-center space-y-2 hover:bg-[#2a2a2a] transition cursor-pointer">
                  <Mail size={20} className="text-gray-400 mx-auto" />
                  <div>
                    <p className="text-white text-xs font-medium">Quick Email</p>
                    <p className="text-gray-500 text-xs">For urgent matters</p>
                  </div>
                </div>
                <div className="bg-[#0a0a0a] rounded-lg p-4 text-center space-y-2 hover:bg-[#2a2a2a] transition cursor-pointer">
                  <Linkedin size={20} className="text-gray-400 mx-auto" />
                  <div>
                    <p className="text-white text-xs font-medium">LinkedIn</p>
                    <p className="text-gray-500 text-xs">Professional network</p>
                  </div>
                </div>
                <div className="bg-[#0a0a0a] rounded-lg p-4 text-center space-y-2 hover:bg-[#2a2a2a] transition cursor-pointer">
                  <Calendar size={20} className="text-gray-400 mx-auto" />
                  <div>
                    <p className="text-white text-xs font-medium">Schedule Call</p>
                    <p className="text-gray-500 text-xs">Book a meeting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
