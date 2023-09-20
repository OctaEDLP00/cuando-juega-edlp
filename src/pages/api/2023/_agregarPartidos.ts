import { type APIRoute } from 'astro'
import { fetchAPI } from '@utils/fetchAPI'

export const POST: APIRoute = async ({ request }) => {
  const { formData } = request
  const data = await formData()
  const img = data.get('img')
  const vs = data.get('vs')
  const copa = data.get('copa')
  const timestamp = data.get('timestamp')

  if (!img && !vs && !copa && !timestamp) {
    return new Response(JSON.stringify({
      message: 'Falta de información, todo los campos son requeridos'
    }), { status: 400 })
  }

  if (!img) {
    return new Response(JSON.stringify({
      message: 'Falta imagen',
      tipo_valor: 'string'
    }), { status: 400 })
  }

  if (!vs) {
    return new Response(JSON.stringify({
      message: 'Falta agregar versus',
      tipo_valor: 'string'
    }), { status: 400 })
  }

  if (!copa) {
    return new Response(JSON.stringify({
      message: 'Falta agregar copa',
      tipo_valor: 'string'
    }), { status: 400 })
  }

  if (!timestamp) {
    return new Response(JSON.stringify({
      message: 'Falta el timestamp',
      tipo_valor: 'null | number',
      url: 'Que es timestamp, info: -> https://www.developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date#descripci%C3%B3n',
      convertidor_de_fecha_y_hora: 'https://epochconverter.com usar el de Human date to Timestamp y copiar el valor en `Milisegundos`'
    }), { status: 400 })
  }

  return new Response(JSON.stringify({
    message: 'Enviado con exito!'
  }), { status: 200 })
}
