import { computed, type ComputedRef } from "vue";
import { useRoute, useRouter } from "vue-router";

const DEFAULT_PAGE = 1;

export function usePagination(pageQueryKey = "page") {
  const route = useRoute();
  const router = useRouter();

  const currentPage = computed(() => {
    const rawValue = route.query[pageQueryKey];
    const value = Array.isArray(rawValue) ? rawValue[0] : rawValue;
    const parsed = Number.parseInt(String(value ?? ""), 10);

    return Number.isFinite(parsed) && parsed > 0 ? parsed : DEFAULT_PAGE;
  });

  const setPage = (page: number) => {
    const nextPage = page > 0 ? page : DEFAULT_PAGE;

    router.push({
      query: {
        ...route.query,
        [pageQueryKey]:
          nextPage === DEFAULT_PAGE ? undefined : String(nextPage),
      },
    });
  };

  return {
    currentPage,
    setPage,
  };
}

export function useSearchQuery(searchQueryKey = "query"): {
  searchQuery: ComputedRef<string>;
  setSearchQuery: (value: string) => void;
} {
  const route = useRoute();
  const router = useRouter();

  const searchQuery = computed(() => {
    const rawValue = route.query[searchQueryKey];
    const value = Array.isArray(rawValue) ? rawValue[0] : rawValue;

    return value ? String(value) : "";
  });

  const setSearchQuery = (value: string) => {
    const trimmed = value.trim();

    router.push({
      query: {
        ...route.query,
        [searchQueryKey]: trimmed || undefined,
        page: undefined,
      },
    });
  };

  return {
    searchQuery,
    setSearchQuery,
  };
}
