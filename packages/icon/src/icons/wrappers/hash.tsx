import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HashBold } from "../bold";
import { HashDuotone } from "../duotone";
import { HashFill } from "../fill";
import { HashLight } from "../light";
import { HashRegular } from "../regular";
import { HashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Hash = memo(function Hash(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HashBold,
      duotone: HashDuotone,
      fill: HashFill,
      light: HashLight,
      regular: HashRegular,
      thin: HashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
