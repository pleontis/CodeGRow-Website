
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { PlayCircle, List, ArrowLeft, Clock, CheckSquare, Youtube } from 'lucide-react';
import cppLink from "../img/cpp.png";
import cLink from "../img/c.png";
import mongoLink from "../img/mongodb.png"
import pythonLink from "../img/pythonLogo.png";
import javaLink from "../img/javaLogo.png";
import webDevLink from "../img/webDev.png";
import jsLink from "../img/jsLogo.png";

const playlistsData = {
  python: { 
    title: "Εκμάθηση Python", 
    description: "Ολοκληρωμένη σειρά 95 βίντεο για να μάθεις Python από την αρχή μέχρι και πιο προχωρημένες έννοιες.",
    category: "Python", 
    level: "Όλα τα επίπεδα", 
    videosCount: 95,
    videos: [
      { id: 1, title: "Εισαγωγή | Hello World", duration: "05:00", completed: false, youtubeLink: "https://youtu.be/zBb4xmVxFx8?si=BhXYR7bCvYdZKTgG"},
      { id: 2, title: "Μάθε τα πάντα για τις Μεταβλητές", duration: "18:00", completed: false, youtubeLink: "https://youtu.be/8W0Y2F9qC2U?si=Q6bRGLBlIjfNqOHF" },
    ],
    imageText: "Abstract Python code visualization",
    imageUrl: pythonLink,
    longDescription: "Αυτή η ολοκληρωμένη σειρά 95 βίντεο καλύπτει τα πάντα για την Python, από τις βασικές έννοιες όπως μεταβλητές, τύπους δεδομένων και δομές ελέγχου, μέχρι πιο προχωρημένα θέματα όπως αντικειμενοστραφή προγραμματισμό, διαχείριση αρχείων, βιβλιοθήκες και πολλά άλλα. Ιδανική για αρχάριους αλλά και για όσους θέλουν να εμβαθύνουν τις γνώσεις τους.",
    playlistYoutubeLink: "https://youtube.com/playlist?list=PLLazhr7ULbho-a-L6uZ9v_qxNQGc4aM8F&si=t53lKmDYaVtlBmwI"
  },
  "html-css": { 
    title: "HTML & CSS", 
    description: "Μάθε τα θεμέλια του Web Development με 37 βίντεο για HTML και CSS.",
    category: "Web Development", 
    level: "Αρχάριοι", 
    videosCount: 37,
    videos: [
        { id: 1, title: "Εισαγωγή στην HTML !", duration: "13:30", completed: false, youtubeLink: "https://youtu.be/Y-Gu2Ni4su8?si=-AOsOOYJQJW0tifU" },
        { id: 14, title: "Εισαγωγή στη CSS !", duration: "12:00", completed: false, youtubeLink: "https://youtu.be/JvNfkPfVgmM?si=izeQ5K9Ooa8A8vfw" },

    ],
    imageText: "Web design concept with HTML and CSS elements",
    imageUrl: webDevLink,
    longDescription: "Σε αυτή τη σειρά 37 βίντεο, θα μάθεις πώς να δομείς ιστοσελίδες με HTML και να τις μορφοποιείς με CSS. Καλύπτονται όλες οι βασικές ετικέτες HTML, selectors CSS, το box model, flexbox, grid και responsive design αρχές για να δημιουργείς σύγχρονες και ελκυστικές ιστοσελίδες.",
    playlistYoutubeLink: "https://youtube.com/playlist?list=PLLazhr7ULbhrjjZxVEAox1k1mTfYxMIZA&si=XggC-P8G_6oGitpp"
  },
  java: { 
    title: "Εκμάθηση Java", 
    description: "Πλήρης σειρά 76 βίντεο για την εκμάθηση της γλώσσας προγραμματισμού Java.", 
    category: "Java", 
    level: "Όλα τα επίπεδα", 
    videosCount: 76,
     videos: [
        { id: 1, title: "Εισαγωγή στην Java !", duration: "15:30", completed: false, youtubeLink: "https://youtu.be/YxwvbKmKvNI?si=AuaMXNGWxzLCExL5" },
        { id: 2, title: "Μεταβλητές !", duration: "11:00", completed: false, youtubeLink: "https://youtu.be/V4w5exdgP0c?si=E8yCn7EyJBjTesvj" },
        { id: 26, title: "Αντικειμενοστραφής Προγραμματισμός", duration: "09:00", completed: false, youtubeLink: "https://youtu.be/2XyZMS_T_xc?si=cAcPGHbq68HU9nYv"},
      ],
    imageText: "Java code on a dark background with coffee cup icon",
    imageUrl: javaLink,
    longDescription: "Αυτή η εκτενής σειρά 76 βίντεο σε καθοδηγεί στην εκμάθηση της Java. Ξεκινώντας από τα βασικά (μεταβλητές, τελεστές, έλεγχος ροής), προχωρά σε αντικειμενοστραφή προγραμματισμό (κλάσεις, αντικείμενα, κληρονομικότητα, πολυμορφισμός), διαχείριση εξαιρέσεων, συλλογές (collections framework) και άλλα σημαντικά θέματα της Java.",
    playlistYoutubeLink: "https://youtube.com/playlist?list=PLLazhr7ULbhoK6OJyZhPU1gXgQeGGW6vC&si=z7y_KY3Jl2o2ULVF"
  },
  c: { 
    title: "Εκμάθηση C", 
    description: "Σειρά 23 βίντεο για να κατανοήσεις τις βασικές αρχές της γλώσσας προγραμματισμού C.", 
    category: "C", 
    level: "Αρχάριοι/Μέσο", 
    videosCount: 23,
    videos: [ 
      { id: 1, title: "Εισαγωγή | Hello World", duration: "04:00", completed: false, youtubeLink: "https://youtu.be/6FV9D27_xvc?si=ASKvc3trVLjuy7DF"},
      { id: 2, title: "Μάθε τα πάντα για τις Μεταβλητές", duration: "10:30", completed: false, youtubeLink:"https://youtu.be/_1ijs1cDJf8?si=dsT9Ff7dYJ9UYZAQ" },],
    imageText: "C programming code with a metallic texture",
    imageUrl: cLink,
    longDescription: "Μέσα από 23 βίντεο, αυτή η σειρά σε εισάγει στον κόσμο της C. Θα μάθεις για δείκτες (pointers), διαχείριση μνήμης, δομές, αρχεία και τις θεμελιώδεις έννοιες που κάνουν τη C μια ισχυρή και διαχρονική γλώσσα προγραμματισμού.",
    playlistYoutubeLink: "https://youtube.com/playlist?list=PLLazhr7ULbhp24SFf7DXTaX_xo4e9kxbO&si=i575A72TUlAe29S6"
  },
  mongodb: { 
    title: "Εκμάθηση MongoDB", 
    description: "Μάθε τα πάντα για τη NoSQL βάση δεδομένων MongoDB μέσα από 12 αναλυτικά βίντεο.", 
    category: "Databases", 
    level: "Μέσο", 
    videosCount: 12,
    videos: [
      { id: 1, title: "Εισαγωγή & Εγκατάσταση", duration: "12:30", completed: false, youtubeLink: "https://youtu.be/duw5oCjgnag?si=KVXAAJKYFJ2c7bu6"},
    ],
    imageText: "MongoDB logo with data streams in background",
    imageUrl: mongoLink,
    longDescription: "Αυτή η σειρά 12 βίντεο εστιάζει στη MongoDB, μια δημοφιλή NoSQL βάση δεδομένων. Θα μάθεις για τα έγγραφα (documents), τις συλλογές (collections), τις βασικές εντολές CRUD (Create, Read, Update, Delete), indexing, aggregation framework και πώς να χρησιμοποιείς τη MongoDB στις εφαρμογές σου.",
    playlistYoutubeLink: "https://youtube.com/playlist?list=PLLazhr7ULbho40ZbcogPRyPzlvIYaV8x-&si=EKSVNUNDCaZCh3EN"
  },
  "c++":{
    title: "Εκμάθηση C++",
    description: "Σειρά 40 βίντεο για να κατανοήσεις μια απο τις πιο ισχυρές γλώσσες προγραμματισμού, την C++.", 
    category: "C++", 
    level: "Αρχάριοι/Μέσο", 
    videosCount: 40, 
    videos: [
      { id: 1, title: "Εισαγωγή | Hello World", duration: "15:30", completed: false, youtubeLink: "https://youtu.be/ewJETyqNxtI?si=aNw3kDXSo2Mv03Np"},
      { id: 2, title: "Μάθε τα πάντα για τις Μεταβλητές", duration: "16:00", completed: false, youtubeLink:"https://youtu.be/vUG1CMm-Z4c?si=cG1BmnJ3A6gyL0Cm" },],
    imageText: "C++ language logo with circuit board",
    imageUrl: cppLink,
    longDescription:"Μάθε C++ μέσα από τη δική μου σειρά μαθημάτων στα ελληνικά, ιδανική για αρχάριους! Η C++ είναι μια πανίσχυρη γλώσσα προγραμματισμού, που χρησιμοποιείται σε video games, λειτουργικά συστήματα, εφαρμογές υψηλής απόδοσης και ενσωματωμένα συστήματα. Μέσα από απλά, κατανοητά βίντεο, θα αποκτήσεις σταθερές βάσεις και θα δεις πώς μπορείς να αξιοποιήσεις τη C++ σε πραγματικά projects. Ξεκίνα σήμερα !",
    playlistYoutubeLink: "https://youtube.com/playlist?list=PLLazhr7ULbhrIKTQOG88CndlqkkM-gn2N&si=HMMYOaDPZGUWrV6I"

  },
  javascript:{
    title:"Εκμάθηση JavaScript",
    description:"Σειρά 80 βίντεο για να ξεκινήστε το ταξίδι σας στον κόσμο της JavaScript και του Web Development.",
    category:"JavaScript",
    level: "Μέσο/Προχωρημένο",
    videosCount: 80,
    videos:[
      { id: 1, title: "Εισαγωγή Στη JavaSccript ! | Hello World", duration: "17:30", completed: false, youtubeLink: "https://youtu.be/9fQb_HJ6dSk"},
      { id: 2, title: "Μάθε τα πάντα για τις Μεταβλητές", duration: "17:30", completed: false, youtubeLink:"https://youtu.be/JeNCcy9HBb0" },
      { id: 3, title: "Κάνε Αριθμητικές Πράξεις !", duration: "13:30", completed: false, youtubeLink:"https://youtu.be/FnxlnP78Se8" },
      { id: 4, title: "Διάβασε την Είσοδο του Χρήστη | User Input", duration: "10:00", completed: false, youtubeLink:"https://youtu.be/8lB7gssWfmA" },
      ],
    imageUrl:jsLink,
    longDescription:"Μάθε JavaScript μέσα από τη δική μου σειρά μαθημάτων στα ελληνικά, ιδανική για αρχάριους! Η JavaScript είναι μία από τις πιο δημοφιλείς γλώσσες προγραμματισμού και αποτελεί βασικό εργαλείο για την ανάπτυξη δυναμικών ιστοσελίδων και web εφαρμογών. Μέσα από απλά και κατανοητά βίντεο, θα αποκτήσεις σταθερές βάσεις και θα μάθεις πώς να χρησιμοποιείς τη JavaScript για να δώσεις διαδραστικότητα και λειτουργικότητα στις δικές σου ιστοσελίδες. Ξεκίνα σήμερα και μπες δυναμικά στον κόσμο του προγραμματισμού!",
    playlistYoutubeLink: "https://www.youtube.com/playlist?list=PLLazhr7ULbhq8dq-pxbJCZJU2tRVro519"
  },
};

const PlaylistDetailPage = () => {
  const { id } = useParams();
  const playlist = playlistsData[id];

  if (!playlist) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-red-500">Playlist δεν βρέθηκε</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-4">Λυπάμαι, η playlist που αναζητάς δεν υπάρχει.</p>
        <Button asChild variant="link" className="mt-8 text-primary hover:underline">
          <Link to="/playlists">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Επιστροφή στις Playlists
          </Link>
        </Button>
      </div>
    );
  }

  const displayVideos = playlist.videos && playlist.videos.length > 0 
    ? playlist.videos 
    : Array.from({ length: Math.min(playlist.videosCount, 5) }, (_, i) => ({
        id: i + 1,
        title: `${playlist.category} Video ${i + 1} (Παρακολούθησε στο YouTube)`,
        duration: "N/A",
        completed: false,
        youtubeLink: playlist.playlistYoutubeLink 
      }));


  return (
    <div className="bg-gray-100 dark:bg-gray-950 min-h-screen py-20 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button asChild variant="outline" className="mb-6 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-accent-foreground">
            <Link to="/playlists">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Επιστροφή στις Playlists
            </Link>
          </Button>
        </motion.div>

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
          <div className="md:flex">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:w-1/3"
            >
              <img  
                className="w-full h-64 md:h-full object-cover"
                alt={playlist.imageText}
                src={playlist.imageUrl} />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-2/3 p-6 md:p-10"
            >
              <span className="text-sm font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-full inline-block mb-3">
                {playlist.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-gray-900 dark:text-white">{playlist.title}</h1>
              <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm">Επίπεδο: {playlist.level}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">{playlist.videosCount} βίντεο</p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{playlist.longDescription || playlist.description}</p>
              <Button 
                target="_blank"
                rel="noopener noreferrer" 
                size="lg" 
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105"
                >
                <a href={playlist.playlistYoutubeLink} className="inline-flex items-center">
                <Youtube className="mr-2 h-5 w-5" />
                Παρακολούθηση στο YouTube
                </a>
              </Button>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <List className="mr-3 h-6 w-6 text-primary" />
            Βίντεο της Playlist ({displayVideos.length > 0 ? displayVideos.length : playlist.videosCount})
          </h2>
          {playlist.videosCount > 0 ? (
            <div className="space-y-4">
              {displayVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-between"
                >
                  <div className="flex items-center overflow-hidden">
                    <span className="text-primary font-semibold mr-4 text-lg">{String(index + 1).padStart(2, '0')}</span>
                    <div className="overflow-hidden">
                      <h3 className="text-md font-medium text-gray-800 dark:text-white truncate" title={video.title}>{video.title}</h3>
                      {video.duration !== "N/A" && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                          <Clock className="mr-1 h-3 w-3" /> {video.duration}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center flex-shrink-0">
                     {video.completed && <CheckSquare className="h-5 w-5 text-green-500 mr-3" />}
                    <Button 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    variant="ghost" size="sm" 
                    className="text-primary hover:bg-primary/10 hover:text-primary-foreground"
                    >
                    <a href={video.youtubeLink}>
                      <PlayCircle className="h-5 w-5" />
                    </a>
                    </Button>
                  </div>
                </motion.div>
              ))}
               {playlist.videosCount > 5 && displayVideos.length <=5 && (
                 <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + displayVideos.length * 0.1 }}
                    className="text-center mt-6"
                >
                  <Button
                      target="_blank"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground"
                      >
                    <a href={playlist.playlistYoutubeLink} className="inline-flex items-center">
                      Δες όλα τα {playlist.videosCount} βίντεο στο YouTube
                      <Youtube className="ml-2 h-4 w-4" />
                    </a>
                    </Button>
                </motion.div>
               )}
            </div>
          ) : (
            <p className="text-gray-600 dark:text-gray-400">Δεν υπάρχουν βίντεο σε αυτή την playlist ακόμη. Έρχονται σύντομα!</p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PlaylistDetailPage;
