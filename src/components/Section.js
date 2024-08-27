// Section Component
import { motion } from 'framer-motion';

const Section = ({ icon: Icon, title, content, isActive, onClick }) => (
    <motion.div
      className={`bg-gradient-to-br from-white to-blue-50 rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-300`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      layout
    >
      <div className="flex items-center mb-4">
        <Icon className="mr-3 text-blue-600" size={28} />
        <h2 className="subheading text-xl font-bold">{title}</h2>
      </div>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {content}
        </motion.div>
      )}
    </motion.div>
  );

export default Section;