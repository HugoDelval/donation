export type GeoFeature = {
  geometry: {
    coordinates: number[]
  }
  properties: {
    label: string
    id: string
    postcode?: string
    city?: string
  }
}
