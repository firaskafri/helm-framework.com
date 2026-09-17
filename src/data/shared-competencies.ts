import { assertUniqueIds } from '../lib/contentIntegrity';

export const SHARED_COMPETENCIES = [
  {
    id: 'judgment',
    title: 'Judgment',
    description:
      'Choose a useful outcome and the simplest approach. Decide what to delegate and when a person needs to step in.',
    selfCheck:
      'Can you explain your choice, the trade-off and what would make you reconsider?',
  },
  {
    id: 'communication',
    title: 'Communication',
    description:
      'Give people and agents the goal, context, constraints and a clear idea of a good result.',
    selfCheck:
      'Could someone act on your brief without guessing the goal or constraints?',
  },
  {
    id: 'evaluation',
    title: 'Evaluation',
    description:
      'Check AI-assisted work against facts and requirements. Make uncertainty visible.',
    selfCheck: 'Can you show what you checked and what remains uncertain?',
  },
  {
    id: 'ownership',
    title: 'Ownership',
    description:
      'Take responsibility for the work you use or share. Respect decision boundaries and follow through on problems.',
    selfCheck:
      'Do the people affected know who will decide and what happens next?',
  },
  {
    id: 'learning',
    title: 'Learning',
    description:
      'Use feedback to improve, practice the skills you need to check agent work, and share useful lessons.',
    selfCheck:
      'What changed in your next attempt, and what did you learn from trying it?',
  },
] as const;

type CompetencyId = (typeof SHARED_COMPETENCIES)[number]['id'];

interface PracticeGuide {
  steps: readonly [string, string];
  practice: string;
}

interface ExampleTheme {
  id: string;
  title: string;
  situation: string;
  examples: Record<CompetencyId, string>;
  guidance: Record<CompetencyId, PracticeGuide>;
}

/** Illustrative workplace scenarios, not observed cases or role-specific standards. */
export const COMPETENCY_EXAMPLE_THEMES = [
  {
    id: 'content',
    title: 'Content',
    situation: 'Preparing an email campaign for a new service',
    examples: {
      judgment:
        'The marketer chooses one focused email answering a common customer question, instead of generating a large campaign before knowing what the audience needs.',
      communication:
        'They give the agent the audience, offer, approved product facts, tone and desired action: “Encourage existing customers to book a walkthrough.”',
      evaluation:
        'They catch an AI-generated claim that the service “cuts costs by 50%.” They check the available evidence and replace it with an accurate description.',
      ownership:
        'They notice the published email contains an outdated price. They coordinate the correction, inform the sales team and address affected customer enquiries.',
      learning:
        'The campaign gets clicks but few bookings. They review the email and landing page, identify a possible mismatch, and test a clearer promise next time.',
    },
    guidance: {
      judgment: {
        steps: [
          'Start with the audience’s question and the action you want to help them take. Decide whether an existing page or email already answers it.',
          'Compare updating that material with creating something new. Choose the smallest useful asset before asking an agent for drafts.',
        ],
        practice:
          'For your next brief, write the audience’s question, two possible approaches and why you chose one. Ask a colleague what might change that choice.',
      },
      communication: {
        steps: [
          'Give the agent the audience, offer, approved sources, tone and desired action. Separate confirmed product facts from ideas to explore.',
          'Give the reviewer the same brief and point out unresolved claims or assumptions. Keep changes to the brief visible to both.',
        ],
        practice:
          'Rewrite one vague content request into a brief with a goal, sources, constraints and an example of the tone you want.',
      },
      evaluation: {
        steps: [
          'Trace factual claims, prices and promises to current approved sources. Qualify or remove statements the sources cannot support.',
          'Read the draft as the intended audience: is the offer clear, and does the linked page deliver what the message promises?',
        ],
        practice:
          'Pick the three strongest claims in an AI draft. Record the supporting source for each and revise any claim that overstates it.',
      },
      ownership: {
        steps: [
          'Agree who checks product facts and who approves publication. Confirm those checks before sending or scheduling content.',
          'If something is wrong after publication, correct it, inform the people affected and check that downstream copies are updated.',
        ],
        practice:
          'For one upcoming asset, agree who approves its claims and who will handle a correction. Follow an open correction through to completion.',
      },
      learning: {
        steps: [
          'Compare the intended audience action with what happened. Use reader feedback as well as clicks to identify a possible improvement.',
          'Change one part of the next comparable asset and review the result. Record other differences before attributing an improvement to your change.',
        ],
        practice:
          'Take one confusing message from a recent campaign, test a clearer version with a reader and share what you changed and learned.',
      },
    },
  },
  {
    id: 'engineering',
    title: 'Engineering',
    situation: 'Adding a report-download feature with a coding agent',
    examples: {
      judgment:
        'The engineer delegates routine file-formatting code to the agent and gives closer human attention to which records each customer may access.',
      communication:
        'They specify the required columns, filters, access rules and expected behavior for empty results, with an example of the finished report.',
      evaluation:
        'The generated code passes its tests, but the engineer checks with two customer accounts and discovers that the export includes another customer’s records.',
      ownership:
        'They confirm the access issue is fixed, involve the appropriate reviewer and verify that the released feature behaves as intended.',
      learning:
        'A customer name containing a comma breaks the exported file. They add a test that catches this problem and include the edge case in future task briefs.',
    },
    guidance: {
      judgment: {
        steps: [
          'Define the user-visible result and compare the smallest viable change with a larger redesign. Consider effort, failure consequences and how you will check the result.',
          'Separate predictable implementation from decisions about access, data changes or release risk. Give the agent a bounded task and name the human checks.',
        ],
        practice:
          'Split your next change into work to delegate and decisions or checks you will own. Explain one boundary to a reviewer before implementation.',
      },
      communication: {
        steps: [
          'Provide expected behavior, relevant project context, constraints and concrete input/output examples. Include important failure cases, such as an empty report or a wrong-account request.',
          'Share the same expectations with the reviewer. Explain discoveries and assumptions that changed during implementation.',
        ],
        practice:
          'Improve one task description with a normal case, a failure case and an example of a correct result before asking the agent to implement it.',
      },
      evaluation: {
        steps: [
          'Check the change against the intended behavior, not just the tests the agent wrote. Review the code and test important boundaries independently.',
          'Try a plausible failure case and explain what your checks cover. Ask for specialist help where you cannot judge the result confidently.',
        ],
        practice:
          'Before reading the agent’s tests, predict one important way the change could fail. Add or run a check that would expose that failure.',
      },
      ownership: {
        steps: [
          'Know which changes you can approve and which need another decision owner. Make remaining risks and release conditions explicit.',
          'Follow the change into use: verify the released behavior, respond to problems and confirm who will handle any remaining work.',
        ],
        practice:
          'For your next release, record how you will verify the result and who will respond if it fails. Follow up after release.',
      },
      learning: {
        steps: [
          'When an agent-assisted change fails, understand the cause before accepting another patch. Explain why the fix addresses the problem.',
          'Add a useful test or example that catches the failure next time, then share the lesson with the team.',
        ],
        practice:
          'Choose one recent defect. Explain its cause in your own words and demonstrate a check that fails before the fix and passes after it.',
      },
    },
  },
  {
    id: 'sales',
    title: 'Sales',
    situation: 'Drafting a proposal after a discovery call',
    examples: {
      judgment:
        'The salesperson recommends a smaller package that meets the customer’s actual need, even though the agent’s draft promotes the most expensive option.',
      communication:
        'They provide the customer’s problem, budget, decision criteria, approved pricing and unresolved questions before asking the agent to draft the proposal.',
      evaluation:
        'They compare the draft with call notes and product information, catching an integration and delivery date that the company has never confirmed.',
      ownership:
        'They confirm commitments with the delivery owner, explain remaining uncertainties to the prospect, and record what was agreed for the account handover.',
      learning:
        'After losing the deal, they learn that an essential requirement surfaced too late. They add an earlier discovery question and share the lesson with colleagues.',
    },
    guidance: {
      judgment: {
        steps: [
          'Clarify the customer’s problem, essential requirements and constraints before selecting an offer. Separate what they said from assumptions in the AI summary.',
          'Compare suitable options, including a smaller package or acknowledging a poor fit. Base the recommendation on the customer’s need and what can actually be delivered.',
        ],
        practice:
          'Compare two feasible offers for one opportunity. Explain why one fits better and what new information would change your recommendation.',
      },
      communication: {
        steps: [
          'Give the agent the customer’s stated needs, decision criteria and approved commercial information. Mark unanswered questions clearly.',
          'Keep confirmed commitments separate from suggestions in the proposal and handover. Make sure the customer and delivery team receive the same understanding.',
        ],
        practice:
          'Turn one call into a short brief: customer need, constraints, confirmed facts and open questions. Check the brief before generating a proposal.',
      },
      evaluation: {
        steps: [
          'Check scope, pricing, integrations and dates against current product information and delivery confirmation.',
          'Check whether the proposal addresses the customer’s actual decision criteria. Correct attractive wording that implies an unsupported promise.',
        ],
        practice:
          'Highlight every commitment in a draft proposal. For each, identify the supporting source or person who must confirm it before sending.',
      },
      ownership: {
        steps: [
          'Confirm commitments with the people responsible for delivering them before promising them to a customer.',
          'Record what was agreed, hand over unresolved questions and follow up on commitments you made. Correct a misunderstanding promptly.',
        ],
        practice:
          'For one deal handover, distinguish agreed commitments from pending requests and confirm the receiving owner understands both.',
      },
      learning: {
        steps: [
          'Review a won or lost opportunity using customer feedback and call notes. Separate a confirmed reason from your own explanation.',
          'Try one improvement to discovery or qualification on the next comparable opportunity and share the result.',
        ],
        practice:
          'Identify one question you asked too late in a recent deal. Ask it earlier on the next relevant call and note whether it changes the discussion.',
      },
    },
  },
  {
    id: 'account-management',
    title: 'Account Management',
    situation: 'Preparing a customer review before renewal',
    examples: {
      judgment:
        'The account manager prioritizes resolving an adoption blocker before proposing an upgrade, because the customer is struggling to get value from the current service.',
      communication:
        'They give the agent the customer’s goals, previous commitments, support history and usage data, clearly identifying facts that still need confirmation.',
      evaluation:
        'The AI summary describes the account as healthy because logins increased. They check whether the customer’s important workflows are actually being completed.',
      ownership:
        'They acknowledge a missed commitment, agree a recovery action with the responsible team, and follow up with the customer until it is resolved.',
      learning:
        'Several accounts encounter the same onboarding confusion. They improve the handover checklist, try it with the next account and check whether it helps.',
    },
    guidance: {
      judgment: {
        steps: [
          'Start with the customer’s desired outcome, unfinished commitments and current blockers. Check whether the AI summary reflects those priorities.',
          'Compare resolving the blocker, supporting adoption or proposing an upgrade. Choose the next action using evidence of customer value.',
        ],
        practice:
          'Before one account review, choose the most useful next action. Write the evidence behind it and one signal that would make you reconsider.',
      },
      communication: {
        steps: [
          'Bring together the customer’s goals, usage, support history and previous commitments. Distinguish observed facts, customer reports and assumptions.',
          'Make owners, next actions and unresolved questions clear in both the agent brief and the customer conversation.',
        ],
        practice:
          'Prepare a five-line account brief: goal, progress, blocker, next commitment and open question. Confirm uncertain facts with the relevant person.',
      },
      evaluation: {
        steps: [
          'Check the AI summary against usage records, support history and the customer’s own account of progress.',
          'Look beyond activity measures such as logins. Ask whether the work that matters to the customer is getting completed.',
        ],
        practice:
          'Take one AI-generated account-health statement. Find evidence that supports or challenges it and prepare a question to resolve what is unclear.',
      },
      ownership: {
        steps: [
          'Turn commitments into clear actions with an agreed owner and check-back date. Confirm the responsible team can deliver before giving a date to the customer.',
          'Communicate delays early, agree a recovery action and check with the customer that the issue is actually resolved.',
        ],
        practice:
          'Pick one outstanding customer commitment. Confirm the owner, next action and follow-up date, then check with the customer that it was resolved.',
      },
      learning: {
        steps: [
          'Look for recurring questions or blockers across account reviews. Ask customers and delivery colleagues what made the work difficult.',
          'Improve one onboarding or handover step, try it on the next relevant account and check whether the confusion is reduced.',
        ],
        practice:
          'Turn one repeated customer question into a clearer handover instruction. Try it with the next account and share the feedback.',
      },
    },
  },
] as const satisfies readonly ExampleTheme[];

assertUniqueIds('Shared competencies', SHARED_COMPETENCIES);
assertUniqueIds('Competency example themes', COMPETENCY_EXAMPLE_THEMES);
