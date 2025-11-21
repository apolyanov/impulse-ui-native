import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { HouseLineBoldIcon } from "../bold";
        import { HouseLineDuotoneIcon } from "../duotone";
        import { HouseLineFillIcon } from "../fill";
        import { HouseLineLightIcon } from "../light";
        import { HouseLineRegularIcon } from "../regular";
        import { HouseLineThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const HouseLineIcon = memo(function HouseLine(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: HouseLineBoldIcon,
            duotone: HouseLineDuotoneIcon,
            fill: HouseLineFillIcon,
            light: HouseLineLightIcon,
            regular: HouseLineRegularIcon,
            thin: HouseLineThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
