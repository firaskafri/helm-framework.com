import type { APIRoute } from 'astro';
import { SITE_ORIGIN, SITE_FULL_NAME, SITE_DESCRIPTION } from '../data/site';
import { FRAMEWORK_VERSION } from '../data/framework';
import { loadDocs, loadRoles } from '../lib/content';
import { markdownPath } from '../lib/markdownPath';

export const GET: APIRoute = async ({ site }) => {
  const origin = site?.origin ?? SITE_ORIGIN;
  const link = (title: string, path: string, description: string) =>
    `- [${title}](${origin}${path}): ${description}`;
  const guideLink = (title: string, path: string, description: string) =>
    link(title, markdownPath(path), description);
  const docs = (await loadDocs()).sort((a, b) => a.data.order - b.data.order);
  const roles = (await loadRoles()).sort((a, b) => a.data.order - b.data.order);
  const body = `# HELM: ${SITE_FULL_NAME}

> ${SITE_DESCRIPTION}

HELM ${FRAMEWORK_VERSION} is practical guidance for discussion and adaptation to local work. Examples are illustrative. The current role guides cover engineering and product; shared-skill examples also cover content, sales, and account management. Planned resources are described on the Roadmap and are not current guidance.

The Markdown resources below contain the same guidance as the public pages, including examples and limitations. Each includes its source page and update date. Use the source page when citing HELM. Material may be shared and adapted under CC BY 4.0 with credit to Firas Kafri and HELM.

## Start here

${guideLink('HELM overview', '/', 'Six principles, a proposal example, and paths into the guides.')}
${docs.map((doc) => guideLink(doc.data.title, `/${doc.id}`, doc.data.description)).join('\n')}
${guideLink('Shared skills', '/competencies', 'Practice Judgment, Communication, Evaluation, Ownership, and Learning across roles.')}

## Roles and responsibilities

${guideLink('Role guide overview', '/roles', 'Choose a guide for discussing responsibilities and skills.')}
${roles.map((role) => guideLink(role.data.title, `/roles/${role.id}`, role.data.description)).join('\n')}
${guideLink('Role competency map', '/roles/competency-map', 'Compare the skills described in the role guides.')}

## Optional

${guideLink('Further reading', '/evidence', 'Sources and practical limits to consider when adapting the guidance.')}
${guideLink('Updates', '/updates', 'Dated changes and links to the guidance they affect.')}
${guideLink('Roadmap', '/roadmap', 'Planned improvements and resources.')}
${guideLink('Release history', '/changelog', 'Reader-facing changes across releases.')}
${guideLink('Licensing', '/licensing', 'How to share, adapt, and credit HELM.')}
${link('Updates RSS', '/updates/rss.xml', 'Published announcements.')}
${link('Guides and roles RSS', '/rss.xml', 'Guide and role publication dates.')}
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
