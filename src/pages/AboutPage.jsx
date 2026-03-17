import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, Target, Heart, Code, Youtube as YoutubeIcon, GraduationCap, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import videoUrl from '../videos/website_promo_horizontal.mp4';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Toggle video play/pause
  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setPlaying(!playing);
  };

  // Update current time for slider and reset at end
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;

    const time = videoRef.current.currentTime;
    setCurrentTime(time);

    if (time >= videoRef.current.duration) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setPlaying(false);
      setCurrentTime(0);
    }
  };

  // Slider scrubbing
  const handleSliderChange = (e) => {
    if (!videoRef.current) return;

    const time = parseFloat(e.target.value);
    videoRef.current.currentTime = time;
    setCurrentTime(time);
  };

  // Get video duration
  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12 md:py-16">
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
      </Helmet>

      <div className="container mx-auto px-4">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
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

        {/* STORY + VIDEO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="relative flex flex-col items-center"
          >
            <div
              className="
                relative
                rounded-2xl
                overflow-hidden
                shadow-2xl
                border
                border-gray-200
                dark:border-gray-700
                hover:shadow-[0_0_40px_rgba(99,102,241,0.35)]
                transition-all
                duration-500
                group
                max-h-[520px]
              "
            >
              <video
                ref={videoRef}
                src={videoUrl}
                className="
                  h-full
                  w-auto
                  object-contain
                  transition-transform
                  duration-500
                  group-hover:scale-[1.02]
                "
                playsInline
                preload="metadata"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>

              {/* Play/Pause Button */}
              <button
                onClick={toggleVideo}
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300
                  ${playing ? 'opacity-0 group-hover:opacity-50' : 'opacity-100'}
                `}
              >
                <div
                  className="
                    flex items-center justify-center
                    w-16 h-16
                    rounded-full
                    bg-white/90 dark:bg-gray-900/80
                    backdrop-blur
                    shadow-xl
                    transition-all duration-300
                    group-hover:scale-110
                  "
                >
                  {playing ? (
                    <Pause className="w-6 h-6 text-gray-900 dark:text-white" />
                  ) : (
                    <Play className="w-6 h-6 text-gray-900 dark:text-white ml-1" />
                  )}
                </div>
              </button>
            </div>

            {/* Video Slider */}
            <input
              type="range"
              min={0}
              max={duration}
              value={currentTime}
              step="0.01"
              onChange={handleSliderChange}
              className="mt-4 w-full md:w-96 h-2 bg-gray-300 dark:bg-gray-400 rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </motion.div>

          {/* STORY TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="text-gray-700 dark:text-gray-200"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Η Ιστορία μου</h2>
            <p className="text-md mb-4 leading-relaxed">
              Το CodeGRow ξεκίνησε από μια απλή ιδέα: να δημιουργήσω έναν χώρο όπου οι Έλληνες, ανεξαρτήτως εμπειρίας,
              μπορούν να μάθουν προγραμματισμό με σαφήνεια και υποστήριξη. Είμαι ένας προγραμματιστής που πιστεύει στη
              δύναμη της γνώσης και της κοινότητας.
            </p>
            <p className="text-md mb-4 leading-relaxed">
              Ως φοιτητής Πληροφορικής, ήρθα αντιμέτωπος με την έλλειψη δομημένου, ποιοτικού και ταυτόχρονα κατανοητού
              υλικού στα ελληνικά. Πολλά από τα διαθέσιμα μέσα ήταν αποσπασματικά, παρωχημένα ή πολύπλοκα για τους
              νέους στον χώρο. Έτσι γεννήθηκε η ιδέα του CodeGRow, ως η πρώτη σπίθα σε μια προσπάθεια να καλυφθεί αυτό το κενό.
            </p>
            <p className="text-md leading-relaxed">
              Μέσα από το κανάλι μου στο YouTube, τις playlists, το βιβλίο και τους πόρους που προσφέρω,
              στοχεύω να απομυθοποιήσω τον προγραμματισμό και να εμπνεύσω την επόμενη γενιά Ελλήνων developers.
            </p>
          </motion.div>
        </div>

        {/* COMMUNITY SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          className="
            bg-white dark:bg-gray-800
            border-2 border-primary/30
            hover:border-primary
            p-8 md:p-12 rounded-xl
            shadow-lg
            text-center
            transition-all duration-300
            hover:shadow-[0_0_25px_hsl(var(--primary)/0.25)]
            hover:-translate-y-1
          "
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Γίνε Μέλος της Κοινότητας
          </h2>

          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Είτε ξεκινάς τώρα είτε έχεις εμπειρία, μπορείς να μάθεις, να ρωτήσεις και να εξελιχθείς μαζί μας.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
            >
              <Link to="/mentoring" className="inline-flex items-center">
                <GraduationCap className="mr-2 h-5 w-5" />
                Mentoring
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-300 hover:scale-105"
            >
              <a target="_blank" href="https://discord.gg/SGqKSxCTUD" className="inline-flex items-center justify-center">
                <i className="fa-brands fa-discord mr-2 h-5 w-5"></i>
                Discord Community
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
            >
              <a target="_blank" href="https://www.youtube.com/@CodeGRrow" className="inline-flex items-center">
                <YoutubeIcon className="mr-2 h-5 w-5" />
                YouTube
              </a>
            </Button>
          </div>
        </motion.div>

        {/* VALUES SECTION */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          className="mt-20 mb-5"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Οι <span className="gradient-text">Αξίες</span> μου
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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
                  visible: { opacity: 1, y: 0 },
                }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center flex flex-col items-center"
              >
                <div className="p-3 bg-primary/10 rounded-full flex items-center justify-center mb-4 w-fit">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage;