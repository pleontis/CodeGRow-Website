import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Lightbulb, BookOpen, Users, PlayCircle } from 'lucide-react';
import pythonURL from '../img/python.jpg';
import jsURL from '../img/js.jpg';
import javaURL from '../img/java.png';
import bookURL from '../img/book.png';


const FeatureCard = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-card dark:bg-card p-6 rounded-xl shadow-lg card-hover flex flex-col items-center text-center"
  >
    <div className="p-4 bg-primary/10 rounded-full mb-4 text-primary">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-card-foreground dark:text-card-foreground">{title}</h3>
    <p className="text-muted-foreground dark:text-muted-foreground text-sm">{description}</p>
  </motion.div>
);

const HomePage = () => {
  const playlists = [
    { id: "python", title: "Εισαγωγή στην Python", description: "Μάθετε τα βασικά της Python, μιας από τις πιο δημοφιλείς γλώσσες προγραμματισμού.", imageText: "Python Logo",img: pythonURL},
    { id: "java", title: "Εισαγωγή στη Java", description: "Ανακαλύψτε τη δύναμη της Java και την χρήση της στις δομές δεδομένων.", imageText: "Java Logo",img:javaURL},
    { id: "javascript", title: "JavaScript για Αρχάριους", description: "Ξεκινήστε το ταξίδι σας στον κόσμο της JavaScript και του web development.", imageText: "JavaScript Logo",img:jsURL},
  ];

  return (
    <div className="bg-background dark:bg-background">
      <HeroSection />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground dark:text-foreground"
          >
            Τι θα βρεις στο <span className="gradient-text">CodeGRow</span>;
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground dark:text-muted-foreground text-center max-w-2xl mx-auto mb-12"
          >
            Στοχεύω στην παροχή ποιοτικού εκπαιδευτικού υλικού για προγραμματισμό, προσαρμοσμένο στις ανάγκες της ελληνικής κοινότητας.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Lightbulb className="h-8 w-8" />}
              title="Κατανοητά Μαθήματα"
              description="Εξηγώ σύνθετες έννοιες με απλό και πρακτικό τρόπο, ιδανικό για αρχάριους."
              delay={0.4}
            />
            <FeatureCard
              icon={<BookOpen className="h-8 w-8" />}
              title="Πλούσιο Υλικό"
              description="Προσφέρω video tutorials, video με συμβουλές, και ένα ολοκληρωμένο βιβλίο για να ενισχύσετε τις γνώσεις σας."
              delay={0.5}
            />
            <FeatureCard
              icon={<Users className="h-8 w-8" />}
              title="Ενεργή Κοινότητα"
              description="Γίνε μέλος μιας υποστηρικτικής κοινότητας προγραμματιστών στην Ελλάδα."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-[hsl(var(--primary)/0.9)] via-[hsl(var(--primary))] to-[hsl(var(--accent))] text-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-foreground"
          >
            Δημοφιλείς Playlists
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {playlists.slice(0, 3).map((playlist, index) => (
              <motion.div
                key={playlist.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="playlist-card bg-[hsl(var(--card)/0.5)] dark:bg-[hsl(var(--card)/0.8)] backdrop-blur-md rounded-lg shadow-xl overflow-hidden card-hover"
              >
                <div className="p-6 relative z-10"> {/* Added z-index here */}
                  <img 
                    className="w-full h-40 object-cover rounded-md mb-4 opacity-90"
                    alt={playlist.title}
                   src={playlist.img} />
                  <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--accent))]">{playlist.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{playlist.description}</p>
                  <Button asChild variant="outline" className="border-[hsl(var(--accent))] text-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))] hover:text-primary-foreground w-full">
                    <Link to={`/playlists/${playlist.id}`}>
                      <PlayCircle className="mr-2 h-5 w-5" />
                      Δες την Playlist
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button asChild size="lg" className="bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent)/0.9)] text-primary-foreground font-semibold px-8 py-3 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
              <Link to="/playlists">
                Βρες όλες τις Playlists
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-card dark:bg-card p-8 md:p-12 rounded-xl shadow-xl book-gradient text-white flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">Το Βιβλίο μου είναι εδώ!</h2>
              <p className="text-lg mb-6 text-gray-100 dark:text-gray-200">
                Ένα ολοκληρωμένο εγχειρίδιο για να ξεκινήσετε και να εμβαθύνετε στον προγραμματισμό.
                Γραμμένο στα ελληνικά, με πρακτικά παραδείγματα και ασκήσεις.
              </p>
              <Button asChild size="lg" variant="secondary" className="bg-white text-[hsl(var(--primary))] hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
                <Link to="/book">
                  Μάθε Περισσότερα
                </Link>
              </Button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:w-1/3"
            >
               <img 
                className="w-full h-auto rounded-lg shadow-2xl"
                alt="Εξώφυλλο βιβλίου CodeGRow"
                src={bookURL} />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;