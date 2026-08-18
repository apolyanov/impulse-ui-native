import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DnaBoldIcon } from "../bold/dna-bold.icon";
import { DnaDuotoneIcon } from "../duotone/dna-duotone.icon";
import { DnaFillIcon } from "../fill/dna-fill.icon";
import { DnaLightIcon } from "../light/dna-light.icon";
import { DnaRegularIcon } from "../regular/dna-regular.icon";
import { DnaThinIcon } from "../thin/dna-thin.icon";

export const DnaIcon = memo(function Dna(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DnaBoldIcon,
      duotone: DnaDuotoneIcon,
      fill: DnaFillIcon,
      light: DnaLightIcon,
      regular: DnaRegularIcon,
      thin: DnaThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
