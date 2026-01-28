import { ExternalLink, Code, Shield, Globe, FileCode, Terminal } from 'lucide-react'

const Work = () => {
  const projects = [

    {
      id: 2,
      title: 'hamzaBlog',
      description: 'Find your hamza\'s inspiration and share your his ideas. I felt bored so I made a blog, it is not finished yet but you can read some of my articles.',
      technologies: ['React', 'Shadcn UI', 'Tailwind', 'Firebase'],
      status: 'Active',
      image: 'hamza-blog',
    },
    {
      id: 3,
      title: 'Online Shop',
      description: 'Modern online shop platform with a clean and responsive user interface. A robust e-commerce application built with Vite and React for seamless shopping experiences.',
      technologies: ['Vite', 'React'],
      status: 'Active',
      image: 'online-shop',
    },
    {
      id: 4,
      title: 'Online Shop Manager',
      description: 'Admin and manager portal for an online shop with statistics, product management, and user controls. Management platform for online shop owners, providing analytics and controls over products and sales.',
      technologies: ['Vite', 'React'],
      status: 'Active',
      image: 'shop-manager',
    },
   
  
    {
      id: 7,
      title: 'Ramdany',
      description: 'Modern website developed with Vite + React, focusing on sleek design and user experience. Ramdany showcases a sleek and responsive design for modern website needs, powered by Vite and React.',
      technologies: ['Vite', 'React'],
      status: 'Active',
      image: 'ramdany',
    },
    {
      id: 8,
      title: 'Doxaa',
      description: 'Intelligent Ticketing System with Agentic AI Pipeline. i haven`t finished it yet',
      technologies: ['Rag','automation','agentic ai'],
      status: 'not Active',
      image: 'Doxaa',
    },
    {
      id: 8,
      title: 'Healthcare Agent',
      description: 'Healthcare Agent , is a LLM finetuned on a healthcare dataset to answer questions about healthcare.',
      technologies: ['Pytorch', 'LLM', 'Fine-tuning', 'Word-Embedding', 'Transformers','Attention Mechanism'],
      status: 'not Active',
      image: 'Healthcare Agent',
    },
    
  ]

  const focusAreas = [
    { label: 'Artificial Intelligence ', icon: Shield },
    { label: 'Academic Implementations', icon: Globe },
    { label: 'Web Development', icon: FileCode },
    { label: 'Systems Programming', icon: Terminal },
  ]

  const stats = {
    total: 6,
    ai: 2,
    active: 4,
    academic: 0,
  }

  return (
    <div id="work" className="pt-24 min-h-screen">
      <div className="mx-auto w-full px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Purpose Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Built With Purpose</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                A collection of projects spanning artificial intelengence, academic implementations, and collaborative development initiatives from my journey at ESI and club experiences.
              </p>
            </div>

            {/* Project Overview */}
            <div className="bg-[#1a1a1a] rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-semibold text-white">Project Overview</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Projects:</span>
                  <span className="text-white font-semibold">{stats.total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">AI Projects:</span>
                  <span className="text-white font-semibold">{stats.ai}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Active Projects:</span>
                  <span className="text-white font-semibold">{stats.active}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Academic Work:</span>
                  <span className="text-white font-semibold">{stats.academic}</span>
                </div>
              </div>
            </div>

            {/* Focus Areas */}
            <div className="bg-[#1a1a1a] rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-semibold text-white">Focus Areas</h3>
              <div className="space-y-3">
                {focusAreas.map((area, index) => {
                  const Icon = area.icon
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition cursor-pointer"
                    >
                      <Icon size={16} className="text-gray-400" />
                      <span>{area.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Main Content - Project Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-[#1a1a1a] rounded-lg overflow-hidden hover:bg-[#2a2a2a] transition group"
                >
                  {/* Project Image/Thumbnail */}
                  <div className="relative h-48 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
                    <div className="absolute top-3 right-3">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          project.status === 'Active'
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 text-4xl opacity-20">
                      {project.id % 3 === 0 ? '📁' : project.id % 3 === 1 ? '🌐' : '💻'}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-gray-200 transition">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[#0a0a0a] text-gray-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Icons */}
                    <div className="flex items-center justify-end gap-3 pt-2">
                      <button className="p-2 hover:bg-[#0a0a0a] rounded-lg transition">
                        <Code size={18} className="text-gray-400 hover:text-white" />
                      </button>
                      <button className="p-2 hover:bg-[#0a0a0a] rounded-lg transition">
                        <ExternalLink size={18} className="text-gray-400 hover:text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
