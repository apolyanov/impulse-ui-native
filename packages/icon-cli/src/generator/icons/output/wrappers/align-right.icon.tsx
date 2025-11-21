import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { AlignRightBoldIcon } from "../bold";
        import { AlignRightDuotoneIcon } from "../duotone";
        import { AlignRightFillIcon } from "../fill";
        import { AlignRightLightIcon } from "../light";
        import { AlignRightRegularIcon } from "../regular";
        import { AlignRightThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const AlignRightIcon = memo(function AlignRight(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: AlignRightBoldIcon,
            duotone: AlignRightDuotoneIcon,
            fill: AlignRightFillIcon,
            light: AlignRightLightIcon,
            regular: AlignRightRegularIcon,
            thin: AlignRightThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
