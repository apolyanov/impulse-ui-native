import type { ColorScheme } from "@impulse-ui-native/theme";
import { ThemeProvider } from "@impulse-ui-native/theme";

import { ChartsConsistencyGallery } from "./charts-consistency-gallery";

export function ChartsConsistencyExample({ scheme }: { scheme: ColorScheme }) {
  return (
    <ThemeProvider scheme={scheme}>
      <ChartsConsistencyGallery />
    </ThemeProvider>
  );
}
