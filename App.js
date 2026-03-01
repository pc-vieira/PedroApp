import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    // O View principal agora tem uma cor de fundo diferente
    <View style={styles.container}>
      
      {/* Criámos um "Cartão" branco para destacar o texto */}
      <View style={styles.card}>
        
        {/* Adicionámos uma imagem de perfil genérica da internet */}
        <Image 
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} 
          style={styles.profilePic} 
        />
        
        {/* Separámos o texto para dar estilos diferentes a cada parte */}
        <Text style={styles.greeting}>Hi!</Text>
        <Text style={styles.subtitle}>my name is</Text>
        <Text style={styles.name}>Pedro Vieira</Text>
        
      </View>

      {/* Mudámos a barra de estado para combinar com o novo design */}
      <StatusBar style="dark" />
    </View>
  );
}

// Aqui é onde a magia acontece!
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2e8f0', // Um fundo azul-acinzentado muito suave
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#ffffff', // Fundo branco para o cartão
    padding: 40, // Espaço em volta do conteúdo
    borderRadius: 20, // Cantos arredondados
    alignItems: 'center', // Centra os itens horizontalmente dentro do cartão
    
    // Sombras para iPhone (iOS)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    
    // Sombra para Android
    elevation: 8, 
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50, // Faz com que a imagem fique num círculo perfeito
    marginBottom: 20, // Dá um espaço entre a imagem e o texto
  },
  greeting: {
    fontSize: 24,
    color: '#64748b', // Cinzento claro
  },
  subtitle: {
    fontSize: 16,
    color: '#94a3b8',
    marginTop: 5,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold', // Letra mais grossa
    color: '#0f172a', // Azul escuro, quase preto
    marginTop: 10,
  },
});