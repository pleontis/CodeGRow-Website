import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import bookURL from "@/img/book_square.png";
import aiBookURL from "@/img/ai-full-stack.png";
import algoBookURL from "@/img/algo_square.png";

/* ================= PRODUCTS ================= */

const products = [
  {
    id: "book",
    title: "Το Βιβλίο μου είναι εδώ!",
    description:
      "Ένα ολοκληρωμένο εγχειρίδιο για να ξεκινήσετε και να εμβαθύνετε στον προγραμματισμό. Γραμμένο στα ελληνικά, με πρακτικά παραδείγματα και ασκήσεις.",
    image: bookURL,
    link: "/book",
    badge: "Best Seller",
    badgeVariant: "hot",
  },
  {
    id: "algo",
    title: "Αλγόριθμοι και Δομές Δεδομένων",
    description:
      "Μάθε τους βασικούς αλγόριθμους και δομές δεδομένων που κάθε προγραμματιστής πρέπει να γνωρίζει. Χτίσε το θεμέλιο για την καριέρα σου στον προγραμματισμό.",
    image: algoBookURL,
    link: "/products/algo-ebook",
    badge: "DEV ESSENTIAL",
    badgeVariant: "green",
  },
  {
    id: "ai",
    title: "Κατασκευή Full Stack Εφαρμογής με AI",
    description:
      "Μάθε πώς να αξιοποιείς AI εργαλεία για να δημιουργείς εφαρμογές πιο γρήγορα και πιο έξυπνα. Σχεδιασμός και υλοποίηση από το μηδέν.",
    image: aiBookURL,
    link: "/products/ai-ebook",
  },
];

/* ================= BADGE STYLES ================= */

const badgeStyles = {
  hot: "from-amber-400 via-orange-500 to-rose-500",
  green: "from-emerald-400 via-green-500 to-lime-500",
};

/* ================= COMPONENT ================= */

const BookSliderSection = () => {
  const [index, setIndex] = useState(0);
  const product = products[index];

  const next = () => setIndex((prev) => (prev + 1) % products.length);
  const prev = () =>
    setIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 relative">
        {/* LEFT ARROW */}
        <button
          onClick={prev}
          aria-label="Previous product"
          className="
            absolute top-1/2 -translate-y-1/2 z-20
            left-4 sm:left-6 md:-left-6
            bg-card/70 backdrop-blur p-3 rounded-full shadow-lg
            hover:scale-110 transition
          "
        >
          <ChevronLeft />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          aria-label="Next product"
          className="
            absolute top-1/2 -translate-y-1/2 z-20
            right-4 sm:right-6 md:-right-6
            bg-card/70 backdrop-blur p-3 rounded-full shadow-lg
            hover:scale-110 transition
          "
        >
          <ChevronRight />
        </button>

        <div className="bg-card p-8 md:p-12 rounded-xl shadow-xl book-gradient text-white flex flex-col md:flex-row items-center justify-between overflow-hidden">
          {/* TEXT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={product.id + "-text"}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4 }}
              className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left"
            >
              {product.badge && (
                <motion.span
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`
                    inline-flex items-center gap-2 mb-5
                    px-6 py-2
                    text-md font-semibold tracking-wide
                    rounded-full text-white
                    bg-gradient-to-r
                    ${badgeStyles[product.badgeVariant] || badgeStyles.hot}
                    shadow-[0_6px_18px_rgba(0,0,0,0.18)]
                  `}
                >
                  <span className="text-base leading-none">
                    {product.badgeVariant === "green" ? "🧠" : "🔥"}
                  </span>
                  <span className="leading-none">
                    {product.badge.toUpperCase()}
                  </span>
                </motion.span>
              )}

              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
                {product.title}
              </h2>

              <p className="text-lg mb-6 text-gray-100 dark:text-gray-200">
                {product.description}
              </p>

              <Button
                asChild
                size="lg"
                variant="secondary"
                className="
                  bg-white text-[hsl(var(--primary))]
                  hover:bg-gray-100 font-semibold
                  px-8 py-3 rounded-lg shadow-md
                  transition-all duration-300 hover:scale-105
                "
              >
                <Link to={product.link}>Μάθε Περισσότερα</Link>
              </Button>
            </motion.div>
          </AnimatePresence>

          {/* IMAGE */}
          <AnimatePresence mode="wait">
            <motion.div
              key={product.id + "-image"}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.4 }}
              className="md:w-1/3"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default BookSliderSection;
