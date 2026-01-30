import { useState } from 'react'
import { MapPin, Calendar, GraduationCap, Trophy, Users, ArrowRight, BookOpen } from 'lucide-react'

const About = () => {
  const [activeTab, setActiveTab] = useState('journey')

  const timeline = [
    {
      year: '2024-2026',
      location: 'Algeria',
      badgeBg: 'bg-blue-600',
      badgeText: 'ESI',
      title: '2nd year ESI',
      description: 'Learning , focusing on...',
      icon: 'ESI',
    },
    {
      year: '2024',
      location: 'Algeria',
      badgeBg: 'bg-blue-600',
      badgeText: 'Med',
      title: '2nd year medecine',
      description: 'blocked my studies here because of algeria laws that doesn\'t allow me to study 2 fields at the same time',
      icon: 'Med',
    },
    {
      year: '2024',
      location: 'Algeria',
      badgeBg: 'bg-green-600',
      badgeText: '🏆',
      title: 'BAC Excellence Mathemathics fied',
      description:
        'Graduated with 17.78/20 overall grade,  demonstrating strong analytical skills.',
      icon: '🏆',
    },
    {
      year: '2023',
      location: 'Algeria',
      badgeBg: 'bg-green-600',
      badgeText: '🏆',
      title: 'BAC Excellence Science field',
      description:
        'Graduated with 17.41/20 overall grade.',
      icon: '🏆',
    },
    
  ]

  const tabs = [
    { id: 'journey', label: 'Educational Journey', icon: GraduationCap },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'club', label: 'Club Experience', icon: Users },
  ]

  return (
    <div id="about" className="pt-24 min-h-fit pb-12">
      <div className="mx-auto w-full px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 py-12">
        
        {/* Header Section - Now only contains the profile info */}
        <div className="mb-12">
          <div className="space-y-6">
            <button className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white px-4 py-2 rounded-full transition">
              <ArrowRight size={18} />
              <span>Explore the Logic</span>
            </button>

            <div className="flex items-center gap-3 bg-[#1a1a1a] px-4 py-2 rounded-full w-fit">
              <MapPin size={16} />
              <span className="text-sm">Kolea, Algeria</span>
            </div>

            <div className="space-y-4">
            <div className="w-48 h-48 bg-[#1a1a1a] rounded-lg overflow-hidden">
  <img 
    src="/UI_UX/profile.jpg" 
    className="w-full h-full object-cover" 
    alt="Profile"
  />
</div>

              <h2 className="text-3xl font-bold text-white">Hamza Khiter</h2>
            </div>
          </div>
        </div>

        {/* Tabs - Moved OUT of the grid to sit directly above the content, removing the gap */}
        <div className="flex flex-wrap gap-4 mb-10">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition ${
                  activeTab === tab.id
                    ? 'bg-[#1a1a1a] text-white'
                    : 'bg-[#1a1a1a]/50 text-gray-400 hover:text-white hover:bg-[#1a1a1a]'
                }`}
              >
                <Icon size={18} />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Content Section - Same as before */}
        {activeTab === 'journey' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="flex items-center gap-2 mb-6">
                <Calendar size={20} />
                <h3 className="text-xl font-semibold text-white">Academic Timeline</h3>
              </div>
              <div className="relative pl-8 border-l-2 border-gray-700 space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-12 top-0 w-4 h-4 bg-[#1a1a1a] border-2 border-gray-700 rounded-full"></div>
                    <div className="bg-[#1a1a1a] rounded-lg p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">{item.year}</span>
                        <div className="flex items-center gap-1 text-gray-400 text-sm">
                          <MapPin size={14} />
                          <span>{item.location}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className={`w-16 h-16 ${item.badgeBg} rounded-lg flex items-center justify-center`}>
                          <span className="text-white font-bold text-xl">{item.badgeText}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                          <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-2 mb-6">
                <BookOpen size={20} />
                <h3 className="text-xl font-semibold text-white">Current Studies at ESI</h3>
              </div>
              <div className="bg-[#1a1a1a] rounded-lg p-6 space-y-6">
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-white">Computer Science</h4>
                  <div className="flex items-center gap-2 text-gray-400">
                    <GraduationCap size={16} />
                    <span className="text-sm">Higher School of Computer Science</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h5 className="text-sm font-semibold text-white">Key Courses</h5>
                  <div className="bg-[#0a0a0a] rounded-lg p-4 flex items-center gap-3">
                    <div className="text-2xl">∞</div>
                    <span className="text-white">Algorithms & Data Structures</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#1a1a1a] rounded-lg p-6 space-y-4">
                <h4 className="text-lg font-semibold text-white">Quick Overview</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-gray-400">Current Studies:</span><span className="text-white font-semibold">ESI</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Current Working:</span><span className="text-white font-semibold">not yet</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Work Experience</span><span className="text-white font-semibold">not yet</span></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1a1a1a] rounded-lg p-6 space-y-3">
              <h4 className="text-lg font-semibold text-white">BAC Excellence</h4>
              <p className="text-sm text-gray-400">Graduated with excellent grades in Mathematics and Science.</p>
            </div>
          </div>
        )}

        {activeTab === 'club' && (
          <div className="bg-[#1a1a1a] rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-semibold text-white">Club Experience</h3>
            <p className="text-sm text-gray-400">Active participation in student communities and tech clubs.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default About