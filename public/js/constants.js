'use strict';

module.exports = {
  State: {
    CREATE: 'CREATE_STATE',
    READ: 'READ_STATE',
    UPDATE: 'UPDATE_STATE',
    DELETE: 'DELETE_STATE'
  },
  ClassNames: {
    Root: 'standard_root',
    Header: 'standard_header',
    Body: 'standard_body',
    Section: 'standard_section',

    Workout: {
      Wrapper: 'workout_wrapper',
      Root: 'workout_root',
      Header: 'workout_header',
      Body: 'workout_body',
      Section: 'workout_section'
    },

    Exercise: {
      Wrapper: 'exercise_wrapper',
      Root: 'exercise_root',
      Header: 'exercise_header',
      Body: 'exercise_body',
      Section: 'exercise_section'
    }
  }
}
