import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import StatsSection from "@/components/StatsSection";
import BookSliderSection from "@/components/BookSliderSection";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Lightbulb, BookOpen, Users, PlayCircle } from 'lucide-react';

import pythonURL from '../img/python.jpg';
import jsURL from '../img/js.jpg';
import javaURL from '../img/java.png';

const FeatureCard = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-card p-6 rounded-xl shadow-lg card-hover flex flex-col items-center text-center"
  >
    <div className="p-4 bg-primary/10 rounded-full mb-4 text-primary">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </motion.div>
);

const HomePage = () => {
  const playlists = [
    {
      id: "python",
      title: "Εισαγωγή στην Python",
      description: "Μάθετε τα βασικά της Python, μιας από τις πιο δημοφιλείς γλώσσες.",
      img: pythonURL,
    },
    {
      id: "java",
      title: "Εισαγωγή στη Java",
      description: "Ανακαλύψτε τη δύναμη της Java και τη χρήση της στις δομές δεδομένων.",
      img: javaURL,
    },
    {
      id: "javascript",
      title: "JavaScript για Αρχάριους",
      description: "Ξεκινήστε το ταξίδι σας στον κόσμο του Web Development με την JavaScript.",
      img: jsURL,
    },
  ];

  return (
    <div className="bg-background">
      <Helmet>
        <title>CodeGrow - Μάθε Προγραμματισμό στα Ελληνικά</title>
        <meta
          name="description"
          content="Μάθε προγραμματισμό στα ελληνικά με Python, JavaScript, Java και άλλα."
        />
        <link rel="canonical" href="https://codegrow.gr/" />
      </Helmet>

      <HeroSection />

      {/* FEATURES */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Τι θα βρεις στο <span className="gradient-text">CodeGrow</span>;
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Lightbulb className="h-8 w-8" />}
              title="Κατανοητά Μαθήματα"
              description="Απλές και πρακτικές εξηγήσεις για αρχάριους."
              delay={0.2}
            />
            <FeatureCard
              icon={<BookOpen className="h-8 w-8" />}
              title="Πλούσιο Υλικό"
              description="Tutorials, courses και βιβλία."
              delay={0.3}
            />
            <FeatureCard
              icon={<Users className="h-8 w-8" />}
              title="Ενεργή Κοινότητα"
              description="Μέλη που μαθαίνουν και εξελίσσονται μαζί."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* PLAYLISTS */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Δημοφιλείς Playlists
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {playlists.map((playlist, index) => (
              <motion.div
                key={playlist.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card/70 backdrop-blur rounded-xl shadow-xl p-6"
              >
                <img
                  src={playlist.img}
                  alt={playlist.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                  {playlist.title}
                </h3>
                <p className="text-sm mb-4  text-black dark:text-white">{playlist.description}</p>
              
                <Button
                  asChild
                  variant="outline"
                  className="w-full 
                            text-primary hover:text-white border-primary dark:text-primary"
                >
                  <Link to={`/playlists/${playlist.id}`}>
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Δες την Playlist
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/*PRODUCTS SLIDER*/}
      <BookSliderSection />

      {/* STATS */}
      <StatsSection />
    </div>
  );
};

export default HomePage;
