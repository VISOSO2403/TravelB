import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {
  PrimaryButton,
  ScreenContainer,
  SectionContainer,
  TextComponent,
  WalletCard,
} from '../../components';
import RowContainer from '../../components/containers/RowContainer';

const WalletScreen = () => {
  return (
    <ScreenContainer>
      <SafeAreaView>
        <TextComponent
          text="Métodos de pago"
          size={30}
          font="bold"
          styles={{
            alignSelf: 'center',
          }}
        />

        <SectionContainer>
          <PrimaryButton onPress={() => {}}>
            <TextComponent text="Agregar tarjeta" font="bold" color="white" />
          </PrimaryButton>

          <PrimaryButton onPress={() => {}}>
            <TextComponent text="Agregar PayPal" font="bold" color="white" />
          </PrimaryButton>

          <PrimaryButton onPress={() => {}}>
            <TextComponent
              text="Agregar Google Pay"
              font="bold"
              color="white"
            />
          </PrimaryButton>
        </SectionContainer>

        <SectionContainer>
          <TextComponent
            text="Mis tarjetas"
            size={20}
            font="bold"
            styles={{alignSelf: 'center'}}
          />

          {/* Colar flatlist aquí */}
          <WalletCard onPress={() => {}} />
        </SectionContainer>
      </SafeAreaView>
    </ScreenContainer>
  );
};

export default WalletScreen;
