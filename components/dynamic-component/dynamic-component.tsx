
import * as React from 'react';

import { SkillLogo } from "@/interfaces/skill-data";

import AngularIcon from "@/brand-icons/angular/angular-icon";
import JqueryIcon from "@/brand-icons/jquery/jquery-icon";
import CssIcon from '@/brand-icons/css/css';
import NodeIcon from "@/brand-icons/node/node-icon";
import TypescriptIcon from "@/brand-icons/typescript/typescript-icon";
import JavascriptIcon from "@/brand-icons/javascript/javascript-icon";
import JestIcon from "@/brand-icons/jest/jest-icon";
import NginxIcon from "@/brand-icons/nginx/nginx-icon";
import CypressIcon from "@/brand-icons/cypress/cypress-icon";
import StorybookIcon from "@/brand-icons/storybook/storybook-icon";
import WebpackIcon from "@/brand-icons/webpack/webpack-icon";


const components: { [key: string] : any} = {
    angular: AngularIcon,
    css: CssIcon,
    jquery: JqueryIcon,
    nodejs: NodeIcon,
    typescript: TypescriptIcon,
    javascript: JavascriptIcon,
    jest: JestIcon,
    nginx: NginxIcon,
    cypress: CypressIcon,
    storybook: StorybookIcon,
    webpack: WebpackIcon
    // add more component types here
};

export default function DynamicContent({ data }: {data: SkillLogo[]}) {
    return (
      <>
        {data.map((item: SkillLogo, index: number) => {
           if (item && item.component) {
            const Component = components[item.component];
            return <section className="my-4" key={`section_index_${index}`}><Component {...item} /></section>;
          } else {
            return <section className="my-4" key={`section_index_${index}`}><span title={item.skillName} className={item.className}></span></section>;
          }
        })}
      </>
    );
  }