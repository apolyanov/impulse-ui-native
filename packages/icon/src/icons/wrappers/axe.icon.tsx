import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AxeBoldIcon } from "../bold/axe-bold.icon";
import { AxeDuotoneIcon } from "../duotone/axe-duotone.icon";
import { AxeFillIcon } from "../fill/axe-fill.icon";
import { AxeLightIcon } from "../light/axe-light.icon";
import { AxeRegularIcon } from "../regular/axe-regular.icon";
import { AxeThinIcon } from "../thin/axe-thin.icon";

export const AxeIcon = memo(function Axe(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AxeBoldIcon,
      duotone: AxeDuotoneIcon,
      fill: AxeFillIcon,
      light: AxeLightIcon,
      regular: AxeRegularIcon,
      thin: AxeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
