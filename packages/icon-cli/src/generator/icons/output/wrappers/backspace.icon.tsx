import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BackspaceBoldIcon } from "../bold";
        import { BackspaceDuotoneIcon } from "../duotone";
        import { BackspaceFillIcon } from "../fill";
        import { BackspaceLightIcon } from "../light";
        import { BackspaceRegularIcon } from "../regular";
        import { BackspaceThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BackspaceIcon = memo(function Backspace(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BackspaceBoldIcon,
            duotone: BackspaceDuotoneIcon,
            fill: BackspaceFillIcon,
            light: BackspaceLightIcon,
            regular: BackspaceRegularIcon,
            thin: BackspaceThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
