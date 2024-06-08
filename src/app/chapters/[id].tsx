import { Stack, useLocalSearchParams } from "expo-router";
import { MaterialCommunityIcons } from '@expo/vector-icons'

const TOC = () => {
  const params = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{
        headerRight: () => <MaterialCommunityIcons name={params.icon} size={32} />,
        headerTitleAlign: "center"
      }} />
    </>
  );
};

export default TOC;