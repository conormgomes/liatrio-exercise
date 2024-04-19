# liatrio-exercise

**4/15/24**

Made github repo.

Further setting up repo:

- Ensuring I'm using my personal account to push instead of my school account

- Adding a .gitignore

- Unlearning past misuses of github and teaching myself how to properly use and take advantage of it


Installed Node.js and began teaching myself javascript and Node specifically via YouTube videos


**4/17/24**

Turns out I had enough info from the first YouTube video I watched to do what I think I need to in js. My initial attempts worked, but were a bit janky. I was writing the current time to a json file which was then sent as a response. I realized not too long after that Express has the option to just send a json directly. Also fixed my timestamp to just use Date.now() which I'm hopeful is the correct formatting. Will find out when I get to testing.

Set up the docker container. ( Using https://docs.docker.com/language/nodejs/containerize/#get-the-sample-application )

Learning how to do the three steps required using GitHub Actions

Went back a bit to better understand how Docker builds/images/containers work before I start writing my actions .yaml file.

Have enough knowledge from YouTube to attempt it. So far I can build and push to Docker Hub automatically. Now I hope that it passes the tests.


**4/18/24**

Goal today is to refine the GitHub actions to correctly label Docker image versions and also to behave differently on a main branch push vs a manual run. I also need to figure out why all 7 tests are failing with an ECONNREFUSED.

Spent a while trying to find a way to iterate a GitHub repo variable without success. Decided to just use date/time to tag Docker images.

Wasted some time trying to alter the actions .yaml to have different steps depending on the trigger. Didn't work, so I think I would have to create a different .yaml file. Was more of an idea for fun than functionality so I scrapped it.


**4/19/24**

Today I will pass those tests.

Added lines to actually run the js code in actions.