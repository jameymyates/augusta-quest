"use client";

import { FC, useEffect } from "react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const GlobalError: FC<GlobalErrorProps> = ({ error, reset }) => {
  useEffect(() => {
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
