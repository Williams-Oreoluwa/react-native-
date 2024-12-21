import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import { Link } from "expo-router";

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        resizeMode="cover"
        source={
          "https://media.istockphoto.com/id/1400194993/photo/cappuccino-art.jpg?s=2048x2048&w=is&k=20&c=0Nb5dW0VZAsR-Udu4tnojRpnhmpuwuW1ml4b6bCBsf4="
        }
      >
        <Text style={styles.text}>Coffee shop</Text>
        <Link style={styles.link} href={"/contact"} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Contact us</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 120,
  },
  link: {
    color: "#fff",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    textDecorationLine: "underline",
    padding: 4,
    marginHorizontal: "auto",
  },

  button: {
    height: 60,
    width:100,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,.75)",
    justifyContent:"center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    padding: 4,
    marginHorizontal: "auto",
    textTransform:'capitalize'
   

  },
});
