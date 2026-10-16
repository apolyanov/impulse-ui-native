import { memo } from "react";

import { Icon } from "@impulse-ui-native/icon";
import { XIcon } from "@impulse-ui-native/icon/icons/x";
import { useColors } from "@impulse-ui-native/theme";

import type { ModalProps } from "../types";
import { ModalClose } from "./close";
import { ModalContent } from "./content";
import { ModalFooter } from "./footer";
import { ModalHeader } from "./header";
import { ModalProvider } from "./provider";
import { ModalRoot } from "./root";
import { ModalTitle } from "./title";

export const ModalComponent = memo(function Modal({
  id,
  open,
  layer,
  onOpen,
  onOpenFinished,
  onStatusChange,
  onClose,
  onCloseFinished,
  header,
  title,
  footer,
  hideClose = false,
  children,
  ...props
}: ModalProps) {
  const colors = useColors();

  const showHeader = header || title || !hideClose;
  const showTitle = !header && title;

  return (
    <ModalProvider
      id={id}
      open={open}
      layer={layer}
      onOpen={onOpen}
      onOpenFinished={onOpenFinished}
      onStatusChange={onStatusChange}
      onClose={onClose}
      onCloseFinished={onCloseFinished}
    >
      <ModalRoot {...props}>
        {showHeader ? (
          <ModalHeader>
            {header}
            {showTitle ? <ModalTitle>{title}</ModalTitle> : null}
            {!hideClose ? (
              <ModalClose marginLeft="auto">
                <Icon icon={XIcon} size="small" color={colors.text.tertiary} />
              </ModalClose>
            ) : null}
          </ModalHeader>
        ) : null}
        <ModalContent>{children}</ModalContent>
        {footer ? <ModalFooter>{footer}</ModalFooter> : null}
      </ModalRoot>
    </ModalProvider>
  );
});
