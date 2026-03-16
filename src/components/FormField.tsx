import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { colors } from '../theme/colors';

type Props = TextInputProps & {
  label: string;
  required?: boolean;
};

export function FormField({ label, required, style, ...props }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}{required ? '*' : ''}
      </Text>
      <TextInput
        style={[styles.input, style]}
        placeholderTextColor="#A6A6AB"
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
  },
  label: {
    color: colors.label,
    fontSize: 14,
    marginLeft: 10,
    marginBottom: 6,
    fontWeight: '600',
  },
  input: {
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 14,
    color: colors.text,
    fontSize: 16,
    backgroundColor: '#F8F8FA',
  },
});