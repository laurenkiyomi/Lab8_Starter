# Lab 8 - Starter
## Lauren Lee
<ol>
    <li>I would fit my automated tests (1) within a Github action that runs whenever code is pushed so that my tests are automatically and consistently run as I develop my project.</li>
    <li>No, I wouldn't use an end to end test to check if a function is returning the correct output. E2e testing is more for simulating user actions from start to end so testing a function could be done without e2e testing by using a unit test.</li>
    <li>No, I would not use a unit test to test the "message" feature of a 
    messaging application because there are many parts to writing and sending a message, so 
    this feature is not necessarily one part of my code that should be 
    encapsulated in a unit. E2e testing would be more fit because we could simulate 
    a user writing and sending a message.</li>
    <li>Yes, I would use a unit test to test the "max message length" feature of a 
    messaging application because this is a good example of an individual part of my code that I can test in an encapsulated unit by simply calling the max message length function that tests 
    for the length of a message.</li>
</ol>

Test Results:

<img width="1621" alt="tests_screenshot_pt1" src="https://user-images.githubusercontent.com/86620096/202860040-2b0f1d7f-bf03-4c4c-9bbc-6a3bbdb36cd7.png">
<img width="1669" alt="tests_screenshot_pt2" src="https://user-images.githubusercontent.com/86620096/202860043-def3dfc8-6d9e-4775-81c5-fcb143978d35.png">
<img width="1520" alt="tests_screenshot_pt3" src="https://user-images.githubusercontent.com/86620096/202860045-97dd3293-af20-4950-aaf6-e3a5ca14999c.png">
