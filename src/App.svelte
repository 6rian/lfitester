<script>
	let url, path, currentLogEntry;
	let exploits = [];

	async function handleClickExploit(event) {
		const data = {url, path};
		const options = {
			method: 'POST',
			cache: 'no-cache',
			mode: 'same-origin',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		};

		try {
			const response = await fetch('/exploit', options);
			const json = await response.json();
			console.log('Exploit Result', json);

			if (json.success === true) {
				exploits = [...exploits, json.data];
			}
		} catch (error) {
			console.error(error);
		}
	}
</script>

<main>
	<h1>lfi tester</h1>
	<div class="parameters">
		<div>
			<label for="url">Vulnerable URL</label>
			<input type="text" name="url" bind:value={url} placeholder="Place [LFI] in the vulnerable location of the URL" />
		</div>
		<div>
			<label for="path">Local File Path</label>
			<input type="text" name="path" bind:value={path} placeholder="The file path to include" />
		</div>
		<div>
			<button on:click={handleClickExploit}>Exploit</button>
		</div>
	</div>
</main>

<style>
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 2em;
	}
	input[type=text] {
		width: 450px;
	}
</style>