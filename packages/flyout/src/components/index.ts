import { FlyoutContent } from "./content";
import { FlyoutComponent } from "./flyout";
import { FlyoutHandle } from "./handle";
import { FlyoutHeader } from "./header";
import { FlyoutKeyboardAwareView } from "./keyboard-aware-view";
import { FlyoutRoot } from "./root";
import { FlyoutScrollView } from "./scroll-view";
import { FlyoutTitle } from "./title";

export const Flyout = Object.assign(FlyoutComponent, {
  Root: FlyoutRoot,
  Header: FlyoutHeader,
  Title: FlyoutTitle,
  Content: FlyoutContent,
  ScrollView: FlyoutScrollView,
  KeyboardAwareView: FlyoutKeyboardAwareView,
  Handle: FlyoutHandle,
});
