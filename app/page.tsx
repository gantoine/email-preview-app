"use client";

import { useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism.css";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import AppleMail from "./components/clients/apple-mail";
import Gmail from "./components/clients/gmail";
import Outlook from "./components/clients/outlook";
import ClientWrapper from "./components/clients/client-wrapper";

import NotionMagicLinkEmail from "./emails/notion-magic-link";
import PlaidVerifyIdentityEmail from "./emails/plaid-verify-identity";
import StripeWelcomeEmail from "./emails/stripe-welcome";
import VercelInviteUserEmail from "./emails/vercel-invite-user";

type Template = {
  name: string;
  component: React.ComponentType;
};

const templates: Template[] = [
  { name: "Notion Magic Link", component: NotionMagicLinkEmail },
  { name: "Plaid Verify Identity", component: PlaidVerifyIdentityEmail },
  { name: "Stripe Welcome", component: StripeWelcomeEmail },
  { name: "Vercel Invite User", component: VercelInviteUserEmail },
];

export default function Home() {
  const [activeTemplate, setActiveTemplate] = useState(templates[0]);
  const [code, setCode] = useState("");

  const handleTemplateChange = (template: Template) => {
    setActiveTemplate(template);
    setCode(
      renderToStaticMarkup(
        // @ts-expect-error PreviewProps exists
        <template.component {...template.component.PreviewProps} />,
      ),
    );
  };

  return (
    <main className="flex flex-col h-screen dark:text-white">
      <header className="py-3 px-4 border-b border-divider dark:border-gray-800">
        <h1 className="text-lg font-bold">Email Preview</h1>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 border-r border-divider dark:border-gray-800 p-4">
          <h2 className="text-md font-semibold mb-4">Templates</h2>
          <ul>
            {templates.map((template) => (
              <li key={template.name}>
                <button
                  onClick={() => handleTemplateChange(template)}
                  className={`w-full text-left p-2 rounded ${
                    activeTemplate.name === template.name ? "darken" : ""
                  }`}
                >
                  {template.name}
                </button>
              </li>
            ))}
          </ul>
        </aside>
        <div className="flex-1 grid grid-cols-2">
          <Editor
            value={code}
            onValueChange={setCode}
            highlight={(code) => highlight(code, languages.markup, "markup")}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          />

          <Tabs>
            <TabList>
              <Tab>Apple Mail</Tab>
              <Tab>Gmail</Tab>
              <Tab>Outlook</Tab>
            </TabList>
            <TabPanel>
              <ClientWrapper>
                <AppleMail html={code} />
              </ClientWrapper>
            </TabPanel>
            <TabPanel>
              <ClientWrapper>
                <Gmail html={code} />
              </ClientWrapper>
            </TabPanel>
            <TabPanel>
              <ClientWrapper>
                <Outlook html={code} />
              </ClientWrapper>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </main>
  );
}
