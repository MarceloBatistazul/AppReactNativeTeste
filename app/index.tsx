import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
 
  const handleLogin = async () => {
    try {
      const resposta = await fetch('http://localhost:8081', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email }),
      });

      const dados = await resposta.json();

      if (resposta.ok) {
        Alert.alert('Sucesso', dados.mensagem);
      } else {
        Alert.alert('Erro', dados.mensagem || 'Falha no login');
      }
    } catch (erro) {
      console.error(erro);
      Alert.alert('Erro', 'Não foi possível conectar ao servidor.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
