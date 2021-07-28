import 'whatwg-fetch'
import '@testing-library/jest-dom/'
import { server } from './__mocks__/api/server'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
