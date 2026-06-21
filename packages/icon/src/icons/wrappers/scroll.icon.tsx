import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ScrollBoldIcon } from "../bold";
import { ScrollDuotoneIcon } from "../duotone";
import { ScrollFillIcon } from "../fill";
import { ScrollLightIcon } from "../light";
import { ScrollRegularIcon } from "../regular";
import { ScrollThinIcon } from "../thin";

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
