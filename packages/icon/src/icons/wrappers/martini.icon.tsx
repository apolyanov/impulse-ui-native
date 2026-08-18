import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MartiniBoldIcon } from "../bold/martini-bold.icon";
import { MartiniDuotoneIcon } from "../duotone/martini-duotone.icon";
import { MartiniFillIcon } from "../fill/martini-fill.icon";
import { MartiniLightIcon } from "../light/martini-light.icon";
import { MartiniRegularIcon } from "../regular/martini-regular.icon";
import { MartiniThinIcon } from "../thin/martini-thin.icon";

export const MartiniIcon = memo(function Martini(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MartiniBoldIcon,
      duotone: MartiniDuotoneIcon,
      fill: MartiniFillIcon,
      light: MartiniLightIcon,
      regular: MartiniRegularIcon,
      thin: MartiniThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
