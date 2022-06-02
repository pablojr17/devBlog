import { StyleSheet, Text, View } from "react-native";

export default function CategoryPosts() {
  return (
    <View style={styles.container}>
      <Text>Pagina CategoryPosts</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
