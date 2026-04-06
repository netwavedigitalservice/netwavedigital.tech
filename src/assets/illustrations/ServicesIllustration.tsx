
const ServicesIllustration = () => (
  <svg
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* Background */}
    <rect width="400" height="300" fill="url(#servicesGrad)" rx="12" />
    
    {/* Grid of service icons */}
    {/* Web Development */}
    <rect x="40" y="40" width="80" height="70" rx="8" fill="white" fillOpacity="0.15"/>
    <path d="M55 75L80 55L105 75V85C105 90 80 100 80 100C80 100 55 90 55 85V75Z" fill="white" fillOpacity="0.8"/>
    <rect x="70" y="88" width="20" height="12" rx="2" fill="white" fillOpacity="0.6"/>
    <text x="80" y="125" fontSize="10" fill="white" textAnchor="middle" fontFamily="sans-serif">Web Dev</text>
    
    {/* Mobile App */}
    <rect x="140" y="40" width="80" height="70" rx="8" fill="white" fillOpacity="0.15"/>
    <rect x="168" y="50" width="24" height="40" rx="4" fill="white" fillOpacity="0.8"/>
    <rect x="174" y="58" width="12" height="18" rx="2" fill="#6366F1"/>
    <circle cx="180" cy="82" r="3" fill="white" fillOpacity="0.6"/>
    <text x="180" y="125" fontSize="10" fill="white" textAnchor="middle" fontFamily="sans-serif">Mobile</text>
    
    {/* E-Commerce */}
    <rect x="240" y="40" width="80" height="70" rx="8" fill="white" fillOpacity="0.15"/>
    <path d="M255 55H305V85H255V55Z" fill="white" fillOpacity="0.8"/>
    <path d="M260 60H300V70H260V60Z" fill="#6366F1"/>
    <rect x="265" y="75" width="30" height="5" rx="1" fill="white" fillOpacity="0.6"/>
    <circle cx="275" cy="55" r="8" fill="white" fillOpacity="0.6"/>
    <text x="280" y="125" fontSize="10" fill="white" textAnchor="middle" fontFamily="sans-serif">E-Commerce</text>
    
    {/* Digital Marketing */}
    <rect x="40" y="140" width="80" height="70" rx="8" fill="white" fillOpacity="0.15"/>
    <circle cx="80" cy="170" r="20" stroke="white" strokeWidth="3" fill="none" strokeDasharray="4 2"/>
    <path d="M70 175L85 160L95 170" stroke="white" strokeWidth="2" fill="none"/>
    <path d="M80 185V195" stroke="white" strokeWidth="2"/>
    <path d="M75 190L80 195L85 190" stroke="white" strokeWidth="2"/>
    <text x="80" y="225" fontSize="10" fill="white" textAnchor="middle" fontFamily="sans-serif">Marketing</text>
    
    {/* Custom Software */}
    <rect x="140" y="140" width="80" height="70" rx="8" fill="white" fillOpacity="0.15"/>
    <rect x="160" y="155" width="40" height="30" rx="3" fill="white" fillOpacity="0.8"/>
    <path d="M165 165H195V175H165V165Z" fill="#6366F1"/>
    <rect x="175" y="180" width="10" height="5" fill="white" fillOpacity="0.6"/>
    <text x="180" y="225" fontSize="10" fill="white" textAnchor="middle" fontFamily="sans-serif">Software</text>
    
    {/* UI/UX Design */}
    <rect x="240" y="140" width="80" height="70" rx="8" fill="white" fillOpacity="0.15"/>
    <rect x="255" y="155" width="50" height="35" rx="3" fill="white" fillOpacity="0.8"/>
    <circle cx="280" cy="165" r="5" fill="#6366F1"/>
    <rect x="260" y="175" width="40" height="2" fill="white" fillOpacity="0.6"/>
    <rect x="260" y="180" width="30" height="2" fill="white" fillOpacity="0.6"/>
    <rect x="260" y="185" width="25" height="2" fill="white" fillOpacity="0.6"/>
    <text x="280" y="225" fontSize="10" fill="white" textAnchor="middle" fontFamily="sans-serif">UI/UX</text>
    
    <defs>
      <linearGradient id="servicesGrad" x1="0" y1="0" x2="400" y2="300" gradientUnits="userSpaceOnUse">
        <stop stopColor="#10B981"/>
        <stop offset="1" stopColor="#059669"/>
      </linearGradient>
    </defs>
  </svg>
);

export default ServicesIllustration;

