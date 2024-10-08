To start working with the app, first, you will need to install the dependencies by running the following command in your terminal:

npm install

To disable CORS I have created a back-end. To start working with the back-end, first, you will need to run node index.js to run the backend server. Before running this please make sure you have node.js installed on your computer.

Once the app is loaded it should automatically load pictures from the API.

This app uses the Flickr API, which is publicly available and does not require a unique key. The API allows for the search for pictures using tags such as nature, Italy, Olympics, and so on.

Initial Load: By default, the app loads pictures using the tag new.

Searching: You can search for pictures by entering any tag you like.

The API code can be found in the following path:
front-end/src/api/api.js

I have tried to match the design to the requirements as closely as possible. Since the pictures returned by the API are not consistent in size, I decided to use white borders around them.

For design measurements, I used Figma and have attached a screenshot for reference. I have used Figma to measure, margins, text size, and photo container size.

In this app, you can favourite pictures. The data is stored in 'localStorage' under 'likedPhotos' when the picture is liked the colour of the button changes.
