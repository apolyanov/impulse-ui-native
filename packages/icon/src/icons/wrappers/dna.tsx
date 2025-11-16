import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DnaBold } from "../bold";
import { DnaDuotone } from "../duotone";
import { DnaFill } from "../fill";
import { DnaLight } from "../light";
import { DnaRegular } from "../regular";
import { DnaThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Dna = memo(function Dna(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DnaBold,
      duotone: DnaDuotone,
      fill: DnaFill,
      light: DnaLight,
      regular: DnaRegular,
      thin: DnaThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
