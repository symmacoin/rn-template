/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useMemo } from "react";
import { View, StatusBar } from "react-native";
import RegisterScreen from "@shared-components/register-screen";
import { useTheme } from "@react-navigation/native";
/**
 * ? Local Imports
 */
import createStyles from "./RegistersScreen.style";

interface RegistersScreenProps {}

const RegistersScreen: React.FC<RegistersScreenProps> = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  let usernames = "";
  let usermails = "";
  let userphones = "";
  let userpasswords = "";
  let userconfirmpasswords = "";

  const [username, setUsername] = useState("");
  const [userphone, setUserphone] = useState("");
  const [usermail, setUsermail] = useState("");
  const [userpassword, setUserpassword] = useState("");

  const RegisterPress = () => {
    if (
      usernames !== "" &&
      usermails !== "" &&
      userphones !== "" &&
      userpasswords !== "" &&
      userconfirmpasswords !== "" &&
      userpasswords === userconfirmpasswords
    ) {
      setUserpassword(userpasswords);
      setUsername(usernames);
      setUserphone(userphones);
      setUsermail(usermails);
      console.log("REGISTER", usernames, usermails, userphones, userpasswords);
    } else {
      console.log(
        "error register",
        usernames,
        usermails,
        userphones,
        userpasswords,
        userconfirmpasswords,
      );
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <RegisterScreen
        logoImageSource={require("@assets/images/logo/logo-example.png")}
        onEmailChange={(email: string) => {
          usermails = email;
        }}
        onPasswordChange={(password: string) => {
          userpasswords = password;
        }}
        onNameChange={(name: string) => {
          usernames = name;
        }}
        onPhoneChange={(phone: string) => {
          userphones = phone;
        }}
        onConfirmPasswordChange={(confirmpassword: string) => {
          userconfirmpasswords = confirmpassword;
        }}
        onRegisterPress={() => {
          RegisterPress();
        }}
      />
    </View>
  );
};

export default RegistersScreen;
