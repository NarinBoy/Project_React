import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [profileData, setProfileData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Narintron-KU/narintron_namecard/refs/heads/main/narintron_namecard.json')
      .then((res) => res.json())
      .then((data) => {
        setProfileData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.body}>
      {profileData.map((person, index) => (
        <View style={styles.card} key={index}>
          <Image source={{ uri: person.image }} style={styles.profileImg} />
          <Text style={styles.name}>{person.name}</Text>
          <Text style={styles.title}>{person.title}</Text>
          <Text style={styles.detail}>Phone: {person.phone}</Text>
          <Text style={styles.detail}>Email: {person.email}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#f2f2f2',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 20,
    },
    card: { 
        backgroundColor: '#ffffff',
        padding: 10,
        width: 250,
        borderRadius: 12,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        alignItems: 'center',
    },
    profileImg: {
        borderRadius: 40,
        width: 75,
        height: 75,
        marginBottom: 15,
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    title: {
        color: '#555',
        marginBottom: 10,
    },
    detail: {
        color: '#555',
        fontSize: 12,
        marginBottom: 5,
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    error: {
        fontSize: 16,
        color: 'red',
    }
});