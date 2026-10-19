import { createIcon } from "../../hocs/create-icon.hoc";
import { WalletBoldIcon } from "../bold/wallet-bold.icon";
import { WalletDuotoneIcon } from "../duotone/wallet-duotone.icon";
import { WalletFillIcon } from "../fill/wallet-fill.icon";
import { WalletLightIcon } from "../light/wallet-light.icon";
import { WalletRegularIcon } from "../regular/wallet-regular.icon";
import { WalletThinIcon } from "../thin/wallet-thin.icon";

export const WalletIcon = createIcon("Wallet", {
  bold: WalletBoldIcon,
  duotone: WalletDuotoneIcon,
  fill: WalletFillIcon,
  light: WalletLightIcon,
  regular: WalletRegularIcon,
  thin: WalletThinIcon,
});
