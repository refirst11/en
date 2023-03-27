
'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import {ReactNode} from 'react'

const variants = {
    hidden: { opacity: 0, scale: 0.92, x: -600 },
    enter: { opacity: 1, scale: 1, x: 0 },
    exit: { opacity: 0, scale: 0.92, x: 600, transition: { duration: 0.18 } },
  };

// Client wraps any client/rsc components with AnimatePresence
export default function Client({children}: { children: ReactNode}) {
  const pathname = usePathname()
  return ( 
  <AnimatePresence mode='wait'  onExitComplete={() => window.scrollTo(0, 0)}>
     <motion.div key={pathname}
        initial={{}}
        animate={{}}
        exit={{}}
      >
        {children}
     </motion.div>
   </AnimatePresence>
   )
}