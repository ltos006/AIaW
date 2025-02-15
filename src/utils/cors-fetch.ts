import { CorsFetchBaseURL } from './config'

export async function corsFetch(url: string, { method = 'GET', headers = {}, body }) {
  if (!CorsFetchBaseURL) throw new Error('当前部署配置不支持跨域请求')
  const response = await fetch(`${CorsFetchBaseURL}/proxy`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      method,
      url,
      headers,
      body
    })
  })
  return response
}
