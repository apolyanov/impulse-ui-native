import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowFatUpBold } from "../bold";
import { ArrowFatUpDuotone } from "../duotone";
import { ArrowFatUpFill } from "../fill";
import { ArrowFatUpLight } from "../light";
import { ArrowFatUpRegular } from "../regular";
import { ArrowFatUpThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowFatUp = memo(function ArrowFatUp(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowFatUpBold,
      duotone: ArrowFatUpDuotone,
      fill: ArrowFatUpFill,
      light: ArrowFatUpLight,
      regular: ArrowFatUpRegular,
      thin: ArrowFatUpThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
