import { createIcon } from "../../hocs/create-icon.hoc";
import { VaultBoldIcon } from "../bold/vault-bold.icon";
import { VaultDuotoneIcon } from "../duotone/vault-duotone.icon";
import { VaultFillIcon } from "../fill/vault-fill.icon";
import { VaultLightIcon } from "../light/vault-light.icon";
import { VaultRegularIcon } from "../regular/vault-regular.icon";
import { VaultThinIcon } from "../thin/vault-thin.icon";

export const VaultIcon = createIcon("Vault", {
  bold: VaultBoldIcon,
  duotone: VaultDuotoneIcon,
  fill: VaultFillIcon,
  light: VaultLightIcon,
  regular: VaultRegularIcon,
  thin: VaultThinIcon,
});
