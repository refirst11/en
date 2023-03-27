
'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import {ReactNode} from 'react'


// Client wraps any client/rsc components with AnimatePresence
export default function Client({children}: { children: ReactNode}) {
  const pathname = usePathname()
  return ( 
  <AnimatePresence mode='wait'  onExitComplete={() => window.scrollTo(0, 0)}>
     <motion.div key={pathname}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0.92 }}
            transition={{duration: 0.2}}
      >
        {children}
     </motion.div>
   </AnimatePresence>
   )
}