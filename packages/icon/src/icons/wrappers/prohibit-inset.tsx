import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ProhibitInsetBold } from "../bold";
import { ProhibitInsetDuotone } from "../duotone";
import { ProhibitInsetFill } from "../fill";
import { ProhibitInsetLight } from "../light";
import { ProhibitInsetRegular } from "../regular";
import { ProhibitInsetThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ProhibitInset = memo(function ProhibitInset(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ProhibitInsetBold,
      duotone: ProhibitInsetDuotone,
      fill: ProhibitInsetFill,
      light: ProhibitInsetLight,
      regular: ProhibitInsetRegular,
      thin: ProhibitInsetThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
