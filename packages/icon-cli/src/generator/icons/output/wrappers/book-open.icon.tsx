import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BookOpenBoldIcon } from "../bold";
        import { BookOpenDuotoneIcon } from "../duotone";
        import { BookOpenFillIcon } from "../fill";
        import { BookOpenLightIcon } from "../light";
        import { BookOpenRegularIcon } from "../regular";
        import { BookOpenThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BookOpenIcon = memo(function BookOpen(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BookOpenBoldIcon,
            duotone: BookOpenDuotoneIcon,
            fill: BookOpenFillIcon,
            light: BookOpenLightIcon,
            regular: BookOpenRegularIcon,
            thin: BookOpenThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
