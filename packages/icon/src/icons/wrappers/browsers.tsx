import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BrowsersBold } from "../bold";
import { BrowsersDuotone } from "../duotone";
import { BrowsersFill } from "../fill";
import { BrowsersLight } from "../light";
import { BrowsersRegular } from "../regular";
import { BrowsersThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Browsers = memo(function Browsers(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BrowsersBold,
      duotone: BrowsersDuotone,
      fill: BrowsersFill,
      light: BrowsersLight,
      regular: BrowsersRegular,
      thin: BrowsersThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
