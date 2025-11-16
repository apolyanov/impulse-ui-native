import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ScrollBold } from "../bold";
import { ScrollDuotone } from "../duotone";
import { ScrollFill } from "../fill";
import { ScrollLight } from "../light";
import { ScrollRegular } from "../regular";
import { ScrollThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Scroll = memo(function Scroll(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ScrollBold,
      duotone: ScrollDuotone,
      fill: ScrollFill,
      light: ScrollLight,
      regular: ScrollRegular,
      thin: ScrollThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
