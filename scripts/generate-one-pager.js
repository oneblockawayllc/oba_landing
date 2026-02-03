#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Check if puppeteer is available
let puppeteer;
try {
    puppeteer = require('puppeteer');
} catch (e) {
    console.log('Puppeteer not installed. Run: npm install puppeteer');
    console.log('\nAlternatively, open the HTML file in Chrome and print to PDF.');
    process.exit(1);
}

// Sample data - replace with your prospect research
const sampleData = {
    COMPANY_NAME: "Apex Coffee Roasters",
    DATE: new Date().toISOString().split('T')[0],

    // Discovery findings
    FINDING_1: "No automated customer communication",
    FINDING_1_IMPACT: "Customers wait 24+ hours for responses to inquiries. Staff manually handles 50+ messages daily.",
    FINDING_1_OPP: "AI-powered instant response system",

    FINDING_2: "Manual inventory tracking process",
    FINDING_2_IMPACT: "Staff spends 8+ hours weekly on inventory counts. Stock-outs occur 2-3x monthly.",
    FINDING_2_OPP: "Automated inventory alerts & forecasting",

    FINDING_3: "Limited customer preference data",
    FINDING_3_IMPACT: "No systematic way to track customer favorites, purchase patterns, or feedback trends.",
    FINDING_3_OPP: "AI-driven customer insights dashboard with personalized recommendations",

    // Offer
    OFFER_TITLE: "Custom AI Implementation Package",
    DELIVERABLE_1: "24/7 AI customer service chatbot trained on your menu, policies, and brand voice",
    DELIVERABLE_2: "Smart inventory management system with predictive restocking alerts",
    DELIVERABLE_3: "Customer analytics dashboard tracking preferences and purchase patterns",

    // Metrics
    METRIC_1_LABEL: "RESPONSE TIME",
    METRIC_1_VALUE: "< 30 seconds",
    METRIC_1_PERCENT: 95,

    METRIC_2_LABEL: "STAFF HOURS SAVED",
    METRIC_2_VALUE: "+15 hrs/week",
    METRIC_2_PERCENT: 75,

    METRIC_3_LABEL: "CUSTOMER SATISFACTION",
    METRIC_3_VALUE: "+40% projected",
    METRIC_3_PERCENT: 60,

    // Contact
    CALENDAR_LINK: "cal.com/oneblockaway",
    EMAIL: "hello@oneblockaway.com"
};

async function generatePDF(data, outputPath) {
    // Read template
    const templatePath = path.join(__dirname, '../templates/one-pager-blueprint.html');
    let html = fs.readFileSync(templatePath, 'utf8');

    // Replace all template variables
    for (const [key, value] of Object.entries(data)) {
        const regex = new RegExp(`{{${key}}}`, 'g');
        html = html.replace(regex, value);
    }

    // Launch browser
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    // Set content
    await page.setContent(html, { waitUntil: 'networkidle0' });

    // Generate PDF
    await page.pdf({
        path: outputPath,
        format: 'Letter',
        printBackground: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 }
    });

    await browser.close();
    console.log(`PDF generated: ${outputPath}`);
}

// CLI usage
const args = process.argv.slice(2);
const outputFile = args[0] || 'one-pager-output.pdf';
const dataFile = args[1];

let data = sampleData;
if (dataFile) {
    data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
}

generatePDF(data, outputFile).catch(console.error);
