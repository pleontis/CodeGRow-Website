
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, Target, Heart, Code, Youtube as YoutubeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import imgUrl from '../img/IMG_4547.png';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  const discordLogoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/07152c0c-650e-4780-a58d-0ba00c109e3d/ccb9eac3935f7e3231c0840b98d1b5df.png";

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-20 md:py-28">
      <Helmet>
  <title>Σχετικά με το CodeGrow</title>
  <meta
    name="description"
    content="Μάθε περισσότερα για την CodeGrow, την ελληνική πλατφόρμα που διδάσκει προγραμματισμό σε όλους, με ποιοτικό υλικό στα ελληνικά."
  />
  <meta
    name="keywords"
    content="codegrow ποιος ειναι, codegrow, ελληνική εκμάθηση προγραμματισμού, αποστολή codegrow, ελληνικά tutorials, προγραμματισμός, ελληνική κοινότητα"
  />
  <link rel="canonical" href="https://codegrow.gr/about" />
  <meta property="og:title" content="Σχετικά με το CodeGrow, η Ιστορία μου και ο Στόχος μου." />
  <meta property="og:description" content="Δες πώς ξεκίνησε το CodeGrow, ποιος είμαι και πώς βοηθάω την ελληνική κοινότητα να μάθει προγραμματισμό." />
  <meta property="og:image" content="https://codegrow.gr/img/og_image.png" />
  <meta property="og:url" content="https://codegrow.gr/about" />
  <meta property="og:type" content="website" />
  <meta name="twitter:title" content="Σχετικά με το CodeGrow, η Ιστορία μου" />
  <meta name="twitter:description" content="Μάθε πως γεννήθηκε το CodeGrow. Ελληνικά μαθήματα προγραμματισμού για όλους." />
  <meta name="twitter:image" content="https://codegrow.gr/img/og_image.png" />
  <meta name="twitter:card" content="summary_large_image" />
</Helmet>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <Users className="h-16 w-16 gradient-text mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
            Σχετικά με <span className="gradient-text">Εμένα</span> και το CodeGRow
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Μαθαίνω και μοιράζομαι προγραμματισμό στα ελληνικά. Η αποστολή μου είναι να κάνω την εκμάθηση του κώδικα προσιτή και συναρπαστική για όλους.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <img  
              className="w-full h-auto rounded-xl shadow-2xl object-cover"
              alt="Panagiotis Leontis working on CodeGRow content"
              src={imgUrl} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="text-gray-700 dark:text-gray-200"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Η Ιστορία μου</h2>
            <p className="text-md mb-4 leading-relaxed">
              Το CodeGRow ξεκίνησε από μια απλή ιδέα: να δημιουργήσω έναν χώρο όπου οι Έλληνες, ανεξαρτήτως εμπειρίας, μπορούν να μάθουν προγραμματισμό με σαφήνεια και υποστήριξη. Είμαι ένας προγραμματιστής που πιστεύει στη δύναμη της γνώσης και της κοινότητας.
            </p>
            <p className="text-md mb-4 leading-relaxed">
            Ως φοιτητής Πληροφορικής, ήρθα αντιμέτωπος με την έλλειψη δομημένου, ποιοτικού και ταυτόχρονα κατανοητού υλικού στα ελληνικά. Πολλά από τα διαθέσιμα μέσα ήταν αποσπασματικά, παρωχημένα ή πολύπλοκα για τους νέους στον χώρο. Έτσι γεννήθηκε η ιδέα του CodeGRow, ως η πρώτη σπίθα σε μια προσπάθεια να καλυφθεί αυτό το κενό.
            </p>
            <p className="text-md leading-relaxed">
              Μέσα από το κανάλι μου στο YouTube, τις playlists, το βιβλίο και τους πόρους που προσφέρω, στοχεύω να απομυθοποιήσω τον προγραμματισμό και να εμπνεύσω την επόμενη γενιά Ελλήνων developers.
            </p>
          </motion.div>
        </div>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Οι <span className="gradient-text">Αξίες</span> μου
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Zap className="h-8 w-8 text-yellow-500" />, title: "Προσβασιμότητα", description: "Πιστεύω ότι η εκπαίδευση στον προγραμματισμό πρέπει να είναι διαθέσιμη σε όλους." },
              { icon: <Target className="h-8 w-8 text-green-500" />, title: "Ποιότητα", description: "Δεσμεύομαι να παρέχω υψηλής ποιότητας, ακριβές και ενημερωμένο περιεχόμενο." },
              { icon: <Heart className="h-8 w-8 text-red-500" />, title: "Κοινότητα", description: "Ενθαρρύνω τη συνεργασία, την υποστήριξη και την ανταλλαγή γνώσεων." },
              { icon: <Code className="h-8 w-8 text-blue-500" />, title: "Πάθος για Κώδικα", description: "Αγαπώ τον προγραμματισμό και θέλω να μοιραστώ τον ενθουσιασμό μου." },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center card-hover"
              >
                <div className="p-3 bg-primary/10 rounded-full inline-block mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="bg-gradient-to-r from-[hsl(var(--discord))] to-[hsl(var(--discord)/0.85)] text-discord-foreground p-8 md:p-12 rounded-xl shadow-xl text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Γίνε Μέλος της Κοινότητάς μου</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Είτε είσαι αρχάριος που κάνει τα πρώτα του βήματα, είτε έμπειρος προγραμματιστής που θέλει να μοιραστεί τις γνώσεις του, υπάρχει θέση για σένα στην κοινότητά μου στο Discord!
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center">

          <Button
            asChild
            size="lg"
            className="bg-white hover:bg-gray-100 text-[hsl(var(--discord))] font-semibold px-8 py-3 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105"
          >
            <a
              target='_blank'
              href="https://discord.gg/SGqKSxCTUD"
              className="inline-flex items-center justify-center"
            >
              <i className="fa-brands fa-discord w-5 mr-2"></i>
              Μπες στον Discord Server
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105"
          >
            <a
              target="_blank"
              href="https://www.youtube.com/@CodeGRrow"
              className="inline-flex items-center"
            >
              <YoutubeIcon className="mr-2 h-5 w-5" />
              Επισκέψου το YouTube
            </a>
          </Button>

</div>

        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
