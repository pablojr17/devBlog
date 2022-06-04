import { TouchableOpacity, Image, StyleSheet, Text } from "react-native";

export default function CategoryItem({ data }) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <Image
        style={styles.icon}
        source={{
          uri: `http://192.168.1.105:1337${data?.attributes?.icon?.data?.attributes?.url}`,
        }}
      />

      <Text style={styles.name}>{data?.attributes?.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginLeft: 8,
    marginVertical: 8,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  icon: {
    width: 40,
    height: 40,
  },
});
