import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowURightDownBoldIcon } from "../bold";
        import { ArrowURightDownDuotoneIcon } from "../duotone";
        import { ArrowURightDownFillIcon } from "../fill";
        import { ArrowURightDownLightIcon } from "../light";
        import { ArrowURightDownRegularIcon } from "../regular";
        import { ArrowURightDownThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowURightDownIcon = memo(function ArrowURightDown(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowURightDownBoldIcon,
            duotone: ArrowURightDownDuotoneIcon,
            fill: ArrowURightDownFillIcon,
            light: ArrowURightDownLightIcon,
            regular: ArrowURightDownRegularIcon,
            thin: ArrowURightDownThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
