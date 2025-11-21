import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { WalletBoldIcon } from "../bold";
        import { WalletDuotoneIcon } from "../duotone";
        import { WalletFillIcon } from "../fill";
        import { WalletLightIcon } from "../light";
        import { WalletRegularIcon } from "../regular";
        import { WalletThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
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
