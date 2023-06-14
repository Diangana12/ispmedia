import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
//import { useAudioPlayer } from 'react-use-audio-player';
import { Audio } from 'expo-av';
import BottomNav from '../components/BottomNav';

const profileImage = require('../assets/artist.webp');

const RadioPage = () => { 

  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const loadAudio = async () => {
      try {
        const { sound } = await Audio.Sound.createAsync(
          { uri: 'https://radios.vpn.sapo.pt/AO/radio1.mp3' },
          { shouldPlay: false }
        );
        setSound(sound);
      } catch (error) {
        console.error('Error loading audio:', error);
      }
    };

    loadAudio();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const handlePlayPause = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

return (
  <View style={styles.container}>

    <View style={styles.header}>
      <Text style={styles.label}>Radio</Text>
      <Image source={profileImage} style={styles.profileImage} />
    </View>
    <TouchableOpacity style={styles.playButton} onPress={handlePlayPause}>
        <Text style={styles.playButtonText}>
          {isPlaying ? 'Pause' : 'Play'}
        </Text>
      </TouchableOpacity>

    <BottomNav></BottomNav>
  </View>
);
};

export default RadioPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    flexDirection: 'row',
    marginTop: 70,
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 40,
    marginRight: 10,
  },
  iconSettings: {
    marginRight: 5,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'grey',
    paddingRight: 200,
    opacity: 0.5,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  playButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  playButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

