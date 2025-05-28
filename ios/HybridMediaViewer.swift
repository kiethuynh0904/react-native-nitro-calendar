import Foundation
import UIKit

class HybridMediaViewer: HybridMediaViewerSpec {
    // UIView
    var view: UIView = UIView()

    // Props
    var isBlue: Bool = false {
        didSet {
            view.backgroundColor = isBlue ? .systemBlue : .systemMint
        }
    }
    var hasBeenCalled: Bool = false
    var colorScheme: ColorScheme = .light
    var someCallback: () -> Void = {}

    // Methods
    func someMethod() throws {
        hasBeenCalled = true
        someCallback()
    }
}
