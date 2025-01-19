import Mock from 'better-mock'

Mock.mock('/api/person/list', 'get', {
  'code': 200,
  'message': 'success',
  'data|5-10': [{
    'id|+1': 1,
    'name': '@cname',
    'age': '@integer(10, 100)',
    'avatar': '@image',
    'sex': '@integer(0, 1)',
  }],
})
