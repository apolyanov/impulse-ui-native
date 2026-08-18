import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TornadoBoldIcon } from "../bold/tornado-bold.icon";
import { TornadoDuotoneIcon } from "../duotone/tornado-duotone.icon";
import { TornadoFillIcon } from "../fill/tornado-fill.icon";
import { TornadoLightIcon } from "../light/tornado-light.icon";
import { TornadoRegularIcon } from "../regular/tornado-regular.icon";
import { TornadoThinIcon } from "../thin/tornado-thin.icon";

export const TornadoIcon = memo(function Tornado(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TornadoBoldIcon,
      duotone: TornadoDuotoneIcon,
      fill: TornadoFillIcon,
      light: TornadoLightIcon,
      regular: TornadoRegularIcon,
      thin: TornadoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
