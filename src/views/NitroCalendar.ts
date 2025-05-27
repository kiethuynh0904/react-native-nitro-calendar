import { getHostComponent, type HybridRef } from 'react-native-nitro-modules'
import type {
  NitroCalendarMethods,
  NitroCalendarProps,
} from '../specs/NitroCalendar.nitro'
import CalendarConfig from '../../nitrogen/generated/shared/json/NitroCalendarConfig.json'

export const NitroCalendar = getHostComponent<
  NitroCalendarProps,
  NitroCalendarMethods
>('NitroCalendar', () => CalendarConfig)

export type NitroCalendarRef = HybridRef<
  NitroCalendarProps,
  NitroCalendarMethods
>
