import { useEffect, useState } from "react";

type RawEmotion = {
  emotions: string;
  createdAt: string;
};

type Props = {
  getEmotionsAssignedToUser: () => Promise<{ emotions: RawEmotion[] }>;
};

export default function LastThreeEmotions({
  getEmotionsAssignedToUser,
}: Props) {
  const [lastEmotions, setLastEmotions] = useState<string[]>([]);

  useEffect(() => {
    getEmotionsAssignedToUser()
      .then((res) => {
        if (res?.emotions && Array.isArray(res.emotions)) {
          const sorted = res.emotions
            .slice()
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime(),
            );
          const last3 = sorted.slice(0, 3).map((e) => e.emotions.toLowerCase());
          setLastEmotions(last3);
        }
      })
      .catch(console.error);
  }, [getEmotionsAssignedToUser]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {lastEmotions.length !== 0 && (
        <p className="font-poppins text-white text-sm sm:text-base mb-2">
          Your latest 3 emotions:
        </p>
      )}

      <div className="flex gap-2 sm:gap-4 justify-center items-center flex-wrap w-full">
        {lastEmotions.length === 0 && (
          <p className="text-white text-sm">No recent emotions.</p>
        )}
        {lastEmotions.map((emotion, i) => (
          <img
            key={i}
            src={`/img/emotions/${emotion}.png`}
            alt={emotion}
            className="w-24 sm:w-32 md:w-40 h-auto max-w-full"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        ))}
      </div>
    </div>
  );
}
