///
/// HybridMediaViewerSpec.cpp
/// This file was generated by nitrogen. DO NOT MODIFY THIS FILE.
/// https://github.com/mrousavy/nitro
/// Copyright © 2025 Marc Rousavy @ Margelo
///

#include "HybridMediaViewerSpec.hpp"

namespace margelo::nitro::mediaviewer {

  void HybridMediaViewerSpec::loadHybridMethods() {
    // load base methods/properties
    HybridObject::loadHybridMethods();
    // load custom methods/properties
    registerHybrids(this, [](Prototype& prototype) {
      prototype.registerHybridGetter("isBlue", &HybridMediaViewerSpec::getIsBlue);
      prototype.registerHybridSetter("isBlue", &HybridMediaViewerSpec::setIsBlue);
      prototype.registerHybridGetter("hasBeenCalled", &HybridMediaViewerSpec::getHasBeenCalled);
      prototype.registerHybridSetter("hasBeenCalled", &HybridMediaViewerSpec::setHasBeenCalled);
      prototype.registerHybridGetter("colorScheme", &HybridMediaViewerSpec::getColorScheme);
      prototype.registerHybridSetter("colorScheme", &HybridMediaViewerSpec::setColorScheme);
      prototype.registerHybridGetter("someCallback", &HybridMediaViewerSpec::getSomeCallback);
      prototype.registerHybridSetter("someCallback", &HybridMediaViewerSpec::setSomeCallback);
      prototype.registerHybridMethod("someMethod", &HybridMediaViewerSpec::someMethod);
    });
  }

} // namespace margelo::nitro::mediaviewer
