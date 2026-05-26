// Restaurant detail page — menu + order flow
// TODO: fetch restaurant + menu items by id
export default function RestaurantDetailPage({ params }: { params: { id: string } }) {
  return <div>Restaurant {params.id}</div>;
}
