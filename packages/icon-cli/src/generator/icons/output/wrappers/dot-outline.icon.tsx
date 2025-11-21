import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { DotOutlineBoldIcon } from "../bold";
        import { DotOutlineDuotoneIcon } from "../duotone";
        import { DotOutlineFillIcon } from "../fill";
        import { DotOutlineLightIcon } from "../light";
        import { DotOutlineRegularIcon } from "../regular";
        import { DotOutlineThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const DotOutlineIcon = memo(function DotOutline(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: DotOutlineBoldIcon,
            duotone: DotOutlineDuotoneIcon,
            fill: DotOutlineFillIcon,
            light: DotOutlineLightIcon,
            regular: DotOutlineRegularIcon,
            thin: DotOutlineThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
