# Products Grid

Hello! Thank you for visiting this repository

Below are instructions on how to run the project.

## How to run

## Running the back-end
** NOTE: This part should be done on a separate terminal.

1. Install all the dependencies

    `npm install`

2. Run the backend

    `npm run server`


### Running the front-end

Below are instructions to run the front-end

#### Production version
---

1. Install all the dependencies

    `npm install`

2. Build the project.

    `npm run build`

3. Wait for a few moments and serve the build

    ```
    npm install -global serve
    serve -s build
    ```

4. Wait for the serve to run and then visit

    [http://localhost:3000](http://localhost:3000)


#### Development version
---


1. Install all the dependencies

    `npm install`

2. Run the project.

    `npm run start`

3. Wait for a few moments and then visit

    [http://localhost:3000](http://localhost:3000)


Thank you!

## Notes

- Ads are upto 1000 kinds only. (I didn't edit the intial value that was given. *1000* )

- The application contains a basic responsive ui. It is not the best but it's there.

- Regarding the infinite scrolling, The first implementation that I had in mind is to use the `Oberserver Intersection API` (the non package version) but `opted to go with the scrolling events` instead because I wasn't sure if that counts as a package/plugin.

- airbnb's style was included so I could be consistent with my coding patterns.

- No UI Frameworks, Redux, Axios were used in this project. Though i have built my own version of them.

- `.env` would have been used but did not go for it to reduce time consumption and focused on the main features.