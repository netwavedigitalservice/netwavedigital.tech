const AboutIllustration = () => (
  <svg
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* Background */}
    <rect width="400" height="300" fill="url(#aboutGrad)" rx="12" />
    
    {/* Code symbols */}
    <path d="M120 80L80 150L120 220" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
    <path d="M280 80L320 150L280 220" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
    <circle cx="200" cy="150" r="40" stroke="white" strokeWidth="3" fill="none" opacity="0.6"/>
    <path d="M185 135L200 150L215 135" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M185 165L200 150L215 165" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    
    {/* Tech stack icons */}
    <rect x="60" y="240" width="40" height="25" rx="4" fill="white" fillOpacity="0.2"/>
    <text x="80" y="257" fontSize="10" fill="white" textAnchor="middle" fontFamily="sans-serif">React</text>
    
    <rect x="110" y="240" width="40" height="25" rx="4" fill="white" fillOpacity="0.2"/>
    <text x="130" y="257" fontSize="10" fill="white" textAnchor="middle" fontFamily="sans-serif">Node</text>
    
    <rect x="160" y="240" width="40" height="25" rx="4" fill="white" fillOpacity="0.2"/>
    <text x="180" y="257" fontSize="10" fill="white" textAnchor="middle" fontFamily="sans-serif">Flutter</text>
    
    <rect x="210" y="240" width="40" height="25" rx="4" fill="white" fillOpacity="0.2"/>
    <text x="230" y="257" fontSize="10" fill="white" textAnchor="middle" fontFamily="sans-serif">AWS</text>
    
    <rect x="260" y="240" width="40" height="25" rx="4" fill="white" fillOpacity="0.2"/>
    <text x="280" y="257" fontSize="10" fill="white" textAnchor="middle" fontFamily="sans-serif">Shopify</text>
    
    <rect x="310" y="240" width="40" height="25" rx="4" fill="white" fillOpacity="0.2"/>
    <text x="330" y="257" fontSize="10" fill="white" textAnchor="middle" fontFamily="sans-serif">AI/ML</text>
    
    <defs>
      <linearGradient id="aboutGrad" x1="0" y1="0" x2="400" y2="300" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6366F1"/>
        <stop offset="1" stopColor="#8B5CF6"/>
      </linearGradient>
    </defs>
  </svg>
);

export default AboutIllustration;
