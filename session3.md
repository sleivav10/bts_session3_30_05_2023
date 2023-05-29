---
marp: true
theme: uncover
paginate: true
header: Cloud & Devops - Eduard Bargués
footer: Barcelona Technology School S.L.
# **class: invert**
# **color: Set text color**
# **backgroundColor**
---

<!--
_class: invert
-->

# **Cloud and DevOps**

**Introduction to AWS & Serverless**

by Eduard Bargués

![bg opacity](images/barcelonaLandscape.png)

---

# **DevOps**

**Dev**elopment & **Op**eration**s**

![bg left:46% w:100%](images/devops.png)

---

# **Assignment 2**

Questions & troubleshooting
Let's do some exercices together 💪

![bg left:40% ](images/feature_questions_this_or_that_game.webp)

---

# **Development**

1. Let's get familiar with the [src folder](src/).
2. Find the function 'helloWorld'.
3. Find the .js file where we test it.
4. Create a new function called 'sumNumbers' that receives an array of integers and returns the sum of the them.
5. Test it using [Jest](https://www.valentinog.com/blog/jest/)

![bg left:30% h:100%](https://www.freecodecamp.org/news/content/images/2023/02/image3-1.png)

---

# **Lambda+Javascript**

> Get familiar with your code in AWS

- Create a _hello world_ lambda.
- Test it from the same UI.
- Paste your code in the lambda.
- Test it again.

![bg left:28% w:100%](images/pythonLambdaAws.png)

---

# **Api**

> Connect your Lambda with APIGW

- Create a REST API via AWS' UI.
- Add a resource and method.
- Create a 'mock' integration.
- Test it.
- Conect the method with Lambda.
- Test it again.

![bg left:29% w:100%](images/apigatewayLambda.png)

---

# **Continous Integration**

> Methodology that allow developers to safely integrate their code. Answers the question: **Is my code ready to be released?**

![bg left:40% w:100%](images/devops.png)

---

# **CI: Branches & Pull requests**

> Developers separate their code in **branches** and use **pull requests**(PRs) to review their code.

![bg left:40% w:100%](images/gitBranches.png)

---

# **CI: Github actions**

> Github provides a tool so developers can create workflows that are triggered by 12s of events.

Check out this [repository](https://github.com/EduardBargues/cicd-template).

![bg left:34% w:100%](images/githubActions.png)

---

# **CI: Testing**

> Create a workflow that triggers every time a pull request is updated. Execute the unit tests previously created as a job.

![bg left:50% h:100%](images/automatedTesting.png)
