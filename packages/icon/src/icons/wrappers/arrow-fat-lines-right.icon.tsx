import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowFatLinesRightBoldIcon } from "../bold/arrow-fat-lines-right-bold.icon";
import { ArrowFatLinesRightDuotoneIcon } from "../duotone/arrow-fat-lines-right-duotone.icon";
import { ArrowFatLinesRightFillIcon } from "../fill/arrow-fat-lines-right-fill.icon";
import { ArrowFatLinesRightLightIcon } from "../light/arrow-fat-lines-right-light.icon";
import { ArrowFatLinesRightRegularIcon } from "../regular/arrow-fat-lines-right-regular.icon";
import { ArrowFatLinesRightThinIcon } from "../thin/arrow-fat-lines-right-thin.icon";

export const ArrowFatLinesRightIcon = memo(function ArrowFatLinesRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowFatLinesRightBoldIcon,
      duotone: ArrowFatLinesRightDuotoneIcon,
      fill: ArrowFatLinesRightFillIcon,
      light: ArrowFatLinesRightLightIcon,
      regular: ArrowFatLinesRightRegularIcon,
      thin: ArrowFatLinesRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
