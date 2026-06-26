import { Colors, FontSize } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.background,
  },

  logo: {
    fontSize: FontSize["2xl"],
    color: Colors.primary,
    fontWeight: "bold",
  },

  card: {
    gap: 20,
    backgroundColor: Colors.surface,
    width: 300,
    padding: 20,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 10,
  },

  input: {
    gap: 4,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    fontSize: FontSize.xs,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
  },

  button: {
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    marginBottom: 2,
    borderRadius: 6,
  },
});
