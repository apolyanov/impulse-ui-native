import { FlyoutContent } from "./content";
import { FlyoutComponent } from "./flyout";
import { FlyoutHandle } from "./handle";
import { FlyoutHeader } from "./header";
import { FlyoutKeyboardAwareView } from "./keyboard-aware-view";
import { FlyoutRoot } from "./root";
import { FlyoutScrollView } from "./scroll-view";
import { FlyoutTitle } from "./title";

// Keep native ref types named so declarations do not expose RN private types.
export const Flyout: typeof FlyoutComponent & {
  Root: typeof FlyoutRoot;
  Header: typeof FlyoutHeader;
  Title: typeof FlyoutTitle;
  Content: typeof FlyoutContent;
  ScrollView: typeof FlyoutScrollView;
  KeyboardAwareView: typeof FlyoutKeyboardAwareView;
  Handle: typeof FlyoutHandle;
} = Object.assign(FlyoutComponent, {
  Root: FlyoutRoot,
  Header: FlyoutHeader,
  Title: FlyoutTitle,
  Content: FlyoutContent,
  ScrollView: FlyoutScrollView,
  KeyboardAwareView: FlyoutKeyboardAwareView,
  Handle: FlyoutHandle,
});
