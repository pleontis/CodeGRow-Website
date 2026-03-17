import React, { useState, memo, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Check, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Add CSS for animated border
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes borderTravel {
      0% {
        background-position: 0% 0%;
      }
      100% {
        background-position: 280px 0%;
      }
    }
    
    .animated-border {
      transition: box-shadow 0.3s ease;
    }
    
    .animated-border:hover {
      box-shadow: 0 0 30px hsl(190, 70%, 50%);
    }
  `;
  document.head.appendChild(style);
}

const PricingCard = memo(({ pkg, isSelected, onSelect, onContact, isMobile = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    onClick={() => !isMobile && onSelect(pkg.name)}
    className={`relative rounded-2xl transition-all duration-300 ${!isMobile ? 'cursor-pointer' : ''} ${
      isSelected
        ? 'ring-2 ring-primary ring-offset-2 dark:ring-offset-gray-900'
        : ''
    } ${
      pkg.popular
        ? 'bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary shadow-xl dark:shadow-inner dark:shadow-primary/20 hover:shadow-2xl dark:hover:shadow-lg dark:hover:shadow-primary/40'
        : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-inner dark:shadow-gray-700/50 hover:shadow-xl dark:hover:shadow-lg dark:hover:shadow-primary/30'
    } ${!isMobile ? 'hover:scale-105 active:scale-95' : ''}`}
  >
    {/* Popular Badge */}
    {pkg.popular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <span className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
          Δημοφιλέστερο
        </span>
      </div>
    )}

    <div className="p-8">
      {/* Offer Badge - Only show if showOffer is true */}
      {pkg.offer && pkg.showOffer && (
        <div className="absolute top-4 right-4">
          <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center">
            <span className="text-xs font-bold text-primary text-center leading-tight">
              -{pkg.offer}
            </span>
          </div>
        </div>
      )}

      {/* Package Name */}
      <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
        {pkg.title}
      </h2>

      {/* Number of Calls */}
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        1:1 Mentoring
      </p>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-3 mb-2">
          <span className="text-5xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {pkg.price}
          </span>
          {pkg.showOffer && (
            <span className="text-md text-gray-500 dark:text-gray-400 line-through">
              {pkg.originalPrice}
            </span>
          )}
        </div>
        {/* Total Calls Badge - Show under price in all cards */}
        <div className="mt-4 inline-block">
          <div className="px-2 py-1 rounded-xl border-3 border-primary bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
            <span className="text-sm font-bold text-primary text-center">
              {pkg.calls}
            </span>
          </div>
        </div>
      </div>

      {/* Call to Action Button */}
      <Button
        onClick={(e) => onContact(pkg.name, e)}
        className={`w-full mb-8 font-semibold py-3 rounded-lg transition-all duration-300 ${
          pkg.popular
            ? 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:scale-105'
            : 'bg-primary text-primary-foreground hover:bg-primary/90'
        }`}
      >
        Κλείσε Κλήση
      </Button>

      {/* Features List */}
      <div className="space-y-4">
        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
          Περιλαμβάνει:
        </p>
        <ul className="space-y-3">
          {pkg.features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-start space-x-3"
            >
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
));

PricingCard.displayName = 'PricingCard';

const MentoringPage = () => {
  const [selectedPackage, setSelectedPackage] = useState('3+1 Κλήσεις');
  const [direction, setDirection] = useState(0); // 0 = initial, 1 = next, -1 = previous
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const prevIndexRef = useRef(1); // Track previous index (starting at middle card index)

  const packages = [
    {
      id: 1,
      name: '1 Κλήση',
      title: 'Πρώτο Βήμα',
      calls: '1 κλήση',
      price: '€45',
      features: [
        '1 προσωπική κλήση mentoring',
        'Διάρκεια 45 λεπτών',
        'Εστιασμένη καθοδήγηση σε ένα ερώτημα',
      ],
      popular: false,
      showOffer: true,
      hideBadge: true,
    },
    {
      id: 2,
      name: '3+1 Κλήσεις',
      title: 'Ταχεία Ανάπτυξη',
      calls: '3+1 κλήσεις',
      price: '€135',
      originalPrice: '€180',
      offer: '25%',
      features: [
        '4 προσωπικές κλήσεις mentoring',
        'Διάρκεια 45 λεπτών ανά κλήση',
        'Εξειδικευμένη καθοδήγηση στις ανάγκες σου',
        'Ορισμός Πλάνου & Στόχων',
      ],
      popular: true,
      showOffer: true,
    },
    {
      id: 3,
      name: '5+2 Κλήσεις',
      title: 'Τελειοποίηση',
      calls: '5+2 κλήσεις',
      price: '€225',
      originalPrice: '€315',
      offer: '30%',
      features: [
        '7 προσωπικές κλήσεις mentoring',
        'Διάρκεια 45 λεπτών ανά κλήση',
        'Εκτεταμένη προσωπική καθοδήγηση',
        'Προσαρμοσμένο σχέδιο μάθησης',
        'Συνεχές Feedback',
        'Δημιουργία project roadmap',
      ],
      popular: false,
      showOffer: true,
    },
  ];

  const handleSelectPackage = (packageName) => {
    setSelectedPackage(packageName);
  };

  const handleContactMe = (packageName, e) => {
    e.stopPropagation();

    // Find the package details
    const selectedPkg = packages.find(pkg => pkg.name === packageName);
    
    // Build detailed message with all package information
  const packageDetails = `
  Package: ${selectedPkg.name}
  Price: ${selectedPkg.price}
  Duration: 45 Λεπτά

Features:
${selectedPkg.features.map(feature => `- ${feature}`).join('\n')}

---
I am interested in booking this mentoring package.
    `.trim();
    
    window.location.href = `mailto:contact@codegrow.gr?subject=Mentoring Request - ${packageName}&body=${encodeURIComponent(packageDetails)}`;
  };

  const currentIndex = packages.findIndex((pkg) => pkg.name === selectedPackage);

  const handlePrevious = () => {
    const prevIndex = currentIndex === 0 ? packages.length - 1 : currentIndex - 1;
    setDirection(prevIndex < currentIndex ? -1 : 1);
    prevIndexRef.current = prevIndex;
    setSelectedPackage(packages[prevIndex].name);
  };

  const handleNext = () => {
    const nextIndex = currentIndex === packages.length - 1 ? 0 : currentIndex + 1;
    setDirection(nextIndex > currentIndex ? 1 : -1);
    prevIndexRef.current = nextIndex;
    setSelectedPackage(packages[nextIndex].name);
  };

  // Touch/Swipe event handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.clientX || e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.clientX || e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeThreshold = 50; // Minimum swipe distance
    const difference = touchStartX.current - touchEndX.current;

    if (Math.abs(difference) > swipeThreshold) {
      if (difference > 0) {
        // Swiped left - show next card
        handleNext();
      } else {
        // Swiped right - show previous card
        handlePrevious();
      }
    }
  };

  // Add touch listeners on mount
  useEffect(() => {
    const cardContainer = document.querySelector('.mobile-card-container');
    
    if (cardContainer) {
      cardContainer.addEventListener('touchstart', handleTouchStart, false);
      cardContainer.addEventListener('touchend', handleTouchEnd, false);
      cardContainer.addEventListener('mousedown', handleTouchStart, false);
      cardContainer.addEventListener('mouseup', handleTouchEnd, false);

      return () => {
        cardContainer.removeEventListener('touchstart', handleTouchStart);
        cardContainer.removeEventListener('touchend', handleTouchEnd);
        cardContainer.removeEventListener('mousedown', handleTouchStart);
        cardContainer.removeEventListener('mouseup', handleTouchEnd);
      };
    }
  }, [currentIndex, packages]);

  return (
    <div className="bg-background dark:bg-gray-900 pt-4 pb-20 md:pt-6 md:pb-28">
      <Helmet>
        <title>Mentoring - CodeGrow</title>
        <meta
          name="description"
          content="Δές τα πακέτα mentoring με τον δημιουργό του CodeGrow. Προσωπική καθοδήγηση για την εξέλιξή σου ως προγραμματιστής."
        />
        <meta
          name="keywords"
          content="mentoring, καθοδήγηση, προγραμματισμός, codegrow, ελληνικά"
        />
        <link rel="canonical" href="https://codegrow.gr/mentoring" />
        <meta property="og:title" content="Mentoring Packages - CodeGrow" />
        <meta
          property="og:description"
          content="Λάβε προσωπική καθοδήγηση από τον δημιουργό του CodeGrow με επιλογές διαφόρων πακέτων."
        />
        <meta property="og:url" content="https://codegrow.gr/mentoring" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-8 pb-8 md:pb-12"
        >
          <MessageCircle className="h-16 w-16 gradient-text mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
            Mentoring <span className="gradient-text">Κλήσεις</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Λάβε προσωπική καθοδήγηση και επιτάχυνε την εξέλιξή σου ως προγραμματιστής. 
            Επίλεξε το πακέτο που ταιριάζει στις ανάγκες σου.
          </p>
        </motion.div>

        {/* Introductory Call Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20 rounded-2xl p-8 md:p-12 border border-primary/20 dark:border-primary/10 animated-border relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Δωρεάν Εισαγωγική Κλήση
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Ξεκίνησε με μια δωρεάν κλήση διάρκειας 30 λεπτών. Θα συζητήσουμε τους στόχους σου, τις προκλήσεις που αντιμετωπίζεις και θα εντοπίσουμε το πιο κατάλληλο πακέτο mentoring για σένα.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Κατανόηση των αναγκών σας</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Προσαρμοσμένες συστάσεις</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Καμία υποχρέωση δέσμευσης</span>
                </li>
              </ul>
              <div className="w-full md:w-auto flex md:block justify-center md:justify-start">
                <Button
                  className="bg-gradient-to-r from-primary to-accent text-white font-semibold px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300"
                  onClick={() => {
                    window.location.href = 'https://calendly.com/codegrow00/30min?hide_gdpr_banner=1';
                  }}
                >
                  Κλείσε Δωρεάν Κλήση
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-center"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl">
                  <div className="text-center">
                    <MessageCircle className="h-12 w-12 md:h-16 md:w-16 text-white mx-auto mb-2" />
                    <p className="text-white font-bold text-lg md:text-xl">30 λεπτά</p>
                    <p className="text-white/90 text-sm">Δωρεάν</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="mb-16">
          {/* Desktop View: 3 cards */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <PricingCard
                key={pkg.id}
                pkg={pkg}
                isSelected={selectedPackage === pkg.name}
                onSelect={handleSelectPackage}
                onContact={handleContactMe}
              />
            ))}
          </div>

          {/* Mobile View: Single card with selector buttons */}
          <div className="md:hidden space-y-6">
            {/* Package Selector Buttons */}
            <div className="flex gap-2 justify-center flex-wrap">
              {packages.map((pkg) => (
                <motion.button
                  key={pkg.id}
                  onClick={() => handleSelectPackage(pkg.name)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    selectedPackage === pkg.name
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {pkg.name}
                </motion.button>
              ))}
            </div>

            {/* Single Card Display with Smooth Transitions */}
            <div 
              className="mobile-card-container"
            >
              {packages.map((pkg) => (
                <motion.div
                  key={pkg.id}
                  animate={{
                    opacity: selectedPackage === pkg.name ? 1 : 0,
                    x: selectedPackage === pkg.name ? 0 : direction > 0 ? 100 : -100,
                    pointerEvents: selectedPackage === pkg.name ? 'auto' : 'none',
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className={selectedPackage === pkg.name ? 'block' : 'hidden'}
                >
                  <PricingCard
                    pkg={pkg}
                    isSelected={true}
                    onSelect={handleSelectPackage}
                    onContact={handleContactMe}
                    isMobile={true}
                  />
                </motion.div>
              ))}
            </div>

            {/* Slider Controller */}
            <motion.div 
              className="flex items-center justify-center gap-4 mt-8"
              layout
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Previous Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrevious}
                className="p-2 rounded-full bg-primary/20 hover:bg-primary/30 dark:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
                aria-label="Previous package"
              >
                <ChevronLeft className="h-5 w-5 text-primary" />
              </motion.button>

              {/* Dot Indicators */}
              <div className="flex gap-2">
                {packages.map((pkg, idx) => (
                  <motion.button
                    key={pkg.id}
                    onClick={() => handleSelectPackage(pkg.name)}
                    animate={{
                      width: selectedPackage === pkg.name ? 32 : 12,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`h-3 rounded-full transition-all ${
                      selectedPackage === pkg.name
                        ? 'bg-primary'
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Select ${pkg.name}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="p-2 rounded-full bg-primary/20 hover:bg-primary/30 dark:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
                aria-label="Next package"
              >
                <ChevronRight className="h-5 w-5 text-primary" />
              </motion.button>
            </motion.div>

            {/* Scroll indicator */}
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
              ← Κύλισε για να δεις όλα τα πακέτα →
            </p>
          </div>
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-primary/5 dark:bg-primary/10 rounded-xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Πώς λειτουργεί;
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: '1',
                title: 'Επίλεξε Πακέτο',
                description: 'Επίλεξε το πακέτο mentoring που ταιριάζει καλύτερα στις ανάγκες σου.',
              },
              {
                number: '2',
                title: 'Κλείσε Κλήση',
                description: 'Συμφώνησε σε ημερομηνία και ώρα που σας εξυπηρετούν και στους δύο.',
              },
              {
                number: '3',
                title: 'Ξεκίνησε τη Μάθηση',
                description: 'Λάβε personalized guidance και αναπτύξου ως προγραμματιστής.',
              },
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-bold mb-4">
                  {step.number}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {step.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MentoringPage;
