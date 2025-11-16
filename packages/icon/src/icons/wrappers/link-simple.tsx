import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LinkSimpleBold } from "../bold";
import { LinkSimpleDuotone } from "../duotone";
import { LinkSimpleFill } from "../fill";
import { LinkSimpleLight } from "../light";
import { LinkSimpleRegular } from "../regular";
import { LinkSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LinkSimple = memo(function LinkSimple(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LinkSimpleBold,
      duotone: LinkSimpleDuotone,
      fill: LinkSimpleFill,
      light: LinkSimpleLight,
      regular: LinkSimpleRegular,
      thin: LinkSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
