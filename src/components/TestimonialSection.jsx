import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from '../img/pantazis.png';
import img2 from '../img/rania.png';
import img3 from '../img/question_mark.png';

const testimonials = [
  {
    id: 1,
    name: "Ράνια Ντούνη",
    title: "Data Engineer",
    image: img2,
    text: "Μέσα από 4 mentoring κλήσεις, προετοιμάστηκα για τις συνεντεύξεις, δουλεύοντας πάνω στις απαντήσεις και τη δομή του λόγου μου. Σημαντικότερο είναι ότι ανέπτυξα την ικανότητα να «πουλάω» τον εαυτό μου με επαγγελματικό και πειστικό τρόπο.",
  },
  {
    id: 2,
    name: "Γιώργος Πανταζής",
    title: "Electrical Engineer, Electrification @ΑΒΒ",
    image: img1,
    text: "Οι mentoring κλήσεις με βοήθησαν να φτιάξω το βιογραφικό μου με βάση αυτά που στοχεύω. Κατανόησα τι έπρεπε να αλλάξω, ξεκίνησα να βλέπω ανταπόκριση άμεσα και έφτασα στη πρόταση δουλειάς  απο εταιρία.",
  },
  {
    id: 3,
    name: "Νέος Χρήστης",
    title: "Software Engineer",
    image: img3,
    text: "Κλείσε Mentoring και γίνε το επόμενο Success Story !",
  },
  // {
  //   id: 4,
  //   name: "Γιώργος Κωνσταντίνου",
  //   title: "Computer Science Student",
  //   image: "/testimonials/giorgos.jpg",
  //   text: "Το mentoring μου έδωσε ξεκάθαρη κατεύθυνση για το τι να μάθω και πώς να οργανώσω τα projects μου.",
  // },
  // {
  //   id: 5,
  //   name: "Γιώργος Κωνσταντίνου",
  //   title: "Computer Science Student",
  //   image: "/testimonials/giorgos.jpg",
  //   text: "Το mentoring μου έδωσε ξεκάθαρη κατεύθυνση για το τι να μάθω και πώς να οργανώσω τα projects μου.",
  // },
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const current = testimonials[index];

  return (
    <section className="py-20 bg-background dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-3xl">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Τι λένε οι <span className="gradient-text">μαθητές</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-3">
            Εμπειρίες από ανθρώπους που έκαναν mentoring κλήσεις.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">

          {/* Desktop Arrows */}
          <button
            onClick={handlePrev}
            className="
              hidden md:flex
              absolute -left-8
              top-1/2 -translate-y-1/2
              p-2 rounded-full
              bg-primary/20 hover:bg-primary/30
              dark:bg-primary/10 dark:hover:bg-primary/20
              transition hover:scale-110 active:scale-95
              z-10
            "
          >
            <ChevronLeft className="h-5 w-5 text-primary" />
          </button>

          <button
            onClick={handleNext}
            className="
              hidden md:flex
              absolute -right-8
              top-1/2 -translate-y-1/2
              p-2 rounded-full
              bg-primary/20 hover:bg-primary/30
              dark:bg-primary/10 dark:hover:bg-primary/20
              transition hover:scale-110 active:scale-95
              z-10
            "
          >
            <ChevronRight className="h-5 w-5 text-primary" />
          </button>

          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.35 }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-lg dark:shadow-primary/10 min-h-[260px] flex flex-col justify-start"
            >

              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <img
                  src={current.image}
                  alt={current.name}
                  className="
                    w-16 h-16 rounded-full object-cover border-2 border-primary
                    shadow-md shadow-black/30
                    dark:shadow-[0_0_12px_rgba(59,130,246,0.4)]
                    transition-transform duration-300 hover:scale-105
                  "
                />

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {current.name}
                  </h4>

                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {current.title}
                  </p>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-bold italic">
                “{current.text}”
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Below Card */}
          <div className="flex items-center justify-center gap-4 mt-6">

            {/* Mobile Left Arrow */}
            <button
              onClick={handlePrev}
              className="md:hidden p-2 rounded-full bg-primary/20 hover:bg-primary/30 dark:bg-primary/10 dark:hover:bg-primary/20 transition hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="h-5 w-5 text-primary" />
            </button>

            {/* Dots (visible on all screens) */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-3 rounded-full transition-all ${
                    index === i
                      ? "w-8 bg-primary"
                      : "w-3 bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>

            {/* Mobile Right Arrow */}
            <button
              onClick={handleNext}
              className="md:hidden p-2 rounded-full bg-primary/20 hover:bg-primary/30 dark:bg-primary/10 dark:hover:bg-primary/20 transition hover:scale-110 active:scale-95"
            >
              <ChevronRight className="h-5 w-5 text-primary" />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
