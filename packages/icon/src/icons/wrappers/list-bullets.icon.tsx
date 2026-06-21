import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ListBulletsBoldIcon } from "../bold";
import { ListBulletsDuotoneIcon } from "../duotone";
import { ListBulletsFillIcon } from "../fill";
import { ListBulletsLightIcon } from "../light";
import { ListBulletsRegularIcon } from "../regular";
import { ListBulletsThinIcon } from "../thin";

export const ListBulletsIcon = memo(function ListBullets(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ListBulletsBoldIcon,
      duotone: ListBulletsDuotoneIcon,
      fill: ListBulletsFillIcon,
      light: ListBulletsLightIcon,
      regular: ListBulletsRegularIcon,
      thin: ListBulletsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
