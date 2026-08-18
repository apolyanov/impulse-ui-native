import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BinocularsBoldIcon } from "../bold/binoculars-bold.icon";
import { BinocularsDuotoneIcon } from "../duotone/binoculars-duotone.icon";
import { BinocularsFillIcon } from "../fill/binoculars-fill.icon";
import { BinocularsLightIcon } from "../light/binoculars-light.icon";
import { BinocularsRegularIcon } from "../regular/binoculars-regular.icon";
import { BinocularsThinIcon } from "../thin/binoculars-thin.icon";

export const BinocularsIcon = memo(function Binoculars(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BinocularsBoldIcon,
      duotone: BinocularsDuotoneIcon,
      fill: BinocularsFillIcon,
      light: BinocularsLightIcon,
      regular: BinocularsRegularIcon,
      thin: BinocularsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
