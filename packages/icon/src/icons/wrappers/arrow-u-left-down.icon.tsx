import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowULeftDownBoldIcon } from "../bold";
import { ArrowULeftDownDuotoneIcon } from "../duotone";
import { ArrowULeftDownFillIcon } from "../fill";
import { ArrowULeftDownLightIcon } from "../light";
import { ArrowULeftDownRegularIcon } from "../regular";
import { ArrowULeftDownThinIcon } from "../thin";

export const ArrowULeftDownIcon = memo(function ArrowULeftDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowULeftDownBoldIcon,
      duotone: ArrowULeftDownDuotoneIcon,
      fill: ArrowULeftDownFillIcon,
      light: ArrowULeftDownLightIcon,
      regular: ArrowULeftDownRegularIcon,
      thin: ArrowULeftDownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
