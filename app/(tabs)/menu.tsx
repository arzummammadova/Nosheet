import React from "react";
import { FlatList, Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

const products = [
  { id: "1", name: "Pizza Margherita", price: "15₼", uri: "https://images.unsplash.com/photo-1601924582975-3e0f1b9aa223?auto=format&fit=crop&w=800&q=80" },
  { id: "2", name: "Classic Burger", price: "10₼", uri: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80" },
  { id: "3", name: "Fresh Salad", price: "7₼", uri: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=800&q=80" },
];

export default function MenuScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Menyu</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.uri }} style={styles.image} resizeMode="cover" />
            <View style={styles.cardContent}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
            <TouchableOpacity onPress={() => router.push(`/menu/${item.id}`)}>
  <Text>View Details</Text>
</TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F5F5F5" },
  title: { fontSize: 32, fontWeight: "bold", marginBottom: 20, color: "#333", marginLeft: 5 },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  image: { width: width * 0.3, height: width * 0.3, borderRadius: 15 },
  cardContent: { flex: 1, marginLeft: 15 },
  name: { fontSize: 20, fontWeight: "bold", color: "#222", marginBottom: 5 },
  price: { fontSize: 18, color: "#888", marginBottom: 10 },
  button: {
    backgroundColor: "#FF6347",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
