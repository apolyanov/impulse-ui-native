import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TrademarkRegisteredBoldIcon } from "../bold";
        import { TrademarkRegisteredDuotoneIcon } from "../duotone";
        import { TrademarkRegisteredFillIcon } from "../fill";
        import { TrademarkRegisteredLightIcon } from "../light";
        import { TrademarkRegisteredRegularIcon } from "../regular";
        import { TrademarkRegisteredThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TrademarkRegisteredIcon = memo(function TrademarkRegistered(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TrademarkRegisteredBoldIcon,
            duotone: TrademarkRegisteredDuotoneIcon,
            fill: TrademarkRegisteredFillIcon,
            light: TrademarkRegisteredLightIcon,
            regular: TrademarkRegisteredRegularIcon,
            thin: TrademarkRegisteredThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
