import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { VaultBoldIcon } from "../bold/vault-bold.icon";
import { VaultDuotoneIcon } from "../duotone/vault-duotone.icon";
import { VaultFillIcon } from "../fill/vault-fill.icon";
import { VaultLightIcon } from "../light/vault-light.icon";
import { VaultRegularIcon } from "../regular/vault-regular.icon";
import { VaultThinIcon } from "../thin/vault-thin.icon";

export const VaultIcon = memo(function Vault(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: VaultBoldIcon,
      duotone: VaultDuotoneIcon,
      fill: VaultFillIcon,
      light: VaultLightIcon,
      regular: VaultRegularIcon,
      thin: VaultThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
