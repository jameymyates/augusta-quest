"use client";

import React from "react";

const GlobalError: React.FC<{
  error: Error & { digest?: string };
  reset: () => void;
}> = ({ error, reset }) => {
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
          <button onClick={() => reset()} type="button">
            Try again
          </button>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
