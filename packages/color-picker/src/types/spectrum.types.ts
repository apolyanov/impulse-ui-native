export interface SpectrumPosition {
  saturation: number;
  brightness: number;
}

export interface SpectrumInteractionOptions {
  disabled: boolean;
  saturation: number;
  brightness: number;
  onChange: (saturation: number, brightness: number) => void;
  onChangeWorklet?: (saturation: number, brightness: number) => void;
  onComplete?: () => void;
}
