<script lang="ts">
	import { Button } from "@/components/ui/button/index.js";
	import { Xcom, GitHub } from "@/components/icons/index.js";
	import { LightSwitch, MobileNav } from "@/components/index.js";
	import { siteConfig } from "@/config/index.js";
</script>

<header class="bg-background/75 backdrop-blur border-b border-border -mb-px sticky top-0 z-50">
	<div class="container">
		<div class="flex items-center justify-between gap-3 h-16">
			<div class="flex items-center gap-1.5">
				<MobileNav />
				<a
					href="/"
					class="font-bold tracking-tight text-2xl
				">Formsnap</a
				>
			</div>
			<nav class="flex items-center justify-end gap-1.5">
				<Button
					href={siteConfig.links.github}
					target="_blank"
					size="icon"
					variant="ghost"
					aria-label="View the github repo for this package."
					class=""
				>
					<GitHub class="sq-5" />
				</Button>
				<Button
					href={siteConfig.links.twitter}
					target="_blank"
					size="icon"
					variant="ghost"
					aria-label="X, formerly known as Twitter."
					class=""
				>
					<Xcom class="sq-5" />
				</Button>
				<LightSwitch />
			</nav>
		</div>
	</div>
</header>
