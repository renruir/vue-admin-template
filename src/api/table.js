import request from '@/utils/request'

export function getTextList(params) {
  return request({
    // url: '/vue-admin-template/table/list',
    url: 'http://wx.smnwater.com/web/wechat/get_keyword_list?type=text',
    method: 'get',
    params
  })
}

export function getImageList(params) {
  return request({
    // url: '/vue-admin-template/table/list',
    url: 'http://wx.smnwater.com/web/wechat/get_keyword_list?type=image',
    method: 'get',
    params
  })
}
