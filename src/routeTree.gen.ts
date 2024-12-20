/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as RegisterImport } from './routes/register'
import { Route as LoginImport } from './routes/login'
import { Route as DashboardImport } from './routes/dashboard'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as DashboardIndexImport } from './routes/dashboard/index'
import { Route as DashboardUserIdImport } from './routes/dashboard/$userId'
import { Route as layoutsDefaultLayoutImport } from './routes/(layouts)/_defaultLayout'
import { Route as layoutsDashboardLayoutImport } from './routes/(layouts)/_dashboardLayout'
import { Route as DashboardUserIdIndexImport } from './routes/dashboard/$userId/index'
import { Route as DashboardUserIdReportsImport } from './routes/dashboard/$userId/reports'
import { Route as DashboardUserIdAnalyzerImport } from './routes/dashboard/$userId/analyzer'
import { Route as DashboardUserIdActivityImport } from './routes/dashboard/$userId/activity'

// Create Virtual Routes

const layoutsImport = createFileRoute('/(layouts)')()

// Create/Update Routes

const layoutsRoute = layoutsImport.update({
  id: '/(layouts)',
  getParentRoute: () => rootRoute,
} as any)

const RegisterRoute = RegisterImport.update({
  path: '/register',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const DashboardRoute = DashboardImport.update({
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardIndexRoute = DashboardIndexImport.update({
  path: '/',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardUserIdRoute = DashboardUserIdImport.update({
  path: '/$userId',
  getParentRoute: () => DashboardRoute,
} as any)

const layoutsDefaultLayoutRoute = layoutsDefaultLayoutImport.update({
  id: '/_defaultLayout',
  getParentRoute: () => layoutsRoute,
} as any)

const layoutsDashboardLayoutRoute = layoutsDashboardLayoutImport.update({
  id: '/_dashboardLayout',
  getParentRoute: () => layoutsRoute,
} as any)

const DashboardUserIdIndexRoute = DashboardUserIdIndexImport.update({
  path: '/',
  getParentRoute: () => DashboardUserIdRoute,
} as any)

const DashboardUserIdReportsRoute = DashboardUserIdReportsImport.update({
  path: '/reports',
  getParentRoute: () => DashboardUserIdRoute,
} as any)

const DashboardUserIdAnalyzerRoute = DashboardUserIdAnalyzerImport.update({
  path: '/analyzer',
  getParentRoute: () => DashboardUserIdRoute,
} as any)

const DashboardUserIdActivityRoute = DashboardUserIdActivityImport.update({
  path: '/activity',
  getParentRoute: () => DashboardUserIdRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      id: '/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof RegisterImport
      parentRoute: typeof rootRoute
    }
    '/(layouts)': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof layoutsImport
      parentRoute: typeof rootRoute
    }
    '/(layouts)/_dashboardLayout': {
      id: '/_dashboardLayout'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof layoutsDashboardLayoutImport
      parentRoute: typeof layoutsRoute
    }
    '/(layouts)/_defaultLayout': {
      id: '/_defaultLayout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof layoutsDefaultLayoutImport
      parentRoute: typeof layoutsImport
    }
    '/dashboard/$userId': {
      id: '/dashboard/$userId'
      path: '/$userId'
      fullPath: '/dashboard/$userId'
      preLoaderRoute: typeof DashboardUserIdImport
      parentRoute: typeof DashboardImport
    }
    '/dashboard/': {
      id: '/dashboard/'
      path: '/'
      fullPath: '/dashboard/'
      preLoaderRoute: typeof DashboardIndexImport
      parentRoute: typeof DashboardImport
    }
    '/dashboard/$userId/activity': {
      id: '/dashboard/$userId/activity'
      path: '/activity'
      fullPath: '/dashboard/$userId/activity'
      preLoaderRoute: typeof DashboardUserIdActivityImport
      parentRoute: typeof DashboardUserIdImport
    }
    '/dashboard/$userId/analyzer': {
      id: '/dashboard/$userId/analyzer'
      path: '/analyzer'
      fullPath: '/dashboard/$userId/analyzer'
      preLoaderRoute: typeof DashboardUserIdAnalyzerImport
      parentRoute: typeof DashboardUserIdImport
    }
    '/dashboard/$userId/reports': {
      id: '/dashboard/$userId/reports'
      path: '/reports'
      fullPath: '/dashboard/$userId/reports'
      preLoaderRoute: typeof DashboardUserIdReportsImport
      parentRoute: typeof DashboardUserIdImport
    }
    '/dashboard/$userId/': {
      id: '/dashboard/$userId/'
      path: '/'
      fullPath: '/dashboard/$userId/'
      preLoaderRoute: typeof DashboardUserIdIndexImport
      parentRoute: typeof DashboardUserIdImport
    }
  }
}

// Create and export the route tree

interface DashboardUserIdRouteChildren {
  DashboardUserIdActivityRoute: typeof DashboardUserIdActivityRoute
  DashboardUserIdAnalyzerRoute: typeof DashboardUserIdAnalyzerRoute
  DashboardUserIdReportsRoute: typeof DashboardUserIdReportsRoute
  DashboardUserIdIndexRoute: typeof DashboardUserIdIndexRoute
}

const DashboardUserIdRouteChildren: DashboardUserIdRouteChildren = {
  DashboardUserIdActivityRoute: DashboardUserIdActivityRoute,
  DashboardUserIdAnalyzerRoute: DashboardUserIdAnalyzerRoute,
  DashboardUserIdReportsRoute: DashboardUserIdReportsRoute,
  DashboardUserIdIndexRoute: DashboardUserIdIndexRoute,
}

const DashboardUserIdRouteWithChildren = DashboardUserIdRoute._addFileChildren(
  DashboardUserIdRouteChildren,
)

interface DashboardRouteChildren {
  DashboardUserIdRoute: typeof DashboardUserIdRouteWithChildren
  DashboardIndexRoute: typeof DashboardIndexRoute
}

const DashboardRouteChildren: DashboardRouteChildren = {
  DashboardUserIdRoute: DashboardUserIdRouteWithChildren,
  DashboardIndexRoute: DashboardIndexRoute,
}

const DashboardRouteWithChildren = DashboardRoute._addFileChildren(
  DashboardRouteChildren,
)

interface layoutsRouteChildren {
  layoutsDashboardLayoutRoute: typeof layoutsDashboardLayoutRoute
  layoutsDefaultLayoutRoute: typeof layoutsDefaultLayoutRoute
}

const layoutsRouteChildren: layoutsRouteChildren = {
  layoutsDashboardLayoutRoute: layoutsDashboardLayoutRoute,
  layoutsDefaultLayoutRoute: layoutsDefaultLayoutRoute,
}

const layoutsRouteWithChildren =
  layoutsRoute._addFileChildren(layoutsRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof layoutsDashboardLayoutRoute
  '/about': typeof AboutRoute
  '/dashboard': typeof DashboardRouteWithChildren
  '/login': typeof LoginRoute
  '/register': typeof RegisterRoute
  '': typeof layoutsDefaultLayoutRoute
  '/dashboard/$userId': typeof DashboardUserIdRouteWithChildren
  '/dashboard/': typeof DashboardIndexRoute
  '/dashboard/$userId/activity': typeof DashboardUserIdActivityRoute
  '/dashboard/$userId/analyzer': typeof DashboardUserIdAnalyzerRoute
  '/dashboard/$userId/reports': typeof DashboardUserIdReportsRoute
  '/dashboard/$userId/': typeof DashboardUserIdIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof layoutsDashboardLayoutRoute
  '/about': typeof AboutRoute
  '/login': typeof LoginRoute
  '/register': typeof RegisterRoute
  '': typeof layoutsDefaultLayoutRoute
  '/dashboard': typeof DashboardIndexRoute
  '/dashboard/$userId/activity': typeof DashboardUserIdActivityRoute
  '/dashboard/$userId/analyzer': typeof DashboardUserIdAnalyzerRoute
  '/dashboard/$userId/reports': typeof DashboardUserIdReportsRoute
  '/dashboard/$userId': typeof DashboardUserIdIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof layoutsRouteWithChildren
  '/about': typeof AboutRoute
  '/dashboard': typeof DashboardRouteWithChildren
  '/login': typeof LoginRoute
  '/register': typeof RegisterRoute
  '/_dashboardLayout': typeof layoutsDashboardLayoutRoute
  '/_defaultLayout': typeof layoutsDefaultLayoutRoute
  '/dashboard/$userId': typeof DashboardUserIdRouteWithChildren
  '/dashboard/': typeof DashboardIndexRoute
  '/dashboard/$userId/activity': typeof DashboardUserIdActivityRoute
  '/dashboard/$userId/analyzer': typeof DashboardUserIdAnalyzerRoute
  '/dashboard/$userId/reports': typeof DashboardUserIdReportsRoute
  '/dashboard/$userId/': typeof DashboardUserIdIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/dashboard'
    | '/login'
    | '/register'
    | ''
    | '/dashboard/$userId'
    | '/dashboard/'
    | '/dashboard/$userId/activity'
    | '/dashboard/$userId/analyzer'
    | '/dashboard/$userId/reports'
    | '/dashboard/$userId/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/login'
    | '/register'
    | ''
    | '/dashboard'
    | '/dashboard/$userId/activity'
    | '/dashboard/$userId/analyzer'
    | '/dashboard/$userId/reports'
    | '/dashboard/$userId'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/dashboard'
    | '/login'
    | '/register'
    | '/_dashboardLayout'
    | '/_defaultLayout'
    | '/dashboard/$userId'
    | '/dashboard/'
    | '/dashboard/$userId/activity'
    | '/dashboard/$userId/analyzer'
    | '/dashboard/$userId/reports'
    | '/dashboard/$userId/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  DashboardRoute: typeof DashboardRouteWithChildren
  LoginRoute: typeof LoginRoute
  RegisterRoute: typeof RegisterRoute
  layoutsRoute: typeof layoutsRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  DashboardRoute: DashboardRouteWithChildren,
  LoginRoute: LoginRoute,
  RegisterRoute: RegisterRoute,
  layoutsRoute: layoutsRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/dashboard",
        "/login",
        "/register",
        "/"
      ]
    },
    "/": {
      "filePath": "(layouts)",
      "children": [
        "/_dashboardLayout",
        "/_defaultLayout"
      ]
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/dashboard": {
      "filePath": "dashboard.tsx",
      "children": [
        "/dashboard/$userId",
        "/dashboard/"
      ]
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/register": {
      "filePath": "register.tsx"
    },
    "/_dashboardLayout": {
      "filePath": "(layouts)/_dashboardLayout.tsx",
      "parent": "/"
    },
    "/_defaultLayout": {
      "filePath": "(layouts)/_defaultLayout.tsx",
      "parent": "/"
    },
    "/dashboard/$userId": {
      "filePath": "dashboard/$userId.tsx",
      "parent": "/dashboard",
      "children": [
        "/dashboard/$userId/activity",
        "/dashboard/$userId/analyzer",
        "/dashboard/$userId/reports",
        "/dashboard/$userId/"
      ]
    },
    "/dashboard/": {
      "filePath": "dashboard/index.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/$userId/activity": {
      "filePath": "dashboard/$userId/activity.tsx",
      "parent": "/dashboard/$userId"
    },
    "/dashboard/$userId/analyzer": {
      "filePath": "dashboard/$userId/analyzer.tsx",
      "parent": "/dashboard/$userId"
    },
    "/dashboard/$userId/reports": {
      "filePath": "dashboard/$userId/reports.tsx",
      "parent": "/dashboard/$userId"
    },
    "/dashboard/$userId/": {
      "filePath": "dashboard/$userId/index.tsx",
      "parent": "/dashboard/$userId"
    }
  }
}
ROUTE_MANIFEST_END */
