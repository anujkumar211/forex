import { extend, setInteractionMode } from 'vee-validate'
import { email, numeric, required } from 'vee-validate/dist/rules'

/**
 * This plugin configures vee-validate plugin
 / see https://logaretm.github.io/vee-validate/
 * @since 1.0.0
 */
setInteractionMode('eager')
extend('required', {
  ...required,
  message: 'The Field is required'
})
extend('email', {
  ...email,
  message: 'A valid Email is required'
})
extend('numeric', {
  ...numeric,
  message: 'The {_field_} must be a number'
})
