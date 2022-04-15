import { UnAuthenticatedError } from '../errors/index.js'

const checkPermission = (requestUser, resourceUserId) => {
  if (requestUser.userId === resourceUserId.toString()) return

  throw UnAuthenticatedError('Not authorized to access this route')
}

export default checkPermission
