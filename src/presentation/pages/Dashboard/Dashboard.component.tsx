import { Button, useDisclosure } from "@heroui/react";
import { MoodCalendar } from "./components/MoodCalendar/MoodCalendar.component";
import NavDashboard from "./components/NavDashboard/NavDashboard.component"
import { lazy, Suspense } from "react";
import PlusIcon from "../../icons/PlusIcon/PlusIcon";
import { useAuth } from "../../../hooks/useAuth/useAuth";
import DashboardController from "./Dashboard.controller";

const ModalCreateEmotionLazy = lazy(() => import('./components/ModalCreateEmotion/ModalCreateEmotion.component'));

const DashboardPage = () => {
  const { user } = useAuth()
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { createEmotion, getEmotionsAssignedToUser } = DashboardController({user});

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
          <MoodCalendar getEmotionsAssignedToUser={getEmotionsAssignedToUser}/>
        </div>
      </div>

      <Suspense>
        <ModalCreateEmotionLazy isOpen={isOpen} onOpenChange={onOpenChange} createEmotion={createEmotion} />
      </Suspense>
    </>
  )
}

export default DashboardPage