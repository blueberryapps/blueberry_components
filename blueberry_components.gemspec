# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'blueberry_components/version'

Gem::Specification.new do |spec|
  spec.name          = 'blueberry_components'
  spec.version       = BlueberryComponents::VERSION
  spec.authors       = ['Adam Hencze']
  spec.email         = ['ahencze@gmail.com']

  spec.summary       = 'BlueberryApps components used in website ruby applications.'
  spec.description   = 'BlueberryApps components used in website ruby applications.'
  spec.homepage      = 'https://github.com/blueberryapps/blueberry_components'
  spec.license       = 'MIT'

  spec.files         = `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  spec.bindir        = 'exe'
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ['lib']

  spec.add_development_dependency 'bundler', '~> 1.12'
  spec.add_development_dependency 'rake', '~> 10.0'
  spec.add_development_dependency 'rspec', '~> 3.0'
  spec.add_dependency 'redactor2_rails', '~> 0'
end
