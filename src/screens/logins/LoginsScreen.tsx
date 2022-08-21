/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState, useMemo } from "react";
import { View, StatusBar } from "react-native";
import LoginScreen, { SocialButton } from "@shared-components/login-screen";
import { useTheme } from "@react-navigation/native";
import { SCREENS } from "@shared-constants";
import * as NavigationService from "react-navigation-helpers";

/**
 * ? Local Imports
 */
import createStyles from "./LoginsScreen.style";
import Text from "@shared-components/text-wrapper/TextWrapper";

interface LoginsScreenProps {}

const LoginsScreen: React.FC<LoginsScreenProps> = () => {
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
        onRegisterPress={() => NavigationService.push(SCREENS.REGISTER)}
        onEmailChange={(email: string) => {}}
        onPasswordChange={(password: string) => {}}
        onRecoverPress={() => NavigationService.push(SCREENS.RECOVER)}
      />
    </View>
  );
};

export default LoginsScreen;
