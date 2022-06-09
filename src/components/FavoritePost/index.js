import { useNavigation } from "@react-navigation/native";
import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Text,
} from "react-native";

const { width: WIDTH } = Dimensions.get("window");

export default function FavoritePost({ data }) {
  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate("Detail", {
      id: data.id,
    });
  }

  return (
    <TouchableOpacity onPress={handleNavigate} style={styles.container}>
      <ImageBackground
        style={styles.cover}
        source={{
          uri: `http://192.168.1.105:1337${data?.attributes?.cover?.data?.attributes?.url}`,
        }}
        blurRadius={3}
        imageStyle={{ borderRadius: 6, opacity: 0.4 }}
        resizeMode="cover"
      >
        <Text style={styles.title} numberOfLines={1}>
          {data?.attributes?.title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 8,
  },
  cover: {
    borderRadius: 8,
    width: WIDTH - 60,
    height: 100,
    justifyContent: "flex-end",
    backgroundColor: "#232630",
  },
  title: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
    paddingVertical: 8,
    paddingHorizontal: 12,
    textShadowColor: "#121212",
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 8,
  },
});
