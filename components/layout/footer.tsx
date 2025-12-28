import { Facebook, Instagram, Youtube, MessageCircle, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const topDestinations = [
    "Cairo City Break",
    "Luxor & Karnak",
    "Aswan Temples",
    "Nile Cruise",
    "Hurghada Red Sea",
  ];

  const popularSearches = [
    "Nile Cruise Packages",
    "Pyramids Day Tours",
    "Red Sea Diving Trips",
    "Family Egypt Vacations",
    "Desert Camping",
  ];

  const resources = [
    "About Zoya Egypt",
    "Travel Tips & Safety",
    "Egypt Visa Guide",
    "Build Your Itinerary",
    "Travel Inspiration",
  ];

  return (
    <footer className="w-full">
      {/* Top Contact Bar */}
      <div className="bg-footer py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-footer-dark flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-footer-text" />
            </div>
            <div>
              <p className="text-footer-text font-semibold text-sm">For More Inquiries</p>
              <p className="text-footer-muted text-xs">Reach our Cairo travel experts anytime.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
              <Phone className="w-5 h-5 text-footer-text" />
            </div>
            <div>
              <p className="text-footer-accent font-semibold text-sm">WhatsApp Egypt</p>
              <p className="text-footer-text text-sm font-medium">+20 100 636 3735</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-footer-dark flex items-center justify-center">
              <Mail className="w-5 h-5 text-footer-text" />
            </div>
            <div>
              <p className="text-footer-muted text-sm">Email</p>
              <p className="text-footer-text text-sm font-medium">info@zoyatoursegypt.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-footer-accent flex items-center justify-center">
              <Phone className="w-5 h-5 text-footer-bottom" />
            </div>
            <div>
              <p className="text-footer-muted text-sm">24/7 Hotline</p>
              <p className="text-footer-accent text-sm font-semibold">+20 2 2673 3355</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div 
        className="bg-footer-dark py-12 px-4 md:px-8 relative"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Cpath fill='%23ffffff' fill-opacity='0.03' d='M0,300 Q300,200 600,300 T1200,300 L1200,600 L0,600 Z'/%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-footer-accent text-3xl font-bold tracking-wider">
                Z<span className="text-footer-text">☀</span>YA
              </h2>
              <p className="text-footer-accent text-xs tracking-widest">TOURS EGYPT</p>
              <p className="text-footer-accent text-sm italic mt-1">Frame Your Memories</p>
            </div>

            <div className="space-y-2">
              <p className="text-footer-text font-semibold">Zoya Tours Egypt</p>
              <p className="text-footer-muted text-sm leading-relaxed">
                54 El Tahrir Street, Dokki, Giza<br />
                Governorate 12611, Egypt
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-footer-bottom flex items-center justify-center hover:bg-footer-accent transition-colors group"
              >
                <Facebook className="w-4 h-4 text-footer-text group-hover:text-footer-bottom" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-footer-bottom flex items-center justify-center hover:bg-footer-accent transition-colors group"
              >
                <Instagram className="w-4 h-4 text-footer-text group-hover:text-footer-bottom" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-footer-bottom flex items-center justify-center hover:bg-footer-accent transition-colors group"
              >
                <MapPin className="w-4 h-4 text-footer-text group-hover:text-footer-bottom" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-footer-bottom flex items-center justify-center hover:bg-footer-accent transition-colors group"
              >
                <Youtube className="w-4 h-4 text-footer-text group-hover:text-footer-bottom" />
              </a>
            </div>
          </div>

          {/* Top Destinations */}
          <div>
            <h3 className="text-footer-text font-semibold text-lg mb-6">Top Destinations</h3>
            <ul className="space-y-3">
              {topDestinations.map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-footer-muted text-sm hover:text-footer-accent transition-colors flex items-center gap-2"
                  >
                    <span className="text-footer-accent">▶</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Searches */}
          <div>
            <h3 className="text-footer-text font-semibold text-lg mb-6">Popular Searches</h3>
            <ul className="space-y-3">
              {popularSearches.map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-footer-muted text-sm hover:text-footer-accent transition-colors flex items-center gap-2"
                  >
                    <span className="text-footer-accent">▶</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-footer-text font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-footer-muted text-sm hover:text-footer-accent transition-colors flex items-center gap-2"
                  >
                    <span className="text-footer-accent">▶</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-footer-bottom py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <p className="text-footer-muted text-sm">
            Copyright 2025 SeoEra | All Right Reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-footer-muted text-sm">Accepted Payment Methods :</span>
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-red-600 to-orange-500 text-footer-text text-xs font-bold px-3 py-1 rounded">
                MasterCard
              </div>
              <div className="bg-[#1A1F71] text-footer-text text-xs font-bold px-3 py-1 rounded">
                VISA
              </div>
              <div className="bg-[#003087] text-footer-text text-xs font-bold px-3 py-1 rounded">
                PayPal
              </div>
              <div className="bg-footer-text text-footer-bottom text-xs font-bold px-3 py-1 rounded">
                G Pay
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
