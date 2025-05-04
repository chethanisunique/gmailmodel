const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve the root URL (GET /) and send the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));  // This serves the index.html file
});

// POST route for generating suggestions (updated)
app.post('/generate-suggestions', (req, res) => {
    const { text } = req.body;

    // Simulated responses for demo (replace with real AI or API later)
    const corrected = `Corrected Email:hey boss just letting you know I finished the draft of the client proposal, but I’m not sure if you want to add anything before we send it out. Also, the meeting with the design team got pushed to tomorrow, so we’ll need to adjust the schedule. By the way, I noticed a couple of errors in the budget sheet, so we should probably review that too. Let me know what you think. Thank you. Looking forward to your reply.`;

    const formal = `Dear Sir/Madam,

I hope this message finds you well. I am writing to inform you about the following:

I have finished the draft of the client proposal, but I am unsure if you would like to add anything before we send it out. Additionally, the meeting with the design team has been rescheduled to tomorrow, so we will need to adjust the schedule. Furthermore, I noticed a few errors in the budget sheet, so it would be prudent to review that as well.

Please let me know if you require any further details. Thank you for your time.

Sincerely,  
Chaitanya A M
`;

    const persuasive = `Hello,

I wanted to bring this to your attention because I strongly believe that addressing these points will significantly strengthen our work. Completing the client proposal draft is a major step, and with your input, we can make it even more impactful before sending it out. Additionally, the rescheduled design team meeting gives us a chance to refine our schedule for better results. Notably, reviewing the budget sheet errors now will help us avoid costly issues later.

Let’s work together to make this a success!

Best regards,  
Chaitanya A M
`;

    res.json({
        corrected,
        formal,
        persuasive
    });
});

// Serve static files (like CSS or JS if needed) from the 'public' folder
app.use(express.static('public'));

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
