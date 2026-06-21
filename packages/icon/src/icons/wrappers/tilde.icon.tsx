import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TildeBoldIcon } from "../bold";
import { TildeDuotoneIcon } from "../duotone";
import { TildeFillIcon } from "../fill";
import { TildeLightIcon } from "../light";
import { TildeRegularIcon } from "../regular";
import { TildeThinIcon } from "../thin";

export const TildeIcon = memo(function Tilde(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TildeBoldIcon,
      duotone: TildeDuotoneIcon,
      fill: TildeFillIcon,
      light: TildeLightIcon,
      regular: TildeRegularIcon,
      thin: TildeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
