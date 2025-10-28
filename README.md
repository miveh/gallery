🧩 Gallery

A simple gallery for app

🚀 Features

🧭 Built with Next.js App Router (app/ directory)

🔀 Uses parallel routes (@modal segment) for modal rendering

♻️ Maintains URL-based modal state

🧱 Modular and extensible UI architecture

2. Set up environment
   npm install

This project is a Next.js application that demonstrates modal management using parallel routes in the App Router. It provides a scalable architecture for building multi-layered UIs where modals can be managed at the routing level — without losing navigation state or requiring complex client-side state management.

🧩 How Modal Management Works

This project leverages Next.js parallel routing to render modals independently of the main route content.

When a modal route (e.g. /gallery/123) is accessed:
The modal content is rendered inside the @modal slot defined in layout.tsx.
Navigation updates the URL — allowing deep linking and browser navigation (Back/Forward) for modals.

⚙️ Project Structure
gallery/ ...
