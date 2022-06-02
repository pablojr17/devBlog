import { StyleSheet, Text, View } from "react-native";

export default function Detail() {
  return (
    <View style={styles.container}>
      <Text>Pagina Detail</Text>
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
