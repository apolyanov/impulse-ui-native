import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowBendLeftDownBoldIcon } from "../bold/arrow-bend-left-down-bold.icon";
import { ArrowBendLeftDownDuotoneIcon } from "../duotone/arrow-bend-left-down-duotone.icon";
import { ArrowBendLeftDownFillIcon } from "../fill/arrow-bend-left-down-fill.icon";
import { ArrowBendLeftDownLightIcon } from "../light/arrow-bend-left-down-light.icon";
import { ArrowBendLeftDownRegularIcon } from "../regular/arrow-bend-left-down-regular.icon";
import { ArrowBendLeftDownThinIcon } from "../thin/arrow-bend-left-down-thin.icon";

export const ArrowBendLeftDownIcon = memo(function ArrowBendLeftDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowBendLeftDownBoldIcon,
      duotone: ArrowBendLeftDownDuotoneIcon,
      fill: ArrowBendLeftDownFillIcon,
      light: ArrowBendLeftDownLightIcon,
      regular: ArrowBendLeftDownRegularIcon,
      thin: ArrowBendLeftDownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
