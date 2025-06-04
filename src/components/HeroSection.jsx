
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Youtube, BookOpen, ListVideo } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'


const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(195,60%,35%))] to-[hsl(var(--foreground))] text-white">
      {/* Animated shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/30"
            style={{
              width: Math.random() * 150 + 40,
              height: Math.random() * 150 + 40,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: `blur(${Math.random() * 5 + 2}px)`,
            }}
            animate={{
              x: [0, Math.random() * 80 - 40, 0],
              y: [0, Math.random() * 80 - 40, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 flex items-center justify-center space-x-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"
          >
            <Code className="h-6 w-6 text-blue-600 opacity-50" />
            
            <span className="text-sm font-medium text-white"><Typewriter
        words={['Μάθετε προγραμματισμό στα ελληνικά']}
        loop={Infinity}
        cursor
        cursorStyle="|"
        typeSpeed={120}
        deleteSpeed={120}
        delaySpeed={1000}
      /></span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white"
          >
            Καλώς ήρθατε στο CodeGRow
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-100 max-w-3xl mb-10"
          >
            Μαθαίνουμε προγραμματισμό με απλό και κατανοητό τρόπο στα ελληνικά.
            Ανακάλυψε τις playlist μου, το βιβλίο μου και γίνε μέλος της κοινότητάς μας!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Button asChild size="lg" className="bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent)/0.8)] text-[hsl(var(--primary-foreground))] font-semibold px-8 py-3 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
              <Link to="/playlists">
                <ListVideo className="mr-2 h-5 w-5" />
                Δείτε τις Playlists
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-black hover:bg-white/10 hover:text-white font-semibold px-8 py-3 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 dark:text-white dark:hover:text-black text-black">
              <Link to="/book">
                <BookOpen className="mr-2 h-5 w-5" />
                Το Βιβλίο μου
              </Link>
            </Button>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-12 flex items-center justify-center"
          >
            <a
              href="https://www.youtube.com/@CodeGRrow"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 dark:text-gray-500 dark:hover:text-black text-gray-100 hover:text-black hover:scale-105 hover:drop-shadow-lg dark:hover:drop-shadow-lg transition-all duration-500 ease-in-out text-sm"
              >
              <Youtube className="h-6 w-6 dark:hover:text-red-500  hover:text-red-500" />
              <span>Δες το κανάλι μου στο YouTube</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
