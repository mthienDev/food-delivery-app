// Restaurant dashboard layout wrapper
// Route group is protected by middleware (RESTAURANT role required)
export default function RestaurantLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
