import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ProhibitInsetBoldIcon } from "../bold/prohibit-inset-bold.icon";
import { ProhibitInsetDuotoneIcon } from "../duotone/prohibit-inset-duotone.icon";
import { ProhibitInsetFillIcon } from "../fill/prohibit-inset-fill.icon";
import { ProhibitInsetLightIcon } from "../light/prohibit-inset-light.icon";
import { ProhibitInsetRegularIcon } from "../regular/prohibit-inset-regular.icon";
import { ProhibitInsetThinIcon } from "../thin/prohibit-inset-thin.icon";

export const ProhibitInsetIcon = memo(function ProhibitInset(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ProhibitInsetBoldIcon,
      duotone: ProhibitInsetDuotoneIcon,
      fill: ProhibitInsetFillIcon,
      light: ProhibitInsetLightIcon,
      regular: ProhibitInsetRegularIcon,
      thin: ProhibitInsetThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
