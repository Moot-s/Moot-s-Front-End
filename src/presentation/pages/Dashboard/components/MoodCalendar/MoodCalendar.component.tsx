import { useEffect, useState } from "react";
import { format, eachDayOfInterval, getDay, isFirstDayOfMonth } from "date-fns";
import { Emotions, EmotionColors } from "../../../../../types/Emotion";
import { es } from "date-fns/locale";
import { useAuth } from "../../../../../hooks/useAuth/useAuth";

const dayLabels = ["D", "L", "M", "X", "J", "V", "S"];

type Props ={
  getEmotionsAssignedToUser: () => Promise<any>
}
export const MoodCalendar = ({getEmotionsAssignedToUser} : Props) => {
  const [data, setData] = useState<Record<string, Emotions>>({});
  const { user } = useAuth();

  useEffect(() => {
  const fetchEmotions = async () => {
    try {
      const response = await getEmotionsAssignedToUser();

      const res = Array.isArray(response) ? response : response?.emotions ?? [];

      const formatted: Record<string, Emotions> = {};

      res.forEach((entry: any) => {
        const date = format(new Date(entry.emotionDay), "yyyy-MM-dd");
        formatted[date] = entry.emotions; 
      });

      setData(formatted);
    } catch (err) {
      console.error("Error cargando emociones:", err);
    }
  };

  fetchEmotions();
}, [user?.identifier]);


  const year = new Date().getFullYear();
  const start = new Date(`${year}-01-01`);
  const end = new Date(`${year}-12-31`);
  const days = eachDayOfInterval({ start, end });

  const weeks: (Date | null)[][] = [];
  let week: (Date | null)[] = [];

  for (const day of days) {
    if (week.length === 0 && getDay(day) !== 0) {
      for (let i = 0; i < getDay(day); i++) {
        week.push(null);
      }
    }

    week.push(day);

    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }

  if (week.length > 0) {
    while (week.length < 7) {
      week.push(null);
    }
    weeks.push(week);
  }

  const monthLabels: Record<number, string> = {};
  weeks.forEach((week, weekIdx) => {
    week.forEach((day, _dayIdx) => {
      if (day && isFirstDayOfMonth(day)) {
        monthLabels[weekIdx] = format(day, "MMM", { locale: es });
      }
    });
  });

  return (
    <div className="flex font-poppins">
      <div className="flex flex-col gap-[2px] mr-1">
        {dayLabels.map((label, i) => (
          <div
            key={i}
            className="w-4 h-4 text-[10px] font-semibold text-center text-gray-500"
          >
            {label}
          </div>
        ))}
      </div>

      <div className="flex gap-[2px]">
        {weeks.map((week, weekIdx) => (
          <div key={weekIdx} className="flex flex-col gap-[2px] relative">
            {monthLabels[weekIdx] && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-gray-500">
                {monthLabels[weekIdx]}
              </div>
            )}

            {week.map((day, dayIdx) => {
              if (!day) {
                return (
                  <div
                    key={dayIdx}
                    className="flex items-center justify-center text-sm font-wobble w-4 h-4 rounded bg-gray-200"
                    title="Día fuera del año"
                  >
                    <p className="text-red-500 text-xs">x</p>
                  </div>
                );
              }

              const dateStr = format(day, "yyyy-MM-dd");
              const emotion = data[dateStr];
              const color = emotion ? EmotionColors[emotion] : "bg-neutral-200";

              return (
                <div
                  key={dayIdx}
                  className={`w-4 h-4 rounded ${color}`}
                  title={dateStr + (emotion ? ` - ${emotion}` : "")}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
