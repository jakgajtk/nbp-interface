const REMOVE_FAVOURITE = 'FAVOURITE/REMOVE'
const ADD_FAVOURITE = 'FAVOURITE/ADD'

export const actions = {
  REMOVE_FAVOURITE,
  ADD_FAVOURITE
}

export const add = data => ({
  type: ADD_FAVOURITE,
  data
})

export const remove = data => ({
  type: REMOVE_FAVOURITE,
  data
})
