import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SneakerMoveBoldIcon } from "../bold";
        import { SneakerMoveDuotoneIcon } from "../duotone";
        import { SneakerMoveFillIcon } from "../fill";
        import { SneakerMoveLightIcon } from "../light";
        import { SneakerMoveRegularIcon } from "../regular";
        import { SneakerMoveThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SneakerMoveIcon = memo(function SneakerMove(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SneakerMoveBoldIcon,
            duotone: SneakerMoveDuotoneIcon,
            fill: SneakerMoveFillIcon,
            light: SneakerMoveLightIcon,
            regular: SneakerMoveRegularIcon,
            thin: SneakerMoveThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
