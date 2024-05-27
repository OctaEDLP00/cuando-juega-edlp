// eslint-disanle-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

/* eslint-disable */
const SUPABASE_URL = Deno.env.get('PUBLIC_SUPABASE_URL') || ''
const SUPABASE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || ''
/* eslint-enable */

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

const json = (data: object, { status = 200 }) => {
	return new Response(JSON.stringify(data), {
		headers: { 'Content-Type': 'application/json' },
		status
	})
}

serve(async (req: Request) => {
	const reqJson = await req.json()
	const { type, record } = reqJson
	const { image } = record ?? {}

	if (type === 'UPDATE' && Boolean(image)) {
		return json({ message: 'Image already set' })
	}

	const res = await fetch(`https://cuando-juega-edlp.netlify.app/.netlify/functions/createOgImage`)

	if (!res.ok) {
		console.error('Error generating image')
		return json({ message: 'Error generating image' }, { status: 400 })
	}

	const arrayBuffer = await res.arrayBuffer()

	const { data: uploadedImage, error: errorUploadingImage } = await supabase.storage
		.from('image-og')
		.upload('og.png', arrayBuffer, { contentType: 'image/png', upsert: true })

	console.log(uploadedImage)

	if (errorUploadingImage) {
		console.error('Error uploading image')
		console.error(errorUploadingImage)
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
