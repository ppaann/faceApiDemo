interface ImageData {
  attribute_json: string;
  bounding_box: {
    height: number;
    left: number;
    top: number;
    width: number;
  };
  image: string;
  image_size: {
    height: number;
    width: number;
  };
  quality_text: {
    BLUR: string;
    BOUNDING_BOX_SIZE: string;
    Detection_Option: string;
    EXPOSURE: string;
    GLASSES: string;
    OCCLUSION: string;
    POSE: string;
    QUALITY_FOR_RECO: string;
  };
  system_text: {
    Background_Removal_Error: string;
    Detection_Error: string;
    Session_Id: string;
  };
}

export type { ImageData };
