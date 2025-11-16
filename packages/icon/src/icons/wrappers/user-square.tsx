import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UserSquareBold } from "../bold";
import { UserSquareDuotone } from "../duotone";
import { UserSquareFill } from "../fill";
import { UserSquareLight } from "../light";
import { UserSquareRegular } from "../regular";
import { UserSquareThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const UserSquare = memo(function UserSquare(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UserSquareBold,
      duotone: UserSquareDuotone,
      fill: UserSquareFill,
      light: UserSquareLight,
      regular: UserSquareRegular,
      thin: UserSquareThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
