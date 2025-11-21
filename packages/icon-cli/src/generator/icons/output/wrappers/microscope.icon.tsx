import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { MicroscopeBoldIcon } from "../bold";
        import { MicroscopeDuotoneIcon } from "../duotone";
        import { MicroscopeFillIcon } from "../fill";
        import { MicroscopeLightIcon } from "../light";
        import { MicroscopeRegularIcon } from "../regular";
        import { MicroscopeThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const MicroscopeIcon = memo(function Microscope(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: MicroscopeBoldIcon,
            duotone: MicroscopeDuotoneIcon,
            fill: MicroscopeFillIcon,
            light: MicroscopeLightIcon,
            regular: MicroscopeRegularIcon,
            thin: MicroscopeThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
