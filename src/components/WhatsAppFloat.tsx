import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/254742287771"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
        <MessageCircle size={28} className="text-white fill-white" />
        
        {/* Pulse animation ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </div>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-deep-forest text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us
        <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-deep-forest rotate-45" />
      </div>
    </a>
  )
}
