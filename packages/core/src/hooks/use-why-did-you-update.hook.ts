import { useEffect, useRef } from "react";

type Props = Record<string, any>;

export function useWhyDidYouUpdate(name: string, props: Props) {
  const previousProps = useRef<Props>(null);

  useEffect(() => {
    if (previousProps.current) {
      const allKeys = Object.keys({
        ...previousProps.current,
        ...props,
      });

      const changes: Record<string, { from: any; to: any }> = {};

      allKeys.forEach((key) => {
        if (previousProps.current![key] !== props[key]) {
          changes[key] = {
            from: previousProps.current![key],
            to: props[key],
          };
        }
      });

      if (Object.keys(changes).length) {
        console.log("[why-did-you-update]", name, changes);
      }
    }

    previousProps.current = props;
  });
}
