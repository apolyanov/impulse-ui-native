import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RssBold } from "../bold";
import { RssDuotone } from "../duotone";
import { RssFill } from "../fill";
import { RssLight } from "../light";
import { RssRegular } from "../regular";
import { RssThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Rss = memo(function Rss(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RssBold,
      duotone: RssDuotone,
      fill: RssFill,
      light: RssLight,
      regular: RssRegular,
      thin: RssThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
