import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { colors } from '../theme/color';
import { FooterStepper } from '../components/FooterStepper';

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

export function WelcomeScreen({ navigation }: Props) {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <View style={{ flex: 1 }} />
        <Text style={styles.title}>Welcome to PopX</Text>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>

        <Pressable style={styles.primaryBtn} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.primaryBtnText}>Create Account</Text>
        </Pressable>

        <Pressable style={styles.secondaryBtn} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.secondaryBtnText}>Already Registered? Login</Text>
        </Pressable>
      </View>

      <FooterStepper current={1} onHome={() => navigation.navigate('Welcome')} onNext={() => navigation.navigate('Login')} />
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
    paddingBottom: 30,
  },
  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 26,
  },
  primaryBtn: {
    height: 46,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    marginBottom: 12,
  },
  primaryBtnText: {
    color: colors.primaryText,
    fontSize: 15,
    fontWeight: '700',
  },
  secondaryBtn: {
    height: 46,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primarySoft,
  },
  secondaryBtnText: {
    color: '#1F133A',
    fontSize: 15,
    fontWeight: '700',
  },
});
