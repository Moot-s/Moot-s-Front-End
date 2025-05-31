import { useState } from "react";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tooltip,
} from "@heroui/react";

import { useAuth } from "../../../../../hooks/useAuth/useAuth";
import { Emotions } from "../../../../utils/emotion";

type Props = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  createEmotion: (emotionName: string) => Promise<void>;
};

const ModalCreateEmotion = ({ isOpen, onOpenChange, createEmotion }: Props) => {
  const { user, token } = useAuth();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleEmotionClick = (index: number) => {
    setSelectedIndex(index);
  };

  const handleSaveEmotion = async (onClose: () => void) => {
    if (!token || selectedIndex === null || !user?.id) return;
    await createEmotion(Emotions[selectedIndex].title.toLowerCase());
    setSelectedIndex(null);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      backdrop="opaque"
      size="2xl"
      classNames={{
        body: "py-4 px-2 overflow-y-auto",
        header: "border-b-[1px] border-gray-200",
        footer: "border-t-[1px] border-gray-200",
        closeButton: "hover:bg-white/5 active:bg-white/10",
      }}
    >
      <ModalContent className="max-h-[90vh]">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 font-poppins text-center">
              Add emotion
            </ModalHeader>
            <ModalBody>
              {selectedIndex !== null && (
                <div className="flex flex-col items-center justify-center gap-4 mb-4">
                  <img
                    src={Emotions[selectedIndex].image}
                    alt={Emotions[selectedIndex].title}
                    className="w-24 h-24 balloon"
                  />
                  <div className="text-center px-4">
                    <h2
                      className="text-xl font-wobble mb-1"
                      style={{ color: Emotions[selectedIndex].color }}
                    >
                      {Emotions[selectedIndex].title}
                    </h2>
                    <p className="text-xs text-gray-600 font-poppins">
                      {Emotions[selectedIndex].description}
                    </p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 place-items-center">
                {Emotions.map((emotion, index) => (
                  <Tooltip
                    key={emotion.title}
                    content={emotion.title}
                    className="font-wobble text-center"
                    showArrow={true}
                    style={{ color: emotion.color }}
                  >
                    <Button
                      color="primary"
                      variant="light"
                      onPress={() => handleEmotionClick(index)}
                      className="w-16 h-16 hover:bg-transparent"
                    >
                      <img src={emotion.image} alt={emotion.title} />
                    </Button>
                  </Tooltip>
                ))}
              </div>
            </ModalBody>
            <ModalFooter className="flex flex-col gap-2 sm:flex-row">
              <Button
                color="default"
                onPress={onClose}
                className="w-full font-semibold"
              >
                Close
              </Button>
              <Button
                color="primary"
                className="w-full font-semibold"
                onPress={() => handleSaveEmotion(onClose)}
                isDisabled={selectedIndex === null}
              >
                Save
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalCreateEmotion;
