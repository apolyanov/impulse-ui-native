import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GenderMaleBoldIcon } from "../bold";
import { GenderMaleDuotoneIcon } from "../duotone";
import { GenderMaleFillIcon } from "../fill";
import { GenderMaleLightIcon } from "../light";
import { GenderMaleRegularIcon } from "../regular";
import { GenderMaleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GenderMaleIcon = memo(function GenderMale(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GenderMaleBoldIcon,
      duotone: GenderMaleDuotoneIcon,
      fill: GenderMaleFillIcon,
      light: GenderMaleLightIcon,
      regular: GenderMaleRegularIcon,
      thin: GenderMaleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
