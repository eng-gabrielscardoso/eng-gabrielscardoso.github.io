<template>
  <div class="flex flex-col gap-2">
    <div class="flex gap-2">
      <button class="p-2 border rounded" @click="setLocale('en')">en</button>
      <button class="p-2 border rounded" @click="setLocale('pt')">pt</button>
    </div>
    <p>Selected locale: {{ locale }}</p>
    <p>{{ $t('welcome') }}</p>
  </div>
</template>

<script lang="ts" setup>
const { locale, setLocale } = useI18n()
</script>