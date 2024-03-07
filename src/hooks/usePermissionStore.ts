import { create } from 'zustand'
import type { PermissionStatus } from "../interfaces/permissions";
import { checkLocationPermission, requestLocationPermission } from '../context/permissions/location';

interface PermissionsState {
  locationsStatus: PermissionStatus

  requestLocationPermission: () => Promise<PermissionStatus>
  checkLocationPermission: () => Promise<PermissionStatus>
}

export const usePermissionStore = create<PermissionsState>()(set => ({
  locationsStatus: 'undetermined',

  requestLocationPermission: async () => {
    const status = await requestLocationPermission()
    set({locationsStatus: status})

    return status
  },

  checkLocationPermission: async () => {
    const status = await checkLocationPermission();
    set({locationsStatus: status})

    return status
  },

}))
