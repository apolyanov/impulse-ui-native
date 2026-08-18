import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BrowserBoldIcon } from "../bold/browser-bold.icon";
import { BrowserDuotoneIcon } from "../duotone/browser-duotone.icon";
import { BrowserFillIcon } from "../fill/browser-fill.icon";
import { BrowserLightIcon } from "../light/browser-light.icon";
import { BrowserRegularIcon } from "../regular/browser-regular.icon";
import { BrowserThinIcon } from "../thin/browser-thin.icon";

export const BrowserIcon = memo(function Browser(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BrowserBoldIcon,
      duotone: BrowserDuotoneIcon,
      fill: BrowserFillIcon,
      light: BrowserLightIcon,
      regular: BrowserRegularIcon,
      thin: BrowserThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
