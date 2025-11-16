import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FireExtinguisherBold } from "../bold";
import { FireExtinguisherDuotone } from "../duotone";
import { FireExtinguisherFill } from "../fill";
import { FireExtinguisherLight } from "../light";
import { FireExtinguisherRegular } from "../regular";
import { FireExtinguisherThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FireExtinguisher = memo(function FireExtinguisher(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FireExtinguisherBold,
      duotone: FireExtinguisherDuotone,
      fill: FireExtinguisherFill,
      light: FireExtinguisherLight,
      regular: FireExtinguisherRegular,
      thin: FireExtinguisherThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
