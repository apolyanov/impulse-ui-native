import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CheersBoldIcon } from "../bold/cheers-bold.icon";
import { CheersDuotoneIcon } from "../duotone/cheers-duotone.icon";
import { CheersFillIcon } from "../fill/cheers-fill.icon";
import { CheersLightIcon } from "../light/cheers-light.icon";
import { CheersRegularIcon } from "../regular/cheers-regular.icon";
import { CheersThinIcon } from "../thin/cheers-thin.icon";

export const CheersIcon = memo(function Cheers(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CheersBoldIcon,
      duotone: CheersDuotoneIcon,
      fill: CheersFillIcon,
      light: CheersLightIcon,
      regular: CheersRegularIcon,
      thin: CheersThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
