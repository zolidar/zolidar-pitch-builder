export interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

// Type for slide components that can have a static background property
export type SlideComponentType = React.FC<SlideProps> & {
  background?: string;
};