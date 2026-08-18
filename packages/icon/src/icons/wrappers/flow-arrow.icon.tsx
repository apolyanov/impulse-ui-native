import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FlowArrowBoldIcon } from "../bold/flow-arrow-bold.icon";
import { FlowArrowDuotoneIcon } from "../duotone/flow-arrow-duotone.icon";
import { FlowArrowFillIcon } from "../fill/flow-arrow-fill.icon";
import { FlowArrowLightIcon } from "../light/flow-arrow-light.icon";
import { FlowArrowRegularIcon } from "../regular/flow-arrow-regular.icon";
import { FlowArrowThinIcon } from "../thin/flow-arrow-thin.icon";

export const FlowArrowIcon = memo(function FlowArrow(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FlowArrowBoldIcon,
      duotone: FlowArrowDuotoneIcon,
      fill: FlowArrowFillIcon,
      light: FlowArrowLightIcon,
      regular: FlowArrowRegularIcon,
      thin: FlowArrowThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
