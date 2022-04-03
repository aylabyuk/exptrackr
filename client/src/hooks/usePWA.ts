import { useEffect } from 'react'

const usePWA = () => {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      (window as any).workbox !== undefined
    ) {
      const wb = (window as any).workbox

      wb.addEventListener('installed', (event: any) => {
        console.log(`Event ${event.type} is triggered.`)
        console.log(event)
      })

      wb.addEventListener('controlling', (event: any) => {
        console.log(`Event ${event.type} is triggered.`)
        console.log(event)
      })

      wb.addEventListener('activated', (event: any) => {
        console.log(`Event ${event.type} is triggered.`)
        console.log(event)
      })

      const promptNewVersionAvailable = (event: any) => {
        if (
          confirm(
            'A newer version of this web app is available, reload to update?',
          )
        ) {
          wb.addEventListener('controlling', (event: any) => {
            window.location.reload()
          })

          wb.messageSkipWaiting()
        } else {
          console.log(
            'User rejected to reload the web app, keep using old version. New version will be automatically load when user open the app next time.',
          )
        }
      }

      wb.addEventListener('waiting', promptNewVersionAvailable)

      wb.addEventListener('message', (event: any) => {
        console.log(`Event ${event.type} is triggered.`)
        console.log(event)
      })

      wb.register()
    }
  }, [])
}

export default usePWA
