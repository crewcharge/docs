---
sidebar_position: 2
---

# Workflow

## What is a workflow?
Workflows are attached to [triggers](https://docs.crewcharge.com/Basics/Trigger) to perform a sequential set of [steps](https://docs.crewcharge.com/docs/Basics/Step) to 

1. Understand the customer journey better. 
2. Unlock insights on the customer needs.
3. Perform segmented marketing for every set of customer.

:::tip

Think of workflows like if-user-did-this-then-do-that

:::

## What are the use-cases for workflows?
 
1. Sending a customer success story after X days of signup.
2. Sending a knowledge gap email if a trigger isn't performed by the customer within X days.
3. Sending a feedback campaign after X days of free-trial. 

However, these are only **some** of the common customer retention strategies. The sky's the limit with what's possible.

## How to create a new workflow?

Create a new workflow using API [here](/api/Workflows/Add%20Workflow)

## Workflow Naming Conventions

Workflows are usually named as follows 

```shell
1. Onboarding Completion Nudge
2. Cancellation Extend Trial Prompt
```
## Workflow Key-Naming Conventions

:::important

Workflow Keys are unique, just like trigger keys. i.e, Only one can exist per project and they must start with your project key.

:::

Examples:

If your project key is Crewcharge
```shell
1. crewcharge_onboarding_completion_nudge
2. crewcharge_cancellation_extend_trial_prompt_1
```