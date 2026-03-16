import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { colors } from '../theme/color';
import { FooterStepper } from '../components/FooterStepper';
import { FormField } from '../components/FormField';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Signin to your PopX account</Text>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>

        <FormField
          label="Email Address"
          placeholder="Enter email address"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <FormField
          label="Password"
          placeholder="Enter password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Pressable style={styles.loginBtn} onPress={() => navigation.navigate('AccountSettings')}>
          <Text style={styles.loginBtnText}>Login</Text>
        </Pressable>
      </View>

      <FooterStepper
        current={2}
        onHome={() => navigation.navigate('Welcome')}
        onPrev={() => navigation.navigate('Welcome')}
        onNext={() => navigation.navigate('Register')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.bg,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 42,
  },
  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
    maxWidth: 250,
  },
  subtitle: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 26,
    maxWidth: 300,
  },
  loginBtn: {
    marginTop: 8,
    height: 46,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CBCBCB',
  },
  loginBtnText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});
