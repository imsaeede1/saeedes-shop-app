import http from "./httpService";

export function getProducts(qs) {
  return http
    .get(`https://fakestoreapi.com/products?${qs}`)
    .then(({ data }) => data);
  // return fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/list?${qs}`, {
  //   cache: "no-store",
  // })
  //   .then((res) => res.json())
  //   .then(({ data }) => data);
}

export function getOneProdcutBySlug(slug) {
  return http.get(`/products/${productId}`).then(({ data }) => data);
}
