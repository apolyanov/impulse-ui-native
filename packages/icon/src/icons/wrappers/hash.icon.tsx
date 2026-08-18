import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HashBoldIcon } from "../bold/hash-bold.icon";
import { HashDuotoneIcon } from "../duotone/hash-duotone.icon";
import { HashFillIcon } from "../fill/hash-fill.icon";
import { HashLightIcon } from "../light/hash-light.icon";
import { HashRegularIcon } from "../regular/hash-regular.icon";
import { HashThinIcon } from "../thin/hash-thin.icon";

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
