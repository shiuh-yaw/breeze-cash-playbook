import { 
  BarChart3, 
  Target, 
  TrendingUp, 
  Gamepad2, 
  Code,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

const Navigation = ({ activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'market', label: 'Market Analysis', icon: TrendingUp },
    { id: 'opportunities', label: 'Opportunities', icon: Target },
    { id: 'roadmap', label: 'Strategic Roadmap', icon: Gamepad2 },
    { id: 'technical', label: 'Technical Specs', icon: Code },
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-lg shadow-lg"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <nav className={`
        fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-blue-600 to-blue-800 text-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6">
          {/* Logo/Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Gamepad2 className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Breeze Cash</h1>
                <p className="text-blue-200 text-sm">Product Playbook</p>
              </div>
            </div>
          </div>

          {/* Navigation Items */}
          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`
                      w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 text-left
                      ${isActive 
                        ? 'bg-white text-blue-600 shadow-lg transform scale-105' 
                        : 'text-blue-100 hover:bg-blue-700 hover:text-white'
                      }
                    `}
                  >
                    <Icon className={`h-5 w-5 ${isActive ? 'text-blue-600' : 'text-blue-200'}`} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Footer */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-xs text-blue-200 text-center">
              <p>AI-Powered Gaming Payments</p>
              <p className="mt-1">Built by Stripe Alumni</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

