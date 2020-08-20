# React shopping Cart
# Step1 1:Create React App
8.Checkout Form
   1.Set Active Task  Management Spreadsheet
   2.Create branch checkout-form
   3.Cart.js
   4.Make cart items persistent
   5.Use LocalStorage on App constructor to load cart items.
   6.Use LocalStorage on addToCart to save cart items (JSON.stringify)
   7.Handle Clic on Process
   8.Update showCheckout state to true on click.
   9.Conditional redering checkout form.
   10. Get Email, Name and Address required input.
   11.Define handleInput function
   12.Add Checkout Button.
   13.Handle onSubmit Form Event by this.createOrder.
   14.Create order object and pass to parent to handle it.
   15.Publish changes.
9.Add Modal and Animation
   1.Set Active Task  Management Spreadsheet
   2.Create branch animation-modal
   3.Show Animation
   4.Install react-reveal
   5.Create fade effect from bottom for products
   6.Create fade left for add to cart
   7.Create fade right for show checkout form
   8.Open Mpdal by click on product image
   9.Install react-modal
   10.products.js
   11.Import Modal
   12.Set state for product to null
   13.Define openModal and closeModal
   14.Show Modal if product exist
   15.Create Modal
   16.Create zoom effect for modal
   17.index.css
   18.Style product Details
   19.Commit and Publish changes
   20.Pull request,merge, change to master
   21.Task Management Spreadsheet set it done
 10.Create Products Backend
    1.Install nodemon globally
    2.Add Server.js
    3.Install express body-parser mongoose shortid
    4.Install MongoDB
    5.app=express()
    6.app.use(bodyParser.json())
    7.mongoose.connect
    8.create product model
    9.app.post("/api.products")
    10.Postman send post request
    11.route.get("/api/products")
    12.route.delete("/api/products/:id").
11.Add Redux
    1.what is redux (diagram)
    2.update task on spreadsheet
    3.create branch add-redux-products
    4.npm install redux react-redux redux-thunk
    5.import redux
    6.set initial state
    7.create types
    8.type.js
    9.define FETCH_PRODUCT
    10.actions/productActions.js
    11.declare fetchProducts
    12.create reducers
    13.reducers/productReducers
    14.define case FETCH_PRODUCTS
    15.create store
    16.store.js
    17.define initialState
    18.create store
    19.import productReducers
    20.combine reducers
    21. use store
    22.App.js
    23.import store
    24.wrap all in provider
    25.connect products
    26. components/Products.js
    27.connect to store
    28.import fetchProducts
    29.set state products to null
    30.fetch products on did mount
    31.package.json
    32.set proxy to http://127.0.0.1:500
    33. npm run server
    34.check product list
    35.commit and publish
    36 send pull request and merge
    37.update spreadsheet
12.Add Redux To Filter
    1.Update task and branch
    2.types.js
    3.create FILTER_PRODUCTS_BY_SIZE
    4.create ORDER_PRODUCTS_BY_PRICE
    5.actions/productACtions
    6.create filterProducts
    7.move app.js filterProducts logic here
    8.create sortProducts
    9.move app.js filter logic here
    10.reducers/productReducers.js
    11.case FILTER_PRODUCTS_BY_SIZE
    12.case FILTER_PRODUCTS_BY_PRICE
    13.Filter.js
    14.connect props:size,sort,items and filteredItems
    15. connect actions:filterProducts and sortProducts
    16.show loading if no filteredProducts
    17.App.js
    18.remove Filter props
    19.check result
    20.update task and branch
13. Add Redux To Cart
    1.update task and branch
    2.types.js
    3.create ADD_TO_CART
    4.create REMOVE_FROM_CART
    5.actions/cartActions.js
    6.create addToCart
    7.create removeFromCart
    8.reducers/cartReducers.js
    9.case ADD_TO_CART
    10.case REMOVE_FROM_CART
    11.Cart.js
    12. connect props:cartItems
    13.connect actions remove from cart
    14.Product.js
    15.add action addToCart
    16.App.js
    17.remove Cart props
    18.store.js
    19.set initial cartItems to localstorage
    20.check result
    21.update task and branch.
13.Create Order
    1.Backend
    2.server.js
    3.Create order modal
    4.get /api/orders
    5.post /api/orders
    6.delete /api/orders/:id
    7.Frontend
    8.create types
    9.types.js
    10.CLEAR_ORDER,CLEAR_CART,CREATE_ORDER
    11.create actions
    12.actions/orderActions
    13.createOreder(order)
    14.clearOder()
    15.create reducers
    16.reducers/orderReducers.js
    17.case CREATE_ORDER
    18.case CLEAR_ORDER
    19.Update Vart Component
    20.components/Cart.js
    21.connect order,createOrder,clearOrder.
    22.form onSubmit={this.createOrder}
    23.createOrder() this.props.createOrder(order)
    

