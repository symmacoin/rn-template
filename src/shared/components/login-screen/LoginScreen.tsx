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
import styles from "./LoginScreen.style";
import SocialButton from "../social-button/SocialButton";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

const dummyFunction = () => {};
export interface ILoginScreenProps {
  registerText?: string;
  recoverText?: string;
  disableDivider?: boolean;
  logoImageSource: any;
  disableSocialButtons?: boolean;
  emailPlaceholder?: string;
  passwordPlaceholder?: string;
  disableRegister?: boolean;
  disableRecover?: boolean;
  disablePasswordInput?: boolean;
  loginButtonText?: string;
  style?: CustomStyleProp;
  dividerStyle?: CustomStyleProp;
  logoImageStyle?: CustomImageStyleProp;
  textInputContainerStyle?: CustomStyleProp;
  loginButtonStyle?: CustomStyleProp;
  loginTextStyle?: CustomTextStyleProp;
  registerStyle?: CustomStyleProp;
  registerTextStyle?: CustomTextStyleProp;
  recoverStyle?: CustomStyleProp;
  recoverTextStyle?: CustomTextStyleProp;
  children?: any;
  onLoginPress: () => void;
  onRegisterPress: () => void;
  onRecoverPress: () => void;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
  onFacebookPress?: () => void;
  onTwitterPress?: () => void;
  onApplePress?: () => void;
  onDiscordPress?: () => void;
}

const LoginScreen: React.FC<ILoginScreenProps> = ({
  style,
  dividerStyle,
  logoImageStyle,
  loginTextStyle,
  loginButtonStyle,
  registerTextStyle,
  registerStyle,
  recoverTextStyle,
  recoverStyle,
  textInputContainerStyle,
  registerText = "Create an account",
  recoverText = "Recover Password",
  disableDivider,
  logoImageSource,
  onLoginPress,
  disableSocialButtons,
  disablePasswordInput = false,
  loginButtonText = "Login",
  onRegisterPress,
  onRecoverPress,
  onEmailChange,
  onPasswordChange,
  onFacebookPress = dummyFunction,
  onTwitterPress = dummyFunction,
  onApplePress = dummyFunction,
  onDiscordPress = dummyFunction,
  emailPlaceholder = "Email",
  passwordPlaceholder = "Password",
  disableRegister = false,
  disableRecover = false,
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

  const LoginButton = () => (
    <TouchableOpacity
      style={[styles.loginButtonStyle, loginButtonStyle]}
      onPress={onLoginPress}
    >
      <Text style={[styles.loginTextStyle, loginTextStyle]}>
        {loginButtonText}
      </Text>
    </TouchableOpacity>
  );

  const Register = () => (
    <TouchableOpacity
      style={[styles.registerStyle, registerStyle]}
      onPress={onRegisterPress}
    >
      <Text style={[styles.registerTextStyle, registerTextStyle]}>
        {registerText}
      </Text>
    </TouchableOpacity>
  );

  const Recover = () => (
    <TouchableOpacity
      style={[styles.recoverStyle, recoverStyle]}
      onPress={onRecoverPress}
    >
      <Text style={[styles.recoverTextStyle, recoverTextStyle]}>
        {recoverText}
      </Text>
    </TouchableOpacity>
  );

  const Divider = () => <View style={[styles.dividerStyle, dividerStyle]} />;

  const DefaultSocialLoginButtons = () =>
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
      <LoginButton />
      {!disableRegister && <Register />}
      {!disableRecover && <Recover />}
      {!disableDivider && <Divider />}
      <View style={styles.socialLoginContainer}>
        {children || <DefaultSocialLoginButtons />}
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
