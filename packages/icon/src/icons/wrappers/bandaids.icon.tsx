import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BandaidsBoldIcon } from "../bold/bandaids-bold.icon";
import { BandaidsDuotoneIcon } from "../duotone/bandaids-duotone.icon";
import { BandaidsFillIcon } from "../fill/bandaids-fill.icon";
import { BandaidsLightIcon } from "../light/bandaids-light.icon";
import { BandaidsRegularIcon } from "../regular/bandaids-regular.icon";
import { BandaidsThinIcon } from "../thin/bandaids-thin.icon";

export const BandaidsIcon = memo(function Bandaids(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BandaidsBoldIcon,
      duotone: BandaidsDuotoneIcon,
      fill: BandaidsFillIcon,
      light: BandaidsLightIcon,
      regular: BandaidsRegularIcon,
      thin: BandaidsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
