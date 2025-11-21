import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArmchairBoldIcon } from "../bold";
        import { ArmchairDuotoneIcon } from "../duotone";
        import { ArmchairFillIcon } from "../fill";
        import { ArmchairLightIcon } from "../light";
        import { ArmchairRegularIcon } from "../regular";
        import { ArmchairThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArmchairIcon = memo(function Armchair(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArmchairBoldIcon,
            duotone: ArmchairDuotoneIcon,
            fill: ArmchairFillIcon,
            light: ArmchairLightIcon,
            regular: ArmchairRegularIcon,
            thin: ArmchairThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
