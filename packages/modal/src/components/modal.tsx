import { memo } from "react";

import type { ModalProps } from "../types";
import { ModalContent } from "./content";
import { ModalFooter } from "./footer";
import { ModalHeader } from "./header";
import { ModalRoot } from "./root";

export const ModalComponent = memo(function Modal({
  header,
  footer,
  children,
  ...props
}: ModalProps) {
  return (
    <ModalRoot {...props}>
      {header ? <ModalHeader>{header}</ModalHeader> : null}
      <ModalContent>{children}</ModalContent>
      {footer ? <ModalFooter>{footer}</ModalFooter> : null}
    </ModalRoot>
  );
});
