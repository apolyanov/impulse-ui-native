import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChecksBoldIcon } from "../bold/checks-bold.icon";
import { ChecksDuotoneIcon } from "../duotone/checks-duotone.icon";
import { ChecksFillIcon } from "../fill/checks-fill.icon";
import { ChecksLightIcon } from "../light/checks-light.icon";
import { ChecksRegularIcon } from "../regular/checks-regular.icon";
import { ChecksThinIcon } from "../thin/checks-thin.icon";

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
