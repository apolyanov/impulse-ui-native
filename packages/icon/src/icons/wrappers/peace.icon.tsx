import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PeaceBoldIcon } from "../bold/peace-bold.icon";
import { PeaceDuotoneIcon } from "../duotone/peace-duotone.icon";
import { PeaceFillIcon } from "../fill/peace-fill.icon";
import { PeaceLightIcon } from "../light/peace-light.icon";
import { PeaceRegularIcon } from "../regular/peace-regular.icon";
import { PeaceThinIcon } from "../thin/peace-thin.icon";

export const PeaceIcon = memo(function Peace(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PeaceBoldIcon,
      duotone: PeaceDuotoneIcon,
      fill: PeaceFillIcon,
      light: PeaceLightIcon,
      regular: PeaceRegularIcon,
      thin: PeaceThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
