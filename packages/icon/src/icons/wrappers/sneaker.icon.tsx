import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SneakerBoldIcon } from "../bold/sneaker-bold.icon";
import { SneakerDuotoneIcon } from "../duotone/sneaker-duotone.icon";
import { SneakerFillIcon } from "../fill/sneaker-fill.icon";
import { SneakerLightIcon } from "../light/sneaker-light.icon";
import { SneakerRegularIcon } from "../regular/sneaker-regular.icon";
import { SneakerThinIcon } from "../thin/sneaker-thin.icon";

export const SneakerIcon = memo(function Sneaker(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SneakerBoldIcon,
      duotone: SneakerDuotoneIcon,
      fill: SneakerFillIcon,
      light: SneakerLightIcon,
      regular: SneakerRegularIcon,
      thin: SneakerThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
