# 🚀 Self-Healing Scraper: Hackathon Roadmap

Building a self-healing scraper is an impressive hackathon project. To finish on time and build a winning demo, you need to be strategic. Don't build everything at once. Build it in **layers**.

Here is your step-by-step roadmap to building this project from scratch.

---

## Phase 1: The Foundation (Node.js & Basic API)
*Goal: Set up your backend and ensure you can make basic requests.*

1. **Initialize the Project**
   - Create a new Node.js project (`npm init -y`).
   - Install essential packages: `express` (for the server), `axios` (for HTTP requests), `cheerio` (for parsing HTML), and `dotenv` (for API keys).
2. **Create a Basic Server**
   - Set up an Express server with a simple `/scrape` endpoint.
3. **Write a "Dumb" Scraper**
   - Write a hardcoded function that takes a URL, fetches the HTML using Axios, and extracts a few fields (e.g., Title, Price) using Cheerio.
   - *Checkpoint:* You can send a request to your API and get JSON back.

---

## Phase 2: The "Victim" Website (Crucial for Demo)
*Goal: You need a website that you can deliberately "break" to prove your AI works.*

1. **Build a Dummy Target Site**
   - Don't rely on real websites for the demo (they might block you or not change when you need them to).
   - Create a simple static HTML page serving as an "E-commerce Product Page" (Title, Price, Description, Rating).
   - Host it locally or on a simple free service.
2. **Create Version A and Version B**
   - **Version A (The Original):** `<h1 class="product-title">iPhone 17</h1>`
   - **Version B (The Redesign):** `<h2 class="item-name">iPhone 17</h2>`
   - *Checkpoint:* Your dumb scraper works on Version A, but fails on Version B.

---

## Phase 3: The Failure Detector
*Goal: Your system needs to realize when it's broken.*

1. **Define a Schema**
   - Define exactly what data you expect (e.g., `title` must be a string, `price` must be a number).
2. **Validation Logic**
   - When the scraper runs, check the output against the schema.
   - If `title` is `null` or missing, trigger a "Failure Event".
   - *Checkpoint:* When you point your scraper at Version B of your site, your server logs: `⚠️ EXTRACTION FAILED: Missing 'title'`.

---

## Phase 4: The AI Repair Engine (The Magic)
*Goal: When extraction fails, the AI finds the new CSS selectors.*

1. **Set up AI Integration**
   - Get an API key for an AI model (like OpenAI, Gemini, or Claude).
2. **The Repair Prompt**
   - Write a function that takes the *new HTML* (Version B) and the *failed schema* and sends a prompt to the AI.
   - *Prompt Example:* "Here is an HTML page. I need to extract the product title, price, and rating. Return ONLY a JSON object containing the CSS selectors for these fields."
3. **Selector Validation**
   - Take the AI's suggested selectors and test them against the HTML using Cheerio.
   - Do they return the correct data? If yes, save them!
   - *Checkpoint:* Your system fails on Version B, calls the AI, gets new selectors, and successfully extracts the data.

---

## Phase 5: The Memory System (MongoDB)
*Goal: The scraper shouldn't need AI every time. It should remember what it learned.*

1. **Database Setup**
   - Set up MongoDB (use MongoDB Atlas for a free cloud database).
2. **Store Configurations**
   - Store your scraping strategies in the database.
   - Structure: `domain -> current_selectors`.
3. **The Self-Healing Loop**
   - Try to scrape using DB selectors.
   - If it fails -> Call AI Repair Engine.
   - Validate new selectors -> **Update DB with new selectors**.
   - *Checkpoint:* Run the scraper on Version B. The first time, it's slow (AI repair). The second time, it's fast (uses updated DB selectors).

---

## Phase 6: Bright Data Integration (Scaling Up)
*Goal: Make it production-ready by using Bright Data instead of basic Axios.*

1. **Sign up for Bright Data**
   - Get your API credentials for their Web Scraper API or Proxy networks.
2. **Swap out Axios**
   - Replace your direct `axios.get(url)` calls with requests routed through Bright Data's infrastructure.
   - This proves to the judges that your system can handle bot-protection and CAPTCHAs on real-world sites.

---

## Phase 7: The Dashboard (The Wow Factor)
*Goal: Give the judges a beautiful UI to play with.*

1. **Simple Frontend**
   - Build a clean UI using React, Next.js, or just plain HTML/CSS/JS.
   - Add an input for the URL.
2. **Live Status Console**
   - Show a live log of what the backend is doing:
     - `🟢 Scraping example.com...`
     - `🔴 ERROR: Selectors outdated.`
     - `⚙️ AI analyzing new DOM structure...`
     - `✅ New selectors found (.item-name). Retrying...`
     - `🟢 Success! Data extracted.`
   - *Checkpoint:* A non-technical judge can use your website, see the failure, watch the AI fix it in real-time, and see the final result.

---

## 🏆 Hackathon Winning Tips
1. **Focus on the Healing, not the Scraping:** Judges see scrapers all the time. The AI repair mechanism is your unique selling point. Spend 80% of your time perfecting Phase 4 and Phase 7.
2. **Don't use complex target sites:** For your live demo, a simple HTML page that you control is infinitely better than trying to scrape Amazon live on stage and getting blocked by a CAPTCHA.
3. **Show the "Before and After" clearly:** The dashboard console log showing the AI thinking and adapting is what will win you the prize. Make that visual stand out!
