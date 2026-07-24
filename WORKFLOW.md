# WORKFLOW.md — Vague vs. Precise Prompting Drill

**Feature built:** an email newsletter signup form with validation.

## Round 1: vague prompt

Prompt: "make a form for entering an email to subscribe."

Result: a form with a single controlled input and a submit handler that
calls `alert("Subscribed!")` regardless of what was typed. No validation,
no error states, no label, no accessibility attributes, no tests. Typing
nothing, or garbage like "asdf", and clicking Subscribe both produce the
same "Subscribed!" alert.

## Round 2: precise prompt

Prompt: specified the file to edit, required a controlled input, required
email-format validation with a regex, required an inline accessible error
using `role="alert"` and `aria-describedby` instead of `alert()`, gave
explicit example behaviors (empty input → "Email is required", invalid
format → "Enter a valid email address", valid email → success message),
and required writing and running tests as a verification step.

Result: a `validateEmail` function tested independently, a labeled input
with `aria-invalid` and `aria-describedby` wired to the error message, and
three Vitest + React Testing Library tests (empty submit, invalid email,
valid email) — all passing.

## Correctness

Round 1 accepts anything, including empty input, and reports success either
way — a real bug that wouldn't surface until later. Round 2 catches both
cases at the point of entry, before anything is treated as a valid
subscription.

## Accessibility

Round 1's only feedback is a native `alert()`, which interrupts the page
and has no relationship to the input field. Round 2 uses `role="alert"`
linked to the input via `aria-describedby`, so a screen reader announces
the specific error next to the specific field — the actual accessibility
fix, not just a visual one.

## Edge cases

Round 1 misses: empty submission, malformed email, and gives no way to
distinguish a real success from a false one. Round 2 explicitly handles
both empty and malformed input as distinct, worded errors.

## Review effort

Round took under very little to produce and required no review to "pass" —
which is the actual problem, since nothing about it was checked. Round 2
took longer up front to write the prompt, but needed far less review after
the fact, since the tests caught issues before I had to read the code
closely. One concrete mistake I caught during this process: while setting
up round 2, `setupTests.js` was accidentally created inside a nested
`src/src/` folder instead of directly in `src/`, which caused Vitest to
fail with "Cannot find module" until the file was moved to the correct
location and the empty nested folder removed.

## The actual lesson

Round 1 was faster to generate but slower to trust — validation,
accessibility, and tests would all have to be added afterward regardless.
Round 2 felt slower while writing the prompt, but was faster end-to-end
once the cost of fixing round 1 is counted.