#include <jni.h>
#include "MediaViewerOnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::mediaviewer::initialize(vm);
}
