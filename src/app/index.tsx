import { Colors, FontSize } from "@/constants";
import { styles } from "@/styles/auth.styles";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeMode = (newMode: "login" | "signup") => {
    setMode(newMode);
    setNom("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = () => {
    if (mode === "signup") {
      console.log({ nom, email, password });
    } else {
      console.log({ email, password });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo de l'application */}
      <View style={{ alignItems: "center", marginBottom: 26 }}>
        <Text style={styles.logo}>FinanceApp</Text>
        <Text style={{ fontSize: FontSize.sm, color: Colors.textSecondary }}>
          Maitre de vos finances
        </Text>
      </View>

      {/* Carte */}
      <KeyboardAvoidingView behavior="padding" style={styles.card}>
        {/* Nom */}
        {mode === "signup" && (
          <View style={{ gap: 6 }}>
            <Text style={{ color: Colors.text, fontWeight: "600" }}>Nom</Text>
            <View style={styles.input}>
              <Ionicons
                name="person"
                size={FontSize.md}
                color={Colors.textSecondary}
              />
              <TextInput
                value={nom}
                onChangeText={setNom}
                placeholder="Allassane Traore"
              />
            </View>
          </View>
        )}

        {/* Email */}
        <View style={{ gap: 6 }}>
          <Text style={{ color: Colors.text, fontWeight: "600" }}>Email</Text>
          <View style={styles.input}>
            <Ionicons
              name="mail"
              size={FontSize.md}
              color={Colors.textSecondary}
            />
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="traoreallassane2255@gmail.com"
            />
          </View>
        </View>

        {/* Mot de passe */}
        <View style={{ gap: 6 }}>
          <Text style={{ color: Colors.text, fontWeight: "600" }}>
            Mot de passe
          </Text>
          <View style={styles.input}>
            <Ionicons
              name="lock-closed"
              size={FontSize.md}
              color={Colors.textSecondary}
            />
            <TextInput
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              placeholder="********"
            />
          </View>
        </View>
        {/* Bouton Se connecter */}
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text
            style={{
              color: "#ffffff",
              fontSize: FontSize.xs,
              fontWeight: "600",
            }}
          >
            {mode === "login" ? "Se connecter" : "S'inscrire"}
          </Text>
        </TouchableOpacity>

        {/* Lien vers la page login ou signup */}
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          {mode === "signup" ? (
            <Text
              style={{
                color: Colors.textSecondary,
                fontSize: FontSize.xs,
              }}
            >
              Avez-vous un compte ?{" "}
              <Text
                onPress={() => changeMode("login")}
                style={{ color: Colors.primary }}
              >
                connectez-vous
              </Text>
            </Text>
          ) : (
            <Text
              style={{
                color: Colors.textSecondary,
                fontSize: FontSize.xs,
              }}
            >
              N'avez-vous un compte ?{" "}
              <Text
                onPress={() => changeMode("signup")}
                style={{ color: Colors.primary }}
              >
                Créer-en
              </Text>
            </Text>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
