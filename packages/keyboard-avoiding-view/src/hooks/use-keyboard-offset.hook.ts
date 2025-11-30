import { useEffect, useState } from "react";
import { Keyboard, KeyboardEvent } from "react-native";

export const useKeyboardOffset = () => {
  const [keyboardOffset, setKeyboardOffset] = useState(0);

  useEffect(() => {
    const onKeyboardShow = (event: KeyboardEvent) => {
      setKeyboardOffset(event.endCoordinates.height);
    };

    const onKeyboardHide = () => {
      setKeyboardOffset(0);
    };

    const keyboardShowListener = Keyboard.addListener(
      "keyboardWillShow",
      onKeyboardShow
    );
    const keyboardHideListener = Keyboard.addListener(
      "keyboardWillHide",
      onKeyboardHide
    );

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

  return keyboardOffset;
};
