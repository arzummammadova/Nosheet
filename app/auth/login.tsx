import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
     <Image source={require("../../assets/images/logo.jpg")} style={styles.foodImage} />

      <Text style={styles.title}>Daxil ol</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Şifrə"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={() => alert("Daxil oldun ✅")}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/auth/registerr")}>
        <Text style={styles.link}>Hesabın yoxdur? Qeydiyyat →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#fff" },
  logo: { width: 100, height: 100, marginBottom: 20 },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 20, color: "#00AA13" },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#00AA13",
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#00AA13",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 18 },
   foodImage: { width: 120, height: 120, marginBottom: 40, borderRadius: 10 },
  link: { color: "#00AA13", fontWeight: "bold" },
});
