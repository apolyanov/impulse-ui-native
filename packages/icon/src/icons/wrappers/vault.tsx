import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { VaultBold } from "../bold";
import { VaultDuotone } from "../duotone";
import { VaultFill } from "../fill";
import { VaultLight } from "../light";
import { VaultRegular } from "../regular";
import { VaultThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Vault = memo(function Vault(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: VaultBold,
      duotone: VaultDuotone,
      fill: VaultFill,
      light: VaultLight,
      regular: VaultRegular,
      thin: VaultThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
