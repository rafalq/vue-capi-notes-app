<template>
	<nav
		class="navbar is-success"
		role="navigation"
		aria-label="main navigation"
	>
		<div class="container is-max-desktop px-2">
			<div class="navbar-brand">
				<span
					class="navbar-item is-size-4 is-family-monospace"
					>NoteBalls</span
				>
				<a
					@click.prevent="
						showMobileNav = !showMobileNav
					"
					role="button"
					class="navbar-burger"
					:class="{ 'is-active': showMobileNav }"
					aria-label="menu"
					aria-expanded="false"
					data-target="navbarBasicExample"
				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div
				id="navbarBasicExample"
				class="navbar-menu p-0"
				:class="{ 'is-active': showMobileNav }"
				ref="navbarMenuRef"
			>
				<div class="navbar-end">
					<RouterLink
						class="navbar-item"
						to="/"
						active-class="is-active"
						@click="showMobileNav = false"
					>
						NOTES
					</RouterLink>

					<RouterLink
						class="navbar-item"
						to="/stats"
						active-class="is-active"
						@click="showMobileNav = false"
					>
						STATS
					</RouterLink>
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup>
/*
  imports
*/

import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

/*
  mobile nav
*/

const showMobileNav = ref(false);

/*
  handle click outside
*/

const navbarMenuRef = ref(null);

onClickOutside(
	navbarMenuRef,
	() => (showMobileNav.value = false)
);
</script>

<style scoped>
@media (max-width: 1023px) {
	.navbar-menu {
		display: block;
		opacity: 0;
		position: absolute; /* or float: left; width: 100%;*/
		left: 0;
		right: 0;

		transform: translateY(-50%);
		transition: all 0.2s linear;
		pointer-events: none;
	}

	.navbar-menu.is-active {
		opacity: 1;
		transform: none;
		pointer-events: auto;
	}
}
</style>
