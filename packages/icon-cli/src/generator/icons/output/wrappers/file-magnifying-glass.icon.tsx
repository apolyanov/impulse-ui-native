import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FileMagnifyingGlassBoldIcon } from "../bold";
        import { FileMagnifyingGlassDuotoneIcon } from "../duotone";
        import { FileMagnifyingGlassFillIcon } from "../fill";
        import { FileMagnifyingGlassLightIcon } from "../light";
        import { FileMagnifyingGlassRegularIcon } from "../regular";
        import { FileMagnifyingGlassThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FileMagnifyingGlassIcon = memo(function FileMagnifyingGlass(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FileMagnifyingGlassBoldIcon,
            duotone: FileMagnifyingGlassDuotoneIcon,
            fill: FileMagnifyingGlassFillIcon,
            light: FileMagnifyingGlassLightIcon,
            regular: FileMagnifyingGlassRegularIcon,
            thin: FileMagnifyingGlassThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
