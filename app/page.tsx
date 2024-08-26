"use client";

import StecknologiesLogo from "./components/stecknologies-logo";
import { Drawer } from "vaul";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative p-4">
      <div className="flex-grow flex items-center justify-center">
        <StecknologiesLogo />
      </div>
      <div className="w-full flex justify-between items-center px-6 pb-4 absolute bottom-0 left-0 right-0">
        <p className="text-lg font-light">Stecknologies, Inc.</p>
        <Drawer.Root shouldScaleBackground>
          <Drawer.Trigger asChild>
            <button className="text-lg font-light">About</button>
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
              <div className="p-4 bg-white rounded-t-[10px] flex-1">
                <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                <div className="max-w-md mx-auto">
                  <Drawer.Title className="font-medium mb-4 text-black">
                    About Stecknologies
                  </Drawer.Title>
                  <p className="text-zinc-600 mb-2">
                    Stecknologies is the personal product shop of <a className="underline" href="https://dylansteck.com" target="_blank">Dylan Steck</a>, a full-stack developer and entrepreneur building at the intersection of malleable software and the new Internet.
                  </p>
                  <p className="text-zinc-600 mb-8">
                   Our work spans from in-house software to IRL events to contracted projects with select clients. Recent noteworthy work includes: <br/>
                   - <a className="underline" href="https://farhack.xyz" target="_blank">FarHack</a>, our brand for running Farcaster hackathons and hackathon software <br/>
                   - <a className="underline" href="https://withcortex.com" target="_blank">Cortex</a>, Notion-style blocks for building Farcaster apps <br/>
                   - Blog posts and videos on <a className="underline" href="https://dylansteck.com/video/A0f3hlxcbIA" target="_blank">AI wearables</a>, <a className="underline" href="https://dylansteck.com/blog/onchain-nucleus" target="_blank">DAOs</a>, <a className="underline" href="https://dylansteck.com/blog/crypto-super-app" target="_blank">a crypto super app</a>, <a className="underline" href="https://dylansteck.com/blog/lego-blocks-for-the-web" target="_blank">LEGO blocks for the web</a> and much more <br/>
                   - Work with various consumer startups in web3, AI, PKMs and other verticals
                  </p>
                </div>
              </div>
              <div className="p-4 bg-zinc-100 border-t border-zinc-200 mt-auto">
                <div className="flex gap-6 justify-end max-w-md mx-auto">
                <a
                    className="text-xs text-zinc-600 flex items-center gap-0.25"
                    href="https://warpcast.com/dylsteck.eth"
                    target="_blank"
                  >
                    Farcaster
                    <svg
                      fill="none"
                      height="16"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="16"
                      aria-hidden="true"
                      className="w-3 h-3 ml-1"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                    </svg>
                  </a>
                  <a
                    className="text-xs text-zinc-600 flex items-center gap-0.25"
                    href="https://github.com/stecknologies"
                    target="_blank"
                  >
                    GitHub
                    <svg
                      fill="none"
                      height="16"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="16"
                      aria-hidden="true"
                      className="w-3 h-3 ml-1"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </div>
    </main>
  );
}