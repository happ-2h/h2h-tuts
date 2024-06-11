import { Stack } from "expo-router";

const ChapterLayout = () => {
  return <Stack screenOptions={{
    title: "Chapters",
    headerTitleStyle: {
      fontFamily: "Montserrat_600SemiBold",
    }
  }} />
};

export default ChapterLayout;