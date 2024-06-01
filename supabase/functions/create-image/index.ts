/* eslint-disable no-undef */
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.43.2'
/// <reference types='https://esm.sh/@supabase/functions-js/src/edge-runtime.d.ts' />

const SUPABASE_URL = Deno.env.get('SUPABASE_URL') || ''
const SUPABASE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || ''
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

const { log, error } = console

function json(data: object, { status = 200 }: { status?: number | undefined }) {
	return new Response(JSON.stringify(data),
		{
			headers: { 'Content-Type': 'application/json' },
			status
		}
	)
}

// eslint-disable-next-line no-undef
Deno.serve(async (req: Request) => {
	const reqJson = await req.json()
	const { type, record } = reqJson
	const { image } = record ?? {}

	if (type === 'UPDATE' && Boolean(image)) {
		return json({ message: 'Image already set' }, { status: 409 })
	}

	const res = await fetch('https://cuando-juega-edlp.netlify.app/.netlify/functions/createOgImage')

	if (!res.ok) {
		error('Error generating image')
		return json({ message: 'Error generating image' }, { status: 400 })
	}

	const arrayBuffer = await res.arrayBuffer()

	const { data: uploadedImage, error: errorUploadingImage } = await supabase.storage
		.from('image-og')
		.upload('og.png', arrayBuffer, { contentType: 'image/png', upsert: true })

	log(uploadedImage)

	if (errorUploadingImage) {
		error('Error uploading image')
		error(errorUploadingImage)
		return json({ message: 'Error uploading image' }, { status: 400 })
	}

	const { error: errorUpdating } = await supabase.storage
		.from('image-og')
		.update({
			image: `https://rwvrxejmxblbgualefhj.supabase.co/storage/v1/object/public/image-og/${uploadedImage}.png`
		})

	if (errorUpdating) {
		return json({ message: 'Error querying database' }, { status: 400 })
	}

	return json({ message: 'Image generated' }, { status: 200 })
})

/* To invoke locally:

	1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
	2. Make an HTTP request:

	curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/create-image' \
		--header 'Authorization: Bearer ' \
		--header 'Content-Type: application/json' \
		--data '{"name":"Functions"}'

*/
