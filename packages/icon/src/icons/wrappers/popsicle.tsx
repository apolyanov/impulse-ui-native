import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PopsicleBold } from "../bold";
import { PopsicleDuotone } from "../duotone";
import { PopsicleFill } from "../fill";
import { PopsicleLight } from "../light";
import { PopsicleRegular } from "../regular";
import { PopsicleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Popsicle = memo(function Popsicle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PopsicleBold,
      duotone: PopsicleDuotone,
      fill: PopsicleFill,
      light: PopsicleLight,
      regular: PopsicleRegular,
      thin: PopsicleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
