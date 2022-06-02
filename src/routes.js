import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryPosts from "./pages/CategoryPosts";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Search from "./pages/Search";

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          title: "Detalhes",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#232630",
          },
        }}
      />
      <Stack.Screen
        name="CategoryPosts"
        component={CategoryPosts}
        options={{
          title: "Categoria",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#232630",
          },
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: "Procurando algo?",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#232630",
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
