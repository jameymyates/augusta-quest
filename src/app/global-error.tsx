"use client";

import React from "react";

const GlobalError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  React.useEffect(() => {
    /**
     * Log the error to an error reporting service
     */
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div role="alert">
          <h2>Something went wrong!</h2>
          <button onClick={() => reset()}>Try again</button>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
