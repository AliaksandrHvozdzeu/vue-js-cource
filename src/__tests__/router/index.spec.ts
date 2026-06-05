import { describe, it, expect, beforeEach } from "vitest";
import type { RouteLocationNormalized } from "vue-router";
import router from "@/router";

describe("router", () => {
  beforeEach(async () => {
    await router.replace("/");
    await router.isReady();
  });

  it("registers the home route", () => {
    const homeRoute = router.getRoutes().find((route) => route.name === "home");

    expect(homeRoute?.path).toBe("/");
  });

  it("registers the movie details route with props enabled", () => {
    const movieRoute = router
      .getRoutes()
      .find((route) => route.name === "movie-details");

    expect(movieRoute?.path).toBe("/movie/:id");
    expect(movieRoute?.props).toEqual({ default: true });
  });

  it("registers the not-found catch-all route", () => {
    const notFoundRoute = router
      .getRoutes()
      .find((route) => route.name === "not-found");

    expect(notFoundRoute?.path).toBe("/:pathMatch(.*)*");
  });

  it("resolves navigation to home", async () => {
    await router.push("/");
    await router.isReady();

    expect(router.currentRoute.value.name).toBe("home");
    expect(router.currentRoute.value.path).toBe("/");
  });

  it("resolves navigation to movie details with id param", async () => {
    await router.push("/movie/42");
    await router.isReady();

    expect(router.currentRoute.value.name).toBe("movie-details");
    expect(router.currentRoute.value.params.id).toBe("42");
  });

  it("resolves unknown paths to not-found", async () => {
    await router.push("/does-not-exist");
    await router.isReady();

    expect(router.currentRoute.value.name).toBe("not-found");
    expect(router.currentRoute.value.fullPath).toBe("/does-not-exist");
  });

  it("scrollBehavior scrolls to top", () => {
    const scrollBehavior = router.options.scrollBehavior;

    expect(scrollBehavior).toBeTypeOf("function");
    const to = { path: '/' } as RouteLocationNormalized
    const from = { path: '/' } as RouteLocationNormalized

    expect(scrollBehavior?.(to, from, null)).toEqual({ top: 0 });
  });
});
