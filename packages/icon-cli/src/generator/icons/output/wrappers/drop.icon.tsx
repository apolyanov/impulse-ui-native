import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { DropBoldIcon } from "../bold";
        import { DropDuotoneIcon } from "../duotone";
        import { DropFillIcon } from "../fill";
        import { DropLightIcon } from "../light";
        import { DropRegularIcon } from "../regular";
        import { DropThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const DropIcon = memo(function Drop(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: DropBoldIcon,
            duotone: DropDuotoneIcon,
            fill: DropFillIcon,
            light: DropLightIcon,
            regular: DropRegularIcon,
            thin: DropThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
