import { useEffect, useState } from "react"
import { EmotionImages } from '../../../../utils/emotion'
import { motion } from "framer-motion"

const getRandomEmotions = (arr: string[], count: number) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
}

const HeroBanner = () => {
    const [randomEmotions, setRandomEmotions] = useState<string[]>([])

    useEffect(() => {
        const selected = getRandomEmotions(EmotionImages, 5)
        setRandomEmotions(selected)
    }, [])

    return (
        <div className="w-full min-h-screen overflow-hidden flex flex-col items-center justify-center bg-gradient-to-r from-violet-200 to-pink-200">
            <div className="w-full max-w-6xl px-4">
                <div className="flex items-center justify-center gap-6">
                    {randomEmotions.map((src, i) => (
                        <motion.img
                            key={i}
                            src={src}
                            alt="Moot emotion"
                            className="w-60 h-60 object-contain rounded-xl"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2, duration: 0.5, ease: "easeOut" }}
                            whileHover={{ scale: 1.1 }}
                        />
                    ))}
                </div>
            </div>

            <motion.div
                className="text-center px-8 mt-12 max-w-4xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="flex flex-col xl:flex-row items-center justify-center gap-4 font-wobble text-5xl sm:text-6xl font-bold bg-gradient-to-l from-purple-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text text-shadow-lg">
                    Welcome to <img src="/img/logo.png" alt="Moot logo" className="inline-block w-72" />
                </h1>
                <p className="mt-6 text-lg text-gray-500 font-medium leading-relaxed">
                    Las emociones son los colores con los que pintamos nuestra experiencia humana; a veces intensas como una tormenta, otras suaves como una brisa. Nos guían, nos alertan, nos conectan con los demás y con nosotros mismos, revelando verdades que la mente a menudo no alcanza a comprender.
                </p>
            </motion.div>
        </div>
    )
}

export default HeroBanner
