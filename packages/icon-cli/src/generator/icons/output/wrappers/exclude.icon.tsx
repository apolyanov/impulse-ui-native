import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ExcludeBoldIcon } from "../bold";
        import { ExcludeDuotoneIcon } from "../duotone";
        import { ExcludeFillIcon } from "../fill";
        import { ExcludeLightIcon } from "../light";
        import { ExcludeRegularIcon } from "../regular";
        import { ExcludeThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ExcludeIcon = memo(function Exclude(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ExcludeBoldIcon,
            duotone: ExcludeDuotoneIcon,
            fill: ExcludeFillIcon,
            light: ExcludeLightIcon,
            regular: ExcludeRegularIcon,
            thin: ExcludeThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
