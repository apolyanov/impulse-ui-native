import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BarcodeBoldIcon } from "../bold/barcode-bold.icon";
import { BarcodeDuotoneIcon } from "../duotone/barcode-duotone.icon";
import { BarcodeFillIcon } from "../fill/barcode-fill.icon";
import { BarcodeLightIcon } from "../light/barcode-light.icon";
import { BarcodeRegularIcon } from "../regular/barcode-regular.icon";
import { BarcodeThinIcon } from "../thin/barcode-thin.icon";

export const BarcodeIcon = memo(function Barcode(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BarcodeBoldIcon,
      duotone: BarcodeDuotoneIcon,
      fill: BarcodeFillIcon,
      light: BarcodeLightIcon,
      regular: BarcodeRegularIcon,
      thin: BarcodeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
