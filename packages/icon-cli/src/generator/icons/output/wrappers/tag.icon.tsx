import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TagBoldIcon } from "../bold";
        import { TagDuotoneIcon } from "../duotone";
        import { TagFillIcon } from "../fill";
        import { TagLightIcon } from "../light";
        import { TagRegularIcon } from "../regular";
        import { TagThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TagIcon = memo(function Tag(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TagBoldIcon,
            duotone: TagDuotoneIcon,
            fill: TagFillIcon,
            light: TagLightIcon,
            regular: TagRegularIcon,
            thin: TagThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
