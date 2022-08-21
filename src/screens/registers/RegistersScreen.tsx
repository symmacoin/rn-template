/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useMemo } from "react";
import { View, StatusBar } from "react-native";
import LoginScreen, { SocialButton } from "@shared-components/login-screen";
import { useTheme } from "@react-navigation/native";
/**
 * ? Local Imports
 */
import createStyles from "./RegistersScreen.style";
import Text from "@shared-components/text-wrapper/TextWrapper";

interface RegistersScreenProps {}

const RegistersScreen: React.FC<RegistersScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const [username, setUsername] = useState(null);
  const [switchValue, setSwitchValue] = useState(false);
  const [spinnerVisibility, setSpinnerVisibility] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LoginScreen
        logoImageSource={require("@assets/images/logo/logo-example.png")}
        onLoginPress={() => {}}
        onSignupPress={() => {}}
        onEmailChange={(email: string) => {}}
        onPasswordChange={(password: string) => {}}
        onRecoverPress={() => {}}
      />
    </View>
  );
};

export default RegistersScreen;
