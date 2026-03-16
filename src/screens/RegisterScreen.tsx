import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { colors } from '../theme/color';
import { FooterStepper } from '../components/FooterStepper';
import { FormField } from '../components/FormField';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

export function RegisterScreen({ navigation }: Props) {
  const [agency, setAgency] = useState<'yes' | 'no'>('yes');

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Create your PopX account</Text>

        <FormField label="Full Name" required placeholder="Marry Doe" />
        <FormField label="Phone number" required placeholder="9876543210" keyboardType="phone-pad" />
        <FormField
          label="Email address"
          required
          placeholder="marry@example.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <FormField label="Password" required placeholder="Enter password" secureTextEntry />
        <FormField label="Company name" placeholder="PopX India" />

        <Text style={styles.radioLabel}>Are you an Agency?*</Text>
        <View style={styles.radioRow}>
          <Pressable style={styles.radioOption} onPress={() => setAgency('yes')}>
            <View style={[styles.radioOuter, agency === 'yes' && styles.radioOuterActive]}>
              {agency === 'yes' ? <View style={styles.radioInner} /> : null}
            </View>
            <Text style={styles.radioText}>Yes</Text>
          </Pressable>

          <Pressable style={styles.radioOption} onPress={() => setAgency('no')}>
            <View style={[styles.radioOuter, agency === 'no' && styles.radioOuterActive]}>
              {agency === 'no' ? <View style={styles.radioInner} /> : null}
            </View>
            <Text style={styles.radioText}>No</Text>
          </Pressable>
        </View>

        <View style={{ flex: 1 }} />
        <Pressable style={styles.createBtn} onPress={() => navigation.navigate('AccountSettings')}>
          <Text style={styles.createBtnText}>Create Account</Text>
        </Pressable>
      </View>

      <FooterStepper
        current={3}
        onHome={() => navigation.navigate('Welcome')}
        onPrev={() => navigation.navigate('Login')}
        onNext={() => navigation.navigate('AccountSettings')}
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
    paddingTop: 20,
    paddingBottom: 14,
  },
  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 18,
    maxWidth: 260,
  },
  radioLabel: {
    marginTop: 2,
    marginBottom: 10,
    color: colors.text,
    fontSize: 14,
    fontWeight: '600',
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#9EA3AE',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  radioOuterActive: {
    borderColor: colors.primary,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  radioText: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '500',
  },
  createBtn: {
    height: 46,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  createBtnText: {
    color: colors.primaryText,
    fontSize: 15,
    fontWeight: '700',
  },
});
