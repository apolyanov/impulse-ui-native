import { FlyoutContent } from "./content";
import { FlyoutComponent } from "./flyout";
import { FlyoutHandle } from "./handle";
import { FlyoutHeader } from "./header";
import { FlyoutRoot } from "./root";
import { FlyoutTitle } from "./title";

export const Flyout = Object.assign(FlyoutComponent, {
  Root: FlyoutRoot,
  Header: FlyoutHeader,
  Title: FlyoutTitle,
  Content: FlyoutContent,
  Handle: FlyoutHandle,
});
