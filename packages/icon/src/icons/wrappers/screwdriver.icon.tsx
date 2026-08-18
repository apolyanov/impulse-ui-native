import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ScrewdriverBoldIcon } from "../bold/screwdriver-bold.icon";
import { ScrewdriverDuotoneIcon } from "../duotone/screwdriver-duotone.icon";
import { ScrewdriverFillIcon } from "../fill/screwdriver-fill.icon";
import { ScrewdriverLightIcon } from "../light/screwdriver-light.icon";
import { ScrewdriverRegularIcon } from "../regular/screwdriver-regular.icon";
import { ScrewdriverThinIcon } from "../thin/screwdriver-thin.icon";

export const ScrewdriverIcon = memo(function Screwdriver(
  props: IconWrapperProps,
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
