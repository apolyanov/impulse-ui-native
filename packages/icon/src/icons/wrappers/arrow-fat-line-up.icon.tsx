import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowFatLineUpBoldIcon } from "../bold";
import { ArrowFatLineUpDuotoneIcon } from "../duotone";
import { ArrowFatLineUpFillIcon } from "../fill";
import { ArrowFatLineUpLightIcon } from "../light";
import { ArrowFatLineUpRegularIcon } from "../regular";
import { ArrowFatLineUpThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowFatLineUpIcon = memo(function ArrowFatLineUp(
  props: IconWrapperProps
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
