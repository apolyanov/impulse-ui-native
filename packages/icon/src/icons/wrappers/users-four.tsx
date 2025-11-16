import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UsersFourBold } from "../bold";
import { UsersFourDuotone } from "../duotone";
import { UsersFourFill } from "../fill";
import { UsersFourLight } from "../light";
import { UsersFourRegular } from "../regular";
import { UsersFourThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const UsersFour = memo(function UsersFour(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UsersFourBold,
      duotone: UsersFourDuotone,
      fill: UsersFourFill,
      light: UsersFourLight,
      regular: UsersFourRegular,
      thin: UsersFourThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
