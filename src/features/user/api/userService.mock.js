
import user from './mockUser.js' // TODO MOCKED


async function mockLogin(credentials) {
  await new Promise(resolve => setTimeout(resolve, 500)) // latence simulée

  if (credentials.email !== 'demo@loopwin.com' || credentials.password !== 'secret') {
    throw new Error('Identifiants incorrects')
  }

  return user
}

export default {
  mockLogin,
}