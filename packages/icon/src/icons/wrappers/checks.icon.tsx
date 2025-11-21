import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChecksBoldIcon } from "../bold";
import { ChecksDuotoneIcon } from "../duotone";
import { ChecksFillIcon } from "../fill";
import { ChecksLightIcon } from "../light";
import { ChecksRegularIcon } from "../regular";
import { ChecksThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChecksIcon = memo(function Checks(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChecksBoldIcon,
      duotone: ChecksDuotoneIcon,
      fill: ChecksFillIcon,
      light: ChecksLightIcon,
      regular: ChecksRegularIcon,
      thin: ChecksThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
