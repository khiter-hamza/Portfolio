import { MapPin, Mail, Calendar, User, Code, Image as ImageIcon, GraduationCap, Shield, Github, Linkedin, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-900 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Personal Information */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Hamza Khiter</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Computer Science student at ESI, passionate about Artificial Intelligence, software development, and collaborative innovation. building my own projects and competing in AI challenges.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} />
                <span>Kolea, Algeria</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={16} />
                <span>oh_khiter@esi.dz</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar size={16} />
                <span>Available for opportunities</span>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-4">
              <a href="#" className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center hover:bg-[#2a2a2a] transition">
                <Github size={18} className="text-gray-400" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center hover:bg-[#2a2a2a] transition">
                <Linkedin size={18} className="text-gray-400" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center hover:bg-[#2a2a2a] transition">
                <Twitter size={18} className="text-gray-400" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center hover:bg-[#2a2a2a] transition">
                <Instagram size={18} className="text-gray-400" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-3">
              <a href="/about" className="flex items-center gap-2 text-gray-400 hover:text-white transition text-sm">
                <User size={16} />
                <span>About Me</span>
              </a>
              <a href="/work" className="flex items-center gap-2 text-gray-400 hover:text-white transition text-sm">
                <Code size={16} />
                <span>Projects</span>
              </a>
              <a href="/gallery" className="flex items-center gap-2 text-gray-400 hover:text-white transition text-sm">
                <ImageIcon size={16} />
                <span>Gallery</span>
              </a>
              <a href="/contact" className="flex items-center gap-2 text-gray-400 hover:text-white transition text-sm">
                <Mail size={16} />
                <span>Contact</span>
              </a>
            </div>
          </div>

          {/* Column 3: Key Achievements & Club Memberships */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Key Achievements</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• ESI Computer Science Student</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <Shield size={18} />
                <span>Club Memberships</span>
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• ETIC Club</li>
                <li>• CSE Club</li>
              </ul>
            </div>
          </div>

          {/* Column 4: Technologies & Skills & Current Focus */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Technologies & Skills</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'JavaScript', 'React', 'Node.js', 'C/C++', 'Assembly', 'Linux', 'Artificial Intelligence', 'Pytorch', 'Sklearn'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#1a1a1a] text-gray-300 text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <Code size={18} />
                <span>Current Focus</span>
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• AI Projects</li>
                <li>• Competitions </li>
                <li>• Academic Excellence</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">
                © 2026 Hamza Khiter. Made with ❤️ and lots of &lt;/&gt;
                ,The UI Design was created by Axmed
              </p>
              <p className="text-gray-500 text-xs max-w-2xl">
                This portfolio showcases my journey in computer science, Artificial Intelligence, and software development. Built with React, Next.js, and Tailwind CSS. Designed with mathematical precision and aesthetic excellence.
              </p>
            </div>
            <div className="flex flex-col items-end gap-3">
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <GraduationCap size={16} />
                  <span>ESI Student</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Shield size={16} />
                  <span>Artificial Intelligence Enthusiast</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Last updated: 1/26/2026</span>
                <span className="text-green-400">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
