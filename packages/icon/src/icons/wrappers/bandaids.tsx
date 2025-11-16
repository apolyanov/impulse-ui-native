import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BandaidsBold } from "../bold";
import { BandaidsDuotone } from "../duotone";
import { BandaidsFill } from "../fill";
import { BandaidsLight } from "../light";
import { BandaidsRegular } from "../regular";
import { BandaidsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Bandaids = memo(function Bandaids(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BandaidsBold,
      duotone: BandaidsDuotone,
      fill: BandaidsFill,
      light: BandaidsLight,
      regular: BandaidsRegular,
      thin: BandaidsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
