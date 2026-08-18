import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { RssBoldIcon } from "../bold/rss-bold.icon";
import { RssDuotoneIcon } from "../duotone/rss-duotone.icon";
import { RssFillIcon } from "../fill/rss-fill.icon";
import { RssLightIcon } from "../light/rss-light.icon";
import { RssRegularIcon } from "../regular/rss-regular.icon";
import { RssThinIcon } from "../thin/rss-thin.icon";

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
