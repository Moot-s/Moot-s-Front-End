import { lazy, Suspense } from "react";

import { Button, useDisclosure } from "@heroui/react";

import { useAuth } from "../../../hooks/useAuth/useAuth";
import PlusIcon from "../../icons/PlusIcon/PlusIcon";
import LastThreeEmotions from "./components/LastThreeEmotions/LastThreeEmotions.component";
import { MoodCalendar } from "./components/MoodCalendar/MoodCalendar.component";
import NavDashboard from "./components/NavDashboard/NavDashboard.component";
import EmotionStats from "./components/Stats/Stats.component";
import DashboardController from "./Dashboard.controller";

const ModalCreateEmotionLazy = lazy(
  () => import("./components/ModalCreateEmotion/ModalCreateEmotion.component"),
);

const DashboardPage = () => {
  const { user } = useAuth();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { createEmotion, getEmotionsAssignedToUser } = DashboardController({
    user,
  });

  return (
    <>
      <div className="min-h-screen w-full bg-[#f5f5f5] bg-[url('/img/bg.png')] bg-center bg-cover bg-no-repeat">
        <NavDashboard onOpen={onOpen} />
        <div className="flex flex-col items-center justify-center px-4 py-8 text-center">
          <h1 className="font-wobble text-white text-2xl sm:text-3xl text-shadow">
            Welcome to Moot's {user?.username}!
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 mb-4 w-full">
            <LastThreeEmotions
              getEmotionsAssignedToUser={getEmotionsAssignedToUser as any}
            />
          </div>

          <div className="mb-8 w-full flex justify-center">
            <Button
              className="bg-pink-400 rounded-md text-white text-sm sm:text-base"
              startContent={<PlusIcon />}
              onPress={() => onOpen()}
            >
              Add emotion
            </Button>
          </div>

          <div className="bg-white rounded-md shadow-md p-4 w-full max-w-5xl overflow-x-auto">
            <MoodCalendar
              getEmotionsAssignedToUser={getEmotionsAssignedToUser}
            />
          </div>

          <div className="pt-6 w-full">
            <EmotionStats
              getEmotionsAssignedToUser={getEmotionsAssignedToUser as any}
            />
          </div>

          <div className="flex items-center justify-center text-gray-500 mt-6 text-sm">
            <p>Made with ❤️ by Unai González</p>
          </div>
        </div>
      </div>

      <Suspense>
        <ModalCreateEmotionLazy
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          createEmotion={createEmotion}
        />
      </Suspense>
    </>
  );
};

export default DashboardPage;
