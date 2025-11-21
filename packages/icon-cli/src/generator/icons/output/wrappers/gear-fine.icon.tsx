import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { GearFineBoldIcon } from "../bold";
        import { GearFineDuotoneIcon } from "../duotone";
        import { GearFineFillIcon } from "../fill";
        import { GearFineLightIcon } from "../light";
        import { GearFineRegularIcon } from "../regular";
        import { GearFineThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const GearFineIcon = memo(function GearFine(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: GearFineBoldIcon,
            duotone: GearFineDuotoneIcon,
            fill: GearFineFillIcon,
            light: GearFineLightIcon,
            regular: GearFineRegularIcon,
            thin: GearFineThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
