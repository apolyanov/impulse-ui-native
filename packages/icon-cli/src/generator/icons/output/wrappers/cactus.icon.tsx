import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CactusBoldIcon } from "../bold";
        import { CactusDuotoneIcon } from "../duotone";
        import { CactusFillIcon } from "../fill";
        import { CactusLightIcon } from "../light";
        import { CactusRegularIcon } from "../regular";
        import { CactusThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CactusIcon = memo(function Cactus(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CactusBoldIcon,
            duotone: CactusDuotoneIcon,
            fill: CactusFillIcon,
            light: CactusLightIcon,
            regular: CactusRegularIcon,
            thin: CactusThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
