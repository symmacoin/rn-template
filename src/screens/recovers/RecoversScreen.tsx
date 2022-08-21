/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useMemo } from "react";
import { View, StatusBar } from "react-native";
import RecoverScreen from "@shared-components/recover-screen";
import { useTheme } from "@react-navigation/native";
/**
 * ? Local Imports
 */
import createStyles from "./RecoversScreen.style";

interface RecoversScreenProps {}

const RecoversScreen: React.FC<RecoversScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  let usermails = "";

  const [usermail, setUsermail] = useState("");

  const Recover = () => {
    setUsermail(usermails);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <RecoverScreen
        logoImageSource={require("@assets/images/logo/logo-example.png")}
        onEmailChange={(email: string) => {
          usermails = email;
        }}
        onPasswordChange={() => {}}
        onRecoverPress={() => {
          Recover();
        }}
      />
    </View>
  );
};

export default RecoversScreen;
