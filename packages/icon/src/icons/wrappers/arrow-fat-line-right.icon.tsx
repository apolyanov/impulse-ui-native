import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowFatLineRightBoldIcon } from "../bold/arrow-fat-line-right-bold.icon";
import { ArrowFatLineRightDuotoneIcon } from "../duotone/arrow-fat-line-right-duotone.icon";
import { ArrowFatLineRightFillIcon } from "../fill/arrow-fat-line-right-fill.icon";
import { ArrowFatLineRightLightIcon } from "../light/arrow-fat-line-right-light.icon";
import { ArrowFatLineRightRegularIcon } from "../regular/arrow-fat-line-right-regular.icon";
import { ArrowFatLineRightThinIcon } from "../thin/arrow-fat-line-right-thin.icon";

export const ArrowFatLineRightIcon = memo(function ArrowFatLineRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowFatLineRightBoldIcon,
      duotone: ArrowFatLineRightDuotoneIcon,
      fill: ArrowFatLineRightFillIcon,
      light: ArrowFatLineRightLightIcon,
      regular: ArrowFatLineRightRegularIcon,
      thin: ArrowFatLineRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
