import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ScrewdriverBoldIcon } from "../bold";
import { ScrewdriverDuotoneIcon } from "../duotone";
import { ScrewdriverFillIcon } from "../fill";
import { ScrewdriverLightIcon } from "../light";
import { ScrewdriverRegularIcon } from "../regular";
import { ScrewdriverThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ScrewdriverIcon = memo(function Screwdriver(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ScrewdriverBoldIcon,
      duotone: ScrewdriverDuotoneIcon,
      fill: ScrewdriverFillIcon,
      light: ScrewdriverLightIcon,
      regular: ScrewdriverRegularIcon,
      thin: ScrewdriverThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
