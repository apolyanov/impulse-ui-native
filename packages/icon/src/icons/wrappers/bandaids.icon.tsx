import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BandaidsBoldIcon } from "../bold";
import { BandaidsDuotoneIcon } from "../duotone";
import { BandaidsFillIcon } from "../fill";
import { BandaidsLightIcon } from "../light";
import { BandaidsRegularIcon } from "../regular";
import { BandaidsThinIcon } from "../thin";

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
