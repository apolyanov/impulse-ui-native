import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CowBoldIcon } from "../bold/cow-bold.icon";
import { CowDuotoneIcon } from "../duotone/cow-duotone.icon";
import { CowFillIcon } from "../fill/cow-fill.icon";
import { CowLightIcon } from "../light/cow-light.icon";
import { CowRegularIcon } from "../regular/cow-regular.icon";
import { CowThinIcon } from "../thin/cow-thin.icon";

export const CowIcon = memo(function Cow(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CowBoldIcon,
      duotone: CowDuotoneIcon,
      fill: CowFillIcon,
      light: CowLightIcon,
      regular: CowRegularIcon,
      thin: CowThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
