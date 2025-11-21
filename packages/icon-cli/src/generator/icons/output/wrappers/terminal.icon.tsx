import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TerminalBoldIcon } from "../bold";
        import { TerminalDuotoneIcon } from "../duotone";
        import { TerminalFillIcon } from "../fill";
        import { TerminalLightIcon } from "../light";
        import { TerminalRegularIcon } from "../regular";
        import { TerminalThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TerminalIcon = memo(function Terminal(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TerminalBoldIcon,
            duotone: TerminalDuotoneIcon,
            fill: TerminalFillIcon,
            light: TerminalLightIcon,
            regular: TerminalRegularIcon,
            thin: TerminalThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
