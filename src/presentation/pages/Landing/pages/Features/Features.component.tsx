import { motion } from "framer-motion";

const Features = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 via-pink-100 to-sky-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="py-16 sm:py-24 w-full"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl sm:text-5xl font-extrabold text-rose-500 font-wobble text-shadow drop-shadow-md leading-tight">
                Mood tracking made meaningful
              </h2>
              <p className="text-lg text-gray-700">
                This web application is designed for compatibility with
                computers, tablets, and mobile devices, built using the React
                framework for the Front-end and Strapi CMS for the Back-end,
                leveraging a SQLite database for data management.
              </p>
              <dl className="space-y-6">
                <div className="relative pl-8">
                  <dt className="font-bold text-purple-600">
                    🎨 Track your emotions
                  </dt>
                  <dd className="text-gray-600">
                    An interactive calendar helps you log and visualize your
                    emotional states day by day with 10 different mood colors.
                  </dd>
                </div>
                <div className="relative pl-8">
                  <dt className="font-bold text-blue-600">
                    🎈 Friendly mood companion
                  </dt>
                  <dd className="text-gray-600">
                    A cheerful balloon changes its face and color based on your
                    selected mood, offering an empathetic and playful user
                    experience.
                  </dd>
                </div>
                <div className="relative pl-8">
                  <dt className="font-bold text-green-600">
                    📊 Personalized analytics
                  </dt>
                  <dd className="text-gray-600">
                    Access statistics such as your most common mood, emotional
                    changes by month, and long-term mood distribution trends.
                  </dd>
                </div>
              </dl>
            </motion.div>

            <motion.img
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              src="/img/boarding.png"
              className="ring-pink-200/60 w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Features;
