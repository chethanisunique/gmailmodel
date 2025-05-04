AI Email Assistant for Gmail

Overview

AI Email Assistant is a Gmail integration that enables users to adjust the tone of their email and grammar correct as they write within Gmail's compose window itself. With the click of a button, users can change the tone of their draft in three ways:
Formal
Persuasive
Corrected

As a matter of money, I was unable to include an actual AI model such as ChatGPT in the final product. This, then, is a demo version that shows how the tooling would be implemented inside of Gmail. The demo presently comes up with fake responses for various tones and grammar fixes.

How It Works
Gmail Integration: The integration happens directly within the Gmail compose window. As one types an email, one can opt to change the tone or fix grammar.

Compose Email: Type the email in the normal manner in Gmail.

Click the AI Button: Once one is done with composing, one just has to click the AI button that appears on the compose window.

Generate Suggestions: The tool generates three iterations of your email with varying tones and grammar fixes:
Formal: Converts the email to a formal, business-oriented tone.
Persuasive: Rewrites the email to sound more compelling and persuasive.
Corrected: Corrects any grammatical or punctuation errors in the draft.

Copy the Version You Like: Once the suggestions have been created, you can copy any of them and paste them back into the email to send.

Tech Stack
Frontend: HTML, CSS, JavaScript (embedded directly into Gmail's compose window)

Backend: Node.js with Express (processes requests to provide email suggestions)

API Handling: Presently utilizing mock responses for tone and grammar corrections (planned future integration of real AI such as ChatGPT for dynamic content generation).

Note on Limitations: Due to financial constraints, I was unable to integrate ChatGPT or similar AI models for dynamic content generation. The current version uses mock responses to demonstrate how the tool would work, with plans to incorporate AI-based solutions in the future.

Project Setup Instructions->
Backend (Node.js)
Clone or download the repository.
Navigate to the project directory in your terminal.

Start the server with:node server.js

The backend will be available at http://localhost:3000.

open the link in the browser to see the content.


Gmail Integration:
Integrate the tool with Gmail: The tool works directly within Gmail's compose window. After installing the backend server, the tool will be available in Gmail.

UI in Gmail: The AI button will appear next to the compose window. Clicking it will trigger the tone and grammar modification features.