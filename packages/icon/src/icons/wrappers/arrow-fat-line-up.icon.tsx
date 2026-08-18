import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowFatLineUpBoldIcon } from "../bold/arrow-fat-line-up-bold.icon";
import { ArrowFatLineUpDuotoneIcon } from "../duotone/arrow-fat-line-up-duotone.icon";
import { ArrowFatLineUpFillIcon } from "../fill/arrow-fat-line-up-fill.icon";
import { ArrowFatLineUpLightIcon } from "../light/arrow-fat-line-up-light.icon";
import { ArrowFatLineUpRegularIcon } from "../regular/arrow-fat-line-up-regular.icon";
import { ArrowFatLineUpThinIcon } from "../thin/arrow-fat-line-up-thin.icon";

export const ArrowFatLineUpIcon = memo(function ArrowFatLineUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowFatLineUpBoldIcon,
      duotone: ArrowFatLineUpDuotoneIcon,
      fill: ArrowFatLineUpFillIcon,
      light: ArrowFatLineUpLightIcon,
      regular: ArrowFatLineUpRegularIcon,
      thin: ArrowFatLineUpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
