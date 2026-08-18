import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NotEqualsBoldIcon } from "../bold/not-equals-bold.icon";
import { NotEqualsDuotoneIcon } from "../duotone/not-equals-duotone.icon";
import { NotEqualsFillIcon } from "../fill/not-equals-fill.icon";
import { NotEqualsLightIcon } from "../light/not-equals-light.icon";
import { NotEqualsRegularIcon } from "../regular/not-equals-regular.icon";
import { NotEqualsThinIcon } from "../thin/not-equals-thin.icon";

export const NotEqualsIcon = memo(function NotEquals(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NotEqualsBoldIcon,
      duotone: NotEqualsDuotoneIcon,
      fill: NotEqualsFillIcon,
      light: NotEqualsLightIcon,
      regular: NotEqualsRegularIcon,
      thin: NotEqualsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
