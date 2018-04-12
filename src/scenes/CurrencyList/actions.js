const REFRESH_LIST = 'LIST/REFRESH'

export const actions = {
  REFRESH_LIST
}

export const refresh = data => ({
  type: REFRESH_LIST,
  data
})
