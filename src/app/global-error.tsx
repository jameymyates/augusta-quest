"use client";

import { FC, useEffect } from "react";

const env = process.env.NODE_ENV;

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const GlobalError: FC<GlobalErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    /**
     * In production, log the error to an error reporting service
     */
    if (env == "production") {
      console.error(error);
    }
  }, [error]);

  return (
    <html>
      <body>
        <div role="alert">
          <h2>Something went wrong!</h2>
          {/**
           * In development, render error message to screen
           */}
          {env == "development" && (
            <pre style={{ color: "red" }}>{error.message}</pre>
          )}
          <button onClick={() => reset()}>Try again</button>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
