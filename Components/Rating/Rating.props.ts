import { HTMLAttributes, ReactNode } from "react";
import { Rating } from './Rating';

export interface ParagrafProps extends HTMLAttributes<HTMLDivElement> {
  isEditable?: boolean;
  Rating: number;
  setRating: (rating: number) => void;
}
