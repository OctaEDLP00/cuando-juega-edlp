import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
	import.meta.env.PUBLIC_SUPABASE_URL,
	import.meta.env.PUBLIC_SUPABASE_ANON_KEY
)

export async function getOgImage() {
	const { data, error } = await supabase.from('image-og').select('*')
	if (error) console.error(error)
	return { data: data[0], error }
}
