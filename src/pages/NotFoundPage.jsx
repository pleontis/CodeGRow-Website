import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-150px)] bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 text-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 120,
          damping: 10,
        }}
      >
        <AlertTriangle className="h-24 w-24 md:h-32 md:w-32 text-yellow-500 mx-auto mb-6" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-5xl md:text-7xl font-extrabold text-gray-800 dark:text-white mb-4"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2"
      >
        Ωχ! Η σελίδα δεν βρέθηκε.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-md md:text-lg text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-8"
      >
        Λυπούμαστε, αλλά η σελίδα που αναζητάτε δεν υπάρχει, μπορεί να έχει αφαιρεθεί ή το όνομά της να έχει αλλάξει.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
          <Link to="/">
            <Home className="mr-2 h-5 w-5" />
            Επιστροφή στην Αρχική
          </Link>
        </Button>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%;"}}>
          <path d="M-0.00,49.85 C150.00,149.60 349.20,-49.85 500.00,49.85 L500.00,149.60 L-0.00,149.60 Z" style={{stroke: "none", fill: "rgba(107, 114, 128, 0.1)"}}></path>
        </svg>
      </div>
    </div>
  );
};

export default NotFoundPage;