//
// Application seed file.
// Dynamic imports load chunks after initial page load.
//

// Dynamic import imports like * as blah... ?
import('./achievements').then((achievements) => {
  achievements.main()
})
