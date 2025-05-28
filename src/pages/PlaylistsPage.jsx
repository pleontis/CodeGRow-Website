
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PlayCircle, ListFilter, Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import cppLink from "../img/cpp.png";
import cLink from "../img/c.png";
import mongoLink from "../img/mongodb.png"
import pythonLink from "../img/pythonLogo.png";
import javaLink from "../img/javaLogo.png";
import webDevLink from "../img/webDev.png";

const playlistsData = [
  { 
    id: "python", 
    title: "Εκμάθηση Python", 
    description: "Ολοκληρωμένη σειρά 95 βίντεο για να μάθεις Python από την αρχή μέχρι και πιο προχωρημένες έννοιες.", 
    category: "Python", 
    level: "Όλα τα επίπεδα", 
    videos: 95, 
    imageText: "Python logo with code background",
    imageUrl: pythonLink,
    youtubeLink: "https://youtube.com/playlist?list=PLLazhr7ULbho-a-L6uZ9v_qxNQGc4aM8F&si=t53lKmDYaVtlBmwI"
  },
  { 
    id: "html-css", 
    title: "HTML & CSS", 
    description: "Μάθε τα θεμέλια του Web Development με 37 βίντεο για HTML και CSS.", 
    category: "Web Development", 
    level: "Αρχάριοι", 
    videos: 37, 
    imageText: "HTML5 and CSS3 logos",
    imageUrl: webDevLink,
    youtubeLink: "https://youtube.com/playlist?list=PLLazhr7ULbhrjjZxVEAox1k1mTfYxMIZA&si=XggC-P8G_6oGitpp"
  },
  { 
    id: "java", 
    title: "Εκμάθηση Java", 
    description: "Πλήρης σειρά 76 βίντεο για την εκμάθηση της γλώσσας προγραμματισμού Java.", 
    category: "Java", 
    level: "Όλα τα επίπεδα", 
    videos: 76, 
    imageText: "Java coffee cup logo with code",
    imageUrl: javaLink,
    youtubeLink: "https://youtube.com/playlist?list=PLLazhr7ULbhoK6OJyZhPU1gXgQeGGW6vC&si=z7y_KY3Jl2o2ULVF"
  },
  { 
    id: "c", 
    title: "Εκμάθηση C", 
    description: "Σειρά 23 βίντεο για να κατανοήσεις τις βασικές αρχές της γλώσσας προγραμματισμού C.", 
    category: "C", 
    level: "Αρχάριοι/Μέσο", 
    videos: 23, 
    imageText: "C language logo with circuit board",
    imageUrl: cLink,
    youtubeLink: "https://youtube.com/playlist?list=PLLazhr7ULbhp24SFf7DXTaX_xo4e9kxbO&si=i575A72TUlAe29S6"
  },
  { 
    id: "c++", 
    title: "Εκμάθηση C++", 
    description: "Σειρά 40 βίντεο για να κατανοήσεις μια απο τις πιο ισχυρές γλώσσες προγραμματισμού, την C++.", 
    category: "C++", 
    level: "Αρχάριοι/Μέσο", 
    videos: 40, 
    imageText: "C++ language logo with circuit board",
    imageUrl: cppLink,
    youtubeLink: "https://youtube.com/playlist?list=PLLazhr7ULbhrIKTQOG88CndlqkkM-gn2N&si=HMMYOaDPZGUWrV6I"
  },
  { 
    id: "mongodb", 
    title: "Εκμάθηση MongoDB", 
    description: "Μάθε τα πάντα για τη NoSQL βάση δεδομένων MongoDB μέσα από 12 αναλυτικά βίντεο.", 
    category: "Databases", 
    level: "Μέσο", 
    videos: 12, 
    imageText: "MongoDB leaf logo on server background",
    imageUrl: mongoLink,
    youtubeLink: "https://youtube.com/playlist?list=PLLazhr7ULbho40ZbcogPRyPzlvIYaV8x-&si=EKSVNUNDCaZCh3EN"
  },
];

const PlaylistsPage = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredPlaylists, setFilteredPlaylists] = React.useState(playlistsData);

  React.useEffect(() => {
    const results = playlistsData.filter(playlist =>
      playlist.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      playlist.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      playlist.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPlaylists(results);
  }, [searchTerm]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
            Όλες οι <span className="gradient-text">Playlists</span> μου
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Εξερεύνησε τη συλλογή μου από εκπαιδευτικές playlists για διάφορες γλώσσες προγραμματισμού και τεχνολογίες.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input 
              type="text"
              placeholder="Αναζήτηση playlist..."
              className="pl-10 pr-4 py-2 w-full border-gray-300 dark:border-gray-700 rounded-lg focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-accent-foreground">
            <ListFilter className="h-5 w-5" />
            Φίλτρα
          </Button>
        </motion.div>

        {filteredPlaylists.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlaylists.map((playlist, index) => (
              <motion.div
                key={playlist.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden card-hover flex flex-col"
              >
                <img  
                  className="w-full h-48 object-cover"
                  alt={playlist.imageText}
                  src={playlist.imageUrl} />
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {playlist.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{playlist.level}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{playlist.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">{playlist.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>{playlist.videos} βίντεο</span>
                  </div>
                  <Button asChild className="w-full mt-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link to={`/playlists/${playlist.id}`}>
                      <PlayCircle className="mr-2 h-5 w-5" />
                      Δες την Playlist
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center py-12"
          >
            <Search className="h-16 w-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
            <p className="text-xl text-gray-600 dark:text-gray-300">Δεν βρέθηκαν playlists που να ταιριάζουν με την αναζήτησή σου.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PlaylistsPage;
