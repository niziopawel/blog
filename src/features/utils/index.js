export function isActionPending(action) {
  return action.type.endsWith('/pending')
}

export function isActionRejected(action) {
  return action.type.endsWith('/rejected')
}
