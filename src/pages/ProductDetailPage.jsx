import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ShoppingCart,Download } from 'lucide-react';
import { productsData } from './ProductsPage';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const product = productsData.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-red-500">Το προϊόν δεν βρέθηκε</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-4">Λυπάμαι, το προϊόν που αναζητάς δεν υπάρχει.</p>
        <Button asChild variant="link" className="mt-8 text-primary hover:underline">
          <Link to="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Επιστροφή στα προϊόντα
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-950 min-h-screen py-20 md:py-24">
      <Helmet>
        <title>{product.title} - CodeGrow</title>
        <meta name="description" content={product.description} />
        <link rel="canonical" href={`https://codegrow.gr/products/${product.id}`} />
        <meta property="og:title" content={`${product.title} - CodeGrow`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={`https://codegrow.gr${product.imageUrl}`} />
        <meta property="og:url" content={`https://codegrow.gr/products/${product.id}`} />
      </Helmet>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button asChild variant="outline" className="mb-6 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800">
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Επιστροφή στα προϊόντα
            </Link>
          </Button>
        </motion.div>

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden md:flex">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:w-1/3"
          >
            <img
              className="w-full h-64 md:h-full object-contain bg-white p-4"
              src={product.imageUrl}
              alt={product.imageText}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-2/3 p-6 md:p-10"
          >
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-gray-900 dark:text-white">{product.title}</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">{product.productSize}</p>
            <p className=" whitespace-pre-line text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{product.longDescription}</p>

            <p className="text-lg font-semibold text-primary mb-6">Τιμή: {product.price}</p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105"
            >
             <a href={product.buyLink} target="_blank" rel="noopener noreferrer" download={product.id === 'resume-template'} className="inline-flex items-center">
                {product.id === 'resume-template' ? <Download className="mr-2 h-5 w-5" /> : <ShoppingCart className="mr-2 h-5 w-5" />}
                {product.id === 'resume-template' ? 'Κατέβασε Τώρα' : 'Αγορά Τώρα'}
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
