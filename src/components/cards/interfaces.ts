export interface WalletCardProps {
  cardNumber?: string;
  cardType?: string;
  expirationDate?: string;
  cardHolder?: string;
  onPress: () => void;
}
