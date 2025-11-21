import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { HandWithdrawBoldIcon } from "../bold";
        import { HandWithdrawDuotoneIcon } from "../duotone";
        import { HandWithdrawFillIcon } from "../fill";
        import { HandWithdrawLightIcon } from "../light";
        import { HandWithdrawRegularIcon } from "../regular";
        import { HandWithdrawThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const HandWithdrawIcon = memo(function HandWithdraw(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: HandWithdrawBoldIcon,
            duotone: HandWithdrawDuotoneIcon,
            fill: HandWithdrawFillIcon,
            light: HandWithdrawLightIcon,
            regular: HandWithdrawRegularIcon,
            thin: HandWithdrawThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
