# Assignment: Create Juan Rodriguez

The main idea for the assignment was to use different technologies and setting up all together in order to acomplish the task.

Technologies used:

Python: 
* Flask- Used for the backend service.
* Pymongo- Used for the mongodb connection.

AngularJS: 
* Frontend and service consumption.

Mongodb:
* Main storage and query.

### Architecture:
The project's structure consists of three components: frontend, backend and persistence as follow:
* Frontend: Two components that controls the corresponding search and the detail of the slide -> slides.component.ts and slide-detail.component.ts; and a service that makes the comunication with the backend -> slide.service.ts.
* Backend: A rest service built using Python and the flask microframework, consist of 3 end points -> getSlides, getSlide_by_title and get_slides_sorted_by_date, to get all the slides, search a slide by title (complete title or words) and get the slides sorted by date. Also, I have created a logic file to encapsulate the json encoding of the response and the cross domain; and a settings folder to store important configurations.
* Persistence: It is supported by a mongodb nosql database, the provided json file was loaded into the database to allow queries.

### Installation

First we need to install and configure the database, please read the following instructions for Ubuntu 16.04: [install mongodb](https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-16-04). After installing mongodb, we need to start the service and load the json file:

```sh
$ sudo systemctl status mongodb
$ mongoimport --jsonArray --db prezi --collection slides --file prezis.json
```

Install the dependencies for the python backend.

```sh
$ cd prezi_be
$ pip install requirements.txt
```

For the angular dependencies, first install npm and then:

```sh
cd prezi_fe
$ npm install
```

### Execution

Once the installacion has finished, we execute all the projects:

Python backend.

```sh
$ cd prezi_be
$ python prezi.py
```

For the angular dependencies, first install npm and then:

```sh
cd prezi_fe
$ npm start
```
Now we can show the project in the browser.

### If I would have had more time:
* Study more about angular2 best practices and implement them in the project.
* Fix the cache of the images, once the request is made, it doesn't matter that you change the detail of the slide, it continues showing the same image; the page needs a reload to change the image.
* Implement an android app as a frontend
* Deploy the project on a server to see it online.
* Write unit tests
* About the UI/UX design, I really really would like to say that with more time I would have implemented a better design, but that is not true, that is not really my strong.
