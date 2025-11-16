import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BarcodeBold } from "../bold";
import { BarcodeDuotone } from "../duotone";
import { BarcodeFill } from "../fill";
import { BarcodeLight } from "../light";
import { BarcodeRegular } from "../regular";
import { BarcodeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Barcode = memo(function Barcode(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BarcodeBold,
      duotone: BarcodeDuotone,
      fill: BarcodeFill,
      light: BarcodeLight,
      regular: BarcodeRegular,
      thin: BarcodeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
