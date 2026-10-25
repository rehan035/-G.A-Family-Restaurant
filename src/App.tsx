/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';

interface MenuItem {
  id: string;
  category: 'bbq' | 'karahi' | 'rice' | 'desserts';
  badge: string;
  title: string;
  description: string;
  serving: string;
  priceLabel: string;
  image: string;
}

interface GalleryItem {
  id: string;
  tag: string;
  title: string;
  caption: string;
  image: string;
}

const IMAGES = {
  logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmqMndjNqIZ5lIeeNHnJamgtkRlfahcduVqR47tgy-ShbVZSK91s9iaDiqFyWSEKMtd3A-AnRPqzEvB4OW0RRsjsDWAxGemELZ94bUf_X3w3gJ1kPUgQZUE-ZicUJ2TUbz4z70CwBrbjBv3QEz7oRezRIZEWLswnzfBDm8akUzAZACIy3g9_pSKNq2r51lxOoYLsNhsvbGrqbPon5AO2YGkBx4MG_c7Yhn0LShHkSFC_gVWt7Q8uABfw',
  heroFeast: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBf9VdYlpZal-XahzWu4fUYm1pyrhHGkdmBXQnTsvRgn4Yu3gxcCvmLjSmS7QaDByRxJ0H8ru9wmVew3hnTfSqL-ZE8SyJ4CMcdUCZeYxTwjQqH0HTNKlP1NQwVbRsn79_GiEfef5nugO49w8ekhYRiy2Ts5iFLmo-2lQvlqaUlnr8uDkR-uNwkc-Oqu9DtP6SozTAxz2qeyVYDgu4zdguHfk7Xs88O5LDZ9HvUSGtVEX2lMktGU37ayg',
  interior: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAb6qioSDOAB9cBP0NPcD6kc6HQhsIMzpcTDb2PDjHCeLl5YHKAhR3_uS4GWhYQ41BS7yqpl8FxZGcqjhNeNd3gIyyOYl9O1baBkIlMojSr0XdrZ7h00gEsbWLEL3ICJmw423pnf6GxA5_4wIQcygwk6NK1fSvZfhBanImA_F6AuH-D7uq3u5aVCaNREHFRX8KXOSUUEdWdwU2ylECcXe6XD9n5ifv_okaJAXhEVQs2cZ6RiwCYzxXBnQ',
  karahi: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3GjXkpMJWSrrXIB7YK6IdXC64eMj_32_M_B86jdKHJSLNGzDMfR6VukCHMmZbfHCZ7AgWaed5gYSsjXk2iqSV0nn3sAX3hnRps1iVgeLP_xNn_YA2ts92mtsuDhrX9vJ8uIsPLbq9zfkvo_O5egA6sfkBa7wPsaTdc1XhNw0AVAabO2BU02g-StKlSrEqCGQ0k2i9Tjor8XzWi7o5MBkKELTjpjIevlZk0egXK1kyVV8ljWwLRNKbzA',
  bbq: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCc8DmkfKy-bQe39PgD6btLasFwIK85WMQDvKgrHPmXKf13jUr-ntA2oq_uYjRYNl1xl04kzSIKuw82DF_CVaV8_KIfiQUP5ei2L5_2nEGXOjn8bKMX-p0waz1z096O4tgL44xyvdEFmaPzNWsKzTfNc5tRdGLkML-piUf-947vO-H2Wpwa9cplbDzX-ILVHtvvEwMUEJjDdQzB1bfv1Iux0zb2pUqeMgYlSZ8RtYqluhEXcacJc1Pnqg',
  biryani: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDO8uVrN-_vv-QKShD1OKpj4WHkp_xbWx9_MHFqV8pB48-0-_8i0cfz87OLAcUossuPyLyeTq32P3sOA1F8_2HIsmme854OqLr-2QWlR4tNEvRMr9ihKJTf1mSRb7qAc7aMiXAEOHb_g5rdoPow30Qo-2DJCV0_5Mv0NtUjU3wNWsihfl8JLI4e3epz6J_jXlbpIwv5dIq2HfsPeb-LhckIjoQ704Etnl4GRdFeDiD9t7GAP9AG8TRH2g',
  dessert: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcgxkKJl497EiC9f0XkMJTmTSRqvDU7jV5PnC-J5-Peoyth0BgUedl-3-sedfA0aPtsrDf0cFO9SDl4uPAhGWQZz-h-OGe3ZbIRdyvIv9TQFzCHhokdXLzQzJJHqGC4M6npYtOdcga4xv1adBxtn34Q_CrWupsGQv3NlhN4KROnOUy4BH_D8mTDEMWVX9S8AqVI3MvXA2CT-21XeZrdJSUquz-SlIF61mSOGUVGBLH3fqVHDnFczRTnw',
};

const SIGNATURE_DISHES = [
  {
    id: 'sig-1',
    badge: "Chef's Special",
    title: 'Signature Chicken Karahi',
    description:
      'Cooked in traditional thick iron wok with ripe country tomatoes, julienned ginger, fresh green chilies, and hand-ground spices.',
    serving: 'By Weight (Half / Full)',
    price: 'Price on request',
    image: IMAGES.karahi,
    alt: 'Authentic Chicken Karahi',
  },
  {
    id: 'sig-2',
    badge: 'Charcoal Grilled',
    title: 'Royal Mixed BBQ Platter',
    description:
      'Juicy Chicken Tikka Boti, minced beef Seekh Kebabs, and velvety Malai Boti served with mint raita and crisp spiced onion rings.',
    serving: 'Platter Serving',
    price: 'Price on request',
    image: IMAGES.bbq,
    alt: 'Mixed BBQ Platter Sizzling',
  },
  {
    id: 'sig-3',
    badge: 'Generational Dum',
    title: 'Special Dum Mutton Biryani',
    description:
      'Fragrant long-grain aged basmati layered with tender cuts of mutton, saffron ghee swirls, caramelized onions, and fried dry nuts.',
    serving: 'Dawat Handi',
    price: 'Price on request',
    image: IMAGES.biryani,
    alt: 'Special Dum Mutton Biryani',
  },
  {
    id: 'sig-4',
    badge: 'Warm Mithai',
    title: 'Shahi Saffron Gulab Jamun',
    description:
      'Freshly prepared khoya dumplings steeped in warm saffron and green cardamom nectar, showered with crushed green pistachios.',
    serving: 'Dessert Service',
    price: 'Price on request',
    image: IMAGES.dessert,
    alt: 'Shahi Gulab Jamun',
  },
];

const MENU_ITEMS: MenuItem[] = [
  {
    id: 'menu-1',
    category: 'bbq',
    badge: 'Live Grill',
    title: 'Chicken Tikka Boti',
    description: 'Marinated overnight in spiced yoghurt and charred over natural coals.',
    serving: '1 Plate (4 Skewers)',
    priceLabel: 'Daily Market Rate',
    image: IMAGES.bbq,
  },
  {
    id: 'menu-2',
    category: 'karahi',
    badge: 'Handi Special',
    title: 'Desi Murgh Karahi',
    description: 'Cooked in country butter with fresh garlic, black pepper, and green chilies.',
    serving: 'Half / Full KG',
    priceLabel: 'Price on request',
    image: IMAGES.karahi,
  },
  {
    id: 'menu-3',
    category: 'karahi',
    badge: 'Tribal Recipe',
    title: 'Shinwari Mutton Karahi',
    description: 'Simmered in its own succulent rendered fat with whole tomatoes and sea salt.',
    serving: 'By Fresh Weight',
    priceLabel: 'Daily Market Rate',
    image: IMAGES.karahi,
  },
  {
    id: 'menu-4',
    category: 'rice',
    badge: 'Rice Specialty',
    title: 'Dum Mutton Biryani',
    description: 'Aromatic basmati rice cooked with saffron milk and tender bone-in mutton.',
    serving: 'Single / Family Platter',
    priceLabel: 'Price on request',
    image: IMAGES.biryani,
  },
  {
    id: 'menu-5',
    category: 'bbq',
    badge: 'Live Charcoal',
    title: 'Royal Seekh Kebab Platter',
    description: 'Finely ground hand-spiced beef kebabs flame-broiled with crushed coriander.',
    serving: '6 Pieces with Naan',
    priceLabel: 'Price on request',
    image: IMAGES.bbq,
  },
  {
    id: 'menu-6',
    category: 'desserts',
    badge: 'Mithai & Tandoor',
    title: 'Shahi Gulab Jamun (Pair)',
    description: 'Piping hot cottage cheese dumplings dipped in cardamom sugar syrup.',
    serving: '2 Warm Pieces',
    priceLabel: 'Price on request',
    image: IMAGES.dessert,
  },
];

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    tag: 'Grand Banquets',
    title: 'The Imperial Dawat Spread',
    caption: 'Royal Pakistani Feast at G.A Family Restaurant',
    image: IMAGES.heroFeast,
  },
  {
    id: 'gal-2',
    tag: 'Live Smoke',
    title: 'Charcoal Grilled Kebabs & Tikka',
    caption: 'Charcoal Grilled Seekh Kebabs & Chicken Tikka',
    image: IMAGES.bbq,
  },
  {
    id: 'gal-3',
    tag: 'Wok Magic',
    title: 'Freshly Simmered Chicken Karahi',
    caption: 'Freshly Simmered Chicken Karahi in Iron Wok',
    image: IMAGES.karahi,
  },
  {
    id: 'gal-4',
    tag: 'Aromatics',
    title: 'Aged Basmati Mutton Dum Biryani',
    caption: 'Fragrant Mutton Biryani with Saffron and Cashews',
    image: IMAGES.biryani,
  },
  {
    id: 'gal-5',
    tag: 'Hospitality Space',
    title: 'Dawat Hall & Private Family Booths',
    caption: 'G.A Family Dining Hall & Private Booths',
    image: IMAGES.interior,
  },
  {
    id: 'gal-6',
    tag: 'Sweet Finish',
    title: 'Cardamom Saffron Gulab Jamun',
    caption: 'Hot Saffron Gulab Jamun steeped in Rose Cardamom Syrup',
    image: IMAGES.dessert,
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'bbq' | 'karahi' | 'rice' | 'desserts'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxItem, setLightboxItem] = useState<{ src: string; caption: string } | null>(null);

  // Reservation Form State
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [resDate, setResDate] = useState('');
  const [partySize, setPartySize] = useState('2 to 4 Guests');
  const [specialNotes, setSpecialNotes] = useState('');
  const [preparedWaUrl, setPreparedWaUrl] = useState<string | null>(null);

  const filteredMenu = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return MENU_ITEMS.filter((item) => {
      const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesQuery =
        query === '' ||
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.badge.toLowerCase().includes(query);
      return matchesCat && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message =
      `*G.A Family Restaurant - Table Booking Inquiry*%0A%0A` +
      `*Guest Name:* ${encodeURIComponent(guestName.trim())}%0A` +
      `*Contact:* ${encodeURIComponent(guestPhone.trim())}%0A` +
      `*Date:* ${encodeURIComponent(resDate)}%0A` +
      `*Party Size:* ${encodeURIComponent(partySize)}%0A` +
      `*Special Request:* ${encodeURIComponent(specialNotes.trim() || 'None')}%0A%0A` +
      `Kindly confirm table availability at Kamanwala Sialkot.`;

    const waUrl = `https://wa.me/923472200000?text=${message}`;
    setPreparedWaUrl(waUrl);

    // Trigger anchor navigation cleanly for iframe compatibility
    const link = document.createElement('a');
    link.href = waUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface antialiased selection:bg-primary selection:text-surface-container-lowest">
      {/* TopNavBar (Glassmorphism Anchor) */}
      <header className="bg-surface/85 backdrop-blur-md border-b border-outline-variant/30 shadow-[0_16px_36px_-8px_rgba(200,125,32,0.12),0_4px_12px_rgba(0,0,0,0.4)] top-0 sticky z-50 transition-all duration-300">
        <div className="flex justify-between items-center w-full px-space-lg md:px-margin max-w-7xl mx-auto h-20">
          {/* Logo Branding */}
          <a className="flex items-center gap-3 group" href="#">
            <img
              alt="G.A Family Restaurant Brand Logo"
              className="h-12 w-12 rounded-lg object-contain border border-outline-variant/40 group-hover:scale-105 transition-transform duration-300 bg-surface-container"
              src={IMAGES.logo}
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="font-headline-md text-base sm:text-lg lg:text-xl font-semibold text-primary tracking-wide whitespace-nowrap leading-tight">
                G.A Family Restaurant
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                <span className="material-symbols-outlined text-[13px] text-secondary">pin_drop</span> Kamanwala, Sialkot
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              className="font-label-lg text-label-lg text-primary font-bold border-b-2 border-primary pb-1 whitespace-nowrap"
              href="#menu"
            >
              Menu
            </a>
            <a
              className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors duration-200 whitespace-nowrap"
              href="#cuisines"
            >
              Cuisines
            </a>
            <a
              className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors duration-200 whitespace-nowrap"
              href="#ambience"
            >
              Ambience
            </a>
            <a
              className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors duration-200 whitespace-nowrap"
              href="#gallery"
            >
              Gallery
            </a>
            <a
              className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors duration-200 whitespace-nowrap"
              href="#contact"
            >
              Contact
            </a>
          </nav>

          {/* Trailing Actions Cluster */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-on-surface hover:text-primary transition-all duration-200 border border-outline-variant/30 hover:border-primary/50 text-body-sm font-body-sm whitespace-nowrap"
              href="tel:+923472200000"
            >
              <span className="material-symbols-outlined text-[18px] text-secondary">call</span>
              <span>+92 347 2200000</span>
            </a>
            <a
              className="gold-gradient-bg px-4 py-2.5 rounded-lg text-surface-container-lowest font-label-lg text-label-lg flex items-center gap-2 font-bold gold-glow active:scale-95 transition-all duration-150 whitespace-nowrap"
              href="https://wa.me/923472200000?text=Assalam%20o%20Alaikum!%20I%20would%20like%20to%20reserve%20a%20family%20dawat%20table%20at%20G.A%20Family%20Restaurant."
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[19px]">chat</span>
              <span>WhatsApp Reserve</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            aria-label="Toggle navigation menu"
            className="md:hidden flex items-center justify-center p-2 rounded-lg text-on-surface hover:text-primary border border-outline-variant/40 cursor-pointer"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-surface-container-low border-b border-outline-variant/30 px-6 py-4 space-y-4">
            <a
              className="block font-label-lg text-label-lg text-primary py-2 border-b border-outline-variant/20"
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              Menu
            </a>
            <a
              className="block font-label-lg text-label-lg text-on-surface-variant hover:text-primary py-2 border-b border-outline-variant/20"
              href="#cuisines"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cuisines
            </a>
            <a
              className="block font-label-lg text-label-lg text-on-surface-variant hover:text-primary py-2 border-b border-outline-variant/20"
              href="#ambience"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ambience
            </a>
            <a
              className="block font-label-lg text-label-lg text-on-surface-variant hover:text-primary py-2 border-b border-outline-variant/20"
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </a>
            <a
              className="block font-label-lg text-label-lg text-on-surface-variant hover:text-primary py-2 border-b border-outline-variant/20"
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-2 flex flex-col gap-3">
              <a
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-outline-variant/40 text-on-surface font-body-sm"
                href="tel:+923472200000"
              >
                <span className="material-symbols-outlined text-[18px] text-secondary">call</span>
                +92 347 2200000
              </a>
              <a
                className="gold-gradient-bg py-2.5 rounded-lg text-surface-container-lowest font-label-lg flex items-center justify-center gap-2 font-bold"
                href="https://wa.me/923472200000"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[19px]">chat</span>
                WhatsApp Reserve
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Hero Background Visual */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Lavish Pakistani Feast at G.A Family Restaurant"
            className="w-full h-full object-cover scale-105 transform motion-safe:animate-[pulse_10s_ease-in-out_infinite]"
            src={IMAGES.heroFeast}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-surface/80 to-surface-dim/70"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,125,32,0.15)_0%,transparent_70%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-space-lg md:px-margin py-20 text-center flex flex-col items-center">
          {/* Trust Credential Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
            <span className="px-3.5 py-1.5 rounded-full bg-surface-container/90 border border-secondary/30 text-secondary font-label-sm text-label-sm tracking-widest uppercase flex items-center gap-1.5 backdrop-blur-sm">
              <span className="material-symbols-outlined text-[14px]">verified</span> 100% Halal Provenance
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-surface-container/90 border border-secondary/30 text-secondary font-label-sm text-label-sm tracking-widest uppercase flex items-center gap-1.5 backdrop-blur-sm">
              <span className="material-symbols-outlined text-[14px]">family_restroom</span> Family Friendly Atmosphere
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-surface-container/90 border border-secondary/30 text-secondary font-label-sm text-label-sm tracking-widest uppercase flex items-center gap-1.5 backdrop-blur-sm">
              <span className="material-symbols-outlined text-[14px]">local_fire_department</span> Fresh Live Charcoal BBQ
            </span>
          </div>

          {/* Main Headlines */}
          <h1 className="font-headline-xl-mobile md:font-display-lg text-headline-xl-mobile md:text-display-lg text-on-surface max-w-4xl tracking-tight leading-tight mb-6">
            The Royal Taste of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-fixed via-primary to-secondary">
              Tradition in Sialkot
            </span>
          </h1>
          <p className="font-body-xl text-body-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
            Experience authentic Desi Karahi, live charcoal BBQ, and memorable family dawat in Kamanwala, Sialkot.
            Crafted with generational heritage and warm Punjabi hospitality.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              className="w-full sm:w-auto gold-gradient-bg px-8 py-4 rounded-xl text-surface-container-lowest font-label-lg text-label-lg font-bold gold-glow hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
              href="#menu"
            >
              <span>Explore Our Menu</span>
              <span className="material-symbols-outlined text-[20px]">restaurant_menu</span>
            </a>
            <a
              className="w-full sm:w-auto bg-surface-container/90 backdrop-blur-sm border border-secondary/40 hover:border-secondary px-8 py-4 rounded-xl text-on-surface hover:text-primary font-label-lg text-label-lg font-bold transition-all duration-200 flex items-center justify-center gap-2 hover:bg-surface-container-high"
              href="https://maps.google.com/?q=Kamanwala+Sialkot+Pakistan"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[20px] text-secondary">explore</span>
              <span>Get Directions</span>
            </a>
          </div>

          {/* Floating Quick Info Pill */}
          <div className="mt-14 inline-flex items-center gap-6 px-6 py-3 rounded-full bg-surface-container/70 border border-outline-variant/30 text-body-sm font-body-sm text-on-surface-variant backdrop-blur-md">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-primary">schedule</span> Open Daily: 12:00 PM – 1:00 AM
            </span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-outline"></span>
            <span className="hidden sm:flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-primary">storefront</span> Dine-in • Takeaway • Private Dawat
            </span>
          </div>
        </div>
      </section>

      {/* Restaurant Introduction & Philosophy */}
      <section className="py-space-xl relative border-t border-outline-variant/20 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-space-lg md:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Editorial Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-8 h-[2px] bg-primary"></span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
                  The Heritage of Sialkot
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-on-surface">
                Generations Gathered Over the Warmth of Authentic Copper Karahi
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Nestled on the bustling arterial path of Kamanwala in Sialkot, Punjab, G.A Family Restaurant preserves
                the honored culinary traditions of aristocratic Mughal-Punjabi feasts. Every handi and karahi is cooked
                over roaring fires with pure desi ghee, fresh butchered local meats, and time-honored ground spices.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Designed purposefully for large family gatherings, private corporate dinners, and diaspora celebrations,
                our dining rooms offer private curtained family booths and grand dawat halls where memories are forged
                around fragrant platters.
              </p>
              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-lg bg-surface-container gold-border">
                  <span className="material-symbols-outlined text-secondary text-2xl mb-1">skillet</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface text-[17px]">Live Iron Karahi</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Cooked to order right before your family table.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-surface-container gold-border">
                  <span className="material-symbols-outlined text-secondary text-2xl mb-1">deck</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface text-[17px]">
                    Private Family Suites
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Complete privacy &amp; dignified comfort for all generations.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Visual Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden gold-border gold-glow">
                <img
                  alt="Luxurious Dining Interior at G.A Family Restaurant Sialkot"
                  className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                  src={IMAGES.interior}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-surface-container/90 backdrop-blur-md border border-outline-variant/30 flex items-center justify-between">
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface text-[18px]">
                      Royal Mughal Ambience
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Carved woodwork &amp; soft chandelier lighting
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-primary text-3xl">auto_awesome</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Signature Dishes Section */}
      <section className="py-space-xl relative bg-surface" id="cuisines">
        <div className="max-w-7xl mx-auto px-space-lg md:px-margin">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
              Culinary Masterpieces
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface">Signature Royal Selections</h2>
            <div className="h-0.5 w-24 mx-auto subtle-divider"></div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Handpicked regional specialties prepared with slow-cooking craft, live coal flames, and unmatched taste.
            </p>
          </div>

          {/* Signature Dish Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SIGNATURE_DISHES.map((dish) => (
              <div
                key={dish.id}
                className="bg-surface-container rounded-xl overflow-hidden gold-border hover:border-secondary/50 transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    alt={dish.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src={dish.image}
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 bg-surface-dim/90 backdrop-blur-sm border border-secondary/40 text-secondary text-label-sm font-label-sm px-2.5 py-1 rounded-md uppercase">
                    {dish.badge}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                      {dish.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-3">
                      {dish.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-outline-variant/30 flex items-center justify-between">
                    <span className="text-secondary font-label-sm font-semibold">{dish.serving}</span>
                    <span className="text-on-surface-variant text-body-sm italic">{dish.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Comprehensive Menu Section (#menu) */}
      <section className="py-space-xl relative border-t border-outline-variant/20 bg-surface-container-low" id="menu">
        <div className="max-w-7xl mx-auto px-space-lg md:px-margin">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
                Kamanwala Culinary Catalog
              </span>
              <h2 className="font-headline-xl text-headline-xl text-on-surface mt-1">Our Complete Dining Menu</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xl">
                Prepared fresh to order. For customized family banquets or specific meat weights, our captains are at
                your service.
              </p>
            </div>
            {/* Search Bar */}
            <div className="w-full md:w-72">
              <div className="relative">
                <input
                  className="w-full bg-surface-container-highest border border-outline-variant/40 rounded-xl px-4 py-2.5 pl-10 text-on-surface placeholder:text-outline text-body-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="Search dishes (e.g. Karahi, Tikka)..."
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <span className="material-symbols-outlined absolute left-3 top-3 text-outline text-[18px]">
                  search
                </span>
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
            {[
              { key: 'all', label: 'All Dishes' },
              { key: 'bbq', label: 'BBQ & Live Grill' },
              { key: 'karahi', label: 'Karahi & Handi' },
              { key: 'rice', label: 'Rice & Biryani' },
              { key: 'desserts', label: 'Breads & Desserts' },
            ].map((tab) => {
              const isActive = selectedCategory === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setSelectedCategory(tab.key as typeof selectedCategory)}
                  className={`px-5 py-2 rounded-full font-label-lg text-label-lg whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-primary text-on-primary font-bold'
                      : 'bg-surface-container-high text-on-surface-variant hover:text-primary border border-outline-variant/30'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Menu Items Grid */}
          {filteredMenu.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMenu.map((item) => (
                <div
                  key={item.id}
                  className="bg-surface-container rounded-xl overflow-hidden gold-border hover:border-secondary/40 transition-all p-5 flex flex-col justify-between"
                >
                  <div className="flex gap-4">
                    <img
                      alt={item.title}
                      className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                      src={item.image}
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <span className="text-secondary font-label-sm text-[10px] uppercase tracking-wider">
                        {item.badge}
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-[18px] text-on-surface">{item.title}</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-outline-variant/20 flex items-center justify-between text-body-sm">
                    <span className="text-secondary font-semibold">{item.serving}</span>
                    <span className="text-on-surface-variant italic">{item.priceLabel}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-on-surface-variant">
              <span className="material-symbols-outlined text-4xl text-outline mb-2">dinner_dining</span>
              <p className="font-body-md text-body-md">
                No menu items match your search. Try searching for &quot;Karahi&quot; or &quot;BBQ&quot;.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Ambience & Family Facilities */}
      <section className="py-space-xl relative bg-surface" id="ambience">
        <div className="max-w-7xl mx-auto px-space-lg md:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden gold-border gold-glow">
                <img
                  alt="Family Dawat Ambience at G.A Family Restaurant"
                  className="w-full h-[450px] object-cover"
                  src={IMAGES.interior}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 bg-surface-container/90 backdrop-blur-md p-4 rounded-xl border border-secondary/20">
                  <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-[17px] text-on-surface">
                      Family Privacy Guaranteed
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Customized partition curtains and secluded family cabins.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text and Features Column */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-8 h-[2px] bg-secondary"></span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                  The Family Dining Standard
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-on-surface">
                Designed for Dignity, Celebration, and Multi-Generational Banquets
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Families across Sialkot and overseas visitors choose G.A Family Restaurant for our disciplined
                commitment to guest comfort. Whether hosting an intimate Nikah dinner, an anniversary dawat, or a
                regular weekend feast, our venue provides dedicated amenities:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-surface-container border border-outline-variant/30">
                  <span className="material-symbols-outlined text-secondary text-2xl mt-0.5">chair</span>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-[16px] text-on-surface">
                      Private Family Cabins &amp; Lounges
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Curtained partitions to ensure privacy and comfortable dining for elders and children.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-surface-container border border-outline-variant/30">
                  <span className="material-symbols-outlined text-secondary text-2xl mt-0.5">local_parking</span>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-[16px] text-on-surface">
                      Spacious On-Site Parking
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Hassle-free parking right on the main Kamanwala thoroughfare in Sialkot.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-surface-container border border-outline-variant/30">
                  <span className="material-symbols-outlined text-secondary text-2xl mt-0.5">soup_kitchen</span>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-[16px] text-on-surface">
                      Hygienic Open Kitchen &amp; Halal Butchery
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Witness the live preparation of your meat cuts in clean, strictly monitored environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Gallery with Working Lightbox Modal */}
      <section className="py-space-xl relative border-t border-outline-variant/20 bg-surface-container-lowest" id="gallery">
        <div className="max-w-7xl mx-auto px-space-lg md:px-margin">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
              Visual Experience
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface">Moments of Warmth &amp; Flavor</h2>
            <div className="h-0.5 w-24 mx-auto subtle-divider"></div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Click any visual to view full size presentation and culinary details.
            </p>
          </div>

          {/* Bento-style Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightboxItem({ src: item.image, caption: item.caption })}
                className="group relative h-72 rounded-xl overflow-hidden cursor-pointer gold-border"
              >
                <img
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={item.image}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-secondary font-label-sm">{item.tag}</span>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface text-[17px]">{item.title}</h4>
                </div>
                <span className="absolute top-4 right-4 bg-surface-container-high/80 p-2 rounded-full text-on-surface opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-[18px]">zoom_in</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close lightbox"
              className="absolute -top-12 right-0 text-on-surface hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
              onClick={() => setLightboxItem(null)}
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
            <img
              alt={lightboxItem.caption}
              className="max-h-[80vh] w-auto rounded-xl gold-border object-contain"
              src={lightboxItem.src}
              referrerPolicy="no-referrer"
            />
            <p className="mt-4 text-center font-headline-sm text-headline-sm text-primary">
              {lightboxItem.caption}
            </p>
          </div>
        </div>
      )}

      {/* Table Inquiry / Dawat Reservation Section with Direct WhatsApp Integration */}
      <section className="py-space-xl relative bg-surface border-t border-outline-variant/20" id="reservation">
        <div className="max-w-4xl mx-auto px-space-lg md:px-margin">
          <div className="bg-surface-container rounded-2xl p-6 md:p-10 gold-border gold-glow">
            <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                Family Reservations
              </span>
              <h2 className="font-headline-xl text-headline-xl text-on-surface">Book Your Family Dawat Table</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Submit your details below to instantly format your booking request directly to our reservation team on
                WhatsApp.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleReservationSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Guest Name */}
                <div>
                  <label className="block font-label-lg text-label-lg text-on-surface mb-2" htmlFor="guestName">
                    Guest Name *
                  </label>
                  <input
                    className="w-full bg-surface-container-highest border border-outline-variant/40 rounded-xl px-4 py-3 text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:border-primary"
                    id="guestName"
                    placeholder="e.g. Ch. Muhammad Rizwan"
                    required
                    type="text"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                  />
                </div>
                {/* Phone Number */}
                <div>
                  <label className="block font-label-lg text-label-lg text-on-surface mb-2" htmlFor="guestPhone">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    className="w-full bg-surface-container-highest border border-outline-variant/40 rounded-xl px-4 py-3 text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:border-primary"
                    id="guestPhone"
                    placeholder="e.g. 0347 2200000"
                    required
                    type="tel"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                  />
                </div>
                {/* Date */}
                <div>
                  <label className="block font-label-lg text-label-lg text-on-surface mb-2" htmlFor="resDate">
                    Date of Visit *
                  </label>
                  <input
                    className="w-full bg-surface-container-highest border border-outline-variant/40 rounded-xl px-4 py-3 text-on-surface text-body-md focus:outline-none focus:border-primary"
                    id="resDate"
                    required
                    type="date"
                    value={resDate}
                    onChange={(e) => setResDate(e.target.value)}
                  />
                </div>
                {/* Party Size */}
                <div>
                  <label className="block font-label-lg text-label-lg text-on-surface mb-2" htmlFor="partySize">
                    Number of Guests *
                  </label>
                  <select
                    className="w-full bg-surface-container-highest border border-outline-variant/40 rounded-xl px-4 py-3 text-on-surface text-body-md focus:outline-none focus:border-primary"
                    id="partySize"
                    required
                    value={partySize}
                    onChange={(e) => setPartySize(e.target.value)}
                  >
                    <option value="2 to 4 Guests">2 to 4 Guests (Family Table)</option>
                    <option value="5 to 8 Guests">5 to 8 Guests (Family Suite)</option>
                    <option value="9 to 15 Guests">9 to 15 Guests (Private Booth Dawat)</option>
                    <option value="16+ Guests (Banquet Dawat)">16+ Guests (Grand Dawat Banquet)</option>
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block font-label-lg text-label-lg text-on-surface mb-2" htmlFor="specialNotes">
                  Special Requests / Seating Preference
                </label>
                <textarea
                  className="w-full bg-surface-container-highest border border-outline-variant/40 rounded-xl px-4 py-3 text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:border-primary"
                  id="specialNotes"
                  placeholder="e.g., Requesting private curtain partition, mild spice for children, advance Desi Chicken Karahi preparation."
                  rows={3}
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                />
              </div>

              {/* Submit Button */}
              <button
                className="w-full gold-gradient-bg py-4 rounded-xl text-surface-container-lowest font-label-lg text-label-lg font-bold gold-glow hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                type="submit"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>Send Reservation Request via WhatsApp</span>
              </button>

              {preparedWaUrl && (
                <div className="p-4 rounded-xl bg-surface-container-high border border-secondary/40 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-body-sm text-on-surface">
                    Reservation message prepared for <strong>{guestName}</strong> ({partySize}).
                  </span>
                  <a
                    href={preparedWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-[#25D366] text-white font-label-sm font-bold whitespace-nowrap"
                  >
                    Open WhatsApp Chat
                  </a>
                </div>
              )}

              <p className="text-center font-body-sm text-body-sm text-on-surface-variant">
                Direct Line:{' '}
                <a className="text-primary hover:underline" href="tel:+923472200000">
                  +92 347 2200000
                </a>{' '}
                • Kamanwala, Sialkot, Punjab
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Verified Location & Hours Section */}
      <section className="py-space-xl relative bg-surface-container-low border-t border-outline-variant/20" id="contact">
        <div className="max-w-7xl mx-auto px-space-lg md:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Location Info Card */}
            <div className="lg:col-span-5 bg-surface-container rounded-2xl p-8 gold-border flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                    Visit Us in Sialkot
                  </span>
                  <h2 className="font-headline-xl text-headline-xl text-on-surface mt-1">Location &amp; Timings</h2>
                </div>
                {/* Address Block */}
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary text-2xl mt-1">location_on</span>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-[17px] text-on-surface">
                      Restaurant Address
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                      Kamanwala, Sialkot, Punjab, Pakistan
                    </p>
                    <p className="font-body-sm text-body-sm text-outline mt-1">
                      Easily accessible with spacious parking on main route.
                    </p>
                  </div>
                </div>
                {/* Hours Block */}
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary text-2xl mt-1">schedule</span>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-[17px] text-on-surface">Operating Hours</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                      Monday – Sunday: <strong className="text-on-surface">12:00 PM – 1:00 AM</strong>
                    </p>
                    <p className="font-body-sm text-body-sm text-outline mt-0.5">
                      Continuous service: Lunch, Evening Family Dining &amp; Late Night Live Charcoal BBQ.
                    </p>
                  </div>
                </div>
                {/* Contact Block */}
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary text-2xl mt-1">call</span>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-[17px] text-on-surface">
                      Verified Direct Contacts
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                      Phone:{' '}
                      <a className="text-primary hover:underline font-semibold" href="tel:+923472200000">
                        +92 347 2200000
                      </a>
                    </p>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
                      WhatsApp:{' '}
                      <a
                        className="text-secondary hover:underline font-semibold"
                        href="https://wa.me/923472200000"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        +92 347 2200000
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              {/* Maps Direct Button */}
              <div className="pt-6 mt-6 border-t border-outline-variant/20">
                <a
                  className="w-full bg-surface-container-high hover:bg-surface-container-highest border border-secondary/40 text-on-surface hover:text-primary py-3.5 rounded-xl font-label-lg text-label-lg flex items-center justify-center gap-2 transition-all"
                  href="https://maps.google.com/?q=Kamanwala+Sialkot+Pakistan"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[19px] text-secondary">near_me</span>
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Visual Map Feature Display */}
            <div className="lg:col-span-7 bg-surface-container rounded-2xl overflow-hidden gold-border relative flex flex-col justify-center items-center p-8 min-h-[380px]">
              {/* Decorative Map Atmosphere */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C87D20_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <div className="relative z-10 text-center max-w-md space-y-4">
                <div className="w-16 h-16 rounded-full bg-secondary/10 border border-secondary/40 flex items-center justify-center mx-auto text-secondary">
                  <span className="material-symbols-outlined text-3xl">map</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface text-xl">Kamanwala, Sialkot</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Located in the heart of Kamanwala, Sialkot. Just a short drive for families visiting from Sialkot
                  Cantt, Sambrial, and surrounding districts.
                </p>
                <div className="pt-2">
                  <a
                    className="gold-gradient-bg px-6 py-3 rounded-lg text-surface-container-lowest font-label-lg inline-flex items-center gap-2 font-bold gold-glow hover:scale-105 transition-transform"
                    href="https://maps.google.com/?q=Kamanwala+Sialkot+Pakistan"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-[18px]">directions</span>
                    <span>Get Instant GPS Driving Route</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-container-lowest border-t border-outline-variant/30 w-full">
        <div className="w-full px-space-lg md:px-margin py-space-xl max-w-7xl mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-outline-variant/20">
            {/* Brand Cluster */}
            <div className="flex items-center gap-4">
              <img
                alt="G.A Family Restaurant Logo"
                className="h-14 w-14 rounded-lg object-contain border border-outline-variant/40 bg-surface-container"
                src={IMAGES.logo}
                referrerPolicy="no-referrer"
              />
              <div>
                <h2 className="font-headline-md text-headline-md text-primary tracking-wide">
                  G.A Family Restaurant
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Kamanwala, Sialkot, Punjab, Pakistan • Halal &amp; Family Dining
                </p>
              </div>
            </div>
            {/* Trailing Contact Buttons */}
            <div className="flex items-center gap-3">
              <a
                className="px-4 py-2 rounded-lg bg-surface-container border border-outline-variant/40 text-on-surface hover:text-primary transition-colors text-body-sm flex items-center gap-2"
                href="tel:+923472200000"
              >
                <span className="material-symbols-outlined text-[18px] text-secondary">call</span>
                <span>+92 347 2200000</span>
              </a>
              <a
                className="gold-gradient-bg px-4 py-2 rounded-lg text-surface-container-lowest font-label-sm font-bold flex items-center gap-1.5 gold-glow"
                href="https://wa.me/923472200000"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[17px]">chat</span>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <a
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-200 hover:translate-x-0.5"
              href="#menu"
            >
              Menu
            </a>
            <a
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-200 hover:translate-x-0.5"
              href="#cuisines"
            >
              Cuisines
            </a>
            <a
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-200 hover:translate-x-0.5"
              href="#ambience"
            >
              Family Dawat Suites
            </a>
            <a
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-200 hover:translate-x-0.5"
              href="#gallery"
            >
              Ambience Gallery
            </a>
            <a
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-200 hover:translate-x-0.5"
              href="#contact"
            >
              Directions &amp; Hours
            </a>
            <a
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-200 hover:translate-x-0.5"
              href="#reservation"
            >
              Private Dining Booking
            </a>
            <a
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-200 hover:translate-x-0.5"
              href="#cuisines"
            >
              Halal Provenance
            </a>
            <a
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-200 hover:translate-x-0.5"
              href="#contact"
            >
              Contact
            </a>
          </div>

          {/* Halal & Verification Note */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-body-sm font-body-sm text-outline border-t border-outline-variant/10 gap-4">
            <p>
              © 2024 G.A Family Restaurant Sialkot. All Royal Rights Reserved. Crafted for Multi-Generational Dawat.
            </p>
            <div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>100% Hand-Slaughtered Halal Verified</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Sticky Action Buttons (Call & WhatsApp) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a
          aria-label="Chat on WhatsApp"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all"
          href="https://wa.me/923472200000?text=Assalam%20o%20Alaikum!%20I%20would%20like%20to%20inquire%20about%20a%20table%20reservation%20at%20G.A%20Family%20Restaurant%20Sialkot."
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="material-symbols-outlined text-3xl">chat</span>
        </a>
        <a
          aria-label="Call Restaurant"
          className="w-14 h-14 rounded-full gold-gradient-bg text-surface-container-lowest flex items-center justify-center gold-glow hover:scale-110 active:scale-95 transition-all"
          href="tel:+923472200000"
        >
          <span className="material-symbols-outlined text-3xl">call</span>
        </a>
      </div>
    </div>
  );
}

