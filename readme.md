# BDD

## What we will cover

- What is BDD?
- How do you work in a BDD style?
- What tools do you need?

## Notes

BDD or Behavior driven development is a style of working where you define features in steps and then write tests
that run against your application to verify if a feature is working in the way specified.

These tests are written in Gherkin which is a code like language that is converted in to test steps that can then
be implemented by developers to perform the action described in the step.

Some rules to follow:

- Do not try to write BDD tests for every possible feature, it will slow down your tests to a crawl
- Write tests that simulate the most critical paths for a user, if broken the whole system is considered down
- Create a strict convention for how you define steps and features, there will be a lot of them and it gets messy
- BDD tests should run before every release to production
