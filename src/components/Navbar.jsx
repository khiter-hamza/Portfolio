import { User, Briefcase, Image as ImageIcon, Phone } from 'lucide-react'

const Navbar = () => {
  const navItems = [
    { targetId: 'about', label: 'About', icon: User },
    { targetId: 'work', label: 'Work', icon: Briefcase },
    { targetId: 'gallery', label: 'Gallery', icon: ImageIcon },
    { targetId: 'contact', label: 'Contact', icon: Phone },
  ]

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (!element) return

    const yOffset = -100 // Increased offset for the taller large navbar
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset

    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-900/50">
      {/* Container scales up width on very large screens to match your Home grid */}
      <div className="mx-auto w-full px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32">
        <div className="flex items-center justify-between h-16 md:h-20 xl:h-24 transition-all duration-300">
          
          {/* Logo - Scaled up for XL screens */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-white text-xl md:text-2xl xl:text-3xl font-bold hover:text-gray-300 transition tracking-tighter"
          >
            hamza<span className="text-gray-500">.</span>
          </button>
          
          {/* Nav Pill Container */}
          <div className="flex items-center gap-1 md:gap-3 bg-[#1a1a1a] border border-gray-800/50 px-2 md:px-5 py-2 md:py-2.5 rounded-full shadow-2xl">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.targetId}
                  onClick={() => handleScroll(item.targetId)}
                  className="group flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full transition-all text-gray-400 hover:text-white hover:bg-[#2a2a2a]"
                >
                  {/* Icons grow on large screens */}
                  <Icon size={18} className="md:w-5 md:h-5 xl:w-6 xl:h-6" />
                  
                  {/* Text remains hidden on mobile but gets larger on XL */}
                  <span className="hidden sm:inline text-sm md:text-base xl:text-lg font-medium">
                    {item.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar