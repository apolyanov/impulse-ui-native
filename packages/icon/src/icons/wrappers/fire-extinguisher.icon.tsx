import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FireExtinguisherBoldIcon } from "../bold/fire-extinguisher-bold.icon";
import { FireExtinguisherDuotoneIcon } from "../duotone/fire-extinguisher-duotone.icon";
import { FireExtinguisherFillIcon } from "../fill/fire-extinguisher-fill.icon";
import { FireExtinguisherLightIcon } from "../light/fire-extinguisher-light.icon";
import { FireExtinguisherRegularIcon } from "../regular/fire-extinguisher-regular.icon";
import { FireExtinguisherThinIcon } from "../thin/fire-extinguisher-thin.icon";

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
