/* eslint-disable @typescript-eslint/no-var-requires */
const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.PUBLIC_SUPABASE_ANON_KEY || ''

const supabase = createClient(supabaseUrl, supabaseKey)

function returnImage (buffer) {
	return {
		headers: {
			'Content-Type': 'image/png'
		},
		statusCode: 200,
		body: buffer.toString('base64'),
		isBase64Encoded: true
	}
}

exports.handler = async function () {
	// check if image is alredy available in supabase to return it
	const { data, error } = await supabase.from('image-og').select('image')

	const [{ image }] = data ?? []

	if (!error && image) {
		const res = await fetch(image)
		const blob = await res.arrayBuffer()
		return returnImage(Buffer.from(blob))
	}

	return new Response('', { status: 404 })
}
