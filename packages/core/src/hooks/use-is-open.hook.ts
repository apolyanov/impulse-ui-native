import { useCallback, useState } from "react";

interface UseIsOpenProps {
  default?: boolean;
}

export function useIsOpen(props?: UseIsOpenProps) {
  const [isOpen, setIsOpen] = useState<boolean>(Boolean(props?.default));
  const [isClosed, setIsClosed] = useState<boolean>(!props?.default);

  const open = useCallback(() => {
    setIsClosed(false);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const finishClose = useCallback(() => {
    setIsClosed(true);
  }, []);

  const toggle = useCallback(() => {
    if (isOpen) {
      close();
    } else {
      open();
    }
  }, [close, isOpen, open]);

  return {
    isOpen,
    isClosed,
    open,
    close,
    toggle,
    finishClose,
  };
}
