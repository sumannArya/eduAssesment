import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { colors } from '../theme/color';

type Props = {
  current: number;
  total?: number;
  onHome: () => void;
  onPrev?: () => void;
  onNext?: () => void;
};

export function FooterStepper({ current, total = 4, onHome, onPrev, onNext }: Props) {
  return (
    <View style={styles.wrap}>
      <Pressable style={styles.iconBtn} onPress={onHome}>
        <MaterialIcons name="home" size={24} color="#8B8B8E" />
      </Pressable>

      <Pressable style={styles.iconBtn} onPress={onPrev} disabled={!onPrev}>
        <Ionicons name="chevron-back" size={22} color={onPrev ? '#8B8B8E' : '#C8C8CB'} />
      </Pressable>

      <Text style={styles.count}>{current} of {total}</Text>

      <Pressable style={styles.iconBtn} onPress={onNext} disabled={!onNext}>
        <Ionicons name="chevron-forward" size={22} color={onNext ? '#8B8B8E' : '#C8C8CB'} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    height: 58,
    borderTopWidth: 1,
    borderTopColor: '#ECECEF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bg,
    gap: 2,
  },
  iconBtn: {
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    color: '#334155',
    fontSize: 22 / 1.4,
    marginHorizontal: 6,
    fontWeight: '500',
  },
});