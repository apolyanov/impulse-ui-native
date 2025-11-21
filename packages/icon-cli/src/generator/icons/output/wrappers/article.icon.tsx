import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArticleBoldIcon } from "../bold";
        import { ArticleDuotoneIcon } from "../duotone";
        import { ArticleFillIcon } from "../fill";
        import { ArticleLightIcon } from "../light";
        import { ArticleRegularIcon } from "../regular";
        import { ArticleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArticleIcon = memo(function Article(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArticleBoldIcon,
            duotone: ArticleDuotoneIcon,
            fill: ArticleFillIcon,
            light: ArticleLightIcon,
            regular: ArticleRegularIcon,
            thin: ArticleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
