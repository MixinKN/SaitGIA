export interface IOfferCard {
  id: string;
  img: string;
  title: string;
  description: string;
  leftTitle: string;
  leftDescription: string;
  price: string;
  priceEditionalInfo: string;
  tags: string[];
}

export interface IOfferCardProps {
  card: IOfferCard;
  onClick: () => void;
  className?: string;
}
