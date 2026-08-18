import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NotSupersetOfBoldIcon } from "../bold/not-superset-of-bold.icon";
import { NotSupersetOfDuotoneIcon } from "../duotone/not-superset-of-duotone.icon";
import { NotSupersetOfFillIcon } from "../fill/not-superset-of-fill.icon";
import { NotSupersetOfLightIcon } from "../light/not-superset-of-light.icon";
import { NotSupersetOfRegularIcon } from "../regular/not-superset-of-regular.icon";
import { NotSupersetOfThinIcon } from "../thin/not-superset-of-thin.icon";

export const NotSupersetOfIcon = memo(function NotSupersetOf(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NotSupersetOfBoldIcon,
      duotone: NotSupersetOfDuotoneIcon,
      fill: NotSupersetOfFillIcon,
      light: NotSupersetOfLightIcon,
      regular: NotSupersetOfRegularIcon,
      thin: NotSupersetOfThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
