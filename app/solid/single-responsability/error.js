'use client'; // Error components must be Client components

export default function Error({
    error,
    reset,
}) {
    // Log the error to an error reporting service

    if (error.response) {
        console.error("ERROR", error.response);
    } else {
        console.error("ERROR", error);
    }
    return (
        <div>
            <h2>Something went wrong!</h2>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
      </button>
        </div>
    );
}