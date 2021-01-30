import * as React from 'react';
import { Channel as CrntChannel } from '../models/Channel'


export interface ILiveSessionPopoutProps {
  channel: CrntChannel | null;
}

export const LiveSessionPopout: React.FunctionComponent<ILiveSessionPopoutProps> = (props: ILiveSessionPopoutProps) => {

    return (
      <>
      <section className="channel__container_popout container flex justify-center items-center mx-auto mt-4 bg-gray-200 rounded-md">
        <h2 className="text-3xl text-center">Thank you for attending. If you would like to re-watch any sessions, the following links<br/>
         will be available until the end of February.</h2>
    </section>
    <section className="container flex mx-auto">
    <div className="container mx-auto">
          <ul className="pt-6 ml-6 text-xl">
            <li>
            <svg className="icon mr-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tv-retro" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 96H338.8l35.7-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 94.2 182.8 9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L173.2 96H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h16v32h48l21.3-32h245.3l21.3 32h48v-32h16c26.5 0 48-21.5 48-48V144c.1-26.5-21.4-48-47.9-48zm-72 312s0 8-168 8c-152 0-152-8-152-8s-8 0-8-120 8-120 8-120 0-8 152-8c168 0 168 8 168 8s8 0 8 120-8 120-8 120zm72-100c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v8z"></path></svg>
              <a href="https://youtu.be/1ekdjAhQw7k" target="_blank" rel="noreferrer">Channel 1 - AM Sessions</a></li>
            <ul className="text-base ml-4">
              <li>Thomas Vochton - Automation in the cloud for the reluctant IT Pro</li>
              <li>Tomasz Posytek - Microsoft Dataverse for Teams - new era for Microsoft Teams as digital workplace</li>
              <li>Eldert Grootenboar - Building Smarter Solutions using Azure and Cognitive Services</li>
            </ul>
          </ul>
          <ul className="pt-6 ml-6 text-xl">
            <li>
            <svg className="icon mr-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tv-retro" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 96H338.8l35.7-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 94.2 182.8 9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L173.2 96H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h16v32h48l21.3-32h245.3l21.3 32h48v-32h16c26.5 0 48-21.5 48-48V144c.1-26.5-21.4-48-47.9-48zm-72 312s0 8-168 8c-152 0-152-8-152-8s-8 0-8-120 8-120 8-120 0-8 152-8c168 0 168 8 168 8s8 0 8 120-8 120-8 120zm72-100c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v8z"></path></svg>
              <a href="https://youtu.be/ZZ3Se7pdHEY" target="_blank" rel="noreferrer">Channel 1 - PM Sessions</a></li>
            <ul className="text-base ml-4">
              <li>Christian Heitkamp - (Sponsor) Monitoring M365 User Experience using Microsoft Graph</li>
              <li>Marco Rocca - 3D Models and Geospatial Features are now Reality in Power Apps and SharePoint</li>
              <li>Liam Cleary - Top 10 Security Features to enable in Microsoft 365</li>
              <li>Mike Fitzmaurice - Building Business Processes that Can and Will Evolve: Product-Neutral Pinciples anyone can use</li>
            </ul>
          </ul>
    </div>
    <div className="container mx-auto">
          <ul className="pt-6 ml-6 text-xl">
            <li>
            <svg className="icon mr-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tv-retro" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 96H338.8l35.7-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 94.2 182.8 9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L173.2 96H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h16v32h48l21.3-32h245.3l21.3 32h48v-32h16c26.5 0 48-21.5 48-48V144c.1-26.5-21.4-48-47.9-48zm-72 312s0 8-168 8c-152 0-152-8-152-8s-8 0-8-120 8-120 8-120 0-8 152-8c168 0 168 8 168 8s8 0 8 120-8 120-8 120zm72-100c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v8z"></path></svg>
              <a href="https://youtu.be/m_DbaUlgo7g" target="_blank" rel="noreferrer">Channel 2 - AM Sessions</a></li>
            <ul className="text-base ml-4">
              <li>Matt Weston - Transforming your SharePoint Lists & Libraries with Power Apps</li>
              <li>Carmen Ysewijn - 7 things to consider when launching Power Apps in your organization</li>
              <li>Veas Nopanen - Power Up your Productivity with automations in Microsoft Teams</li>
            </ul>
          </ul>
          <ul className="pt-6 ml-6 text-xl">
            <li>
            <svg className="icon mr-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tv-retro" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 96H338.8l35.7-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 94.2 182.8 9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L173.2 96H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h16v32h48l21.3-32h245.3l21.3 32h48v-32h16c26.5 0 48-21.5 48-48V144c.1-26.5-21.4-48-47.9-48zm-72 312s0 8-168 8c-152 0-152-8-152-8s-8 0-8-120 8-120 8-120 0-8 152-8c168 0 168 8 168 8s8 0 8 120-8 120-8 120zm72-100c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v8z"></path></svg>
              <a href="https://youtu.be/YnQehzFmauc" target="_blank" rel="noreferrer">Channel 2 - PM Sessions</a></li>
            <ul className="text-base ml-4">
              <li>Karinne Bessette, Edward Watson, Erica Toelle - (Sponsor) What's new in Veeam Backup for Microsoft Office 365 v5</li>
              <li>Alan Eardley - How to measure Wellbeing and Productivity using Workplace Analytics</li>
              <li>Noorez Khamis - Introduction to Project Cortex and Microsoft's vision for Knowledge Management</li>
              <li>David Warner II, Hugo Bernier, Beau Cameron, Chris Kent - Winning Combination: Team up with the Microsoft 365 PnP Community and become a SharePoint All-Star</li>
            </ul>
          </ul>
    </div>
    <div className="container mx-auto">
          <ul className="pt-6 ml-6 text-xl">
            <li>
            <svg className="icon mr-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tv-retro" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 96H338.8l35.7-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 94.2 182.8 9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L173.2 96H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h16v32h48l21.3-32h245.3l21.3 32h48v-32h16c26.5 0 48-21.5 48-48V144c.1-26.5-21.4-48-47.9-48zm-72 312s0 8-168 8c-152 0-152-8-152-8s-8 0-8-120 8-120 8-120 0-8 152-8c168 0 168 8 168 8s8 0 8 120-8 120-8 120zm72-100c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v8z"></path></svg>
              <a href="https://youtu.be/8o9NVFxVw4c" target="_blank" rel="noreferrer">Channel 3 - AM Sessions</a></li>
            <ul className="text-base ml-4">
              <li>Chirag Patel - Everything you ever wanted to know about external sharing in Microsoft 365</li>
              <li>Alex Pearce - How we did Remote Learning with Microsoft 365 in the Education Space</li>
              <li>Marijn Somers, Corinna Lins - Employee offboarding - organizational and technical considerations</li>
            </ul>
          </ul>
          <ul className="pt-6 ml-6 text-xl">
            <li>
            <svg className="icon mr-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tv-retro" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 96H338.8l35.7-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 94.2 182.8 9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L173.2 96H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h16v32h48l21.3-32h245.3l21.3 32h48v-32h16c26.5 0 48-21.5 48-48V144c.1-26.5-21.4-48-47.9-48zm-72 312s0 8-168 8c-152 0-152-8-152-8s-8 0-8-120 8-120 8-120 0-8 152-8c168 0 168 8 168 8s8 0 8 120-8 120-8 120zm72-100c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v8z"></path></svg>
              <a href="https://youtu.be/r6u6w4zjNzs" target="_blank" rel="noreferrer">Channel 3 - PM Sessions</a></li>
            <ul className="text-base ml-4">
              <li>Tony Pounder, Andy Smith- (Sponsor) - Mercury Intranet for Office 365</li>
              <li>Chris Hoard - The Flipped Meeting</li>
              <li>Adis Yugo - Using Microsoft Teams Live Events to deliver online conferences</li>
              <li>Michael Noel - Securing IT Against Modern Threats with Microsoft Cloud Security Tools</li>
            </ul>
          </ul>
    </div>
    </section>
    </>
    );
};