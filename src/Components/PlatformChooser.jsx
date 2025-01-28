import React, { useState } from "react";

const PlatformChooser = () => {
  const [focusDiv, setFocusDiv] = useState(1);
  return (
    <div className="chose-plat">
      <div
        className="rounded platform-chooser-pick"
        onClick={() => setFocusDiv(1)}
        style={{ backgroundColor: focusDiv === 1 ? "hsl(var(--primary))" : "" }}
      >
        
        Party
      </div>
      <div
        className="rounded platform-chooser-pick"
        onClick={() => setFocusDiv(2)}
        style={{ backgroundColor: focusDiv === 2 ? "hsl(var(--primary))" : "" }}
      >
        
        Matchs
      </div>
      <div
        className="rounded platform-chooser-pick"
        onClick={() => setFocusDiv(3)}
        style={{ backgroundColor: focusDiv === 3 ? "hsl(var(--primary))" : "" }}
      >
        
        Streams
      </div>
    </div>
  );
};

export default PlatformChooser;
