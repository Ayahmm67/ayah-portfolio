import { motion } from 'framer-motion'

type Props = {
  children: React.ReactNode
  className?: string
}

export default function SectionWrapper({
  children,
  className = '',
}: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7 }}
      className={className}
    >
      {children}
    </motion.section>
  )
}