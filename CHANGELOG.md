# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

## 2.3.4 - 2023-07-09

## 2.3.3 - 2023-07-08

## 2.3.2 - 2023-07-04
### Fixed
- axios utils

## 2.3.1 - 2023-07-04

## 2.3.0 - 2023-07-03

## 2.2.2 - 2023-06-21
### Added
- Add all GeoJSON types
- Count type

### Fixed
- unused package
- bad imports

## 2.2.1 - 2023-06-21
### Fixed
- Access Token type for decrypt usage

## 2.2.0 - 2023-06-20
### Changed
- interceptor handling logic

### Fixed
- safe types

## 2.1.7 - 2023-06-15
### Fixed
- absolute path error

## 2.1.6 - 2023-06-14
### Fixed
- vehicles interfaces driver type (to be string array)

## 2.1.5 - 2023-06-14
### Changed
- models and interfaces folder structure

### Fixed
- models and interfaces of logistics transports (driver, vehicle, violation)

## 2.1.4 - 2023-06-13
### Changed
- logistic types (geoJSON)

### Fixed
- fix `*ById`s

## 2.1.3 - 2023-06-03

## 2.1.2 - 2023-06-01
### Added
- find method return type in config service

### Changed
- optional field in base interface ([issue #13](https://github.com/RahkarSanat/kiz-sdk-js/issues/13))

## 2.1.1 - 2023-05-28

## 2.1.0 - 2023-05-18
### Added
- filter instead of CountFilter for find method in core and artifact service
- config service
- custom logger passes to request.core.ts for Axios error
- grants model

### Changed
- find method return type in core and artifact service
- level-up required arguments from objects in the core and artifact service
- objectify unrequited fields in the request core
- artifact model file name from artifact-model.ts to artifact.model.ts

### Fixed
- HTTP put method null as data error

## 2.0.0 - 2023-05-10
### Added
- method-input interface
- artifact model
- artifact types

### Changed
- move base interface to base folder
- remove `replacementCharacter`
- remove count from locationsService
- change methods input form `stack` to `object`

### Removed
- remove unused schema file

### Fixed
- overwrite artifactsService

## 1.6.1 - 2023-05-09
### Added
- Notification
  - notifier
    - interface, model, service
  - templates
    - interface, model, service
  - providers
    - interface, model, service

## 1.6.0 - 2023-05-02
### Added
- `updateMetadataById` to fix metadata update (without effecting other keys in metadata)

## 1.5.2 - 2023-04-26

## 1.5.1 - 2023-04-24

## 1.5.0 - 2023-04-20

## 1.4.1 - 2023-04-19

## 1.4.0 - 2023-04-19

## 1.3.4 - 2023-04-13

## 1.3.3 - 2023-04-11

## 1.3.2 - 2023-03-17

## 1.3.1 - 2023-03-16

## 1.3.0 - 2023-03-16
### Added
- Exception handling
- `infrastructure` directory to keep SDK internal stuff (helpers, utils, enum etc)

### Fixed
- Require the `options` parameter
