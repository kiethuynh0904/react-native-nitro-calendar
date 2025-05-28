// TODO: Export specs that extend HybridObject<...> here
import type {
  HybridView,
  HybridViewProps,
  HybridViewMethods,
} from 'react-native-nitro-modules'

export type ColorScheme = 'light' | 'dark'

export interface MediaViewerProps extends HybridViewProps {
  isBlue: boolean
  hasBeenCalled: boolean
  colorScheme: ColorScheme
  someCallback: () => void
}

export interface MediaViewerMethods extends HybridViewMethods {
  someMethod(): void
}

export type MediaViewer = HybridView<MediaViewerProps, MediaViewerMethods>
