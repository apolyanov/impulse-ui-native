import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AtBold } from "../bold";
import { AtDuotone } from "../duotone";
import { AtFill } from "../fill";
import { AtLight } from "../light";
import { AtRegular } from "../regular";
import { AtThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const At = memo(function At(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AtBold,
      duotone: AtDuotone,
      fill: AtFill,
      light: AtLight,
      regular: AtRegular,
      thin: AtThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
