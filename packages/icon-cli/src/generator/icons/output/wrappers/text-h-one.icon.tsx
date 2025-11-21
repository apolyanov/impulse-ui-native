import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TextHOneBoldIcon } from "../bold";
        import { TextHOneDuotoneIcon } from "../duotone";
        import { TextHOneFillIcon } from "../fill";
        import { TextHOneLightIcon } from "../light";
        import { TextHOneRegularIcon } from "../regular";
        import { TextHOneThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TextHOneIcon = memo(function TextHOne(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TextHOneBoldIcon,
            duotone: TextHOneDuotoneIcon,
            fill: TextHOneFillIcon,
            light: TextHOneLightIcon,
            regular: TextHOneRegularIcon,
            thin: TextHOneThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
