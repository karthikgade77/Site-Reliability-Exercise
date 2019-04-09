# site-reliability-exercise
Site Reliability Engineer Test at Cardlytics

Sample app to test out continuous integration and continuous deployment technicals.

The URL for the prodcution website is: http://67.205.136.48/
This will show a simple statement. That's it. 

Jenkins is the CI/CD platform being used.
URL = http://162.243.170.168:8080/

The CI/CD process:
1. Jenkins is monitoring the Master repo through a webhook between Jenkins and GitHub.
2. A user/dev pushes a commit to origin master (this repo).
3. The commit triggers Jenkins to pull the site, create a build, and run a sanity test on the updated commit.
4. If test PASSES, Jenkin pushes this updated & tested site to production. If test FAILS, currently for simplicity, nothing happens; productions does not get updated with the new code. 

This is a very simple example of a CI/CD pipeline.

### How to trigger the pipeline
1. on your local machine, 'git' the repo.
2. make a change to the 'app.js' file.
3. Commit your change. At this point the CI/CD pipeline will take over and do things automatically.
4. Go to website URL above and check that the change happened. If you do not see your change within 1-minute, than that means the test failed, but it does mean the pipeline is working.
5. Now, change the text back to the original text in the 'app.js' file.
6. Commit your change. At this point the CI/CD pipeline will take over and do things automatically.
7. Go to website URL above and check that the change happened. 

