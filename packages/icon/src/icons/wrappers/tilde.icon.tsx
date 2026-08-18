import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TildeBoldIcon } from "../bold/tilde-bold.icon";
import { TildeDuotoneIcon } from "../duotone/tilde-duotone.icon";
import { TildeFillIcon } from "../fill/tilde-fill.icon";
import { TildeLightIcon } from "../light/tilde-light.icon";
import { TildeRegularIcon } from "../regular/tilde-regular.icon";
import { TildeThinIcon } from "../thin/tilde-thin.icon";

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
