import type { Context } from 'https://edge.netlify.com';

export default function ({ request, context }: { request: Request; context: Context }) {
  // Devuelve datos serializables para añadir a Astro.locals
  return {
    visitorCountry: context.geo.country.name,
    hasEdgeMiddleware: true,
  };
}
