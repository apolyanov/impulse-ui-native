import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { UniteBoldIcon } from "../bold";
        import { UniteDuotoneIcon } from "../duotone";
        import { UniteFillIcon } from "../fill";
        import { UniteLightIcon } from "../light";
        import { UniteRegularIcon } from "../regular";
        import { UniteThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const UniteIcon = memo(function Unite(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: UniteBoldIcon,
            duotone: UniteDuotoneIcon,
            fill: UniteFillIcon,
            light: UniteLightIcon,
            regular: UniteRegularIcon,
            thin: UniteThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
