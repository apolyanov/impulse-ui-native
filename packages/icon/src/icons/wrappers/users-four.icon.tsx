import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UsersFourBoldIcon } from "../bold";
import { UsersFourDuotoneIcon } from "../duotone";
import { UsersFourFillIcon } from "../fill";
import { UsersFourLightIcon } from "../light";
import { UsersFourRegularIcon } from "../regular";
import { UsersFourThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const UsersFourIcon = memo(function UsersFour(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UsersFourBoldIcon,
      duotone: UsersFourDuotoneIcon,
      fill: UsersFourFillIcon,
      light: UsersFourLightIcon,
      regular: UsersFourRegularIcon,
      thin: UsersFourThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
