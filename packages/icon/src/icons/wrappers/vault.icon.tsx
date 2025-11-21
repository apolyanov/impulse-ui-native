import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { VaultBoldIcon } from "../bold";
import { VaultDuotoneIcon } from "../duotone";
import { VaultFillIcon } from "../fill";
import { VaultLightIcon } from "../light";
import { VaultRegularIcon } from "../regular";
import { VaultThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
