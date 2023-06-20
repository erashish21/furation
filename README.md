# Information about API:
### Theme:
- We’re going to design an API for the CRUD OPERATION(CREATE,READ,UPDATE,DELETE) of the Item using Express JS, MongoDB and some usefull tools like Winston to logging the info and error of each request.

- Date

# Instructions about SetUp:

First start with downloading the code and and write npm install on code editor, it will install all dependencies on your editor.
You will not need  mongoDB setup because I will give my mongodb_srv because this is only assessment.
We will use postman to check the api is working or not,So download postman on your computer.

1.Now use this POST Request **http://localhost:4000/api/item/new** route to create new item having name and description. Below image shown how to fill the value.

![CreateItem](https://github.com/majazulhaque/cart-app/assets/74106414/e8ef72bc-c290-4604-bc48-fde6fffd494c)

2.Use this GET Request **http://localhost:4000/api/item/64914669331c4a0b38f7d886**  to fetch the item using id. Below image shown how to fetch.

![GetByID](https://github.com/majazulhaque/cart-app/assets/74106414/b28ee920-d54a-449f-9fe4-c80c2e4b8e34)

3.Use this GET Request **http://localhost:4000/api/items?page=1&limit=5** to fetch all item using Pagination shown below.

![GetAllItem](https://github.com/majazulhaque/cart-app/assets/74106414/6bdedb22-d3c2-451f-9155-8e1437c2fc3b)

4. Use this PUT Request **http://localhost:4000/api/item/64914669331c4a0b38f7d886** to update item fetched by id. Below is shown how to fill value.

![UpdateItem](https://github.com/majazulhaque/cart-app/assets/74106414/4a1e503c-b4ef-419b-91d8-4c310ee19f9c)



5. Use this DELETE Request **http://localhost:4000/api/item/64914669331c4a0b38f7d886** to delete item by ID. Below image shown how to delete.

![DeleteItem](https://github.com/majazulhaque/cart-app/assets/74106414/e9f16e13-a69e-47f3-98a2-dd1a31cc3bb2)
