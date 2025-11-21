import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BinocularsBoldIcon } from "../bold";
        import { BinocularsDuotoneIcon } from "../duotone";
        import { BinocularsFillIcon } from "../fill";
        import { BinocularsLightIcon } from "../light";
        import { BinocularsRegularIcon } from "../regular";
        import { BinocularsThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BinocularsIcon = memo(function Binoculars(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BinocularsBoldIcon,
            duotone: BinocularsDuotoneIcon,
            fill: BinocularsFillIcon,
            light: BinocularsLightIcon,
            regular: BinocularsRegularIcon,
            thin: BinocularsThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
