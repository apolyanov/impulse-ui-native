import type { ReactNode } from "react";
import type { LayoutChangeEvent } from "react-native";

import type { useCarousel } from "../hooks/use-carousel.hook";
import type { CarouselPagination } from "./carousel.types";

export interface CarouselLayoutOptions {
  children?: ReactNode;
  peek: number;
  slideAspectRatio: number;
}

export interface CarouselLayout {
  slides: ReactNode[];
  width: number;
  slideWidth: number;
  slideHeight: number;
  stride: number;
  endInset: number;
  snapOffsets: number[];
  onLayout: (event: LayoutChangeEvent) => void;
}

export interface CarouselViewportProps {
  layout: CarouselLayout;
  controller: ReturnType<typeof useCarousel>;
  disabled: boolean;
}

export interface CarouselSlideProps {
  children: ReactNode;
  width: number;
  height: number;
}

export interface CarouselControlsProps {
  count: number;
  index: number;
  disabled: boolean;
  pagination: CarouselPagination;
  showNavigation: boolean;
  onSelect: (index: number) => void;
}

export interface CarouselPaginationProps {
  count: number;
  index: number;
  disabled: boolean;
  variant: CarouselPagination;
  onSelect: (index: number) => void;
}

export interface CarouselCounterProps {
  count: number;
  index: number;
  disabled: boolean;
}
