require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "RNShareMenu"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.homepage     = package["homepage"]
  s.license      = package["license"]
  s.authors      = package["author"]

  s.platforms    = { :ios => min_ios_version_supported }
  s.source       = { :git => "https://github.com/meedan/react-native-share-menu.git", :tag => "#{s.version}" }
  s.swift_version = "5.2"


  s.source_files = "ios/**/*.{h,m,mm,swift,cpp}"
  s.exclude_files = [
    "ios/ShareViewController.swift",
    "ios/ReactShareViewController.swift",
    "ios/AutoContinueShareViewController.swift"
  ]

  install_modules_dependencies(s)
end
