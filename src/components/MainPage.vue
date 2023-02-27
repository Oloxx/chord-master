
import { RouterLink } from 'vue-router';

<template>
    <h1>jaaj eres tonto practica</h1>
    <div class="container">
        <RouterLink to="/triadas">Triadas</RouterLink>
        <RouterLink to="/quatriadas">Quatriadas</RouterLink>
    </div>
</template>

<style>
.container {
    text-align: center;
    padding: 2em;
}

a.router-link-exact-active {
    color: var(--color-text);
}

a.router-link-exact-active:hover {
    background-color: transparent;
}

a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
    padding: 1em;
}

a:first-of-type {
    border: 0;
}
</style>