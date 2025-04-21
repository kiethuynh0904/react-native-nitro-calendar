#include <jni.h>
#include "NitroCalendarOnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::nitrocalendar::initialize(vm);
}
