import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RssSimpleBoldIcon } from "../bold";
import { RssSimpleDuotoneIcon } from "../duotone";
import { RssSimpleFillIcon } from "../fill";
import { RssSimpleLightIcon } from "../light";
import { RssSimpleRegularIcon } from "../regular";
import { RssSimpleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const RssSimpleIcon = memo(function RssSimple(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RssSimpleBoldIcon,
      duotone: RssSimpleDuotoneIcon,
      fill: RssSimpleFillIcon,
      light: RssSimpleLightIcon,
      regular: RssSimpleRegularIcon,
      thin: RssSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
