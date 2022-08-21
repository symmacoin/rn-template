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
import styles from "./RegisterScreen.style";
import SocialButton from "../social-button/SocialButton";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

const dummyFunction = () => {};
export interface IRegisterScreenProps {
  disableDivider?: boolean;
  logoImageSource: any;
  disableSocialButtons?: boolean;
  namePlaceholder?: string;
  emailPlaceholder?: string;
  phonePlaceholder?: string;
  passwordPlaceholder?: string;
  confirmPasswordPlaceholder?: string;
  disablePasswordInput?: boolean;
  loginButtonText?: string;
  style?: CustomStyleProp;
  dividerStyle?: CustomStyleProp;
  logoImageStyle?: CustomImageStyleProp;
  textInputContainerStyle?: CustomStyleProp;
  loginButtonStyle?: CustomStyleProp;
  loginTextStyle?: CustomTextStyleProp;
  children?: any;
  onRegisterPress: () => void;
  onNameChange: (name: string) => void;
  onEmailChange: (email: string) => void;
  onPhoneChange: (phone: string) => void;
  onPasswordChange: (password: string) => void;
  onConfirmPasswordChange: (confirmpassword: string) => void;
  onFacebookPress?: () => void;
  onTwitterPress?: () => void;
  onApplePress?: () => void;
  onDiscordPress?: () => void;
}

const RegisterScreen: React.FC<IRegisterScreenProps> = ({
  style,
  dividerStyle,
  logoImageStyle,
  loginTextStyle,
  loginButtonStyle,
  textInputContainerStyle,
  disableDivider,
  logoImageSource,
  onRegisterPress,
  disableSocialButtons,
  disablePasswordInput = false,
  loginButtonText = "Register",
  onNameChange,
  onEmailChange,
  onPhoneChange,
  onPasswordChange,
  onConfirmPasswordChange,
  onFacebookPress = dummyFunction,
  onTwitterPress = dummyFunction,
  onApplePress = dummyFunction,
  onDiscordPress = dummyFunction,
  namePlaceholder = "Name",
  emailPlaceholder = "Email",
  phonePlaceholder = "Phone",
  passwordPlaceholder = "Password",
  confirmPasswordPlaceholder = "Confirm Password",
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
      <TextInput placeholder={namePlaceholder} onChangeText={onNameChange} />
      <TextInput placeholder={emailPlaceholder} onChangeText={onEmailChange} />
      <TextInput placeholder={phonePlaceholder} onChangeText={onPhoneChange} />
      {!disablePasswordInput && (
        <View style={styles.passwordTextInputContainer}>
          <TextInput
            placeholder={passwordPlaceholder}
            secureTextEntry
            onChangeText={onPasswordChange}
          />
          <TextInput
            placeholder={confirmPasswordPlaceholder}
            secureTextEntry
            onChangeText={onConfirmPasswordChange}
          />
        </View>
      )}
    </View>
  );

  const RegisterButton = () => (
    <TouchableOpacity
      style={[styles.loginButtonStyle, loginButtonStyle]}
      onPress={onRegisterPress}
    >
      <Text style={[styles.loginTextStyle, loginTextStyle]}>
        {loginButtonText}
      </Text>
    </TouchableOpacity>
  );

  const Divider = () => <View style={[styles.dividerStyle, dividerStyle]} />;

  const DefaultSocialRegisterButtons = () =>
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
      <RegisterButton />
      {!disableDivider && <Divider />}
    </SafeAreaView>
  );
};

export default RegisterScreen;
