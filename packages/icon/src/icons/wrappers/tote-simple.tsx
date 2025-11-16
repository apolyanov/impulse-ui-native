import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ToteSimpleBold } from "../bold";
import { ToteSimpleDuotone } from "../duotone";
import { ToteSimpleFill } from "../fill";
import { ToteSimpleLight } from "../light";
import { ToteSimpleRegular } from "../regular";
import { ToteSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ToteSimple = memo(function ToteSimple(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ToteSimpleBold,
      duotone: ToteSimpleDuotone,
      fill: ToteSimpleFill,
      light: ToteSimpleLight,
      regular: ToteSimpleRegular,
      thin: ToteSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
