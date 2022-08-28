import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const backendAPI = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  withCredentials: true
})

enum Method {
  GET,
  POST,
  PATCH,
  DELETE,
}

enum StatusCode {
  OK = 200,
  NO_CONTENT = 204,
  SERVER_ERROR = 500
}

const mockAPIRoutes = [
  {
    route: '/',
    response: {},
    statusCode: StatusCode.OK,
    method: Method.GET
  }
]

if (process.env.VUE_APP_OFFLINE_MODE === 'true') {
  const mockAdapter = new MockAdapter(backendAPI)

  mockAPIRoutes.forEach((mockRoute: any) => {
    switch (mockRoute.method) {
      case Method.GET:
        mockAdapter.onGet(mockRoute.route).reply(mockRoute.statusCode, mockRoute.response)
        break
      case Method.POST:
        mockAdapter.onPost(mockRoute.route).reply(mockRoute.statusCode, mockRoute.response)
        break
      case Method.PATCH:
        mockAdapter.onPatch(mockRoute.route).reply(mockRoute.statusCode, mockRoute.response)
        break
      case Method.DELETE:
        mockAdapter.onDelete(mockRoute.route).reply(mockRoute.statusCode, mockRoute.response)
        break
    }
  })
}

export { backendAPI as BackendAPI }
