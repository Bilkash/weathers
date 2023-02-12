type RouteNameType = "detail" | "main";

interface RoutesType {
	main: RouteNameType,
	detail: RouteNameType
}

export const routes: RoutesType = {
	main: "main",
	detail: "detail"
} as const;
