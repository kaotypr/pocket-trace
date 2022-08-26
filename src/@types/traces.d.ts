interface TraceLocationCoords {
  speed: number;
  heading: number;
  longitude: number;
  accuracy: number;
  latitude: number;
  altitude: number;
  latitudeDelta?: number;
  longitudeDelta?: number;
}

interface TraceLocation {
  coords: TraceLocationCoords;
  _id?: string;
  timestamp: number;
}

interface Trace {
  name: string;
  _id?: string;
  locations: TraceLocation[];
  userId: string;
}
