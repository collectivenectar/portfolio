export type GroupResponseItem = {
    id: string;
    user_id: string;
    name: string;
    updatedAt: string;
    createdAt: string;
  };

export type GetCIDResponse = {
    data?: JSON | string | Blob | null;
    contentType: ContentType;
  };
  
export type ContentType =
    | "application/json"
    | "application/xml"
    | "text/plain"
    | "text/html"
    | "text/css"
    | "text/javascript"
    | "application/javascript"
    | "image/jpeg"
    | "image/png"
    | "image/gif"
    | "image/svg+xml"
    | "audio/mpeg"
    | "audio/ogg"
    | "video/mp4"
    | "application/pdf"
    | "application/octet-stream"
    | string;

    export type PinListItem = {
      id: string;
      ipfs_pin_hash: string;
      size: number;
      user_id: string;
      date_pinned: string;
      date_unpinned: string | null;
      metadata: {
        name: string | null;
        keyvalues: {
          [key: string]: any;
        } | null;
      };
      regions: {
        regionId: string;
        currentReplicationCount: number;
        desiredReplicationCount: number;
      }[];
      mime_type: string;
      number_of_files: number;
    };
    