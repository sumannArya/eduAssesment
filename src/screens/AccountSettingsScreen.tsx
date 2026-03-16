import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../navigation/types';
import { FooterStepper } from '../components/FooterStepper';
import { colors } from '../theme/color';

type Props = NativeStackScreenProps<RootStackParamList, 'AccountSettings'>;

export function AccountSettingsScreen({ navigation }: Props) {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Account Settings</Text>
        </View>

        <View style={styles.profileBlock}>
          <View style={styles.row}>
            <View>
              <Image
                source={{ uri: 'https://i.pravatar.cc/120?img=47' }}
                style={styles.avatar}
              />
              <View style={styles.camBadge}>
                <Ionicons name="camera" size={12} color="#fff" />
              </View>
            </View>

            <View style={{ marginLeft: 14 }}>
              <Text style={styles.name}>Marry Doe</Text>
              <Text style={styles.email}>Marry@Gmail.Com</Text>
            </View>
          </View>

          <Text style={styles.bio}>
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing{"\n"}
            Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut{"\n"}
            Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </Text>
        </View>

        <View style={styles.dashed} />
        <View style={{ flex: 1 }} />
        <View style={styles.dashed} />
      </View>

      <FooterStepper
        current={4}
        onHome={() => navigation.navigate('Welcome')}
        onPrev={() => navigation.navigate('Register')}
        onNext={undefined}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.bg, justifyContent: 'space-between' },
  content: { flex: 1 },
  header: {
    height: 70,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFF2',
  },
  headerText: { color: '#404550', fontSize: 34 / 1.4, fontWeight: '700' },
  profileBlock: { paddingHorizontal: 18, paddingTop: 18 },
  row: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 76, height: 76, borderRadius: 38 },
  camBadge: {
    position: 'absolute',
    bottom: 2,
    right: -1,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: { color: '#343843', fontSize: 24 / 1.4, fontWeight: '700', marginBottom: 3 },
  email: { color: '#4B5563', fontSize: 21 / 1.4, fontWeight: '600' },
  bio: {
    color: '#4E5561',
    marginTop: 18,
    lineHeight: 24,
    fontSize: 21 / 1.4,
    fontWeight: '600',
  },
  dashed: { borderTopWidth: 1, borderTopColor: '#D9D9DF', borderStyle: 'dashed', marginTop: 22 },
});