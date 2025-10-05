import { useLocalSearchParams, Stack } from "expo-router";
import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const products = [
  { id: "1", name: "Pizza Margherita", price: "15₼", uri: "https://images.unsplash.com/photo-1601924582975-3e0f1b9aa223?auto=format&fit=crop&w=800&q=80" },
  { id: "2", name: "Classic Burger", price: "10₼", uri: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80" },
  { id: "3", name: "Fresh Salad", price: "7₼", uri: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=800&q=80" },
];

export default function ProductDetail() {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <>
        <Stack.Screen 
          options={{
            title: "Məhsul",
            headerShown: true,
          }}
        />
        <SafeAreaView style={styles.container}>
          <Text>Məhsul tapılmadı</Text>
        </SafeAreaView>
      </>
    );
  }

  return (
    <>
      <Stack.Screen 
        options={{
          title: product.name,
          headerShown: true,
          headerBackTitle: "Geri",
        }}
      />
      <SafeAreaView style={styles.container}>
        <Image source={{ uri: product.uri }} style={styles.image} resizeMode="cover" />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F5F5F5" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 10 },
  image: { width: width * 0.9, height: width * 0.6, borderRadius: 15, marginBottom: 20 },
  price: { fontSize: 22, fontWeight: "600", color: "#FF6347" },
});