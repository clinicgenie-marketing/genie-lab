# Lesson 1.1: How Websites Work and the Vibe Coding Workflow

### Learning objective

By the end of this lesson, you should be able to:

- Explain what the browser, the website’s code and outside services each do.
- Tell apart local development, a test deployment and a live website.
- Describe how to guide Claude through a bounded task.
- Explain why work Claude produces still needs a person to check it.

**Prerequisites:** None.

**Required materials:** A web browser, the course instructions and your supervisor’s description of the Saffron Wellness Clinic practice project.

## 1. Understand what a website is made of

A website combines several kinds of work. It helps to name them separately, because each is checked in a different way.

| Part | What it does | Example |
|---|---|---|
| **Content** | Communicates information | A page heading or a treatment description |
| **Presentation** | Controls how things look | Typography, spacing and colour |
| **Behaviour** | Responds when the visitor does something | Opening a mobile menu |
| **Integration** | Connects the website to another system | Sending an approved request to a receiving service |

Three things work together to produce what a visitor sees:

- The **browser**, such as Chrome, Safari or Edge, displays the website.
- The **project files** describe what to display and how it should behave.
- A **server**, a computer that responds to requests over the internet, may prepare content or handle submitted information. Whether a project needs one depends on its **architecture**, the overall plan for how it is built.

Some websites use outside services, such as an email or booking service. Many do not. A contact form that appears on a page does not prove that any service exists to receive its messages.

## 2. Tell the working environments apart

An **environment** is a place where the website runs. Each one has a different purpose.

| Environment | Purpose | What it does not prove |
|---|---|---|
| **Local development** | Running the project on your own computer while you work | That anyone else can see it |
| **Test or staging environment** | Reviewing a hosted copy of the website before release | That it has been accepted for the public |
| **Production** | Serving the live website to its real audience | That every feature has been checked |

When you run a website locally, it usually has an address such as `http://localhost:` followed by a number. That address only works while a program on your own computer is running. Sending the address to a colleague does not let them see your work.

Do not change a live website as part of this introductory lesson.

## 3. Understand your role when working with Claude

Claude can read files, suggest approaches and make changes, when the environment and the task allow it.

**You remain responsible for checking that the result meets the approved requirements.**

Your responsibilities include:

1. Giving Claude the relevant approved references.
2. Stating the result you need and the boundaries of the task.
3. Reviewing Claude’s assumptions and proposed changes.
4. Checking the finished work and the evidence for it.
5. Reporting any unresolved problems accurately.

“Claude said it is complete” is not evidence on its own. Claude can misunderstand a request, miss a requirement or report a check it could not actually perform. Your review catches these.

## 4. Follow a controlled working cycle

**Vibe coding** means building software by describing what you want in plain language and letting an AI tool such as Claude write the code. It is fast, but speed without checks produces work nobody can trust. A controlled cycle keeps each step visible:

1. **Understand:** identify the requirement and the expected result.
2. **Inspect:** find out what already exists.
3. **Plan:** choose changes in proportion to the task, and the checks that match them.
4. **Implement:** make the authorised changes.
5. **Verify:** compare the result with the requirement.
6. **Record:** summarise the changes, the evidence and any remaining work.

Small corrections may not need a separate written plan. The cycle exists to make decisions visible. It does not mean asking for approval before every routine edit.

Later units practise each step in detail: inspection and planning in Unit 4, implementation and checking from Unit 5 onwards.

## 5. Separate requirements from suggestions

An **approved design** defines what to build. A new idea, whether yours or Claude’s, is only a **suggestion** until someone with the authority to decide has accepted it.

For example, reordering the navigation because it looks better changes how visitors move through the website. That is a new design decision, not simply building the existing design.

When a requirement is missing, name the decision that is needed. Do not fill the gap by inventing an approval.

## 6. Prepare your first inspection request

A **prompt** is the request you type to Claude. You will use this one after your tools and the starter project are set up in Lessons 1.2 to 1.4:

```text
Explain the supplied Saffron Wellness Clinic practice project to a beginner.

Read only its introductory instructions and relevant project overview.
Describe the intended website, known tools and working environments.
Distinguish supplied facts from missing information.
Explain the next permitted learning task.

Inspect only. Do not edit files, install software, start services,
commit, push or deploy.
```

Notice how the prompt states what to read, what to report and what not to do. Later lessons build on this pattern.

This is an example for later use. It does not mean the starter project has been supplied or inspected during this lesson.

## 7. Practical exercise

**Task: Explain the website workflow in your own words.**

1. Describe content, presentation, behaviour and integration, with one example of each.
2. Explain the difference between a local environment and a live website.
3. Write the six-step working cycle for one small, imaginary website change.
4. Identify which decisions in that change would need approved references.
5. State how you would know the change had succeeded.

No coding is required.

## 8. Expected submission

Submit:

- Your explanation of the four parts of a website.
- Your explanation of the environments.
- Your working cycle for one small change.
- One example of a claim that would still need checking before you could rely on it.

## 9. Completion criteria

The lesson is complete when you can:

- Explain the parts of a website.
- Tell the environments apart.
- Describe your responsibility for checking Claude’s work.

## 10. Knowledge check

1. How does presentation differ from content?
2. Does a visible contact form prove that messages can be received?
3. Why does a page running on your own computer not automatically become a public website?
4. What makes a suggestion different from an approved requirement?
5. Why should Claude’s completion report be checked?
