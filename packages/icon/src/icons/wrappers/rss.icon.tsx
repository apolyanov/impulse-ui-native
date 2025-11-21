import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RssBoldIcon } from "../bold";
import { RssDuotoneIcon } from "../duotone";
import { RssFillIcon } from "../fill";
import { RssLightIcon } from "../light";
import { RssRegularIcon } from "../regular";
import { RssThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const RssIcon = memo(function Rss(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RssBoldIcon,
      duotone: RssDuotoneIcon,
      fill: RssFillIcon,
      light: RssLightIcon,
      regular: RssRegularIcon,
      thin: RssThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
