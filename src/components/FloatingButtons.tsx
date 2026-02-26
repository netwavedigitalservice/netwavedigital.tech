import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const FloatingButtons = () => {
  const [showBack, setShowBack] = useState(false);

  useEffect(() => {
    const handler = () => setShowBack(window.scrollY > 400);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* WhatsApp */}
      <a
        href={`https://wa.me/917481947649?text=${encodeURIComponent("Hi, I'm interested in your services!")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <span className="text-2xl">💬</span>
      </a>

      {/* Back to top */}
      {showBack && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform text-primary-foreground"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default FloatingButtons;
