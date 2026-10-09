import { ModalClose } from "./close";
import { ModalContent } from "./content";
import { ModalDescription } from "./description";
import { ModalFooter } from "./footer";
import { ModalHeader } from "./header";
import { ModalComponent } from "./modal";
import { ModalProvider } from "./provider";
import { ModalRoot } from "./root";
import { ModalTitle } from "./title";

export const Modal = Object.assign(ModalComponent, {
  Provider: ModalProvider,
  Root: ModalRoot,
  Header: ModalHeader,
  Close: ModalClose,
  Content: ModalContent,
  Footer: ModalFooter,
  Title: ModalTitle,
  Description: ModalDescription,
});
