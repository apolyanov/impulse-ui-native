import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowFatLinesUpBoldIcon } from "../bold/arrow-fat-lines-up-bold.icon";
import { ArrowFatLinesUpDuotoneIcon } from "../duotone/arrow-fat-lines-up-duotone.icon";
import { ArrowFatLinesUpFillIcon } from "../fill/arrow-fat-lines-up-fill.icon";
import { ArrowFatLinesUpLightIcon } from "../light/arrow-fat-lines-up-light.icon";
import { ArrowFatLinesUpRegularIcon } from "../regular/arrow-fat-lines-up-regular.icon";
import { ArrowFatLinesUpThinIcon } from "../thin/arrow-fat-lines-up-thin.icon";

export const ArrowFatLinesUpIcon = memo(function ArrowFatLinesUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowFatLinesUpBoldIcon,
      duotone: ArrowFatLinesUpDuotoneIcon,
      fill: ArrowFatLinesUpFillIcon,
      light: ArrowFatLinesUpLightIcon,
      regular: ArrowFatLinesUpRegularIcon,
      thin: ArrowFatLinesUpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
