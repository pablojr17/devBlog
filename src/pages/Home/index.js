import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import api from "../../services/api";
import CategoryItem from "../../components/CategoryItem";
import { setFavorite, getFavorite } from "../../services/favorite";
import FavoritePost from "../../components/FavoritePost";

export default function Home() {
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);
  const [favCategory, setFavCategory] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("/api/categories?populate=icon");
      setCategories(data.data);
    }
    loadCategories();
  }, []);

  useEffect(() => {
    async function loadFavCategory() {
      const response = await getFavorite();
      setFavCategory(response);
    }
    loadFavCategory();
  }, []);

  async function handleFavorite(id) {
    const response = await setFavorite(id);
    setFavCategory(response);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>DevBlog</Text>

        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <Feather name="search" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{ paddingRight: 12 }}
        style={styles.categories}
        data={categories}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <CategoryItem data={item} favorite={() => handleFavorite(item.id)} />
        )}
      />

      <View style={styles.main}>
        {favCategory.length !== 0 && (
          <FlatList
            style={{ marginTop: 50, maxHeight: 100, paddingStart: 18 }}
            contentContainerStyle={{ paddingEnd: 18 }}
            data={favCategory}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <FavoritePost data={item} />}
          />
        )}

        <Text
          style={[
            styles.title,
            { marginTop: favCategory.length > 0 ? 14 : 46 },
          ]}
        >
          Conteúdos em alta
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232630",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 18,
    marginTop: 18,
    marginBottom: 24,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  categories: {
    maxHeight: 115,
    backgroundColor: "#efefef",
    marginHorizontal: 18,
    borderRadius: 8,
    zIndex: 9,
  },
  main: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: -30,
  },
  title: {
    fontSize: 21,
    paddingHorizontal: 18,
    marginBottom: 14,
    fontWeight: "bold",
    color: "#162133",
  },
});
