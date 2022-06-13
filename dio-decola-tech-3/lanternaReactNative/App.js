import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

import imgLightOn from './assets/icons/eco-light.png';
import imgLightOff from './assets/icons/eco-light-off.png';
import imgDioOn from './assets/icons/logo-dio.png';
import imgDioOff from './assets/icons/logo-dio-white.png';

const App = () => {
  const [valorToggle, setToggle] = useState(false); // useState retorna valor, função

  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle); // alterna true e false

  useEffect(() => {
    Torch.switchState(valorToggle); // liga se true, desliga se false
  }, [valorToggle]); // usado para observar um estado (se o valorToggle está mudando)

  useEffect(() => {
    // Ao chacoalhar o celular, o toggle muda
    const subscription = RNShake.addListener(() => {
      setToggle(oldToggle => !oldToggle);
    });
    // essa função será chamada quando o componente for desmontado
    return () => subscription.remove();
  }, []);

  let checkToggle = (trueOn, falseOff) => (valorToggle ? trueOn : falseOff);

  return (
    <View style={checkToggle(style.containerWhite, style.containerBlack)}>
      <TouchableOpacity onPress={handleChangeToggle}>
        <Image
          source={checkToggle(imgLightOn, imgLightOff)}
          style={[style.imgLightSize, checkToggle(style.imgOn, style.imgOff)]}
        />

        <Image
          source={checkToggle(imgDioOn, imgDioOff)}
          style={[style.imgDioSize, checkToggle(style.imgOn, style.imgOff)]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  containerBlack: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerWhite: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  imgOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: '#fff',
  },
  imgLightSize: {
    width: 150,
    height: 150,
  },
  imgDioSize: {
    width: 250,
    height: 250,
  },
});
