import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CopyleftBoldIcon } from "../bold";
        import { CopyleftDuotoneIcon } from "../duotone";
        import { CopyleftFillIcon } from "../fill";
        import { CopyleftLightIcon } from "../light";
        import { CopyleftRegularIcon } from "../regular";
        import { CopyleftThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CopyleftIcon = memo(function Copyleft(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CopyleftBoldIcon,
            duotone: CopyleftDuotoneIcon,
            fill: CopyleftFillIcon,
            light: CopyleftLightIcon,
            regular: CopyleftRegularIcon,
            thin: CopyleftThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
