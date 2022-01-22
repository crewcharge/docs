---
sidebar_position: 1
---

# Trigger

## What is a trigger?
Triggers are actions performed by users in the application. They're similar to **events** in Google Analytics. 

The reason they're called triggers is that you can attach workflows to every action user is performing using [Workflows](https://docs.crewcharge.com/docs/Basics/Workflow).

:::tip

The simplest example of a trigger is a user clicking on a button.

:::

## Trigger Naming Convention

Triggers are usually attached to workflows, and hence we recommend naming them as 

```shell
1. On Free Trial Started
2. On User Signup
```

They can have alphanumeric characters. 

## Trigger Key Naming Convention

Triggers keys are unique. Only one trigger key can exist per project. They must start with **project-key**_

For example, if your project's name is Crewcharge, your trigger keys **must** start like the following

```shell
1. Crewcharge_on_free_trial_started
1. Crewcharge_on_user_signup_complete
```

## Type of Triggers

A trigger can be either **positive** or **negative**. 

Positive triggers are events that spark joy to the customer success manager, such as 

1. Upgrading to a higher tier plan.
2. Finishing onboarding quickly.
3. Visiting the site every week.

Negative triggers can merely be the absence of a positive trigger, such as 
1. Not finishing onboarding after signup 
2. Not finishing your app's primary action every week.

or triggers performed by the user that propagates that the customer is unhappy with the product, such as

1. Requesting a cancellation
2. Giving a low Customer Satisfaction (CSAT) score.

## How to create a trigger

To create a trigger using the API, see [Create Trigger API](https://docs.crewcharge.com/api/triggers/add)


## Frequently Asked Questions

1. What are triggers?

Triggers in-short are actions performed by the users of your application.

2. What is the difference between an action and a trigger?

Actions are performed by the owner/admin of the project (you), while triggers are actions performed by the user of your
application.
