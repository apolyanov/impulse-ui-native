import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BookUserBoldIcon } from "../bold/book-user-bold.icon";
import { BookUserDuotoneIcon } from "../duotone/book-user-duotone.icon";
import { BookUserFillIcon } from "../fill/book-user-fill.icon";
import { BookUserLightIcon } from "../light/book-user-light.icon";
import { BookUserRegularIcon } from "../regular/book-user-regular.icon";
import { BookUserThinIcon } from "../thin/book-user-thin.icon";

export const BookUserIcon = memo(function BookUser(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BookUserBoldIcon,
      duotone: BookUserDuotoneIcon,
      fill: BookUserFillIcon,
      light: BookUserLightIcon,
      regular: BookUserRegularIcon,
      thin: BookUserThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
