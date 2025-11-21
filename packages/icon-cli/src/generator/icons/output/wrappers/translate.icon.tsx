import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TranslateBoldIcon } from "../bold";
        import { TranslateDuotoneIcon } from "../duotone";
        import { TranslateFillIcon } from "../fill";
        import { TranslateLightIcon } from "../light";
        import { TranslateRegularIcon } from "../regular";
        import { TranslateThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TranslateIcon = memo(function Translate(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TranslateBoldIcon,
            duotone: TranslateDuotoneIcon,
            fill: TranslateFillIcon,
            light: TranslateLightIcon,
            regular: TranslateRegularIcon,
            thin: TranslateThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
