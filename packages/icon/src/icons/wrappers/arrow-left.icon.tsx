import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowLeftBoldIcon } from "../bold/arrow-left-bold.icon";
import { ArrowLeftDuotoneIcon } from "../duotone/arrow-left-duotone.icon";
import { ArrowLeftFillIcon } from "../fill/arrow-left-fill.icon";
import { ArrowLeftLightIcon } from "../light/arrow-left-light.icon";
import { ArrowLeftRegularIcon } from "../regular/arrow-left-regular.icon";
import { ArrowLeftThinIcon } from "../thin/arrow-left-thin.icon";

export const ArrowLeftIcon = memo(function ArrowLeft(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowLeftBoldIcon,
      duotone: ArrowLeftDuotoneIcon,
      fill: ArrowLeftFillIcon,
      light: ArrowLeftLightIcon,
      regular: ArrowLeftRegularIcon,
      thin: ArrowLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
