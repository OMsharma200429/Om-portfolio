import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";


function NotFoundComponent() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">404</h1>

      <p className="mt-4 text-white/60">
        Page not found
      </p>

      <Link
        to="/"
        className="mt-8 inline-flex rounded-md bg-white px-5 py-3 text-black font-medium"
      >
        Go home
      </Link>
    </div>
  );
}

function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);

  const router = useRouter();

  

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-bold">
        This page didn't load
      </h1>

      <p className="mt-4 text-white/60 max-w-md">
        Something went wrong on our end. You can try refreshing
        or head back home.
      </p>

      <div className="mt-8 flex gap-3">
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="rounded-md bg-white px-5 py-3 text-black font-medium"
        >
          Try again
        </button>

        <Link
          to="/"
          className="rounded-md border border-white/10 px-5 py-3 text-white font-medium"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

export const Route =
  createRootRouteWithContext<{
    queryClient: QueryClient;
  }>()({
    head: () => ({
      meta: [
        {
          charSet: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          title: "Om Sharma — Full Stack Developer",
        },
        {
          name: "description",
          content:
            "Om Sharma — Full Stack Developer specializing in Core Java, Spring Boot, and scalable web applications.",
        },
        {
          property: "og:title",
          content: "Om Sharma — Full Stack Developer",
        },
        {
          property: "og:description",
          content:
            "Full Stack Developer specializing in Core Java, Spring Boot, and scalable web applications.",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],

      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700;800;900&display=swap",
        },
      ],
    }),

    shellComponent: RootShell,

    component: RootComponent,

    notFoundComponent: NotFoundComponent,

    errorComponent: ErrorComponent,
  });

function RootShell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>

      <body>
        {children}

        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}