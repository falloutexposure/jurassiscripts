export async function leftPad(str: string) {
	const response = await fetch(`https://left-pad.deno.dev?str=${str}`);
	const data = await response.json();
	return data.result;
}
