import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ListFilter, Search, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

import product1Img from '../img/ai-full-stack.png';
import product2Img from '../img/ui-kit.png';
import product3Img from '../img/codegrow-resume-template.png';
import product4Img from '../img/algo_square.png';
const productsData = [
  {
    id: "algo-ebook",
    category:"EBOOK",
    title: "Γίνε Master στις Δομές Δεδομένων & Αλγόριθμους",
    description: "Οι Δομές Δεδομένων και οι Αλγόριθμοι είναι η βάση κάθε καλού προγραμματιστή. Αυτό το eBook σου μαθαίνει να σκέφτεσαι σωστά, όχι απλώς πώς να γράφεις κώδικα.",
    longDescription: "Οι Δομές Δεδομένων και οι Αλγόριθμοι δεν είναι απλώς ένα ακόμα κεφάλαιο στον προγραμματισμό. Είναι ο τρόπος σκέψης πίσω από κάθε αποδοτική λύση. Σε αυτό το eBook θα κατανοήσεις πώς οργανώνονται τα δεδομένα και πώς σχεδιάζονται αλγόριθμοι που λύνουν προβλήματα με καθαρό και συστηματικό τρόπο.\n\nΤο βιβλίο εστιάζει στη λογική και το σκεπτικό πίσω από τον κώδικα, ώστε να μπορείς να αναλύεις προβλήματα, να επιλέγεις τη σωστή προσέγγιση και να γράφεις κώδικα που κλιμακώνεται.\n\nΠαράλληλα, αποτελεί ιδανική προετοιμασία για τεχνικές συνεντεύξεις. Καλύπτει τις πιο σημαντικές έννοιες που αξιολογούνται από εταιρείες, βοηθώντας σε να εξηγείς τη σκέψη σου, να αναλύεις πολυπλοκότητα και να προσεγγίζεις αλγοριθμικά προβλήματα με αυτοπεποίθηση.\n\nΕίτε είσαι φοιτητής, junior developer ή αυτοδίδακτος προγραμματιστής, αυτό το eBook σου δίνει τα θεμέλια που χρειάζεσαι για να εξελιχθείς.",
    price: "29.99€",
    productSize:"73 σελίδες",
    imageUrl: product4Img,
    imageText: "AlgoGreek eBook cover",
    buyLink: "https://buy.stripe.com/28E6oH0TWarjdMP3Un0kE03"
  },
  {
    id: "ai-ebook",
    category:"EBOOK",
    title: "Κατασκευή Full Stack Εφαρμογής με AI",
    description: "Μάθε πώς να φτιάχνεις apps μόνο με τη βοήθεια AI εργαλείων. Πλήρης οδηγός στα ελληνικά.",
    longDescription: "Ένας πρακτικός οδηγός, γραμμένος στα ελληνικά, που σου δείχνει βήμα προς βήμα πώς να δημιουργήσεις μια επαγγελματική web εφαρμογή από το μηδέν, βασισμένος αποκλειστικά σε τεχνητή νοημοσύνη. \n\nΘα μάθεις πώς να σχεδιάζεις logo και UI, να κατασκευάζεις το frontend και backend, να κάνεις hosting, να γράφεις κείμενα με AI και να προωθείς το project σου online. Όλα χωρίς να χρειάζεσαι γνώσεις προγραμματισμού!\n\nΕίναι ιδανικό για προγραμματιστές, content creators, φοιτητές ή επιχειρηματίες που θέλουν να χτίσουν ένα project γρήγορα, οικονομικά και αποτελεσματικά. Με απλά λόγια, αν θέλεις να αξιοποιήσεις τη δύναμη του AI για να μετατρέψεις τις ιδέες σου σε εφαρμογές, αυτό το eBook είναι το καλύτερο πρώτο βήμα.",
    price: "19.99€",
    productSize:"43 σελίδες",
    imageUrl: product1Img,
    imageText: "AI web app Greek eBook cover",
    buyLink: "https://buy.stripe.com/00w14n1Y0fLDaAD62v0kE01"
  },
  {
    id: "ui-kit",
    category: "code",
    title: "Greek Dev UI Kit",
    description: "Ένα έτοιμο UI Kit με Tailwind και React components, ιδανικό για προσωπικά projects, startups και εκπαιδευτικές πλατφόρμες.",
    longDescription:"Το Greek Dev UI Kit είναι ένα έτοιμο πακέτο από σύγχρονα, responsive UI components, φτιαγμένα με Tailwind CSS και React, ειδικά σχεδιασμένα για Έλληνες developers.\n\nΜέσα στο kit θα βρεις κουμπιά, φόρμες, κάρτες, modals, navigation bars και πολλά ακόμα, όλα με clean design, εύκολη προσβασιμότητα και δομή έτοιμη για χρήση.\n\nΙδανικό για εκπαιδευτικά projects, portfolio sites, startups και κάθε προγραμματιστή που θέλει να ξεκινήσει γρήγορα χωρίς να χάνει χρόνο σε styling.\n\nΑπλώς κάνεις import και ξεκινάς!",
    price: "Δωρεάν",
    productSize:"",
    imageUrl: product2Img,
    imageText: "Greek Dev UI Kit preview",
    buyLink: "https://buy.stripe.com/4gMeVddGIgPH5gjgH90kE02"
  },
  {
  id: "resume-template",
  category:"PDF",
  title: "Resume Template",
  description: "Ένα επαγγελματικό πρότυπο βιογραφικού για developers.",
  longDescription:"Ένα μοντέρνο, καθαρό και επαγγελματικό πρότυπο βιογραφικού, σχεδιασμένο για developers, freelancers και φοιτητές τεχνολογίας. Διαθέσιμο σε μορφές Word (.docx) και PDF, έτοιμο για επεξεργασία ή εκτύπωση.\n\nΤο layout είναι ευανάγνωστο, ATS friendly (για αυτόματα HR συστήματα) και εστιάζει στις δεξιότητες και τα projects σου.\n\nΙδανικό για όσους θέλουν να ξεχωρίσουν με ένα ανταγωνιστικό και καλοσχεδιασμένο βιογραφικό.",
  price: "Δωρεάν",
  imageUrl: product3Img, 
  imageText: "Minimal Resume Template Preview",
  buyLink: "/files/codegrow-resume-template.zip"
}
  
];

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredProducts = productsData.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-20 md:py-28">
      <Helmet>
        <title>Ψηφιακά Προϊόντα - CodeGrow</title>
        <meta name="description" content="Αγόρασε ψηφιακά προϊόντα του CodeGrow: eBooks, UI Kits και εργαλεία για Έλληνες developers." />
        <meta name="keywords" content="codegrow, codegrow gr, codegrow website, codegrow site, codegrow ebook, codegrow ebooks, full stack developer, full stack developer with ai" />
        <link rel="canonical" href="https://codegrow.gr/products" />
        <meta property="og:title" content="Ψηφιακά Προϊόντα - Μάθε Κώδικα στα Ελληνικά | CodeGrow" />
        <meta property="og:description" content="Αγόρασε ψηφιακά προϊόντα του CodeGrow: eBooks, UI Kits και εργαλεία για Έλληνες developers." />
        <meta property="og:url" content="https://codegrow.gr/products" />
        <meta property="og:image" content="https://codegrow.gr/img/og_image.png" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
            Τα <span className="gradient-text">Ψηφιακά Προϊόντα</span> μου
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Εδω θα βρεις eBooks, templates και εργαλεία προγραμματισμού για να αναπτυχθείς επαγγελματικά.
          </p>
        </motion.div>

        <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Αναζήτηση προϊόντος..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-800 dark:text-white"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800">
            <ListFilter className="h-5 w-5" />
            Φίλτρα
          </Button>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden card-hover flex flex-col"
              >
                <Link to={`/products/${product.id}`} className="block">
                  <img className="w-full h-48 object-contain p-2 bg-white" src={product.imageUrl} alt={product.imageText} />
                </Link>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{product.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">{product.description}</p>
                  <p className="text-lg font-semibold text-primary mb-4">{product.price}</p>
                  <Button asChild className="w-full mt-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link to={`/products/${product.id}`}>
                      <BookOpen className="mr-2 h-5 w-5" />
                      Περισσότερες Πληροφορίες
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div className="text-center py-12">
            <Search className="h-16 w-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
            <p className="text-xl text-gray-600 dark:text-gray-300">Δεν βρέθηκαν προϊόντα.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;

export { productsData };