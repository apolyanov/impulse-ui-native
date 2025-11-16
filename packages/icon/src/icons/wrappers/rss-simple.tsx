import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RssSimpleBold } from "../bold";
import { RssSimpleDuotone } from "../duotone";
import { RssSimpleFill } from "../fill";
import { RssSimpleLight } from "../light";
import { RssSimpleRegular } from "../regular";
import { RssSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const RssSimple = memo(function RssSimple(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RssSimpleBold,
      duotone: RssSimpleDuotone,
      fill: RssSimpleFill,
      light: RssSimpleLight,
      regular: RssSimpleRegular,
      thin: RssSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
