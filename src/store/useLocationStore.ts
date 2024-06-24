import { create } from "zustand";
import type {Location} from "../interfaces/Location";
import { clearWatchLocation, getCurrentLocation, watchCurrentLocation } from "../hooks/useLocation";

interface LocationStore {
  lastKnownLocation: Location | null
  userLocations: Location[]
  watchId: number | null 

  getLocation: () => Promise<Location | null >
  watchLocation: () => void
  clearWatchLocation: () => void
}

export const useLocationStore = create<LocationStore>()((set, get) => ({
  lastKnownLocation: null,
  userLocations: [],
  watchId: null,
 
  getLocation: async () => {
   const location= await getCurrentLocation()
   set({lastKnownLocation: location})
   return location
  },
 
  watchLocation: () => {
   const watchId = get().watchId
   if (watchId !== null) {
     get().clearWatchLocation()
   }
 
   const id = watchCurrentLocation((location) => {
     set({
       lastKnownLocation: location,
       userLocations: [...get().userLocations, location]
     })
   })
 
   set({watchId: id})
 
  },
 
  clearWatchLocation: () => {
   const watchId = get().watchId
   if (watchId !== null) {
     clearWatchLocation(watchId)
   }
  },
 }))
