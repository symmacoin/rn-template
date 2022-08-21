/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unstable-nested-components */
import * as React from "react";
import {
  Image,
  View,
  Text,
  StyleProp,
  ViewStyle,
  StatusBar,
  TextStyle,
  ImageStyle,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import TextInput from "react-native-text-input-interactive";
/**
 * ? Local Imports
 */
import styles from "./RecoverScreen.style";
import SocialButton from "../social-button/SocialButton";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

const dummyFunction = () => {};
export interface IRecoverScreenProps {
  disableDivider?: boolean;
  logoImageSource: any;
  disableSocialButtons?: boolean;
  emailPlaceholder?: string;
  passwordPlaceholder?: string;
  disablePasswordInput?: boolean;
  loginButtonText?: string;
  style?: CustomStyleProp;
  dividerStyle?: CustomStyleProp;
  logoImageStyle?: CustomImageStyleProp;
  textInputContainerStyle?: CustomStyleProp;
  loginButtonStyle?: CustomStyleProp;
  loginTextStyle?: CustomTextStyleProp;
  children?: any;
  onRecoverPress: () => void;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
  onFacebookPress?: () => void;
  onTwitterPress?: () => void;
  onApplePress?: () => void;
  onDiscordPress?: () => void;
}

const RecoverScreen: React.FC<IRecoverScreenProps> = ({
  style,
  dividerStyle,
  logoImageStyle,
  loginTextStyle,
  loginButtonStyle,
  textInputContainerStyle,
  disableDivider,
  logoImageSource,
  onRecoverPress,
  disableSocialButtons,
  disablePasswordInput = true,
  loginButtonText = "Recover",
  onEmailChange,
  onPasswordChange,
  onFacebookPress = dummyFunction,
  onTwitterPress = dummyFunction,
  onApplePress = dummyFunction,
  onDiscordPress = dummyFunction,
  emailPlaceholder = "Email",
  passwordPlaceholder = "Password",
  children,
}) => {
  const Logo = () => (
    <Image
      resizeMode="contain"
      source={logoImageSource}
      style={[styles.logoImageStyle, logoImageStyle]}
    />
  );

  const TextInputContainer = () => (
    <View style={[styles.textInputContainer, textInputContainerStyle]}>
      <TextInput placeholder={emailPlaceholder} onChangeText={onEmailChange} />
      {!disablePasswordInput && (
        <View style={styles.passwordTextInputContainer}>
          <TextInput
            placeholder={passwordPlaceholder}
            secureTextEntry
            onChangeText={onPasswordChange}
          />
        </View>
      )}
    </View>
  );

  const RecoverButton = () => (
    <TouchableOpacity
      style={[styles.loginButtonStyle, loginButtonStyle]}
      onPress={onRecoverPress}
    >
      <Text style={[styles.loginTextStyle, loginTextStyle]}>
        {loginButtonText}
      </Text>
    </TouchableOpacity>
  );

  const Divider = () => <View style={[styles.dividerStyle, dividerStyle]} />;

  const DefaultSocialRecoverButtons = () =>
    !disableSocialButtons ? (
      <>
        <SocialButton
          text="Continue with Facebook"
          textStyle={styles.facebookSocialButtonTextStyle}
          onPress={onFacebookPress}
        />
        <SocialButton
          text="Continue with Twitter"
          style={styles.socialButtonStyle}
          textStyle={styles.twitterSocialButtonTextStyle}
          imageSource={require("./local-assets/twitter.png")}
          onPress={onTwitterPress}
        />
        <SocialButton
          text="Continue with Apple"
          style={styles.socialButtonStyle}
          imageSource={require("./local-assets/apple.png")}
          onPress={onApplePress}
        />
        <SocialButton
          text="Continue with Discord"
          style={styles.socialButtonStyle}
          textStyle={styles.discordSocialButtonTextStyle}
          imageSource={require("./local-assets/discord.png")}
          onPress={onDiscordPress}
        />
      </>
    ) : null;

  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar barStyle="dark-content" />
      <Logo />
      <TextInputContainer />
      <RecoverButton />
      {!disableDivider && <Divider />}
    </SafeAreaView>
  );
};

export default RecoverScreen;
