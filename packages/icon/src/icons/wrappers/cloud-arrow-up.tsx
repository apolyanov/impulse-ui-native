import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CloudArrowUpBold } from "../bold";
import { CloudArrowUpDuotone } from "../duotone";
import { CloudArrowUpFill } from "../fill";
import { CloudArrowUpLight } from "../light";
import { CloudArrowUpRegular } from "../regular";
import { CloudArrowUpThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CloudArrowUp = memo(function CloudArrowUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CloudArrowUpBold,
      duotone: CloudArrowUpDuotone,
      fill: CloudArrowUpFill,
      light: CloudArrowUpLight,
      regular: CloudArrowUpRegular,
      thin: CloudArrowUpThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
