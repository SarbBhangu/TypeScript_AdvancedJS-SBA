export class ValidationError extends Error {
        statusCode: number;

        constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
        this.name = "ValidationError";
  }
}

export function handleError(error: unknown): void {
        if (error instanceof ValidationError) {
        console.error(`Validation Error (${error.statusCode}): ${error.message}`);
        } 
        else if (error instanceof Error) {
        console.error(`General Error: ${error.message}`);
        } 
        else {
        console.error("Unknown error occurred");
        }
}
