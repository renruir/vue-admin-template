import request from '@/utils/request'

export function getList(params) {
  return request({
    // url: '/vue-admin-template/table/list',
    url: 'http://localhost:8080/web/wechat/get_keyword_list?type=text',
    method: 'get',
    params
  })
}
