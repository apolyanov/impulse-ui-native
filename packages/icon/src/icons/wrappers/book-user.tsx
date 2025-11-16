import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BookUserBold } from "../bold";
import { BookUserDuotone } from "../duotone";
import { BookUserFill } from "../fill";
import { BookUserLight } from "../light";
import { BookUserRegular } from "../regular";
import { BookUserThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BookUser = memo(function BookUser(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BookUserBold,
      duotone: BookUserDuotone,
      fill: BookUserFill,
      light: BookUserLight,
      regular: BookUserRegular,
      thin: BookUserThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
