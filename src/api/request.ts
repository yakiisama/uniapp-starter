interface RequestOptions extends UniApp.RequestOptions {
  loading?: boolean
  showError?: boolean
}

class Request {
  private request(options: RequestOptions): Promise<any> {
    const { loading = true, showError = true, ...requestOptions } = options

    if (loading) {
      uni.showLoading({ title: '加载中...' })
    }

    return new Promise((resolve, reject) => {
      uni.request({
        ...requestOptions,
        success: (res) => {
          // 这里可以根据实际接口返回格式调整
          if (res.statusCode === 200 && res.data) {
            resolve(res.data)
          }
          else {
            if (showError) {
              uni.showToast({
                title: '请求失败',
                icon: 'none',
              })
            }
            reject(res)
          }
        },
        fail: (err) => {
          if (showError) {
            uni.showToast({
              title: '网络错误',
              icon: 'none',
            })
          }
          reject(err)
        },
        complete: () => {
          if (loading) {
            uni.hideLoading()
          }
        },
      })
    })
  }

  get(url: string, data?: any, options: Partial<RequestOptions> = {}) {
    return this.request({
      url,
      data,
      method: 'GET',
      ...options,
    })
  }

  post(url: string, data?: any, options: Partial<RequestOptions> = {}) {
    return this.request({
      url,
      data,
      method: 'POST',
      ...options,
    })
  }
}

export const request = new Request()
