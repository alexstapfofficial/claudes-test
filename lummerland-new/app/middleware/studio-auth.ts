export default defineNuxtRouteMiddleware((to) => {
  // Nur Preview-Seiten schützen
  if (!to.path.startsWith('/sections/')) {
    return
  }

  // In Development Mode immer erlauben (mit import.meta.env)
  if (import.meta.dev) {
    return
  }

  // Prüfe auf Studio-Authentication
  // Studio setzt einen speziellen Header oder Query-Parameter
  const isStudioAuth =
    to.query.studio === 'true' ||
    to.query._studioAuth === 'true'

  // Zusätzliche Client-Side Checks
  if (import.meta.client) {
    const referrer = document.referrer || ''
    const hasStudioReferrer = referrer.includes('nuxt.studio') || referrer.includes('localhost')

    if (hasStudioReferrer) {
      return
    }
  }

  if (!isStudioAuth) {
    // Nicht authentifiziert - weiterleiten zur Hauptseite
    return navigateTo('/')
  }
})
