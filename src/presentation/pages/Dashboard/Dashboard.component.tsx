import { Button, useDisclosure } from "@heroui/react";
import { Emotions } from "../../../types/Emotion";
import { MoodCalendar } from "./components/MoodCalendar/MoodCalendar.component";
import NavDashboard from "./components/NavDashboard/NavDashboard.component"
import { lazy, Suspense } from "react";
import { useAuth } from "../../../hooks/useAuth/useAuth";
import PlusIcon from "../../icons/PlusIcon/PlusIcon";

const ModalCreateEmotionLazy = lazy(() => import('./components/ModalCreateEmotion/ModalCreateEmotion.component'));

const DashboardPage = () => {

  const { user } = useAuth()
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const moodData = {
    "2025-01-01": Emotions.HAPPY,
    "2025-01-02": Emotions.ANGRY,
    "2025-01-03": Emotions.SURPRISED,
  };

  return (
    <>
      <div className="h-screen w-screen bg-[#f5f5f5] ">
        <NavDashboard onOpen={onOpen} />
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="font-wobble text-2xl">Welcome to Moot's {user?.username}!</h1>
          <p className="font-poppins">Your latest 3 emotions:</p>
          <div className="flex flex-row items-center justify-center gap-2 mt-4 mb-4">
            <img src="/img/emotions/happy.png" alt="Moots" className="w-64 h-64 balloon" />
            <img src="/img/emotions/sad.png" alt="Moots" className="w-64 h-64 balloon" />
            <img src="/img/emotions/surprised.png" alt="Moots" className="w-64 h-64 balloon" />
            
          </div>
          <div className="flex flex-row items-center justify-center gap-2 mb-12">
          <Button className="bg-pink-400 rounded-md text-white" startContent={<PlusIcon />} onPress={() => onOpen()}>Add emotion</Button>
          </div>
          <MoodCalendar data={moodData} />
        </div>
      </div>

      <Suspense>
        <ModalCreateEmotionLazy isOpen={isOpen} onOpenChange={onOpenChange} />
      </Suspense>
    </>
  )
}

export default DashboardPage