import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BookmarkSimpleBoldIcon } from "../bold";
        import { BookmarkSimpleDuotoneIcon } from "../duotone";
        import { BookmarkSimpleFillIcon } from "../fill";
        import { BookmarkSimpleLightIcon } from "../light";
        import { BookmarkSimpleRegularIcon } from "../regular";
        import { BookmarkSimpleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BookmarkSimpleIcon = memo(function BookmarkSimple(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BookmarkSimpleBoldIcon,
            duotone: BookmarkSimpleDuotoneIcon,
            fill: BookmarkSimpleFillIcon,
            light: BookmarkSimpleLightIcon,
            regular: BookmarkSimpleRegularIcon,
            thin: BookmarkSimpleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
