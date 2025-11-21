import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BrowsersBoldIcon } from "../bold";
import { BrowsersDuotoneIcon } from "../duotone";
import { BrowsersFillIcon } from "../fill";
import { BrowsersLightIcon } from "../light";
import { BrowsersRegularIcon } from "../regular";
import { BrowsersThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
