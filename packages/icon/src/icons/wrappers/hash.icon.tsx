import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HashBoldIcon } from "../bold";
import { HashDuotoneIcon } from "../duotone";
import { HashFillIcon } from "../fill";
import { HashLightIcon } from "../light";
import { HashRegularIcon } from "../regular";
import { HashThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HashIcon = memo(function Hash(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HashBoldIcon,
      duotone: HashDuotoneIcon,
      fill: HashFillIcon,
      light: HashLightIcon,
      regular: HashRegularIcon,
      thin: HashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
