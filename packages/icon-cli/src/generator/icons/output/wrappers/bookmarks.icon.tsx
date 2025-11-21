import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BookmarksBoldIcon } from "../bold";
        import { BookmarksDuotoneIcon } from "../duotone";
        import { BookmarksFillIcon } from "../fill";
        import { BookmarksLightIcon } from "../light";
        import { BookmarksRegularIcon } from "../regular";
        import { BookmarksThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BookmarksIcon = memo(function Bookmarks(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BookmarksBoldIcon,
            duotone: BookmarksDuotoneIcon,
            fill: BookmarksFillIcon,
            light: BookmarksLightIcon,
            regular: BookmarksRegularIcon,
            thin: BookmarksThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
