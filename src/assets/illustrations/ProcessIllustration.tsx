
const ProcessIllustration = () => (
  <svg
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* Background */}
    <rect width="400" height="300" fill="url(#processGrad)" rx="12" />
    
    {/* Process Steps - Horizontal Timeline */}
    {/* Step 1 */}
    <circle cx="60" cy="150" r="25" fill="white" fillOpacity="0.2"/>
    <text x="60" y="145" fontSize="20" fill="white" textAnchor="middle" fontWeight="bold">01</text>
    <text x="60" y="195" fontSize="10" fill="white" textAnchor="middle" fontFamily="sans-serif">Planning</text>
    
    {/* Arrow 1 */}
    <path d="M95 150H120" stroke="white" strokeWidth="2" strokeDasharray="4 2"/>
    <path d="M115 145L120 150L115 155" stroke="white" strokeWidth="2" fill="none"/>
    
    {/* Step 2 */}
    <circle cx="150" cy="150" r="25" fill="white" fillOpacity="0.2"/>
    <text x="150" y="145" fontSize="20" fill="white" textAnchor="middle" fontWeight="bold">02</text>
    <text x="150" y="195" fontSize="10" fill="white" textAnchor="middle" fontFamily="sans-serif">Design</text>
    
    {/* Arrow 2 */}
    <path d="M185 150H210" stroke="white" strokeWidth="2" strokeDasharray="4 2"/>
    <path d="M205 145L210 150L205 155" stroke="white" strokeWidth="2" fill="none"/>
    
    {/* Step 3 */}
    <circle cx="240" cy="150" r="25" fill="white" fillOpacity="0.2"/>
    <text x="240" y="145" fontSize="20" fill="white" textAnchor="middle" fontWeight="bold">03</text>
    <text x="240" y="195" fontSize="10" fill="white" textAnchor="middle" fontFamily="sans-serif">Develop</text>
    
    {/* Arrow 3 */}
    <path d="M275 150H300" stroke="white" strokeWidth="2" strokeDasharray="4 2"/>
    <path d="M295 145L300 150L295 155" stroke="white" strokeWidth="2" fill="none"/>
    
    {/* Step 4 */}
    <circle cx="340" cy="150" r="25" fill="white" fillOpacity="0.2"/>
    <text x="340" y="145" fontSize="20" fill="white" textAnchor="middle" fontWeight="bold">04</text>
    <text x="340" y="195" fontSize="10" fill="white" textAnchor="middle" fontFamily="sans-serif">Deploy</text>
    
    {/* Bottom - Quality & Support */}
    <rect x="100" y="220" width="200" height="50" rx="8" fill="white" fillOpacity="0.15"/>
    <path d="M140 240L150 255H165L175 240L185 255L200 240" stroke="white" strokeWidth="2" fill="none"/>
    <text x="200" y="250" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">QA & Support</text>
    <text x="200" y="262" fontSize="9" fill="white" fillOpacity="0.8" textAnchor="middle">Testing & Maintenance</text>
    
    <defs>
      <linearGradient id="processGrad" x1="0" y1="0" x2="400" y2="300" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F59E0B"/>
        <stop offset="1" stopColor="#D97706"/>
      </linearGradient>
    </defs>
  </svg>
);

export default ProcessIllustration;

