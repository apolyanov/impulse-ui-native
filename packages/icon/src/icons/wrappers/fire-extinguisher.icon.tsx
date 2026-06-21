import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FireExtinguisherBoldIcon } from "../bold";
import { FireExtinguisherDuotoneIcon } from "../duotone";
import { FireExtinguisherFillIcon } from "../fill";
import { FireExtinguisherLightIcon } from "../light";
import { FireExtinguisherRegularIcon } from "../regular";
import { FireExtinguisherThinIcon } from "../thin";

export const FireExtinguisherIcon = memo(function FireExtinguisher(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FireExtinguisherBoldIcon,
      duotone: FireExtinguisherDuotoneIcon,
      fill: FireExtinguisherFillIcon,
      light: FireExtinguisherLightIcon,
      regular: FireExtinguisherRegularIcon,
      thin: FireExtinguisherThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
