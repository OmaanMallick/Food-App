import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <View style={styles.foodImage} />
          <View style={styles.pepsiImage} />
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Bringing Happiness with delicious food is our goal.<Text style={styles.emoji}>😊</Text></Text>
      </View>
      <View style={styles.footer}>
        <TextInput
          style={styles.input}
          placeholder="Phone number or email"
          placeholderTextColor="#000"
        />
        <TouchableOpacity style={styles.skipButton}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700', // Yellow background
    justifyContent: 'space-between',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 50,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  foodImage: {
    width: 100,
    height: 100,
    backgroundColor: '#ccc', // Placeholder for the food image
    marginRight: 10,
  },
  pepsiImage: {
    width: 50,
    height: 100,
    backgroundColor: '#aaa', // Placeholder for the Pepsi image
  },
  content: {
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  emoji: {
    fontSize: 24,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    height: 50,   
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginRight: 10,
  },
  skipButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  skipButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;
