import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BlueprintBoldIcon } from "../bold";
        import { BlueprintDuotoneIcon } from "../duotone";
        import { BlueprintFillIcon } from "../fill";
        import { BlueprintLightIcon } from "../light";
        import { BlueprintRegularIcon } from "../regular";
        import { BlueprintThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BlueprintIcon = memo(function Blueprint(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BlueprintBoldIcon,
            duotone: BlueprintDuotoneIcon,
            fill: BlueprintFillIcon,
            light: BlueprintLightIcon,
            regular: BlueprintRegularIcon,
            thin: BlueprintThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
