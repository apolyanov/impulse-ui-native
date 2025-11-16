import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ExclamationMarkBold } from "../bold";
import { ExclamationMarkDuotone } from "../duotone";
import { ExclamationMarkFill } from "../fill";
import { ExclamationMarkLight } from "../light";
import { ExclamationMarkRegular } from "../regular";
import { ExclamationMarkThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ExclamationMark = memo(function ExclamationMark(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ExclamationMarkBold,
      duotone: ExclamationMarkDuotone,
      fill: ExclamationMarkFill,
      light: ExclamationMarkLight,
      regular: ExclamationMarkRegular,
      thin: ExclamationMarkThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
