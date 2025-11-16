import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BrowserBold } from "../bold";
import { BrowserDuotone } from "../duotone";
import { BrowserFill } from "../fill";
import { BrowserLight } from "../light";
import { BrowserRegular } from "../regular";
import { BrowserThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Browser = memo(function Browser(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BrowserBold,
      duotone: BrowserDuotone,
      fill: BrowserFill,
      light: BrowserLight,
      regular: BrowserRegular,
      thin: BrowserThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
