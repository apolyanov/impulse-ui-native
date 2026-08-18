import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PopsicleBoldIcon } from "../bold/popsicle-bold.icon";
import { PopsicleDuotoneIcon } from "../duotone/popsicle-duotone.icon";
import { PopsicleFillIcon } from "../fill/popsicle-fill.icon";
import { PopsicleLightIcon } from "../light/popsicle-light.icon";
import { PopsicleRegularIcon } from "../regular/popsicle-regular.icon";
import { PopsicleThinIcon } from "../thin/popsicle-thin.icon";

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
