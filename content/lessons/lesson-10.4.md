# Lesson 10.4: Present the Website, Known Issues and Handover

### Learning objective

By the end of this lesson, you should be able to:

- Prepare handover notes that let another person run, check and continue the website.
- Maintain an honest known issues list with impact and status.
- Plan and deliver a demonstration of the website and the change.
- Answer questions by distinguishing verified facts from assumptions.
- Record the assessment outcome separately from website acceptance and deployment authority.

**Prerequisites:** Complete Lesson 10.3 with the evidence package submitted.

**Required materials:** The evidence package, QA record, page register, decision log, deployment records, project instructions and any presentation format the supervisor has specified.

## 1. Understand the purpose of the handover

A **handover** transfers responsibility for work to someone else, such as a supervisor, another team member or the client.

The person receiving it should be able to:

- Understand what was built and what was changed.
- Run the website and its checks.
- Find the evidence behind each claim.
- See what is incomplete or uncertain.
- Continue the work without reconstructing its history.

**A good handover is honest about limits. A handover that hides problems transfers them to someone who does not know they exist.**

This lesson also includes the final assessment presentation. The presentation shows your work. The handover notes are the lasting record.

## 2. Write the handover notes

Combine the records from earlier units into one document. Link to existing records rather than copying them.

| Section | What to include | Source |
|---|---|---|
| **Overview** | What the website is and its current state, in a few sentences | Project brief |
| **Scope delivered** | Pages, features and the Unit 10 change | Page and feature registers |
| **Instruction baseline** | Approved document versions | Unit 3 baseline, Lesson 10.1 updates |
| **Running locally** | Where the project is and the documented commands | Project instructions |
| **Checks and tests** | How to run the type check, lint, build and Playwright tests | Lessons 8.4 and 9.2 |
| **Environments** | Local and staging addresses, and the deployed commit | Lesson 9.4 |
| **Configuration** | Environment variable names and their purpose, never their values | Lesson 9.1 |
| **Content and assets** | Content sources, asset register and remaining temporary materials | Lessons 5.1 and 5.2 |
| **Quality status** | Accessibility, performance and search readiness results, with their limits | Lessons 8.3, 9.2 and 9.3 |
| **Known issues** | See Section 3 | QA record |
| **Open decisions** | Questions awaiting an answer, and who owns each | Decision log and QA record |
| **Recommended next steps** | Specific actions, in priority order | Your assessment |

### Write for a new reader

Imagine someone who has never seen the project reading the notes.

- Define project-specific terms.
- Use exact commands from the project’s documentation.
- State where each record is kept.
- Explain anything that only works in a particular way.

Ask a colleague to follow the running instructions, if possible. Instructions that work only for their author are not finished.

## 3. Maintain an honest known issues list

Draw the known issues from the QA record. Include every open finding, every accepted limitation and every unchecked area that matters.

| Field | What to include |
|---|---|
| ID | The QA record reference |
| Issue | What is wrong or unverified |
| Impact | Who it affects and how |
| Priority | From the QA record |
| Status | Open, Awaiting decision or accepted limitation |
| Workaround | Any temporary way around the issue |
| Owner | Who needs to act |

### Example

| ID | Issue | Impact | Priority | Status | Owner |
|---|---|---|---|---|---|
| QA-A11Y-03 | Section text contrast below the agreed requirement | Harder to read for some visitors on all detail pages | Major | Awaiting decision on brand colour | Supervisor |
| QA-CH-02 | New treatment image crops the subject at narrow widths | Reduced image clarity on phones | Minor | Awaiting replacement image | Supervisor |
| Not checked | Real-device testing on iOS | Unknown behaviour on Safari on iPhone | To be assessed | Not performed | To be assigned |

These are illustrative. Use your actual findings.

Unchecked areas belong in the list. “Not checked” is a known gap, and the reader needs to know about it.

## 4. Plan the presentation

Confirm the presentation format with your supervisor:

- Who will attend.
- How long you have.
- Whether to present locally, on staging or both.
- What the supervisor most wants to see.

A useful structure:

| Part | Content |
|---|---|
| Context | The website’s purpose and the approved scope, briefly |
| Walkthrough | The approved visitor journeys, on the agreed environment |
| The change | The brief, your interpretation, the questions you asked and how you implemented it |
| Evidence | How you verified the change, using the acceptance matrix |
| Known issues | The most important open issues and decisions |
| Next steps | What should happen next |
| Questions | Time for the supervisor’s questions |

Keep the walkthrough focused on approved journeys. Show the evidence rather than describing it from memory.

### Prepare for problems

Live demonstrations can fail for reasons unrelated to your work, such as a network outage.

- Test the demonstration path in advance on the same environment.
- Have screenshots or a short recording of the main journeys ready.
- Know which features you will not demonstrate live, and why.

## 5. Demonstrate safely

The presentation is not a reason to bypass earlier rules.

- Use the agreed environment, normally local or staging.
- Use synthetic information in any form.
- Do not trigger real messages, bookings or other external actions unless they are authorised.
- Do not display configuration values, credentials or private records on screen.
- Close unrelated tabs, notifications and files before sharing your screen.

If a feature can only be shown by performing an unauthorised external action, show its evidence instead and explain the boundary.

## 6. Answer questions accurately

During questions, distinguish what you know from what you assume.

| Situation | Useful response |
|---|---|
| You verified it | “Yes. The acceptance matrix shows the test and its conditions.” |
| You did not check it | “I didn’t check that. It is listed as not checked in the handover.” |
| You assumed it | “I assumed that based on the existing card design. It is recorded in the decision log.” |
| You do not know | “I don’t know. I can find out and add the answer to the handover.” |

“I don’t know” followed by a way to find out is a strong answer. A confident guess that turns out to be wrong damages trust in the rest of your evidence.

Record any follow-up actions that arise from questions and add them to the handover notes.

## 7. Ask Claude to review the handover

```text
Review the handover notes for accuracy and completeness.

Read:
- The handover notes.
- The QA record, page register and decision log.
- The evidence package and acceptance matrix.
- Deployment records and project instructions.

Check:
1. Every claim in the notes is supported by a linked record.
2. The known issues list includes every open finding,
   accepted limitation and unchecked area from the records.
3. The running and testing instructions match the
   documented commands.
4. Configuration is described by variable names only,
   with no values.
5. Environments and deployed commits are identified.
6. A new team member could run the website and checks
   using only these notes and the linked records.
7. Nothing overstates completion, quality or compliance.

Report each gap or inaccuracy with a specific reference.

Review only. Do not edit files, commit, push or deploy.
```

Correct genuine gaps. If Claude reports an issue you believe is wrong, check the record and note your reasoning.

## 8. Record the outcome

After the presentation, the supervisor records their decisions. Keep these separate:

| Record | What it decides | Who decides |
|---|---|---|
| **Assessment outcome** | Whether you have met the curriculum’s assessment requirements | Supervisor |
| **Website acceptance** | Whether the implemented website and change are accepted, and for what scope | Supervisor or client |
| **Deployment authority** | Whether any version may be released to production | The person authorised by the project |

These decisions are independent. You may pass the assessment while the website still has open issues. The website may be accepted for staging while production release is not authorised.

Leave each decision as **Awaiting review** until the supervisor records it. Record the reviewer, date, scope and any conditions.

Curriculum approval of this lesson is a separate matter again. It concerns the lesson text, not your work.

## 9. Reflect on your progress

Write a short reflection to help you and your supervisor plan your next steps:

- Which parts of the workflow do you now complete confidently?
- Where did you need the most help?
- Which decision would you make differently next time, and why?
- What would you like to learn next?

Be specific. “I need more practice with debugging” is less useful than “I found it hard to tell whether a failing test was caused by the site or the test.”

## 10. Practical exercise

**Task: Complete the handover and present your work.**

1. Write the handover notes, linking to existing records.
2. Compile the known issues list from the QA record.
3. Ask a colleague to follow the running instructions, if possible.
4. Ask Claude to review the handover and correct genuine gaps.
5. Confirm the presentation format with your supervisor.
6. Prepare and rehearse the walkthrough and fallback materials.
7. Deliver the presentation.
8. Record follow-up actions from questions.
9. Record the supervisor’s decisions separately.
10. Write your reflection.

## 11. Expected submission

Submit:

- The handover notes.
- The known issues list.
- The presentation materials and fallback evidence.
- Claude’s handover review and your corrections.
- Follow-up actions from the presentation.
- The assessment outcome, website acceptance and deployment authority records, once decided.
- Your reflection.

## 12. Completion criteria

The lesson is complete when:

- The handover lets a new reader run, check and continue the website.
- Every claim links to supporting records.
- Known issues, open decisions and unchecked areas are listed honestly.
- No credentials, personal data or private values appear in any material.
- The presentation used safe, agreed environments and data.
- Questions were answered without overstating evidence.
- Assessment, acceptance and deployment decisions are recorded separately.

## 13. Knowledge check

1. Why should unchecked areas appear in the known issues list?
2. How should you answer a question about something you did not verify?
3. Why prepare screenshots or a recording before a live demonstration?
4. How do the assessment outcome, website acceptance and deployment authority differ?
5. What makes handover instructions usable by someone other than their author?
