import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ExclamationMarkBoldIcon } from "../bold";
import { ExclamationMarkDuotoneIcon } from "../duotone";
import { ExclamationMarkFillIcon } from "../fill";
import { ExclamationMarkLightIcon } from "../light";
import { ExclamationMarkRegularIcon } from "../regular";
import { ExclamationMarkThinIcon } from "../thin";

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
