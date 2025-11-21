import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PersonArmsSpreadBoldIcon } from "../bold";
        import { PersonArmsSpreadDuotoneIcon } from "../duotone";
        import { PersonArmsSpreadFillIcon } from "../fill";
        import { PersonArmsSpreadLightIcon } from "../light";
        import { PersonArmsSpreadRegularIcon } from "../regular";
        import { PersonArmsSpreadThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PersonArmsSpreadIcon = memo(function PersonArmsSpread(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PersonArmsSpreadBoldIcon,
            duotone: PersonArmsSpreadDuotoneIcon,
            fill: PersonArmsSpreadFillIcon,
            light: PersonArmsSpreadLightIcon,
            regular: PersonArmsSpreadRegularIcon,
            thin: PersonArmsSpreadThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
