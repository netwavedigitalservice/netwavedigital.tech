
const WorkIllustration = () => (
  <svg
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* Background */}
    <rect width="400" height="300" fill="url(#workGrad)" rx="12" />
    
    {/* Project Cards Grid */}
    {/* Card 1 - E-Commerce */}
    <rect x="30" y="40" width="100" height="80" rx="8" fill="white" fillOpacity="0.2"/>
    <rect x="40" y="50" width="80" height="45" rx="4" fill="white" fillOpacity="0.8"/>
    <rect x="45" y="55" width="30" height="5" rx="1" fill="#6366F1"/>
    <rect x="45" y="65" width="50" height="3" rx="1" fill="white" fillOpacity="0.5"/>
    <rect x="45" y="72" width="40" height="3" rx="1" fill="white" fillOpacity="0.5"/>
    <circle cx="105" cy="105" r="8" fill="#10B981"/>
    <text x="80" y="135" fontSize="9" fill="white" textAnchor="middle" fontFamily="sans-serif">E-Commerce</text>
    
    {/* Card 2 - Mobile App */}
    <rect x="150" y="40" width="100" height="80" rx="8" fill="white" fillOpacity="0.2"/>
    <rect x="185" y="50" width="30" height="50" rx="4" fill="white" fillOpacity="0.8"/>
    <rect x="192" y="60" width="16" height="25" rx="2" fill="#6366F1"/>
    <circle cx="200" cy="90" r="3" fill="white" fillOpacity="0.6"/>
    <text x="200" y="135" fontSize="9" fill="white" textAnchor="middle" fontFamily="sans-serif">Mobile App</text>
    
    {/* Card 3 - SaaS Platform */}
    <rect x="270" y="40" width="100" height="80" rx="8" fill="white" fillOpacity="0.2"/>
    <rect x="285" y="55" width="70" height="45" rx="4" fill="white" fillOpacity="0.8"/>
    <rect x="290" y="62" width="25" height="15" rx="2" fill="#8B5CF6"/>
    <rect x="320" y="62" width="30" height="8" rx="1" fill="white" fillOpacity="0.5"/>
    <rect x="290" y="82" width="60" height="3" rx="1" fill="white" fillOpacity="0.5"/>
    <rect x="290" y="90" width="45" height="3" rx="1" fill="white" fillOpacity="0.5"/>
    <text x="320" y="135" fontSize="9" fill="white" textAnchor="middle" fontFamily="sans-serif">SaaS Platform</text>
    
    {/* Card 4 - Real Estate */}
    <rect x="30" y="140" width="100" height="80" rx="8" fill="white" fillOpacity="0.2"/>
    <rect x="40" y="150" width="80" height="45" rx="4" fill="white" fillOpacity="0.8"/>
    <rect x="45" y="155" width="40" height="25" rx="2" fill="#10B981"/>
    <rect x="90" y="155" width="25" height="12" rx="2" fill="white" fillOpacity="0.5"/>
    <rect x="90" y="172" width="25" height="8" rx="2" fill="white" fillOpacity="0.5"/>
    <text x="80" y="235" fontSize="9" fill="white" textAnchor="middle" fontFamily="sans-serif">Real Estate</text>
    
    {/* Card 5 - Education */}
    <rect x="150" y="140" width="100" height="80" rx="8" fill="white" fillOpacity="0.2"/>
    <rect x="165" y="150" width="70" height="45" rx="4" fill="white" fillOpacity="0.8"/>
    <circle cx="200" cy="165" r="12" fill="#F59E0B"/>
    <path d="M195 170L200 160L210 170H200V175H195V170Z" fill="white"/>
    <rect x="175" y="182" width="50" height="3" rx="1" fill="white" fillOpacity="0.5"/>
    <rect x="175" y="188" width="35" height="3" rx="1" fill="white" fillOpacity="0.5"/>
    <text x="200" y="235" fontSize="9" fill="white" textAnchor="middle" fontFamily="sans-serif">Education</text>
    
    {/* Card 6 - Healthcare */}
    <rect x="270" y="140" width="100" height="80" rx="8" fill="white" fillOpacity="0.2"/>
    <rect x="285" y="150" width="70" height="45" rx="4" fill="white" fillOpacity="0.8"/>
    <rect x="295" y="158" width="50" height="30" rx="2" fill="#EF4444"/>
    <rect x="305" y="165" width="10" height="16" rx="2" fill="white"/>
    <rect x="322" y="165" width="10" height="16" rx="2" fill="white"/>
    <rect x="315" y="175" width="10" height="6" rx="1" fill="white"/>
    <text x="320" y="235" fontSize="9" fill="white" textAnchor="middle" fontFamily="sans-serif">Healthcare</text>
    
    {/* Stats bar */}
    <rect x="80" y="245" width="240" height="35" rx="6" fill="white" fillOpacity="0.15"/>
    <text x="140" y="265" fontSize="14" fill="white" textAnchor="middle" fontWeight="bold">50+ Projects</text>
    <text x="200" y="265" fontSize="14" fill="white" textAnchor="middle" fontWeight="bold">|</text>
    <text x="260" y="265" fontSize="14" fill="white" textAnchor="middle" fontWeight="bold">99% Satisfaction</text>
    
    <defs>
      <linearGradient id="workGrad" x1="0" y1="0" x2="400" y2="300" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EC4899"/>
        <stop offset="1" stopColor="#BE185D"/>
      </linearGradient>
    </defs>
  </svg>
);

export default WorkIllustration;

