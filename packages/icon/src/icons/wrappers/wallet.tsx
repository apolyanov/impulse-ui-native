import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WalletBold } from "../bold";
import { WalletDuotone } from "../duotone";
import { WalletFill } from "../fill";
import { WalletLight } from "../light";
import { WalletRegular } from "../regular";
import { WalletThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Wallet = memo(function Wallet(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WalletBold,
      duotone: WalletDuotone,
      fill: WalletFill,
      light: WalletLight,
      regular: WalletRegular,
      thin: WalletThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
