import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowFatLinesDownBoldIcon } from "../bold/arrow-fat-lines-down-bold.icon";
import { ArrowFatLinesDownDuotoneIcon } from "../duotone/arrow-fat-lines-down-duotone.icon";
import { ArrowFatLinesDownFillIcon } from "../fill/arrow-fat-lines-down-fill.icon";
import { ArrowFatLinesDownLightIcon } from "../light/arrow-fat-lines-down-light.icon";
import { ArrowFatLinesDownRegularIcon } from "../regular/arrow-fat-lines-down-regular.icon";
import { ArrowFatLinesDownThinIcon } from "../thin/arrow-fat-lines-down-thin.icon";

export const ArrowFatLinesDownIcon = memo(function ArrowFatLinesDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowFatLinesDownBoldIcon,
      duotone: ArrowFatLinesDownDuotoneIcon,
      fill: ArrowFatLinesDownFillIcon,
      light: ArrowFatLinesDownLightIcon,
      regular: ArrowFatLinesDownRegularIcon,
      thin: ArrowFatLinesDownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
