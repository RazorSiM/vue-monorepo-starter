<script setup lang="ts">
import { UserApi, Configuration } from "@vue-monorepo/api-gateway";
import { UiButton } from "@vue-monorepo/ui";
import { useQuery } from "@tanstack/vue-query";

const configuration = new Configuration({
  basePath: "http://localhost:3000",
});
const UserApiClient = new UserApi(configuration);

const userId = ref(1);
const autoFetchEnabled = ref(true);
const { isInitialLoading, isError, error, data, refetch } = useQuery({
  queryKey: ["user", userId],
  queryFn: () => UserApiClient.usersInfoIdGet({ id: userId.value }),
  enabled: autoFetchEnabled,
});
</script>

<template>
  <h1 class="text-5xl font-bold">Do some dev test here</h1>
  <div class="prose text-xl dark:prose-light">
    <p>
      In this page, we are consuming the
      <strong>OpenApi fetch client</strong> generated from
      <code>@vue-monorepo/api-gateway</code> via <code>vue-query</code> to do
      some api calls.
    </p>
    <p>
      To make this work, you will need to generate the
      <strong>Fetch client</strong> first. To do so, run the following commands
      <strong>from the root</strong> of the monorepo:
    </p>
    <ol>
      <li>
        <code>pnpm dev:vue-spa</code> to run the app and
        @vue-monorepo/api-gateway in dev mode
      </li>
      <li>
        <code>pnpm --filter api-gateway generate-fetch-client</code> to generate
        the types and client
      </li>
    </ol>
    <p>
      At this point, the app should reload and you should have all the types
      inferred in your editor
    </p>
  </div>
  <div class="mt-10">
    <div>
      <label
        class="block text-sm font-medium text-gray-900 dark:text-light-100"
      >
        User ID
      </label>
      <input
        v-model="userId"
        type="number"
        name="userId"
        class="mt-1 shadow-sm focus:(outline-none ring-2 ring-indigo-500 ) block sm:text-sm border-gray-300 rounded-md px-3 py-1 bg-gray-200 text-gray-900 dark:(bg-gray-700 text-light-100)"
      />
    </div>
    <div class="mt-4">
      <label
        class="block text-sm font-medium text-gray-900 dark:text-light-100"
      >
        Auto fetch
      </label>
      <input
        v-model="autoFetchEnabled"
        type="checkbox"
        name="autoFetchEnabled"
        class="mt-1 shadow-sm focus:(outline-none ring-2 ring-indigo-500 ) block sm:text-sm border-gray-300 rounded-md px-3 py-1 bg-gray-200 text-gray-900 dark:(bg-gray-700 text-light-100)"
      />
    </div>
    <UiButton class="mt-5" color="primary" @click="refetch()">Refetch</UiButton>
  </div>
  <div class="mt-10 border rounded-xl p-5 prose dark:prose-light">
    <p>Query for user/info/{{ userId }}</p>

    <div v-if="isError">
      <p>Error:</p>
      <pre>{{ error }}</pre>
    </div>
    <div v-else>
      <div v-if="isInitialLoading">
        <p>Loading...</p>
      </div>
      <div v-else>
        <pre>{{ data }}</pre>
      </div>
    </div>
  </div>
</template>
