import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  RadialLinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar, Line, Pie, Radar } from "react-chartjs-2";

import { Emotions } from "../../../../utils/emotion";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
);

type EmotionEntry = {
  emotions: string;
  emotionDay: string;
};

type RawEmotion = {
  id: number;
  documentId: string;
  emotions: string;
  createdAt: string;
};

type Props = {
  getEmotionsAssignedToUser: () => Promise<{
    emotions: RawEmotion[];
  }>;
};

ChartJS.defaults.font.family = "Poppins";

function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
  return array.reduce((result: Record<string, T[]>, item: T) => {
    const groupKey = String(item[key]);
    (result[groupKey] = result[groupKey] || []).push(item);
    return result;
  }, {});
}

export default function EmotionStats({ getEmotionsAssignedToUser }: Props) {
  const [dataFromApi, setDataFromApi] = useState<EmotionEntry[]>([]);

  useEffect(() => {
    getEmotionsAssignedToUser().then((res) => {
      if (res && Array.isArray(res.emotions)) {
        setDataFromApi(
          res.emotions.map((entry) => ({
            emotions: entry.emotions,
            emotionDay: entry.createdAt.split("T")[0],
          })),
        );
      }
    });
  }, [getEmotionsAssignedToUser]);

  const emotionsCount: Record<string, number> = {};
  dataFromApi.forEach((item) => {
    emotionsCount[item.emotions] = (emotionsCount[item.emotions] || 0) + 1;
  });

  const getColorForEmotion = (emotionTitle: string) => {
    const found = Emotions.find(
      (e) => e.title.toLowerCase() === emotionTitle.toLowerCase(),
    );
    return found ? found.color : "#999999";
  };

  const emotionLabels = Object.keys(emotionsCount);

  const colors = emotionLabels.map(getColorForEmotion);

  const barData = {
    labels: emotionLabels,
    datasets: [
      {
        label: "Emotions frequency",
        data: Object.values(emotionsCount),
        backgroundColor: colors,
      },
    ],
  };

  const groupedByDate = groupBy(dataFromApi, "emotionDay");
  const dates = Object.keys(groupedByDate).sort();
  const allEmotions = [
    ...new Set(dataFromApi.map((item) => item.emotions)),
  ].sort();

  const datasetsLine = allEmotions.map((emotion) => ({
    label: emotion,
    data: dates.map(
      (date) =>
        groupedByDate[date].filter((item) => item.emotions === emotion).length,
    ),
    borderColor: getColorForEmotion(emotion),
    backgroundColor: "transparent",
    tension: 0.3,
  }));

  const lineData = {
    labels: dates,
    datasets: datasetsLine,
  };

  const pieData = {
    labels: emotionLabels,
    datasets: [
      {
        label: "Emotions frequency",
        data: Object.values(emotionsCount),
        backgroundColor: colors,
        hoverOffset: 30,
      },
    ],
  };

  const totalEntries = dataFromApi.length;
  const radarData = {
    labels: emotionLabels,
    datasets: [
      {
        label: "Emotion distribution",
        data: Object.values(emotionsCount).map((count) => count / totalEntries),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        pointBackgroundColor: "rgba(54, 162, 235, 1)",
      },
    ],
  };

  return dataFromApi.length >= 1 ? (
    <div className="flex flex-wrap gap-8 justify-center">
      <div className="bg-gray-100 p-6 rounded-md shadow-md w-[400px]">
        <h2 className="font-wobble text-center mb-4">Emotions frequency</h2>
        <Bar data={barData} className="font-poppins" />
      </div>

      <div className="bg-gray-100 p-6 rounded-md shadow-md w-[400px]">
        <h2 className="font-wobble text-center mb-4">Emotions evolution</h2>
        <Line data={lineData} />
      </div>

      <div className="bg-gray-100 p-6 rounded-md shadow-md w-[400px]">
        <h2 className="font-wobble text-center mb-4">Emotions frequency</h2>
        <Pie data={pieData} />
      </div>

      <div className="bg-gray-100 p-6 rounded-md shadow-md w-[400px]">
        <h2 className="font-wobble text-center mb-4">Emotion distribution</h2>
        <Radar data={radarData} />
      </div>
    </div>
  ) : (
    <p>No statistics yet</p>
  );
}
