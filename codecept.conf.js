exports.config = {
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      app: 'C:\\Users\\ribeiro.leonardo\\Desktop\\appsqazando\\app-release.apk',
      desiredCapabilities: {
        appActivity: 'MainActivity',
        appPackage: 'com.qazandoapp',
        deviceName: 'pixel',
        platformVersion: '9'
      }
    }
  },
  include: {
    I: './steps_file.js',
    login_page: './pages/login_page.js',
    home_page: './pages/home_page.js'
  },
  mocha: {},
  bootstrap: './server/server.js',
  teardown: './server/server.js',
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    }
  },
  name: 'automacao-codeceptjs',
  // tests: './steps/*_test.js'
}