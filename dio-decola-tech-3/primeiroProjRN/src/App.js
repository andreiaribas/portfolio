import React from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  SafeAreaView,
  Text,
  Pressable,
  Linking,
} from 'react-native';

const hueColor = '300';
const corPrimaria = `hsl(${hueColor}, 0%, 0%)`;
const bordaImg = `hsl(${hueColor}, 60%, 70%)`;
const corTextoTitle = `hsl(${hueColor}, 60%, 80%)`;
const corTextoNickname = `hsl(${hueColor}, 20%, 50%)`;
const corTextoNormal = `hsl(${hueColor}, 20%, 100%)`;

const linkImgGitHub = 'https://avatars.githubusercontent.com/u/95408914?v=4';
const tamanhoImg = 200;
const meuPerfilGitHub = 'https://github.com/andreiaribas';

const goToMyGitHub = async () => {
  const res = await Linking.canOpenURL(meuPerfilGitHub);
  if (res) {
    await Linking.openURL(meuPerfilGitHub);
  }
};

const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.content}>
        <StatusBar backgroundColor={corPrimaria} barStyle="light-content" />
        <Image
          accessibilityLabel="Andreia enquanto estuda no notebook"
          style={style.avatar}
          source={{uri: linkImgGitHub}}
        />
        <Text accessibilityLabel="Nome: Andreia Ribas" style={style.titleText}>
          Andreia Ribas
        </Text>
        <Text
          accessibilityLabel="Nickname: Andreia Ribas"
          style={style.nickname}>
          andreiaribas
        </Text>
        <Text
          accessibilityLabel="Descrição: Estudando Análise e Desenvolvimento de Sistemas. HTML5 / CSS3 /
          JavaScript"
          style={style.description}>
          Estudando Análise e Desenvolvimento de Sistemas. HTML5 / CSS3 /
          JavaScript
        </Text>
      </View>
      <Pressable onPress={goToMyGitHub}>
        <View style={style.button}>
          <Text style={[style.description, {fontSize: 16}]}>
            Abrir no GitHub
          </Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: corPrimaria,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: tamanhoImg,
    width: tamanhoImg,
    borderRadius: tamanhoImg / 2,
    borderColor: bordaImg,
    borderWidth: 3,
  },
  titleText: {
    marginTop: 15,
    color: corTextoTitle,
    fontSize: 24,
    fontWeight: '600',
  },
  nickname: {
    color: corTextoNickname,
    fontSize: 18,
  },
  description: {
    color: corTextoNormal,
    fontSize: 14,
    fontWeight: '600',
  },
  button: {
    backgroundColor: corTextoNickname,
    borderRadius: 30,
    padding: 15,
  },
});
