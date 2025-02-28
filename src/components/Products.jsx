import React, { useState, useEffect } from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { useDispatch } from "react-redux"
import { add } from "../store/cartSlice"

import "bootstrap/dist/css/bootstrap.min.css"

export default function Products() {
  const [products, setProducts] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => {
        setProducts(result)
        setLoading(false) // Data fetched, stop loading
      })
  }, [])

  if (loading) {
    return <div>Loading...</div> // Your loader component can go here
  }

  const dispatch = useDispatch()
  function addToCard(product) {
    // dispatch an add action
    dispatch(add(product))
  }
  /*
 Here’s What Happens:
1️⃣ User clicks "Add to Cart".
2️⃣ dispatch(add(product)) sends a message to Redux.
3️⃣ Redux updates the cart with the new item.
4️⃣ The app re-renders to show the updated cart.
*/
  const card = products.map((product) => {
    // Limit the description to 40 words
    const description =
      product.description.split(" ").slice(0, 10).join(" ") + "..."

    return (
      //React needs the key on the direct child of .map().
      <div
        className="col-lg-3 col-md-4 col-sm-6 my-3 d-flex justify-content-center"
        key={product.id}
      >
        <Card className="product-card">
          <Card.Img
            variant="top"
            src={product.image}
            alt={product.title}
            className="card-img"
          />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text> Price: Rs {product.price}</Card.Text>
          </Card.Body>
          <Card.Footer
            className="btn"
            style={{ backgroundColor: "whitesmoke" }}
          >
            <Button variant="primary" onClick={() => addToCard(product)}>
              Add to Cart
            </Button>
          </Card.Footer>
        </Card>
      </div>
    )
  })

  return (
    <div className="container">
      <div className="row">{card}</div>
    </div>
  )
}

/*
this is json 
[{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}},

*/

/*

in here we can use loaderfunction 

You can leverage React Router's built-in loader function to fetch data before the route renders. Instead of fetching data inside your component (and handling the loading state there), you define a loader function for your route. Here's how you can do it:

### 1. Define a Loader Function

Create a function that fetches the data. For example:

```jsx
// productsLoader.js
export const productsLoader = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Response("Failed to fetch products", { status: response.status });
  }
  return response.json();
};
```

### 2. Attach the Loader to the Route

When setting up your router, attach the loader to the `products` route:

```jsx
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RootLayout from "./RootLayout";
import Dashboard from "./Dashboard";
import Cart from "./Cart";
import Products from "./Products";
import { productsLoader } from "./productsLoader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="cart" element={<Cart />} />
      <Route path="products" element={<Products />} loader={productsLoader} />
    </Route>
  )
);

export default router;
```

### 3. Use the Loaded Data in the Component

In your `Products` component, you can access the loaded data using the `useLoaderData` hook from React Router:

```jsx
// Products.jsx
import React from "react";
import { useLoaderData } from "react-router-dom";

const Products = () => {
  const products = useLoaderData();

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          {/* Add other product details */
//           </div>
//         ))}
//       </div>
//     );
//   };

//   export default Products;
//   ```

//   ### What About the Loader UI?

//   React Router v6.4+ automatically waits for the loader to complete before rendering the component. If you want to show a loading indicator during transitions (for example, if you're navigating away and then back), you can use the `<Await>` component or a global loading indicator. However, for the initial load, the route will not render until the loader promise resolves.

//   If you need a fallback UI for loading states during transitions, you might consider using the `useNavigation` hook to check the current navigation state:

//   ```jsx
//   // In your RootLayout or a component that wraps your routes
//   import { Outlet, useNavigation } from "react-router-dom";

//   const RootLayout = () => {
//     const navigation = useNavigation();

//     return (
//       <div>
//         {navigation.state === "loading" && <div>Loading...</div>}
//         <Outlet />
//       </div>
//     );
//   };

//   export default RootLayout;
//   ```

//   ### Summary

//   - **Where to Use the Loader:**
//     Attach the loader function to the specific route (in this case, the `products` route) when configuring your router.

//   - **How It Works:**
//     The loader function runs *before* the route renders. The data it returns is passed to the component via `useLoaderData`.

//   This approach ensures your `Products` component has the data ready when it renders, and you can handle any loading UI at the layout level if needed.

// */
