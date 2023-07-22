'use client';

import { AnimatePresence, motion } from 'framer-motion';

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full flex justify-center h-screen md:overflow-y-auto"
      >
        <main className="my-auto p-8 prose dark:prose-invert">{children}</main>
      </motion.div>
    </AnimatePresence>
  );
}
