import { Feature } from "ol";
import { PointCoordType } from "ol/interaction/Draw";

export type ChangeStatesType = {
  draw: boolean;
  select: boolean;
  modify: boolean;
  snap: boolean;
  mapStyle: string | undefined;
  drawMode: any | undefined;
  pointStyle: string | undefined;
  features: Feature[];
  selectedFeatures: Feature[];
  mylocation: boolean;
  viewCenter: {
    view: PointCoordType | undefined;
    zoom: number;
    rotation: number;
  };
};
