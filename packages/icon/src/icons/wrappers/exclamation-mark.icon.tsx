import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ExclamationMarkBoldIcon } from "../bold/exclamation-mark-bold.icon";
import { ExclamationMarkDuotoneIcon } from "../duotone/exclamation-mark-duotone.icon";
import { ExclamationMarkFillIcon } from "../fill/exclamation-mark-fill.icon";
import { ExclamationMarkLightIcon } from "../light/exclamation-mark-light.icon";
import { ExclamationMarkRegularIcon } from "../regular/exclamation-mark-regular.icon";
import { ExclamationMarkThinIcon } from "../thin/exclamation-mark-thin.icon";

export const ExclamationMarkIcon = memo(function ExclamationMark(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ExclamationMarkBoldIcon,
      duotone: ExclamationMarkDuotoneIcon,
      fill: ExclamationMarkFillIcon,
      light: ExclamationMarkLightIcon,
      regular: ExclamationMarkRegularIcon,
      thin: ExclamationMarkThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
