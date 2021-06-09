import localConfig from './app.local'
import developmentConfig from './app.development'

export default () => {
  const configs = {}

  configs.local = {
    ...localConfig,
  }
  configs.dev = {
    ...developmentConfig,
  }
  configs.test = {}
  configs.production = {}

  return configs[process.env.REACT_APP_STAGE || 'local']
}
