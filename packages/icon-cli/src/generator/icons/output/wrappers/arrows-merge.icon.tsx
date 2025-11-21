import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowsMergeBoldIcon } from "../bold";
        import { ArrowsMergeDuotoneIcon } from "../duotone";
        import { ArrowsMergeFillIcon } from "../fill";
        import { ArrowsMergeLightIcon } from "../light";
        import { ArrowsMergeRegularIcon } from "../regular";
        import { ArrowsMergeThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowsMergeIcon = memo(function ArrowsMerge(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowsMergeBoldIcon,
            duotone: ArrowsMergeDuotoneIcon,
            fill: ArrowsMergeFillIcon,
            light: ArrowsMergeLightIcon,
            regular: ArrowsMergeRegularIcon,
            thin: ArrowsMergeThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
