import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Logo və ya şəkil */}
    <Image source={require("../../assets/images/logo.jpg")} style={styles.foodImage} />


      <Text style={styles.title}> Yemək Sifarişinə Xoş Gəldiniz</Text>
      <Text style={styles.subtitle}>Ən dadlı yeməklər bir klik uzağında!</Text>

      {/* Düymələr */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/auth/login")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#343333ff" }]}
        onPress={() => router.push("/auth/registerr")}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#15a326ff" }]}
        onPress={() => alert("Menyu gələcək 🍕")}
      >
        <Text style={styles.buttonText}>Menyuya Bax</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    gap: 20, 
    backgroundColor: "#fff", 
    paddingHorizontal: 20 
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: { 
    fontSize: 26, 
    fontWeight: "bold", 
    marginBottom: 10, 
    textAlign: "center" 
  },
  subtitle: { 
    fontSize: 16, 
    color: "#666", 
    marginBottom: 30, 
    textAlign: "center" 
  },
  button: {
    backgroundColor: "#00AA13",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: { 
    color: "#fff", 
    fontSize: 18, 
    fontWeight: "bold" 
  },
    foodImage: { width: 80, height: 80, marginBottom: 10, borderRadius: 10 },

});
