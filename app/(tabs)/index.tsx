// บรรทัดเหล่านี้ที่ประกาศ useState ไม่จำเป็นแล้วสำหรับไฟล์ local JSON
// import React, { useState, useEffect } from 'react';
import React from 'react'; // <-- ไม่ต้องมี useState, useEffect ถ้าใช้แค่ไฟล์ local JSON
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, Platform } from 'react-native';
// import ParallaxScrollView from 'react-native-parallax-scroll-view'; // ใช้ถ้าต้องการ parallax effect
import nindamProfileData from './nindam_profile.json'; // <-- ให้แน่ใจว่าใช้ './' สำหรับไฟล์ที่อยู่ใน directory เดียวกัน // <-- แก้ไขตรงนี้: import ไฟล์ JSON เข้ามาโดยตรง

const windowWidth = Dimensions.get('window').width;

export default function App() {
  // ลบ useEffect นี้ออกไป
  // useEffect(() => {
  //   fetch('C:/Users/Admin/NarinBoy/app/(tabs)/nindam_profile.txt')
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch profile data');
  //       }
  //       return response.json();
  //     })
  //     .then(data => setProfile(data))
  //     .catch(err => setError(err.message));
  // }, []);

  // ประกาศตัวแปร profile ให้รับค่าจากไฟล์ที่ import เข้ามาโดยตรง
  const profile = nindamProfileData; // 

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.body}>
        {/* ลบเงื่อนไข error และ loading ออก เพราะข้อมูลพร้อมใช้แล้ว */}
        {/* {error ? (
          <Text style={styles.error}>Error: {error}</Text>
        ) : !profile ? (
          <Text style={styles.loading}>Loading...</Text>
        ) : ( */}
        {profile && ( // ตรวจสอบว่ามีข้อมูล profile (ซึ่งควรจะมีเสมอเมื่อ import โดยตรง)
          <View style={styles.card}>
            <Image
              source={{ uri: 'http://nindam.ddns.net/web/ipsubject_800/sn.jpg' }}
              style={styles.profileImg}
            />
            <Text style={styles.name}>{profile.name}</Text>
            <Text style={styles.title}>{profile.title}</Text>
            <Text style={styles.detail}>Phone: {profile.phone}</Text>
            <Text style={styles.detail}>Email: {profile.email}</Text>
          </View>
        )}
        {/* )} */}
        
        {/* ส่วน Card อื่นๆ ที่คุณมีอยู่ */}
        <View style={styles.card}>
          <Image
            source={{ uri: 'http://nindam.ddns.net/web/ipsubject_800/user-icon.jpg' }}
            style={styles.profileImg}
          />
          <Text style={styles.name}>Surasit Ainwiset</Text>
          <Text style={styles.title}>Computer Science Professor</Text>
          <Text style={styles.detail}>Phone: +66 987 654 999</Text>
          <Text style={styles.detail}>Email: devid@example.com</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png' }}
            style={styles.profileImg}
          />
          <Text style={styles.name}>Saksit Kumkeaw</Text>
          <Text style={styles.title}>Computer Science Professor</Text>
          <Text style={styles.detail}>Phone: +66 987 654 321</Text>
          <Text style={styles.detail}>Email: jane.smith@example.com</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  body: {
    backgroundColor: '#f2f2f2',
    flex: 1, // [cite: 8]
    justifyContent: 'center', // [cite: 8]
    alignItems: 'center', // [cite: 9]
    flexDirection: 'column', // [cite: 8]
    gap: 20, // [cite: 8]
    width: '100%',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    width: 250, // [cite: 8]
    borderRadius: 12, // [cite: 8]
    elevation: 4, // for shadow on Android [cite: 8]
    shadowColor: '#000', // for shadow on iOS [cite: 8]
    shadowOffset: { width: 0, height: 4 }, // [cite: 8]
    shadowOpacity: 0.1, // [cite: 8]
    shadowRadius: 8, // [cite: 9]
    alignItems: 'center', // [cite: 9]
  },
  profileImg: {
    borderRadius: 50, // [cite: 9]
    width: 100, // [cite: 9]
    height: 100, // [cite: 9]
    marginBottom: 15, // [cite: 9]
  },
  name: {
    fontSize: 15, // [cite: 9]
    fontWeight: 'bold', // [cite: 9]
    marginBottom: 5, // [cite: 9]
  },
  title: {
    color: '#555', // [cite: 9]
    marginBottom: 10, // [cite: 9]
  },
  detail: {
    color: '#555', // [cite: 9]
    fontSize: 14, // [cite: 9]
    marginBottom: 5, // [cite: 9]
  },
  loading: {
    fontSize: 16, // [cite: 9]
    color: '#555', // [cite: 10]
  },
  error: {
    fontSize: 16, // [cite: 10]
    color: 'red', // [cite: 10]
  },
});