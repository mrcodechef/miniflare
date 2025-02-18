import { MiniflareError } from "@miniflare/shared";

export type MiniflareCoreErrorCode =
  | "ERR_NO_SCRIPT" // No script specified but one was required
  | "ERR_MOUNT_NO_NAME" // Attempted to mount a worker with an empty string name
  | "ERR_MOUNT_NESTED" // Attempted to recursively mount workers
  | "ERR_MOUNT" // Error whilst mounting worker
  | "ERR_MOUNT_NAME_MISMATCH" // Mounted name must match service name if defined
  | "ERR_SERVICE_NOT_MOUNTED" // Mount for service binding not found
  | "ERR_INVALID_UPSTREAM"; // Invalid upstream URL

export class MiniflareCoreError extends MiniflareError<MiniflareCoreErrorCode> {}
