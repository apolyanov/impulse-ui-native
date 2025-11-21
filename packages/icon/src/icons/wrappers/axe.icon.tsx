import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AxeBoldIcon } from "../bold";
import { AxeDuotoneIcon } from "../duotone";
import { AxeFillIcon } from "../fill";
import { AxeLightIcon } from "../light";
import { AxeRegularIcon } from "../regular";
import { AxeThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
