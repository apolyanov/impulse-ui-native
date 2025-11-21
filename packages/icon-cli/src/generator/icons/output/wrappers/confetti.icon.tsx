import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ConfettiBoldIcon } from "../bold";
        import { ConfettiDuotoneIcon } from "../duotone";
        import { ConfettiFillIcon } from "../fill";
        import { ConfettiLightIcon } from "../light";
        import { ConfettiRegularIcon } from "../regular";
        import { ConfettiThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ConfettiIcon = memo(function Confetti(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ConfettiBoldIcon,
            duotone: ConfettiDuotoneIcon,
            fill: ConfettiFillIcon,
            light: ConfettiLightIcon,
            regular: ConfettiRegularIcon,
            thin: ConfettiThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
