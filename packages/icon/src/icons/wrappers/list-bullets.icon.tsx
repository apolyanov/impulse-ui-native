import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ListBulletsBoldIcon } from "../bold/list-bullets-bold.icon";
import { ListBulletsDuotoneIcon } from "../duotone/list-bullets-duotone.icon";
import { ListBulletsFillIcon } from "../fill/list-bullets-fill.icon";
import { ListBulletsLightIcon } from "../light/list-bullets-light.icon";
import { ListBulletsRegularIcon } from "../regular/list-bullets-regular.icon";
import { ListBulletsThinIcon } from "../thin/list-bullets-thin.icon";

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
