
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, CheckCircle, BookOpen, Star } from 'lucide-react';
import bookURL from '../img/book.png';

const BookPage = () => {

  const features = [
    { icon: <CheckCircle className="h-6 w-6 text-green-500" />, text: "Ολοκληρωμένη κάλυψη βασικών εννοιών" },
    { icon: <CheckCircle className="h-6 w-6 text-green-500" />, text: "Πρακτικά παραδείγματα και ασκήσεις" },
    { icon: <CheckCircle className="h-6 w-6 text-green-500" />, text: "Γραμμένο στα ελληνικά, για εύκολη κατανόηση" },
    { icon: <CheckCircle className="h-6 w-6 text-green-500" />, text: "Κατάλληλο για αρχάριους και μεσαίου επιπέδου" },
  ];

  const testimonials = [
    { name: "Άννα Π.", quote: "Το βιβλίο με βοήθησε να καταλάβω επιτέλους τις βασικές αρχές του προγραμματισμού. Το συστήνω ανεπιφύλακτα!", avatarText: "Άννα Π." },
    { name: "Γιώργος Κ.", quote: "Εξαιρετική δουλειά! Πολύ καλή δομή και σαφείς εξηγήσεις. Το καλύτερο ελληνικό βιβλίο που έχω διαβάσει για το θέμα.", avatarText: "Γιώργος Κ." },
    { name: "Μαρία Λ.", quote: "Πολύ χρήσιμο για όποιον θέλει να ξεκινήσει το ταξίδι του στον προγραμματισμό. Τα παραδείγματα είναι πολύ βοηθητικά.", avatarText: "Μαρία Λ." },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <BookOpen className="h-16 w-16 gradient-text mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
            Το Βιβλίο <span className="gradient-text">CodeGRow</span> για Προγραμματισμό
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ένας πλήρης οδηγός για να ξεκινήσεις και να εμβαθύνεις στον κόσμο του προγραμματισμού, γραμμένος στα ελληνικά.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
  >
    <div className="w-full max-w-md mx-auto aspect-[3/4] overflow-hidden rounded-lg shadow-2xl relative">
      <img 
        className="absolute top-[-11%] left-0 w-full h-[125%] object-cover transform transition-all duration-500 hover:scale-105"
        alt="Εξώφυλλο Βιβλίου Προγραμματισμού CodeGRow"
        src={bookURL}
      />
    </div>
  </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="text-gray-700 dark:text-gray-200"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Τι θα μάθεις από αυτό το βιβλίο;</h2>
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  {feature.icon}
                  <span className="ml-3 text-md">{feature.text}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg mb-4">
              Είτε είσαι εντελώς αρχάριος είτε έχεις κάποιες βασικές γνώσεις, αυτό το βιβλίο θα σε καθοδηγήσει βήμα-βήμα.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-10 py-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                <Download className="mr-2 h-5 w-5" />
                Αγόρασε το Βιβλίο ( σύντομα διαθέσιμο )
              </Button>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">Ηλεκτρονική μορφή (PDF) και έντυπη έκδοση.</p>
            </div>
          </motion.div>
        </div>

        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          className="py-16 bg-white dark:bg-gray-800 rounded-xl shadow-xl"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Τι λένε οι <span className="gradient-text">αναγνώστες</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg font-semibold mr-4">
                       {testimonial.avatarText.substring(0,1)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</p>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm italic flex-grow">"{testimonial.quote}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Έτοιμος να ξεκινήσεις;</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto">
            Επένδυσε στις γνώσεις σου και απόκτησε τις δεξιότητες που χρειάζεσαι για τον σύγχρονο κόσμο της τεχνολογίας. Γίνε μέλος της κοινότητάς μου στο Discord!
          </p>
          <Button
            size="lg"
            variant="discord"
            className="font-semibold px-10 py-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 items-center justify-center"
          >
          <a target="_blank" href="https://discord.gg/SGqKSxCTUD" className="inline-flex items-center">
          <i className="fa-brands fa-discord w-5 mr-2"></i>
            Μπες στον Discord Server
          </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default BookPage;
