Assignment Create Juan Rodriguez

The main idea for the assignment was to use different technologies and setting up all together in order to acomplish the task.

Technologies used:
* Python: 
    - Flask: Used for the backend service.
* Angular2
* Mongodb

Prerequisities

a running Redis instance
Python
non-standard Python modules: flask, flask_cors, redis
Usage(on Linux)

In prezis.html at line 37 the proper url needs to be provided
Load the prezis.json file into Redis with:
./redis_loader.py -f <path to prezis.json> -l <redis list> -H <redis hostname> -p <redis port> -d <redis db>
Start the web service with:
./server.py -l <redis list> -H <redis hostname> -p <redis port> -d <redis db>
Open the prezis.html file in a browser
Resources used

I have stolen code snippets from here.

If I would have more time...

I would create a more fancy frontend.
I would handle cases when the web service is not running, or if redis is not running, or if the list in redis is empty.
I would handle case, when there is to much data to fetch. Currently the prezis.json contains a small amount of data, but if it would be a huge one, it could cause trouble. I would set up a threshold. I would experiment to determine this threshold.
I would create a powerpoint presentation :) containing a figure of the architecture, and the data structure. Currently the architecture is tiny, but it is possible to create more complicated things like for instance having redis clusters spread across different hosts for storing huge amount of data, or failover.
I would use Apache for running the webservice.
I would deploy it to Heroku.
I would write unit tests.