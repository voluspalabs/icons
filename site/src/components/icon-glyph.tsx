import { memo, useEffect, useState } from "react";

import { getCachedIcon, loadIcon } from "../icon-loader";
import type { IconComponent, IconEntry } from "../types";

interface IconGlyphProps {
  entry: IconEntry;
  size: number;
}

interface IconGlyphState {
  failed: boolean;
  Icon: IconComponent | null;
}

const IconGlyphComponent = ({ entry, size }: IconGlyphProps) => {
  const [glyphState, setGlyphState] = useState<IconGlyphState>(() => ({
    Icon: getCachedIcon(entry),
    failed: false,
  }));
  const { Icon, failed } = glyphState;

  useEffect(() => {
    let isCurrent = true;

    const cachedIcon = getCachedIcon(entry);

    // Resetting here is the point: when `entry` changes the glyph must swap to
    // the new icon's cached value (or its placeholder) before the load settles.
    // oxlint-disable-next-line react/react-compiler
    setGlyphState({ Icon: cachedIcon, failed: false });

    const syncIcon = async () => {
      try {
        const loadedIcon = await loadIcon(entry);

        if (isCurrent) {
          setGlyphState({ Icon: loadedIcon, failed: false });
        }
      } catch {
        if (isCurrent) {
          setGlyphState({ Icon: null, failed: true });
        }
      }
    };

    void syncIcon();

    return () => {
      isCurrent = false;
    };
  }, [entry]);

  if (!Icon) {
    return (
      <span
        aria-hidden="true"
        className={failed ? "icon-placeholder is-error" : "icon-placeholder"}
        style={{ height: size, width: size }}
      />
    );
  }

  return (
    <Icon
      aria-hidden="true"
      className="icon-svg"
      focusable="false"
      style={{ height: size, width: size }}
    />
  );
};

export const IconGlyph = memo(IconGlyphComponent);
