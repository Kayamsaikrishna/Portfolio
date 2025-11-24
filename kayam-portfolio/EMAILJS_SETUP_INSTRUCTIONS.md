# EmailJS Setup Instructions for Contact Form

This document provides step-by-step instructions to set up EmailJS for your portfolio contact form.

## Prerequisites

1. You've already installed the EmailJS package: `@emailjs/browser`
2. The contact form in `src/components/Contact.tsx` is already configured to use EmailJS

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Set Up Your Email Service

1. After logging in, click on "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account by following the authentication process
5. Once connected, note down the **Service ID** (you'll need this later)
   
   For your reference, your Gmail service is already connected with ID: `service_5d1ij2k`

## Step 3: Create an Email Template

1. In the EmailJS dashboard, go to "Email Templates"
2. Click "Create New Template"
3. Customize your template with the following:
   - **Template Name**: Portfolio Contact Form
   - **Subject**: {{subject}}
   - **Body**:
     ```
     You've received a new message from your portfolio website.
     
     From: {{from_name}} ({{from_email}})
     Subject: {{subject}}
     
     Message:
     {{message}}
     
     ---
     This message was sent from your portfolio contact form.
     ```
4. Note down the **Template ID** (you'll need this later)

## Step 4: Get Your User ID

1. In the EmailJS dashboard, click on your profile icon in the top right
2. Select "Account"
3. Copy your **User ID** from the "API Keys" section

## Step 5: Update Your Contact Form

1. Open `src/components/Contact.tsx` in your code editor
2. Find the following lines (around line 55-57):
   ```typescript
   const serviceID = 'service_XXXXXXXXX'; // Replace with your actual EmailJS service ID
   const templateID = 'template_XXXXXXXXX'; // Replace with your actual EmailJS template ID
   const userID = 'XXXXXXXXXXXXXXXXXXXXXXXXXXX'; // Replace with your actual EmailJS user ID
   ```
3. Replace the placeholder values with your actual EmailJS credentials:
   ```typescript
   const serviceID = 'your-actual-service-id';
   const templateID = 'your-actual-template-id';
   const userID = 'your-actual-user-id';
   ```

## Step 6: Test Your Contact Form

1. Save all changes
2. Start your development server: `npm run dev`
3. Navigate to the contact section of your portfolio
4. Fill out the form and submit it
5. Check your email to confirm you received the message

## Troubleshooting

If you encounter issues:

1. **Check browser console**: Open developer tools and check for any errors
2. **Verify credentials**: Double-check that all EmailJS credentials are correct
3. **Check EmailJS dashboard**: Look for any error logs in your EmailJS account
4. **Test EmailJS directly**: Use the "Test" button in your EmailJS template editor

## Security Note

For production deployments, consider moving your EmailJS credentials to environment variables:

1. Create a `.env` file in your project root:
   ```
   VITE_EMAILJS_SERVICE_ID=your-service-id
   VITE_EMAILJS_TEMPLATE_ID=your-template-id
   VITE_EMAILJS_USER_ID=your-user-id
   ```

2. Update your Contact.tsx to use environment variables:
   ```typescript
   const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
   const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
   const userID = import.meta.env.VITE_EMAILJS_USER_ID;
   ```
   
   Since your Gmail service (`service_5d1ij2k`) is already connected, you only need to set the template and user IDs.

This will keep your credentials secure and allow you to use different credentials for development and production environments.