import {View} from 'react-native';
import React from 'react';
import {
  ContainerComponent,
  FabComponent,
  SectionComponent,
  TextComponent,
} from '../components';

const HelpScreen = () => {
  return (
    <View style={{flex: 1}}>
      <FabComponent
        iconName="arrow-back"
        styles={{top: 20, left: 16}}
        // Navegacion con drawer
        onPress={() => {}}
      />

      <ContainerComponent styles={{alignItems: 'center'}}>
        <View style={{top: 30, alignItems: 'center'}}>
          <TextComponent text="Soporte" size={30} font="bold" />
        </View>

        <View style={{flex: 1, top: 90}}>
          <SectionComponent>
            <TextComponent text="Si tienes algún problema o alguna duda, puedes contactar al equipo de soporte de TravelB: travelb@help.com" />
          </SectionComponent>
        </View>
      </ContainerComponent>
    </View>
  );
};

export default HelpScreen;
