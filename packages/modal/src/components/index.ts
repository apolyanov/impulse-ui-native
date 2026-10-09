import { ModalContent } from "./content";
import { ModalDescription } from "./description";
import { ModalFooter } from "./footer";
import { ModalHeader } from "./header";
import { ModalComponent } from "./modal";
import { ModalRoot } from "./root";
import { ModalTitle } from "./title";

export const Modal = Object.assign(ModalComponent, {
  Root: ModalRoot,
  Header: ModalHeader,
  Content: ModalContent,
  Footer: ModalFooter,
  Title: ModalTitle,
  Description: ModalDescription,
});
