import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ListBulletsBold } from "../bold";
import { ListBulletsDuotone } from "../duotone";
import { ListBulletsFill } from "../fill";
import { ListBulletsLight } from "../light";
import { ListBulletsRegular } from "../regular";
import { ListBulletsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ListBullets = memo(function ListBullets(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ListBulletsBold,
      duotone: ListBulletsDuotone,
      fill: ListBulletsFill,
      light: ListBulletsLight,
      regular: ListBulletsRegular,
      thin: ListBulletsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
