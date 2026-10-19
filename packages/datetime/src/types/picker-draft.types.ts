export interface PickerDraftOptions<Value> {
  value?: Value | null;
  defaultValue?: Value | null;
  onChange?: (value: Value | null) => void;
  normalize?: (value: Value | null) => Value | null;
  onCloseSync?: (value: Value | null) => void;
}
