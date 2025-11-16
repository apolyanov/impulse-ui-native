import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ScrewdriverBold } from "../bold";
import { ScrewdriverDuotone } from "../duotone";
import { ScrewdriverFill } from "../fill";
import { ScrewdriverLight } from "../light";
import { ScrewdriverRegular } from "../regular";
import { ScrewdriverThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Screwdriver = memo(function Screwdriver(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ScrewdriverBold,
      duotone: ScrewdriverDuotone,
      fill: ScrewdriverFill,
      light: ScrewdriverLight,
      regular: ScrewdriverRegular,
      thin: ScrewdriverThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
