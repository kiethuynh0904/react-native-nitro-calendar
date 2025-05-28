import { getHostComponent, type HybridRef } from 'react-native-nitro-modules'
import type {
  MediaViewerMethods,
  MediaViewerProps,
} from '../specs/MediaViewer.nitro'
import MeadiaViewerConfig from '../../nitrogen/generated/shared/json/MediaViewerConfig.json'

export const MediaViewer = getHostComponent<
  MediaViewerProps,
  MediaViewerMethods
>('MediaViewer', () => MeadiaViewerConfig)

export type MediaViewerRef = HybridRef<
  MediaViewerProps,
  MediaViewerMethods
>
