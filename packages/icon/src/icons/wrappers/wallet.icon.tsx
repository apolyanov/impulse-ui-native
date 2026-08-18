import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WalletBoldIcon } from "../bold/wallet-bold.icon";
import { WalletDuotoneIcon } from "../duotone/wallet-duotone.icon";
import { WalletFillIcon } from "../fill/wallet-fill.icon";
import { WalletLightIcon } from "../light/wallet-light.icon";
import { WalletRegularIcon } from "../regular/wallet-regular.icon";
import { WalletThinIcon } from "../thin/wallet-thin.icon";

export const WalletIcon = memo(function Wallet(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WalletBoldIcon,
      duotone: WalletDuotoneIcon,
      fill: WalletFillIcon,
      light: WalletLightIcon,
      regular: WalletRegularIcon,
      thin: WalletThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
