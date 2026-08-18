import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BrowsersBoldIcon } from "../bold/browsers-bold.icon";
import { BrowsersDuotoneIcon } from "../duotone/browsers-duotone.icon";
import { BrowsersFillIcon } from "../fill/browsers-fill.icon";
import { BrowsersLightIcon } from "../light/browsers-light.icon";
import { BrowsersRegularIcon } from "../regular/browsers-regular.icon";
import { BrowsersThinIcon } from "../thin/browsers-thin.icon";

export const BrowsersIcon = memo(function Browsers(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BrowsersBoldIcon,
      duotone: BrowsersDuotoneIcon,
      fill: BrowsersFillIcon,
      light: BrowsersLightIcon,
      regular: BrowsersRegularIcon,
      thin: BrowsersThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
