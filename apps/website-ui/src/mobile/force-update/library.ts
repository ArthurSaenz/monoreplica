import semver from 'semver'

interface VersionInfo {
  currentVersion: string
  minAvailableVersion: string
  flexiableShowedVersion: string
}

export const determineUpdateVersionType = (args: VersionInfo) => {
  const { currentVersion, minAvailableVersion, flexiableShowedVersion } = args

  const currentVersionParsed = semver.parse(currentVersion)
  const minAvailableVersionParsed = semver.parse(minAvailableVersion)

  if (!currentVersionParsed || !minAvailableVersionParsed) {
    return null
  }

  if (currentVersionParsed.major < minAvailableVersionParsed.major) {
    return 'imediateUpdate'
  }

  // INFO: if we showed this version already, we don't need to show it again
  const isNeedToShowUpdate =
    minAvailableVersion && minAvailableVersion !== flexiableShowedVersion && minAvailableVersion !== currentVersion

  if (isNeedToShowUpdate) {
    return 'flexibleUpdate'
  }

  return null
}
