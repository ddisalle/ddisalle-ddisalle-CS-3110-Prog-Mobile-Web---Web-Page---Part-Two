# ddisalle-ddisalle-CS-3110-Prog-Mobile-Web---Web-Page---Part-Two

4: Web Page App, Part Two

We will now use the browser fetch API to make AJAX requests to our web service and dynamically update the page using the responses we get! Hopefully, the web service you built in the last assignment still seems entertaining.

Requirements:
Some content on the page must be loaded via an AJAX GET.
There must be a way to create something via an AJAX POST.
There must be a way to edit something via an AJAX PUT.
There must be a way to remove something via and AJAX DELETE.
Changes made in the back end via AJAX must be apparent in the front end.
Tips/Hints:

You will want to register event handlers on various elements.
You will want to manipulate the DOM when the AJAX requests complete.
_______________________________________________________________________________________________________________

Website: https://ddisalle.chickenkiller.com  

Step 1 – Verify API from Part 1
- Confirm the backend API is still running
- Test the following endpoints:
  - GET
  - POST
  - PUT
  - DELETE

Step 2 – Update the Frontend
- Modified `index.html` to use JavaScript and the **Fetch API**.
- The page now communicates with the API asynchronously (AJAX).
- Existing `style.css` was reused for styling.

Step 3 – Load Items Using AJAX GET
- When the page loads, JavaScript sends a **GET request** to:
- The returned JSON data is used to dynamically populate the item list on the page.

 Step 4 – Create Items Using AJAX POST
- Added a form that allows users to create a new item.
- When the form is submitted:
- JavaScript sends a **POST request** to `/api/items`.
- The item name is sent as JSON.
- After the request completes, the page reloads the list using another GET request.

Step 5 – Edit Items Using AJAX PUT
- Each item displayed includes:
- An input field
- An **Update** button
- Clicking Update sends a **PUT request** to:
- The request contains:
- item ID
- updated name
- The item list refreshes to show the change.

Step 6 – Remove Items Using AJAX DELETE
- Each item includes a **Delete** button.
- Clicking Delete sends a **DELETE request** to:
- - The request includes the item ID.
- The list reloads and the item is removed from the page.

Step 7 – Dynamic Page Updates
- After every POST, PUT, or DELETE request:
- The page automatically calls the GET function again.
- This ensures all changes made on the server are immediately visible on the page.

Result
The webpage now:
- Loads data dynamically using **AJAX GET**
- Allows users to **create items with AJAX POST**
- Allows users to **edit items with AJAX PUT**
- Allows users to **remove items with AJAX DELETE**
- Updates the page dynamically without reloading the browser
