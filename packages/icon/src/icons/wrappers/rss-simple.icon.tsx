import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { RssSimpleBoldIcon } from "../bold/rss-simple-bold.icon";
import { RssSimpleDuotoneIcon } from "../duotone/rss-simple-duotone.icon";
import { RssSimpleFillIcon } from "../fill/rss-simple-fill.icon";
import { RssSimpleLightIcon } from "../light/rss-simple-light.icon";
import { RssSimpleRegularIcon } from "../regular/rss-simple-regular.icon";
import { RssSimpleThinIcon } from "../thin/rss-simple-thin.icon";

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
