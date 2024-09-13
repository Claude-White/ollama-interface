<script lang="ts">
	import '../app.css';
	import {
		Menu,
		Moon,
		Sun,
		Home,
		ShoppingCart,
		Badge,
		Package,
		Package2,
		Users,
		LineChart,
		MessagesSquare,
		Ellipsis
	} from 'lucide-svelte';

	import { ModeWatcher } from 'mode-watcher';
	import { toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';

	let messages = $state([
		{ title: 'Test Chat 1', url: '/chat/1' },
		{ title: 'Test Chat 2', url: '/chat/2' },
		{ title: 'Test Chat 3', url: '/chat/3' }
	]);
</script>

<ModeWatcher />
<header class="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
	<nav
		class="flex-row gap-6 text-lg font-medium md:flex md:items-center md:gap-2 md:text-sm lg:gap-4"
	>
		<a href="/" class="flex flex-row items-center gap-2 text-lg font-semibold md:text-base">
			<Sheet.Root>
				<Sheet.Trigger asChild let:builder>
					<Button builders={[builder]} variant="outline">
						<Menu class="h-6 w-6" />
						<span class="sr-only">Toggle navigation menu</span>
					</Button>
				</Sheet.Trigger>
				<Sheet.Content side="left">
					<nav class="grid gap-2 text-lg font-medium">
						<div class="flex items-center gap-4 text-lg font-semibold">
							<MessagesSquare class="h-6 w-6" />
							<span class="sr-only">Chat History</span>
							Chat History
						</div>
						{#each messages as message}
							<a
								href={message.url}
								class="mx-[-0.65rem] flex items-center justify-between gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
							>
								{message.title}

								<DropdownMenu.Root>
									<DropdownMenu.Trigger>
										<Button class="h-max w-max" variant="outline">
											<Ellipsis class="h-5 w-5" />
										</Button>
									</DropdownMenu.Trigger>
									<DropdownMenu.Content>
										<DropdownMenu.Group>
											<DropdownMenu.Item>Rename</DropdownMenu.Item>
											<DropdownMenu.Item>Delete</DropdownMenu.Item>
										</DropdownMenu.Group>
									</DropdownMenu.Content>
								</DropdownMenu.Root>
							</a>
						{/each}
					</nav>
				</Sheet.Content>
			</Sheet.Root>
			<span class="sr-only">Ollama</span>
		</a>
		<a href="/" class="text-lg text-foreground transition-colors hover:text-foreground"> Ollama </a>
	</nav>
	<div class="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
		<Button on:click={toggleMode} variant="outline" size="icon">
			<Sun
				class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
			/>
			<Moon
				class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/>
			<span class="sr-only">Toggle theme</span>
		</Button>
	</div>
</header>

<slot />
