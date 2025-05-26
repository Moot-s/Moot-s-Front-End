import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Tooltip } from '@heroui/react'
import { useAuth } from '../../../../../hooks/useAuth/useAuth';
import { useState } from 'react';

type Props = {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    createEmotion: (emotionName: string) => Promise<void>
}

const emotions = [
    "happy", "excited", "calm", "surprised", "confused",
    "sad", "bored", "angry", "worried", "embarrased"
]

const emotionColours = [
    "#FFE773", "#FFA9DA", "#00EB9A", "#0095C9", "#000000",
    "#56E3FF", "#FFB1FF", "#FF5151", "#3E3E3E", "#FFA17E"
]

const emotionDescriptions: Record<string, { title: string, description: string }> = {
    happy: { title: "Happy!", description: "Smiling like you just found an extra fry at the bottom of the bag 🍟" },
    excited: { title: "Excited!", description: "Bouncing off the walls like a hyperactive puppy 🐶" },
    calm: { title: "Calm", description: "Chillin' like a villain... but like, a peaceful villain 🧘‍♂️" },
    surprised: { title: "Surprised!", description: "Like when your package arrives earlier than expected 📦" },
    confused: { title: "Confused?", description: "Trying to do math after 10 PM... why? 🤯" },
    sad: { title: "Sad...", description: "Like when you realize your snack is gone 😢" },
    bored: { title: "Bored", description: "Staring at the ceiling counting imaginary sheep 🐑" },
    angry: { title: "Angry!", description: "Like when the WiFi goes down during your favorite show 📺🚫" },
    worried: { title: "Worried...", description: "When you send a risky text and they start typing... then stop 😰" },
    embarrased: { title: "Embarrassed!", description: "Remembering something awkward you said 5 years ago 😳" }
}

const ModalCreateEmotion = ({ isOpen, onOpenChange, createEmotion }: Props) => {
    const {  user, token } = useAuth()
    const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null)

    const handleEmotionClick = (emotion: string) => {
        setSelectedEmotion(emotion)
    }

    const handleSaveEmotion = async (onClose: () => void) => {
        if (!token || !selectedEmotion || !user?.id) return;
        await createEmotion(selectedEmotion);
        setSelectedEmotion(null);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop='opaque' size='2xl'
            classNames={{
                body: "py-6",
                header: "border-b-[1px] border-gray-200",
                footer: "border-t-[1px] border-gray-200",
                closeButton: "hover:bg-white/5 active:bg-white/10",
            }}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 font-poppins">Add emotion</ModalHeader>
                        <ModalBody>
                            <div className="flex flex-col items-center justify-center mb-6">
                                {selectedEmotion && (
                                    <div className="flex items-center gap-8">
                                        <img
                                            src={`/img/emotions/${selectedEmotion}.png`}
                                            alt={selectedEmotion}
                                            className="w-48 h-48 balloon"
                                        />
                                        <div className="max-w-sm">
                                            <h2 className="text-3xl font-wobble mb-2" style={{ color: emotionColours[emotions.indexOf(selectedEmotion)] }}>{emotionDescriptions[selectedEmotion].title}</h2>
                                            <p className="text-xs text-gray-600 font-poppins">{emotionDescriptions[selectedEmotion].description}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="grid grid-cols-5 gap-4">
                                {emotions.map((emotion, index) => (
                                    <Tooltip
                                        key={emotion}
                                        content={emotion.charAt(0).toUpperCase() + emotion.slice(1)}
                                        className="font-wobble"
                                        showArrow={true}
                                        style={{ color: emotionColours[index] }}
                                    >
                                        <Button
                                            color="primary"
                                            variant="light"
                                            onPress={() => handleEmotionClick(emotion)}
                                            className="w-24 h-24 hover:bg-transparent"
                                        >
                                            <img src={`/img/emotions/${emotion}.png`} alt={emotion} className='balloo' />
                                        </Button>
                                    </Tooltip>
                                ))}
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Close
                            </Button>
                            <Button color="primary" onPress={() => handleSaveEmotion(() => handleSaveEmotion)} isDisabled={!selectedEmotion}>
                                Save
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

export default ModalCreateEmotion
