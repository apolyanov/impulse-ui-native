import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PopsicleBoldIcon } from "../bold";
import { PopsicleDuotoneIcon } from "../duotone";
import { PopsicleFillIcon } from "../fill";
import { PopsicleLightIcon } from "../light";
import { PopsicleRegularIcon } from "../regular";
import { PopsicleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PopsicleIcon = memo(function Popsicle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PopsicleBoldIcon,
      duotone: PopsicleDuotoneIcon,
      fill: PopsicleFillIcon,
      light: PopsicleLightIcon,
      regular: PopsicleRegularIcon,
      thin: PopsicleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
