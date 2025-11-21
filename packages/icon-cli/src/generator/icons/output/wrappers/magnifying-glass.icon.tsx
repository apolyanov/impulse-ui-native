import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { MagnifyingGlassBoldIcon } from "../bold";
        import { MagnifyingGlassDuotoneIcon } from "../duotone";
        import { MagnifyingGlassFillIcon } from "../fill";
        import { MagnifyingGlassLightIcon } from "../light";
        import { MagnifyingGlassRegularIcon } from "../regular";
        import { MagnifyingGlassThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const MagnifyingGlassIcon = memo(function MagnifyingGlass(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: MagnifyingGlassBoldIcon,
            duotone: MagnifyingGlassDuotoneIcon,
            fill: MagnifyingGlassFillIcon,
            light: MagnifyingGlassLightIcon,
            regular: MagnifyingGlassRegularIcon,
            thin: MagnifyingGlassThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
