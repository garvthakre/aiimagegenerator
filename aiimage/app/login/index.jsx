import { View, Text, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import React from 'react';
import { useOAuth } from '@clerk/clerk-expo';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';

const Loginscreen = () => {
  useWarmUpBrowser(); // Warm up the browser on native platforms

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/(tabs)/home', { scheme: 'myapp' }),
      });

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        console.log("Sign in or sign up required");
      }
    } catch (err) {
      console.error('OAuth error', err);
    }
  }, [startOAuthFlow]);

  React.useEffect(() => {
    WebBrowser.maybeCompleteAuthSession();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('./../../assets/images/adaptive-icon.png')}
        style={styles.image}
      />
      <Text style={styles.welcomeText}>Welcome to IMAGEAI</Text>
      <Text style={styles.descriptionText}>create ai ART just on ONE click</Text>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Loginscreen;

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    if (Platform.OS !== 'web') {
      // Warm up and cool down the browser only on native platforms
      void WebBrowser.warmUpAsync();
      return () => {
        void WebBrowser.coolDownAsync();
      };
    }
  }, []);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 470,
    width: '100%',
  },
  welcomeText: {
    padding: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
    borderRadius: 30,
  },
  descriptionText: {
    textAlign: 'center',
    padding: 3,
    marginTop: 2,
  },
  button: {
    padding: 20,
    width: '100%',
    backgroundColor: 'black',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});
