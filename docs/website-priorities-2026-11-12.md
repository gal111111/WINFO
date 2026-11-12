# WINFO website priorities and release plan

Assessment date is 12 November 2026, Hong Kong time. The scope is the public winfo.hk website. Priorities reflect observed failure impact and the existing customer journey. Conversion analytics were unavailable during this assessment.

## Issues to fix

| Rank | Priority | Evidence and customer impact | Current release |
| --- | --- | --- | --- |
| 1 | Restore direct service and enquiry links | Production requests to the company-registration page and registration wizard returned HTTP 404. The browser can render the fallback application while crawlers and direct-link clients receive an error response. | Generate entry documents for all 14 routes, with route-specific titles, descriptions and canonical URLs. Preserve a genuine 404 response for unknown paths. |
| 2 | Handle rejected enquiry acknowledgements accurately | In the live application, an intercepted HTTP 200 response containing `ok: false` displayed the success screen. A customer would read that their enquiry had been sent and stop trying to contact WINFO. | Reject explicit provider errors and malformed JSON acknowledgement shapes. Bound the request duration, retain answers on failure, and keep confirmed submission success when local draft cleanup fails. |
| 3 | Protect application startup when browser storage is unavailable | Code review found unguarded localStorage reads in application startup and the site shell. Failure injection for this application-wide case remains part of the next phase. | The registration wizard now handles its own unavailable session storage and explains where answers are retained. Application-wide storage handling is next. |

## Features to build

| Rank | Priority | Outcome | Acceptance criteria |
| --- | --- | --- | --- |
| 1 | Portable company-registration enquiry brief | A visitor can copy the complete enquiry or open a prefilled WhatsApp conversation. The error-state email draft includes the same answers. | Reach the feature from the homepage, preserve all selected services and notes, support all three languages, and provide selectable text when clipboard permission is denied. |
| 2 | Tailored document-preparation checklist | Help each founder prepare the relevant general information before consultation. | Use the existing local/mainland founder choices and selected support. Verify the checklist against current official guidance and WINFO's service scope. Provide a useful download and consultation route. |
| 3 | Submission reference and follow-up visibility | Help customers and staff identify an enquiry and follow up consistently. | Inspect the existing Formspree inbox and available reference APIs first. Keep submission acceptance, inbox receipt and staff response as separately evidenced states. |

## UI and UX improvements

| Rank | Priority | Outcome | Current release or next step |
| --- | --- | --- | --- |
| 1 | Accessible mobile enquiry flow | Customers can identify a missing answer, reach it from an error summary, continue with the keyboard, review answers and recover from a submission problem. | Add focused, linked error summaries and inline messages, semantic form submission, current-stage labels, contextual edit labels, a compact mobile introduction, and 16px mobile inputs. |
| 2 | Clarify the homepage service finder | Customers asking about funding reach a funding-specific next step. | Separate incorporation, BUD, compliance and cross-border intentions, then test each destination from the homepage. |
| 3 | Improve trust and fee presentation | Customers can understand the evidence behind public trust statements and the scope of a price. | Confirm the public review source with WINFO, connect verification material where available, and show included services, optional items and fees requiring confirmation. Preserve the owner's preference to provide licence materials on contact. |

The interaction references are GOV.UK's focused error summaries and editable review pattern, alongside Sleek and Osome's service-oriented entry points. The release uses WINFO's existing colours, typography and components. [GOV.UK error summary](https://design-system.service.gov.uk/components/error-summary/), [GOV.UK check answers](https://design-system.service.gov.uk/patterns/check-answers/), [Sleek Hong Kong](https://sleek.com/hk/), [Osome Hong Kong](https://osome.com/hk/)

## Next phase

1. Complete the remaining reliability work by injecting blocked browser storage at application startup and testing provider-specific request contracts. Extend shared validation and meaningful failure states to the BUD and general enquiry forms.
2. Build the tailored readiness checklist through the existing registration choices. After that, confirm the existing provider's reference and inbox capabilities before implementing follow-up visibility.
3. Refine homepage intent selection, then verify the review and fee presentation with WINFO's actual materials. Run mobile navigation tests for each selected service.

Each phase ends with unit regressions, keyboard and viewport checks, a production build, and readback of the deployed revision and public routes.

## Release verification

The release reuses GitHub Pages, the existing Formspree endpoint and the existing registration data model. The additions are static route generation, a portable enquiry brief and the accessible form interactions.

Eight unit regressions cover generated routes, canonical metadata, provider response handling, timeouts, contact validation, legacy drafts and complete multilingual briefs. Browser QA starts at the homepage and covers English, Traditional Chinese and Simplified Chinese, desktop and mobile views, validation focus, copying, clipboard denial, failed provider responses and confirmed success with draft-cleanup failure.

Browser form requests are intercepted. Actual email inbox delivery requires a controlled recipient test. The accompanying release receipt records the deployed commit, workflow result and production QA results.

The previous production commit is `55ee000b173122d916976751f8cfa310e4f9b4a2`. A rollback uses a revert of this release followed by the same build and deployment workflow. A failed known route, an application crash or loss of enquiry answers triggers rollback review.
