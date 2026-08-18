import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowFatUpBoldIcon } from "../bold/arrow-fat-up-bold.icon";
import { ArrowFatUpDuotoneIcon } from "../duotone/arrow-fat-up-duotone.icon";
import { ArrowFatUpFillIcon } from "../fill/arrow-fat-up-fill.icon";
import { ArrowFatUpLightIcon } from "../light/arrow-fat-up-light.icon";
import { ArrowFatUpRegularIcon } from "../regular/arrow-fat-up-regular.icon";
import { ArrowFatUpThinIcon } from "../thin/arrow-fat-up-thin.icon";

export const ArrowFatUpIcon = memo(function ArrowFatUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowFatUpBoldIcon,
      duotone: ArrowFatUpDuotoneIcon,
      fill: ArrowFatUpFillIcon,
      light: ArrowFatUpLightIcon,
      regular: ArrowFatUpRegularIcon,
      thin: ArrowFatUpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
