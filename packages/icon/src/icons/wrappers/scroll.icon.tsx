import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ScrollBoldIcon } from "../bold/scroll-bold.icon";
import { ScrollDuotoneIcon } from "../duotone/scroll-duotone.icon";
import { ScrollFillIcon } from "../fill/scroll-fill.icon";
import { ScrollLightIcon } from "../light/scroll-light.icon";
import { ScrollRegularIcon } from "../regular/scroll-regular.icon";
import { ScrollThinIcon } from "../thin/scroll-thin.icon";

export const ScrollIcon = memo(function Scroll(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ScrollBoldIcon,
      duotone: ScrollDuotoneIcon,
      fill: ScrollFillIcon,
      light: ScrollLightIcon,
      regular: ScrollRegularIcon,
      thin: ScrollThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
